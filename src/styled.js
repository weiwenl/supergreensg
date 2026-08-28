import styled, { createGlobalStyle } from 'styled-components';
import { C, FONT_SERIF, FONT_SANS } from './theme';

// =============================================================
// Global styles
// =============================================================
export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: ${C.paleGreen};
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-y: none;
  }
  * {
    box-sizing: border-box;
  }
  button {
    font-family: inherit;
  }
`;

// =============================================================
// Layout
// =============================================================
export const AppShell = styled.div`
  min-height: 100vh;
  background: ${C.paleGreen};
  font-family: ${FONT_SANS};
  color: ${C.darkText};
  padding-bottom: ${({ $hasBar }) => ($hasBar ? '210px' : '40px')};
`;

// =============================================================
// Header
// =============================================================
export const Header = styled.header`
  background: ${C.darkGreen};
  padding: 22px 18px 0;
`;

export const BrandPill = styled.div`
  background: ${C.gold};
  border-radius: 6px;
  padding: 4px 10px;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 800;
  color: ${C.darkGreen};
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: ${FONT_SERIF};
  font-size: 24px;
  font-weight: 700;
  color: ${C.white};
  margin: 0 0 2px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: ${C.paleOnDark};
  opacity: 0.85;
  margin: 0 0 16px;
`;

// =============================================================
// Tabs
// =============================================================
export const TabBar = styled.div`
  display: flex;
  gap: 2px;
  background: rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  padding: 3px;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 9px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 700;
  transition: all 0.18s;
  background: ${({ $active }) => ($active ? C.gold : 'transparent')};
  color: ${({ $active }) => ($active ? C.darkGreen : C.paleOnDark)};
`;

// =============================================================
// Section labels (dark green bars between groups)
// =============================================================
export const SectionLabel = styled.div`
  margin: 14px 14px 4px;
  background: ${C.darkGreen};
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.span`
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${C.white};
  font-weight: 700;
`;

export const SectionHint = styled.span`
  font-size: 10px;
  color: ${C.paleOnDark};
  opacity: 0.6;
  font-style: italic;
`;

// =============================================================
// Banner & disclaimer
// =============================================================
export const BuildBanner = styled.div`
  margin: 14px 14px 4px;
  padding: 10px 13px;
  border-radius: 8px;
  background: ${C.lightSage};
  border: 1px solid ${C.deepSage};
`;

export const BannerTitle = styled.div`
  font-size: 12px;
  color: ${C.darkGreen};
  font-weight: 700;
  margin-bottom: 3px;
`;

export const BannerText = styled.div`
  font-size: 11.5px;
  color: ${C.midGreen};
  line-height: 1.8;
`;

export const Disclaimer = styled.p`
  padding: 14px 14px 4px;
  font-size: 12px;
  color: ${C.midGreen};
  opacity: 0.85;
  margin: 0;
`;

// =============================================================
// Cards
// =============================================================
export const Card = styled.div`
  background: ${({ $active }) => ($active ? C.white : C.lightSage)};
  border: 1.5px solid ${({ $active }) => ($active ? C.darkGreen : C.deepSage)};
  border-radius: 10px;
  margin: 5px 14px;
  padding: 11px 13px;
  transition: all 0.15s;
  box-shadow: ${({ $active }) => ($active ? `0 0 0 3px ${C.darkGreen}15` : 'none')};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

export const CardTitleBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CardName = styled.div`
  font-size: 13.5px;
  font-weight: 600;
  color: ${C.darkText};
  line-height: 1.35;
`;

export const CardCaloriesRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-top: 1px;
`;

export const CardCalories = styled.span`
  font-size: 13px;
  font-weight: 800;
  font-family: ${FONT_SERIF};
  color: ${({ $active }) => ($active ? C.darkGreen : C.midGreen)};
`;

export const CardQtyNote = styled.span`
  font-size: 10px;
  color: ${C.midGreen};
  opacity: 0.7;
`;

export const CardCalorieUnit = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${C.midGreen};
  opacity: 0.7;
`;

// Preset card check indicator
export const PresetCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $selected }) => ($selected ? C.darkGreen : 'transparent')};
  border: 2px solid ${({ $selected }) => ($selected ? C.darkGreen : C.deepSage)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${C.gold};
  transition: all 0.15s;
`;

export const PresetRightCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
`;

// =============================================================
// Stepper
// =============================================================
export const StepperWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StepperMinus = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid ${C.deepSage};
  background: ${C.white};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${C.darkGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
`;

export const StepperPlus = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
  transition: all 0.15s;
  background: ${({ $active }) => ($active ? C.darkGreen : C.deepSage)};
  color: ${({ $active }) => ($active ? C.gold : C.white)};
`;

export const StepperCount = styled.span`
  min-width: 28px;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  color: ${C.darkGreen};
  font-family: ${FONT_SERIF};
