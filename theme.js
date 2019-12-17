export const appTheme = {
  name: "app-theme",
  breakpoints: { small: 320, medium: 600, large: 1136 },
  mediaQuery: {
    small: "@media screen and (min-width: 320px)",
    medium: "@media screen and (min-width: 600px)",
    large: "@media screen and (min-width: 1136px)"
  },
  grid: {
    columns: [4, 8, 12],
    gutters: [16, 36, 36],
    margins: [16, 36, 64],
    gaps: 0,
    maxWidth: 1280
  },
  colors: {
    primary: "#FFFFFF",
    primary50: "#F6F6F6",
    primary100: "#EEEEEE",
    primary200: "#E2E2E2",
    primary300: "#CBCBCB",
    primary400: "#AFAFAF",
    primary500: "#757575",
    primary600: "#545454",
    primary700: "#333333",
    accent: "#276EF1",
    accent50: "#EEF3FE",
    accent100: "#D4E2FC",
    accent200: "#A0BFF9",
    accent300: "#5B91F4",
    accent400: "#276EF1",
    accent500: "#1E54B7",
    accent600: "#174291",
    accent700: "#102C60",
    negative: "#D44333",
    negative50: "#FDF0EF",
    negative100: "#FADBD7",
    negative200: "#F4AFA7",
    negative300: "#EB7567",
    negative400: "#D44333",
    negative500: "#AE372A",
    negative600: "#892C21",
    negative700: "#5C1D16",
    warning: "#ED6E33",
    warning50: "#FEF3EF",
    warning100: "#FBE2D6",
    warning200: "#F7BFA5",
    warning300: "#F19164",
    warning400: "#ED6E33",
    warning500: "#B45427",
    warning600: "#8E421F",
    warning700: "#5F2C14",
    positive: "#3AA76D",
    positive50: "#F0F9F4",
    positive100: "#DAF0E3",
    positive200: "#AEDDC2",
    positive300: "#73C496",
    positive400: "#3AA76D",
    positive500: "#368759",
    positive600: "#2B6B46",
    positive700: "#1C472F",
    white: "#FFFFFF",
    mono100: "#CBCBCB",
    mono200: "#AFAFAF",
    mono300: "#757575",
    mono400: "#545454",
    mono500: "#333333",
    mono600: "#292929",
    mono700: "#1F1F1F",
    mono800: "#141414",
    mono900: "#111111",
    mono1000: "#000000",
    black: "#000000",
    rating200: "#FFE3AC",
    rating400: "#FFC043",
    colorPrimary: "#CBCBCB",
    colorSecondary: "#AFAFAF",
    background: "#000000",
    backgroundAlt: "#1F1F1F",
    backgroundInv: "#CBCBCB",
    foreground: "#CBCBCB",
    foregroundAlt: "#757575",
    foregroundInv: "#000000",
    border: "#292929",
    borderAlt: "#1F1F1F",
    borderFocus: "#FFFFFF",
    borderError: "#D44333",
    buttonPrimaryFill: "#FFFFFF",
    buttonPrimaryText: "#000000",
    buttonPrimaryHover: "#EEEEEE",
    buttonPrimaryActive: "#E2E2E2",
    buttonPrimarySelectedFill: "#E2E2E2",
    buttonPrimarySelectedText: "#000000",
    buttonPrimarySpinnerForeground: "#333333",
    buttonPrimarySpinnerBackground: "#CBCBCB",
    buttonSecondaryFill: "#333333",
    buttonSecondaryText: "#FFFFFF",
    buttonSecondaryHover: "#545454",
    buttonSecondaryActive: "#757575",
    buttonSecondarySelectedFill: "#757575",
    buttonSecondarySelectedText: "#FFFFFF",
    buttonSecondarySpinnerForeground: "#FFFFFF",
    buttonSecondarySpinnerBackground: "#AFAFAF",
    buttonTertiaryFill: "transparent",
    buttonTertiaryText: "#FFFFFF",
    buttonTertiaryHover: "#333333",
    buttonTertiaryActive: "#545454",
    buttonTertiarySelectedFill: "#545454",
    buttonTertiarySelectedText: "#FFFFFF",
    buttonTertiarySpinnerForeground: "#F6F6F6",
    buttonTertiarySpinnerBackground: "#757575",
    buttonMinimalFill: "transparent",
    buttonMinimalText: "#FFFFFF",
    buttonMinimalHover: "#333333",
    buttonMinimalActive: "#545454",
    buttonMinimalSelectedFill: "#545454",
    buttonMinimalSelectedText: "#FFFFFF",
    buttonMinimalSpinnerForeground: "#F6F6F6",
    buttonMinimalSpinnerBackground: "#757575",
    buttonDisabledFill: "#292929",
    buttonDisabledText: "#757575",
    buttonDisabledSpinnerForeground: "#AFAFAF",
    buttonDisabledSpinnerBackground: "#545454",
    breadcrumbsText: "#CBCBCB",
    breadcrumbsSeparatorFill: "#AFAFAF",
    datepickerBackground: "#292929",
    datepickerDayFont: "#FFFFFF",
    datepickerDayFontDisabled: "#CBCBCB",
    datepickerDayPseudoSelected: "#333333",
    datepickerDayPseudoHighlighted: "#292929",
    calendarBackground: "#141414",
    calendarForeground: "#FFFFFF",
    calendarForegroundDisabled: "#757575",
    calendarHeaderBackground: "#333333",
    calendarHeaderForeground: "#FFFFFF",
    calendarHeaderBackgroundActive: "#545454",
    calendarHeaderForegroundDisabled: "#757575",
    calendarDayBackgroundPseudoSelected: "#333333",
    calendarDayForegroundPseudoSelected: "#FFFFFF",
    calendarDayBackgroundPseudoSelectedHighlighted: "#545454",
    calendarDayForegroundPseudoSelectedHighlighted: "#FFFFFF",
    calendarDayBackgroundSelected: "#FFFFFF",
    calendarDayForegroundSelected: "#000000",
    calendarDayBackgroundSelectedHighlighted: "#EEEEEE",
    calendarDayForegroundSelectedHighlighted: "#000000",
    fileUploaderBackgroundColor: "#1F1F1F",
    fileUploaderBackgroundColorActive: "#292929",
    fileUploaderBorderColorActive: "#FFFFFF",
    fileUploaderBorderColorDefault: "#333333",
    fileUploaderMessageColor: "#CBCBCB",
    linkText: "#FFFFFF",
    linkVisited: "#EEEEEE",
    linkHover: "#E2E2E2",
    linkActive: "#CBCBCB",
    shadowFocus: "rgba(39, 110, 241, 0.32)",
    shadowError: "rgba(229, 73, 55, 0.32)",
    listHeaderFill: "#292929",
    listBodyFill: "#1F1F1F",
    listIconFill: "#CBCBCB",
    listBorder: "#333333",
    progressStepsCompletedText: "#000000",
    progressStepsCompletedFill: "#FFFFFF",
    progressStepsActiveText: "#000000",
    progressStepsActiveFill: "#FFFFFF",
    progressStepsIconActiveFill: "#FFFFFF",
    toggleFill: "#757575",
    toggleFillChecked: "#FFFFFF",
    toggleFillDisabled: "#292929",
    toggleTrackFill: "#545454",
    toggleTrackFillChecked: "#545454",
    toggleTrackFillDisabled: "#1F1F1F",
    tickFill: "#000000",
    tickFillHover: "#1F1F1F",
    tickFillActive: "#292929",
    tickFillSelected: "#FFFFFF",
    tickFillSelectedHover: "#F6F6F6",
    tickFillSelectedHoverActive: "#EEEEEE",
    tickFillError: "#5C1D16",
    tickFillErrorHover: "#892C21",
    tickFillErrorHoverActive: "#AE372A",
    tickFillErrorSelected: "#AE372A",
    tickFillErrorSelectedHover: "#892C21",
    tickFillErrorSelectedHoverActive: "#5C1D16",
    tickFillDisabled: "#1F1F1F",
    tickBorder: "#757575",
    tickBorderError: "#D44333",
    tickMarkFill: "#000000",
    tickMarkFillError: "#FFFFFF",
    tickMarkFillDisabled: "#545454",
    sliderTrackFill: "#292929",
    sliderTrackFillHover: "#333333",
    sliderTrackFillActive: "#545454",
    sliderTrackFillSelected: "#757575",
    sliderTrackFillSelectedHover: "#333333",
    sliderTrackFillSelectedActive: "#545454",
    sliderTrackFillDisabled: "#1F1F1F",
    sliderHandleFill: "#757575",
    sliderHandleFillHover: "#757575",
    sliderHandleFillActive: "#757575",
    sliderHandleFillSelected: "#757575",
    sliderHandleFillSelectedHover: "#545454",
    sliderHandleFillSelectedActive: "#333333",
    sliderHandleFillDisabled: "#292929",
    sliderHandleInnerFill: "#757575",
    sliderHandleInnerFillDisabled: "#333333",
    sliderHandleInnerFillSelectedHover: "#545454",
    sliderHandleInnerFillSelectedActive: "#333333",
    sliderBorder: "#FFFFFF",
    sliderBorderHover: "#FFFFFF",
    sliderBorderDisabled: "#545454",
    inputFill: "#292929",
    inputFillError: "#5C1D16",
    inputFillDisabled: "#141414",
    inputFillActive: "#333333",
    inputFillPositive: "#1C472F",
    inputTextDisabled: "#333333",
    inputBorderError: "#D44333",
    inputBorderPositive: "#3AA76D",
    inputEnhancerFill: "#333333",
    inputEnhancerFillDisabled: "#1F1F1F",
    inputEnhancerTextDisabled: "#333333",
    menuFill: "#292929",
    menuFillHover: "#1F1F1F",
    menuFontDefault: "#757575",
    menuFontDisabled: "#545454",
    menuFontHighlighted: "#AFAFAF",
    menuFontSelected: "#FFFFFF",
    modalCloseColor: "#757575",
    modalCloseColorHover: "#545454",
    modalCloseColorFocus: "#545454",
    paginationTriangleDown: "#CBCBCB",
    headerNavigationFill: "#1F1F1F",
    tabBarFill: "#000000",
    tabColor: "#757575",
    notificationPrimaryBackground: "#333333",
    notificationPrimaryText: "#E2E2E2",
    notificationInfoBackground: "#102C60",
    notificationInfoText: "#A0BFF9",
    notificationPositiveBackground: "#1C472F",
    notificationPositiveText: "#AEDDC2",
    notificationWarningBackground: "#5F2C14",
    notificationWarningText: "#F7BFA5",
    notificationNegativeBackground: "#5C1D16",
    notificationNegativeText: "#F4AFA7",
    tagSolidRampUnit: "500",
    tagSolidHoverRampUnit: "500",
    tagSolidActiveRampUnit: "400",
    tagSolidDisabledRampUnit: "700",
    tagSolidFontRampUnit: "100",
    tagSolidFontHoverRampUnit: "100",
    tagLightRampUnit: "700",
    tagLightHoverRampUnit: "700",
    tagLightActiveRampUnit: "600",
    tagLightDisabledRampUnit: "700",
    tagLightFontRampUnit: "100",
    tagLightFontHoverRampUnit: "100",
    tagOutlinedRampUnit: "500",
    tagOutlinedHoverRampUnit: "400",
    tagOutlinedActiveRampUnit: "300",
    tagOutlinedDisabledRampUnit: "700",
    tagOutlinedFontRampUnit: "200",
    tagOutlinedFontHoverRampUnit: "700",
    tagFontDisabledRampUnit: "500",
    tagNeutralSolidBackground: "#292929",
    tagNeutralSolidHover: "#292929",
    tagNeutralSolidActive: "#333333",
    tagNeutralSolidDisabled: "#1F1F1F",
    tagNeutralSolidFont: "#AFAFAF",
    tagNeutralSolidFontHover: "#AFAFAF",
    tagNeutralLightBackground: "#141414",
    tagNeutralLightHover: "#141414",
    tagNeutralLightActive: "#1F1F1F",
    tagNeutralLightDisabled: "#1F1F1F",
    tagNeutralLightFont: "#AFAFAF",
    tagNeutralLightFontHover: "#AFAFAF",
    tagNeutralOutlinedBackground: "#292929",
    tagNeutralOutlinedHover: "#333333",
    tagNeutralOutlinedActive: "#545454",
    tagNeutralOutlinedDisabled: "#1F1F1F",
    tagNeutralOutlinedFont: "#AFAFAF",
    tagNeutralOutlinedFontHover: "#111111",
    tagNeutralFontDisabled: "#333333",
    tagPrimarySolidBackground: "#FFFFFF",
    tagPrimarySolidHover: "#333333",
    tagPrimarySolidActive: "#AFAFAF",
    tagPrimarySolidDisabled: "#333333",
    tagPrimarySolidFont: "#333333",
    tagPrimarySolidFontHover: "#EEEEEE",
    tagPrimaryLightBackground: "#333333",
    tagPrimaryLightHover: "#333333",
    tagPrimaryLightActive: "#545454",
    tagPrimaryLightDisabled: "#333333",
    tagPrimaryLightFont: "#EEEEEE",
    tagPrimaryLightFontHover: "#EEEEEE",
    tagPrimaryOutlinedBackground: "#FFFFFF",
    tagPrimaryOutlinedHover: "#333333",
    tagPrimaryOutlinedActive: "#545454",
    tagPrimaryOutlinedDisabled: "#333333",
    tagPrimaryOutlinedFont: "#FFFFFF",
    tagPrimaryOutlinedFontHover: "#F6F6F6",
    tagPrimaryFontDisabled: "#757575",
    tagAccentSolidBackground: "#1E54B7",
    tagAccentSolidHover: "#1E54B7",
    tagAccentSolidActive: "#276EF1",
    tagAccentSolidDisabled: "#102C60",
    tagAccentSolidFont: "#D4E2FC",
    tagAccentSolidFontHover: "#D4E2FC",
    tagAccentLightBackground: "#102C60",
    tagAccentLightHover: "#102C60",
    tagAccentLightActive: "#174291",
    tagAccentLightDisabled: "#102C60",
    tagAccentLightFont: "#D4E2FC",
    tagAccentLightFontHover: "#D4E2FC",
    tagAccentOutlinedBackground: "#1E54B7",
    tagAccentOutlinedHover: "#276EF1",
    tagAccentOutlinedActive: "#5B91F4",
    tagAccentOutlinedDisabled: "#102C60",
    tagAccentOutlinedFont: "#A0BFF9",
    tagAccentOutlinedFontHover: "#102C60",
    tagAccentFontDisabled: "#1E54B7",
    tagPositiveSolidBackground: "#368759",
    tagPositiveSolidHover: "#368759",
    tagPositiveSolidActive: "#3AA76D",
    tagPositiveSolidDisabled: "#1C472F",
    tagPositiveSolidFont: "#DAF0E3",
    tagPositiveSolidFontHover: "#DAF0E3",
    tagPositiveLightBackground: "#1C472F",
    tagPositiveLightHover: "#1C472F",
    tagPositiveLightActive: "#2B6B46",
    tagPositiveLightDisabled: "#1C472F",
    tagPositiveLightFont: "#DAF0E3",
    tagPositiveLightFontHover: "#DAF0E3",
    tagPositiveOutlinedBackground: "#368759",
    tagPositiveOutlinedHover: "#3AA76D",
    tagPositiveOutlinedActive: "#73C496",
    tagPositiveOutlinedDisabled: "#1C472F",
    tagPositiveOutlinedFont: "#AEDDC2",
    tagPositiveOutlinedFontHover: "#1C472F",
    tagPositiveFontDisabled: "#368759",
    tagWarningSolidBackground: "#B45427",
    tagWarningSolidHover: "#B45427",
    tagWarningSolidActive: "#ED6E33",
    tagWarningSolidDisabled: "#5F2C14",
    tagWarningSolidFont: "#FBE2D6",
    tagWarningSolidFontHover: "#FBE2D6",
    tagWarningLightBackground: "#5F2C14",
    tagWarningLightHover: "#5F2C14",
    tagWarningLightActive: "#8E421F",
    tagWarningLightDisabled: "#5F2C14",
    tagWarningLightFont: "#FBE2D6",
    tagWarningLightFontHover: "#FBE2D6",
    tagWarningOutlinedBackground: "#B45427",
    tagWarningOutlinedHover: "#ED6E33",
    tagWarningOutlinedActive: "#F19164",
    tagWarningOutlinedDisabled: "#5F2C14",
    tagWarningOutlinedFont: "#F7BFA5",
    tagWarningOutlinedFontHover: "#5F2C14",
    tagWarningFontDisabled: "#B45427",
    tagNegativeSolidBackground: "#AE372A",
    tagNegativeSolidHover: "#AE372A",
    tagNegativeSolidActive: "#D44333",
    tagNegativeSolidDisabled: "#5C1D16",
    tagNegativeSolidFont: "#FADBD7",
    tagNegativeSolidFontHover: "#FADBD7",
    tagNegativeLightBackground: "#5C1D16",
    tagNegativeLightHover: "#5C1D16",
    tagNegativeLightActive: "#892C21",
    tagNegativeLightDisabled: "#5C1D16",
    tagNegativeLightFont: "#FADBD7",
    tagNegativeLightFontHover: "#FADBD7",
    tagNegativeOutlinedBackground: "#AE372A",
    tagNegativeOutlinedHover: "#D44333",
    tagNegativeOutlinedActive: "#EB7567",
    tagNegativeOutlinedDisabled: "#5C1D16",
    tagNegativeOutlinedFont: "#F4AFA7",
    tagNegativeOutlinedFontHover: "#5C1D16",
    tagNegativeFontDisabled: "#AE372A",
    tableHeadBackgroundColor: "#1F1F1F",
    tableBackground: "#141414",
    tableStripedBackground: "#1F1F1F",
    tableFilter: "#545454",
    tableFilterHeading: "#757575",
    tableFilterBackground: "#1F1F1F",
    tableFilterFooterBackground: "#141414",
    toastText: "#FFFFFF",
    toastPrimaryBackground: "#757575",
    toastInfoBackground: "#1E54B7",
    toastPositiveBackground: "#368759",
    toastWarningBackground: "#B45427",
    toastNegativeBackground: "#AE372A",
    spinnerTrackFill: "#CBCBCB",
    progressbarTrackFill: "#CBCBCB",
    tooltipBackground: "#AFAFAF",
    tooltipText: "#000000"
  },
  typography: {
    font100: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "12px",
      fontWeight: "normal",
      lineHeight: "20px"
    },
    font150: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "20px"
    },
    font200: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "20px"
    },
    font250: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px"
    },
    font300: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "24px"
    },
    font350: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px"
    },
    font400: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: "28px"
    },
    font450: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "28px"
    },
    font550: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px"
    },
    font650: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px"
    },
    font750: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "36px"
    },
    font850: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "40px"
    },
    font950: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "44px"
    },
    font1050: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "52px"
    },
    font1150: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "44px"
    },
    font1250: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "44px",
      fontWeight: 500,
      lineHeight: "52px"
    },
    font1350: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "52px",
      fontWeight: 500,
      lineHeight: "64px"
    },
    font1450: {
      fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: "96px",
      fontWeight: 500,
      lineHeight: "112px"
    }
  },
  sizing: {
    scale0: "2px",
    scale100: "4px",
    scale200: "6px",
    scale300: "8px",
    scale400: "10px",
    scale500: "12px",
    scale550: "14px",
    scale600: "16px",
    scale650: "18px",
    scale700: "20px",
    scale750: "22px",
    scale800: "24px",
    scale900: "32px",
    scale1000: "40px",
    scale1200: "48px",
    scale1400: "56px",
    scale1600: "64px",
    scale2400: "96px",
    scale3200: "128px",
    scale4800: "192px"
  },
  lighting: {
    shadow400: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
    shadow500: "0 2px 8px hsla(0, 0%, 0%, 0.16)",
    shadow600: "0 4px 16px hsla(0, 0%, 0%, 0.16)",
    shadow700: "0 8px 24px hsla(0, 0%, 0%, 0.16)",
    overlay0: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0)",
    overlay100: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)",
    overlay200: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)",
    overlay300: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)",
    overlay400: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)",
    overlay500: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)",
    overlay600: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)"
  },
  borders: {
    border100: {
      borderColor: "hsla(0, 0%, 0%, 0.04)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    border200: {
      borderColor: "hsla(0, 0%, 0%, 0.08)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    border300: {
      borderColor: "hsla(0, 0%, 0%, 0.12)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    border400: {
      borderColor: "hsla(0, 0%, 0%, 0.16)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    border500: {
      borderColor: "hsla(0, 0%, 0%, 0.2)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    border600: {
      borderColor: "hsla(0, 0%, 0%, 0.24)",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    radius100: "2px",
    radius200: "4px",
    radius300: "8px",
    radius400: "12px",
    useRoundedCorners: !0,
    buttonBorderRadius: "0px",
    inputBorderRadius: "0px",
    popoverBorderRadius: "0px",
    surfaceBorderRadius: "0px"
  },
  animation: {
    timing100: "0.25s",
    timing400: "0.4s",
    timing700: "0.6s",
    timing1000: "1s",
    easeOutCurve: "cubic-bezier(.2, .8, .4, 1)",
    easeInCurve: "cubic-bezier(.8, .2, .6, 1)",
    easeInOutCurve: "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  direction: "auto",
  zIndex: { modal: 2e3 },
}