import { useState, useMemo } from 'react';
import * as S from './styled';
import { MACROS } from './theme';
import { DATA, MINIMUMS } from './data';

// =============================================================
// Helpers — pure functions, no JSX
// =============================================================
const getQty = (qtys, name) => qtys[name] || 0;
const totalQty = (qtys) => Object.values(qtys).reduce((s, v) => s + v, 0);

// Expand { itemName: qty } into a flat list of full item objects, repeated.
const expand = (qtys, allItems) => {
  const out = [];
  allItems.forEach((item) => {
    const q = getQty(qtys, item.name);
    for (let i = 0; i < q; i++) out.push(item);
  });
  return out;
};

// =============================================================
// Small presentation components (compose styled primitives)
// =============================================================

const MacroBar = ({ carbs, fat, protein }) => {
  const total = carbs + fat + protein || 1;
  return (
    <S.MacroBarTrack>
      <S.MacroBarSeg $pct={(carbs / total) * 100} $color={MACROS.carbs.dot} />
      <S.MacroBarSeg $pct={(fat / total) * 100} $color={MACROS.fat.dot} />
      <S.MacroBarSeg $pct={(protein / total) * 100} $color={MACROS.protein.dot} />
    </S.MacroBarTrack>
  );
};

const CardMacros = ({ carbs, fat, protein, serving }) => {
  const item = (macro, value) => (
    <S.CardMacroItem>
      <S.MacroDot $color={macro.dot} />
      <S.MacroLabel $color={macro.onLight}>
        {macro.label} <S.MacroValueBold>{value}g</S.MacroValueBold>
      </S.MacroLabel>
    </S.CardMacroItem>
  );
  return (
    <S.CardMacroRow>
      {item(MACROS.carbs, carbs)}
      {item(MACROS.fat, fat)}
      {item(MACROS.protein, protein)}
      {serving !== undefined && <S.ServingNote>{serving}g</S.ServingNote>}
    </S.CardMacroRow>
  );
};

const Stepper = ({ qty, onInc, onDec }) => {
  const active = qty > 0;
  return (
    <S.StepperWrap>
      {active && (
        <S.StepperMinus
          onClick={(e) => {
            e.stopPropagation();
            onDec();
          }}
        >
          −
        </S.StepperMinus>
      )}
      {active && <S.StepperCount>{qty}</S.StepperCount>}
      <S.StepperPlus
        $active={active}
        onClick={(e) => {
          e.stopPropagation();
          onInc();
        }}
      >
        +
      </S.StepperPlus>
    </S.StepperWrap>
  );
};

const ReqBadge = ({ current, min, noun }) => {
  const met = current >= min;
  const extra = met ? current - min : 0;
  return (
    <S.ReqChipWrap $met={met}>
      <S.ReqChipMain>
        {met ? `✓ ${current} ${noun}` : `${current} / ${min}+ ${noun}`}
      </S.ReqChipMain>
      {extra > 0 && <S.ReqChipExtras>+{extra} extra</S.ReqChipExtras>}
    </S.ReqChipWrap>
  );
};

const MacroStat = ({ macro, value }) => (
  <S.MacroStat>
    <S.MacroStatValue $color={macro.onDark}>
      {value}
      <S.MacroStatUnit>g</S.MacroStatUnit>
    </S.MacroStatValue>
    <S.MacroStatLabel>
      <S.MacroDot $color={macro.onDark} $size={5} />
      <S.MacroStatLabelText $color={macro.onDark}>{macro.label}</S.MacroStatLabelText>
    </S.MacroStatLabel>
  </S.MacroStat>
);

// =============================================================
// Card components
// =============================================================