`;

// =============================================================
// Macro bar (carbs/fat/protein proportion strip)
// =============================================================
export const MacroBarTrack = styled.div`
  display: flex;
  height: 5px;
  border-radius: 99px;
  overflow: hidden;
  margin: 7px 0 6px;
  gap: 1.5px;
  background: ${C.deepSage};
`;

export const MacroBarSeg = styled.div`
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color};
  border-radius: 99px;
`;

// =============================================================
// Card macro row (dot + label + value)
// =============================================================
export const CardMacroRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardMacroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MacroDot = styled.span`
  width: ${({ $size }) => $size || 7}px;
  height: ${({ $size }) => $size || 7}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: inline-block;
`;

export const MacroLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: ${({ $color }) => $color};
`;

export const MacroValueBold = styled.span`
  font-weight: 800;
`;

export const ServingNote = styled.span`
  font-size: 10px;
  color: ${C.midGreen};
  opacity: 0.6;
  margin-left: auto;
`;

// =============================================================
// Allergen pills
// =============================================================
export const AllergenRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 7px;
`;

export const AllergenPill = styled.span`
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 99px;
  background: ${C.white};
  color: ${C.midGreen};
  font-weight: 700;
  letter-spacing: 0.4px;
  border: 1px solid ${C.deepSage};
  white-space: nowrap;
`;

export const AllergenPillOnDark = styled.span`
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  color: ${C.paleOnDark};
  font-weight: 700;
  border: 1px solid rgba(200, 212, 184, 0.25);
  white-space: nowrap;
`;

// =============================================================
// Empty state
// =============================================================
export const EmptyState = styled.div`
  text-align: center;
  padding: 32px 20px;
`;

export const EmptyEmoji = styled.div`
  font-size: 36px;
`;

export const EmptyText = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: ${C.midGreen};
`;

// =============================================================
// Section-header requirement chip (gold + terracotta extras)
// =============================================================
export const ReqChipWrap = styled.span`
  font-size: 10px;
  font-weight: 700;
  border-radius: 99px;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  background: ${({ $met }) => ($met ? C.gold : 'rgba(255,255,255,0.15)')};
  color: ${({ $met }) => ($met ? C.darkGreen : C.paleOnDark)};
`;

export const ReqChipMain = styled.span`
  padding: 3px 9px;
`;

export const ReqChipExtras = styled.span`
  background: ${C.extra};
  color: ${C.white};
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.3px;
`;

// =============================================================
// Sticky nutrition footer
// =============================================================
export const StickyBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${C.darkGreen};
  border-top: 3px solid ${C.gold};
  padding: 10px 16px 14px;
  z-index: 100;
`;

export const TotalsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

export const TotalLabel = styled.div`
  font-size: 9px;
  color: ${C.paleOnDark};
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const TotalValue = styled.div`
  font-family: ${FONT_SERIF};
  font-size: 30px;
  font-weight: 700;
  color: ${C.gold};
  line-height: 1.1;
`;

export const TotalUnit = styled.span`
  font-size: 12px;
  color: ${C.paleOnDark};
  opacity: 0.7;
  font-weight: 400;
  margin-left: 3px;
`;

export const MacroStatRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const MacroStat = styled.div`
  text-align: center;
  min-width: 54px;
`;

export const MacroStatValue = styled.div`
  font-size: 22px;
  font-weight: 800;
  font-family: ${FONT_SERIF};
  line-height: 1;
  color: ${({ $color }) => $color};
`;

export const MacroStatUnit = styled.span`
  font-size: 11px;
  opacity: 0.7;
  font-weight: 400;
`;

export const MacroStatLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 3px;
`;

export const MacroStatLabelText = styled.span`
  font-size: 9px;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

// Requirements row in the sticky footer
export const RequirementsRow = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const RequirementChip = styled.span`
  font-size: 10px;
  font-weight: 700;
  border-radius: 99px;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s;
  background: ${({ $met }) =>
    $met ? 'rgba(242,188,26,0.18)' : 'rgba(255,255,255,0.08)'};
  color: ${({ $met }) => ($met ? C.gold : C.paleOnDark)};
  border: 1px solid
    ${({ $met }) =>
      $met ? 'rgba(242,188,26,0.4)' : 'rgba(200,212,184,0.25)'};
`;

export const RequirementChipMain = styled.span`
  padding: 3px 8px;
`;

export const RequirementChipExtras = styled.span`
  background: ${C.extra};
  color: ${C.white};
  padding: 3px 7px;
  font-size: 10px;
  font-weight: 800;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;

export const BowlReadyBadge = styled.span`
  font-size: 10px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 99px;
  background: ${C.gold};
  color: ${C.darkGreen};
  margin-left: auto;
`;

export const LoadedBowlBadge = styled.span`
  font-size: 10px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 99px;
  background: ${C.extra};
  color: ${C.white};
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 0 0 2px ${C.extra}33;
`;

export const AllergensFooterRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 8px;
  align-items: center;
`;

export const AllergensFooterLabel = styled.span`
  font-size: 9px;
  color: ${C.paleOnDark};
  opacity: 0.6;
  margin-right: 2px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