const ItemCard = ({ item, qty, onInc, onDec }) => {
  const active = qty > 0;
  const mult = qty || 1;
  return (
    <S.Card $active={active}>
      <S.CardHead>
        <S.CardTitleBlock>
          <S.CardName>
            {item.emoji ? `${item.emoji} ` : ''}
            {item.name}
          </S.CardName>
          <S.CardCaloriesRow>
            <S.CardCalories $active={active}>
              {active && qty > 1 ? `${item.cal * qty} kcal` : `${item.cal} kcal`}
            </S.CardCalories>
            {active && qty > 1 && (
              <S.CardQtyNote>
                ({item.cal} × {qty})
              </S.CardQtyNote>
            )}
          </S.CardCaloriesRow>
        </S.CardTitleBlock>
        <Stepper qty={qty} onInc={onInc} onDec={onDec} />
      </S.CardHead>

      <MacroBar
        carbs={item.carbs * mult}
        fat={item.fat * mult}
        protein={item.protein * mult}
      />
      <CardMacros
        carbs={item.carbs * mult}
        fat={item.fat * mult}
        protein={item.protein * mult}
        serving={item.serving * mult}
      />
      {item.allergens?.length > 0 && (
        <S.AllergenRow>
          {item.allergens.map((a) => (
            <S.AllergenPill key={a}>{a}</S.AllergenPill>
          ))}
        </S.AllergenRow>
      )}
    </S.Card>
  );
};

const PresetCard = ({ item, selected, onSelect }) => (
  <S.Card $active={selected} $clickable onClick={() => onSelect(item)}>
    <S.CardHead>
      <S.CardName as="span" style={{ flex: 1 }}>
        {item.emoji} {item.name}
      </S.CardName>
      <S.PresetRightCluster>
        <S.CardCalories $active={selected}>
          {item.cal} <S.CardCalorieUnit>kcal</S.CardCalorieUnit>
        </S.CardCalories>
        <S.PresetCheck $selected={selected}>{selected ? '✓' : ''}</S.PresetCheck>
      </S.PresetRightCluster>
    </S.CardHead>
    <MacroBar carbs={item.carbs} fat={item.fat} protein={item.protein} />
    <CardMacros carbs={item.carbs} fat={item.fat} protein={item.protein} />
    {item.allergens?.length > 0 && (
      <S.AllergenRow>
        {item.allergens.map((a) => (
          <S.AllergenPill key={a}>{a}</S.AllergenPill>
        ))}
      </S.AllergenRow>
    )}
  </S.Card>
);

// =============================================================
// Sticky nutrition bar
// =============================================================

const NutritionBar = ({
  totals,
  allergens,
  mode,
  requirements,
  totalExtras,
  hasExtras,
  isValid,
}) => (
  <S.StickyBar>
    <MacroBar carbs={totals.carbs} fat={totals.fat} protein={totals.protein} />

    <S.TotalsRow>
      <div>
        <S.TotalLabel>Total Calories</S.TotalLabel>
        <S.TotalValue>
          {totals.cal}
          <S.TotalUnit>kcal</S.TotalUnit>
        </S.TotalValue>
      </div>
      <S.MacroStatRow>
        <MacroStat macro={MACROS.carbs} value={totals.carbs} />
        <MacroStat macro={MACROS.fat} value={totals.fat} />
        <MacroStat macro={MACROS.protein} value={totals.protein} />
      </S.MacroStatRow>
    </S.TotalsRow>

    {mode === 'custom' && (
      <S.RequirementsRow>
        {requirements.map((r) => {
          const extra = r.met ? r.current - r.min : 0;
          return (
            <S.RequirementChip key={r.label} $met={r.met}>
              <S.RequirementChipMain>
                {r.met ? '✓' : `${r.current}/${r.min}`} {r.label}
              </S.RequirementChipMain>
              {extra > 0 && <S.RequirementChipExtras>+{extra}</S.RequirementChipExtras>}
            </S.RequirementChip>
          );
        })}
        {isValid &&
          (hasExtras ? (
            <S.LoadedBowlBadge>🌶️ Loaded Bowl +{totalExtras}</S.LoadedBowlBadge>
          ) : (
            <S.BowlReadyBadge>Bowl Ready 🥗</S.BowlReadyBadge>
          ))}
      </S.RequirementsRow>
    )}

    {allergens?.length > 0 && (
      <S.AllergensFooterRow>
        <S.AllergensFooterLabel>Contains:</S.AllergensFooterLabel>
        {allergens.map((a) => (
          <S.AllergenPillOnDark key={a}>{a}</S.AllergenPillOnDark>
        ))}
      </S.AllergensFooterRow>
    )}
  </S.StickyBar>
);

// =============================================================
// Main app
// =============================================================

export default function App() {
  const [mode, setMode] = useState('preset');
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [qtys, setQtys] = useState({
    bases: {},
    proteins: {},
    hotToppings: {},
    coldToppings: {},
    dressings: {},
  });

  const inc = (section, item) =>
    setQtys((prev) => ({
      ...prev,
      [section]: { ...prev[section], [item.name]: (prev[section][item.name] || 0) + 1 },
    }));

  const dec = (section, item) =>
    setQtys((prev) => {
      const next = Math.max(0, (prev[section][item.name] || 0) - 1);
      const updated = { ...prev[section], [item.name]: next };
      if (next === 0) delete updated[item.name];
      return { ...prev, [section]: updated };
    });

  const totalToppings = totalQty(qtys.hotToppings) + totalQty(qtys.coldToppings);

  const validation = {
    bases: totalQty(qtys.bases) >= MINIMUMS.bases,
    toppings: totalToppings >= MINIMUMS.toppings,
    proteins: totalQty(qtys.proteins) >= MINIMUMS.proteins,
    dressings: totalQty(qtys.dressings) >= MINIMUMS.dressings,
  };
  const isValid = Object.values(validation).every(Boolean);

  const customTotals = useMemo(() => {
    const all = [
      ...expand(qtys.bases, DATA.bases),
      ...expand(qtys.proteins, DATA.proteins),
      ...expand(qtys.hotToppings, DATA.hotToppings),
      ...expand(qtys.coldToppings, DATA.coldToppings),
      ...expand(qtys.dressings, DATA.dressings),
    ];
    return all.reduce(
      (acc, i) => ({
        cal: acc.cal + i.cal,
        carbs: acc.carbs + i.carbs,
        fat: acc.fat + i.fat,
        protein: acc.protein + i.protein,
      }),
      { cal: 0, carbs: 0, fat: 0, protein: 0 },
    );
  }, [qtys]);

  const customAllergens = useMemo(() => {
    const all = [
      ...expand(qtys.bases, DATA.bases),
      ...expand(qtys.proteins, DATA.proteins),
      ...expand(qtys.hotToppings, DATA.hotToppings),
      ...expand(qtys.coldToppings, DATA.coldToppings),
      ...expand(qtys.dressings, DATA.dressings),
    ];
    return [...new Set(all.flatMap((i) => i.allergens))];
  }, [qtys]);

  const anySelected = customTotals.cal > 0;
  const showBar =
    (mode === 'preset' && selectedPreset) || (mode === 'custom' && anySelected);

  const requirements = [
    {
      label: 'Bases',
      met: validation.bases,
      current: totalQty(qtys.bases),
      min: MINIMUMS.bases,
    },
    {
      label: 'Toppings',
      met: validation.toppings,
      current: totalToppings,
      min: MINIMUMS.toppings,
    },
    {
      label: 'Protein',
      met: validation.proteins,
      current: totalQty(qtys.proteins),
      min: MINIMUMS.proteins,
    },
    {
      label: 'Dressing',
      met: validation.dressings,
      current: totalQty(qtys.dressings),
      min: MINIMUMS.dressings,
    },
  ];

  const totalExtras = requirements.reduce(
    (sum, r) => sum + (r.met ? r.current - r.min : 0),
    0,
  );
  const hasExtras = totalExtras > 0;

  // Per-section render helper to reduce repetition
  const renderSection = (section) =>
    DATA[section].map((item) => (
      <ItemCard
        key={item.name}
        item={item}
        qty={getQty(qtys[section], item.name)}
        onInc={() => inc(section, item)}
        onDec={() => dec(section, item)}
      />
    ));

  return (
    <>
      <S.GlobalStyle />
      <S.AppShell $hasBar={showBar}>
        <S.Header>
          <S.BrandPill>✿ Supergreen</S.BrandPill>
          <S.Title>Bowl Calculator</S.Title>
          <S.Subtitle>Calories & macros for every bowl</S.Subtitle>
          <S.TabBar>
            <S.Tab $active={mode === 'preset'} onClick={() => setMode('preset')}>
              🥗  Signature Bowls
            </S.Tab>
            <S.Tab $active={mode === 'custom'} onClick={() => setMode('custom')}>
              ⚡  Build Your Own
            </S.Tab>
          </S.TabBar>
        </S.Header>

        {mode === 'preset' && (
          <>
            <S.Disclaimer>
              Nutrition shown for the bowl itself. Base & dressing excluded per
              Supergreen's menu.
            </S.Disclaimer>
            {DATA.signatureBowls.map((bowl) => (
              <PresetCard
                key={bowl.name}
                item={bowl}
                selected={selectedPreset?.name === bowl.name}
                onSelect={(b) =>
                  setSelectedPreset((prev) => (prev?.name === b.name ? null : b))
                }
              />
            ))}
            {!selectedPreset && (
              <S.EmptyState>
                <S.EmptyEmoji>🥗</S.EmptyEmoji>
                <S.EmptyText>Tap a bowl to see its nutrition</S.EmptyText>
              </S.EmptyState>
            )}
          </>
        )}

        {mode === 'custom' && (
          <>
            <S.BuildBanner>
              <S.BannerTitle>Build requirements</S.BannerTitle>
              <S.BannerText>
                Min. <strong>2 bases</strong> · <strong>4 toppings</strong> ·{' '}
                <strong>1 protein</strong> · <strong>1 dressing</strong>
                <br />
                Tap <strong>+</strong> to add, tap again to double up. Macros update per
                serving count.
              </S.BannerText>
            </S.BuildBanner>

            <S.SectionLabel>
              <S.SectionTitle>Bases</S.SectionTitle>
              <ReqBadge
                current={totalQty(qtys.bases)}
                min={MINIMUMS.bases}
                noun="servings"
              />
            </S.SectionLabel>
            {renderSection('bases')}

            <S.SectionLabel>
              <S.SectionTitle>Protein</S.SectionTitle>
              <ReqBadge
                current={totalQty(qtys.proteins)}
                min={MINIMUMS.proteins}
                noun="servings"
              />
            </S.SectionLabel>
            {renderSection('proteins')}

            <S.SectionLabel>
              <S.SectionTitle>🔥 Hot Toppings</S.SectionTitle>
              <ReqBadge
                current={totalToppings}
                min={MINIMUMS.toppings}
                noun="toppings total"
              />
            </S.SectionLabel>
            {renderSection('hotToppings')}

            <S.SectionLabel>
              <S.SectionTitle>🥬 Cold Toppings</S.SectionTitle>
              <S.SectionHint>{totalToppings} / 4+ toppings combined</S.SectionHint>
            </S.SectionLabel>
            {renderSection('coldToppings')}

            <S.SectionLabel>
              <S.SectionTitle>Dressing</S.SectionTitle>
              <ReqBadge
                current={totalQty(qtys.dressings)}
                min={MINIMUMS.dressings}
                noun="selected"
              />
            </S.SectionLabel>
            {renderSection('dressings')}

            {!anySelected && (
              <S.EmptyState>
                <S.EmptyEmoji>⚡</S.EmptyEmoji>
                <S.EmptyText>Tap + on any item to start building</S.EmptyText>
              </S.EmptyState>
            )}
          </>
        )}

        {showBar && (
          <NutritionBar
            totals={mode === 'preset' ? selectedPreset : customTotals}
            allergens={mode === 'preset' ? selectedPreset?.allergens : customAllergens}
            mode={mode}
            requirements={requirements}
            totalExtras={totalExtras}
            hasExtras={hasExtras}
            isValid={isValid}
          />
        )}
      </S.AppShell>
    </>
  );
}
