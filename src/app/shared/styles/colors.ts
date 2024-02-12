export interface Color {
  displayName: string,
  name: string;
  hexCodes: {
    [key:number]: string
  }
}

function dynamicSort(property:string) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a:any,b:any) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}



export const colors: Color[] = [
  {
    displayName: 'Pink 2',
    name: 'pink2',
    hexCodes: {
      50: "#FCE4EC",
      100: "#F8BBD0",
      200: "#F48FB1",
      300: "#F06292",
      400: "#EC407A",
      500: "#E91E63",
      600: "#D81B60",
      700: "#C2185B",
      800: "#AD1457",
      900: "#880E4F",
    }
  },
  {
    displayName: 'Purple 2',
    name: 'purple2',
    hexCodes: {
      50: "#F3E5F5",
      100: "#E1BEE7",
      200: "#CE93D8",
      300: "#BA68C8",
      400: "#AB47BC",
      500: "#9C27B0",
      600: "#8E24AA",
      700: "#7B1FA2",
      800: "#6A1B9A",
      900: "#4A148C",
    }
  },
  {
    displayName: 'Deep Purple',
    name: 'deep_purple',
    hexCodes: {
      50: "#EDE7F6",
      100: "#D1C4E9",
      200: "#B39DDB",
      300: "#9575CD",
      400: "#7E57C2",
      500: "#673AB7",
      600: "#5E35B1",
      700: "#512DA8",
      800: "#4527A0",
      900: "#311B92",
    }
  },
  {
    displayName: 'Indigo',
    name: 'indigo',
    hexCodes: {
      50: "#E8EAF6",
      100: "#C5CAE9",
      200: "#9FA8DA",
      300: "#7986CB",
      400: "#5C6BC0",
      500: "#3F51B5",
      600: "#3949AB",
      700: "#303F9F",
      800: "#283593",
      900: "#1A237E",
    }
  },
  {
    displayName: 'Cyan 2',
    name: 'cyan2',
    hexCodes: {
      50: "#E0F7FA",
      100: "#B2EBF2",
      200: "#80DEEA",
      300: "#4DD0E1",
      400: "#26C6DA",
      500: "#00BCD4",
      600: "#00ACC1",
      700: "#0097A7",
      800: "#00838F",
      900: "#006064",
    }
  },
  {
    displayName: 'Teal 2',
    name: 'teal2',
    hexCodes: {
      50: "#E0F2F1",
      100: "#B2DFDB",
      200: "#80CBC4",
      300: "#4DB6AC",
      400: "#26A69A",
      500: "#009688",
      600: "#00897B",
      700: "#00796B",
      800: "#00695C",
      900: "#004D40",
    }
  },
  {
    displayName: 'Green 2',
    name: 'green2',
    hexCodes: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
    },
  },
  {
    displayName: 'Light Green',
    name: 'light_green',
    hexCodes: {
      50: "#F9FBE7",
      100: "#F0F4C3",
      200: "#E6EE9C",
      300: "#DCE775",
      400: "#D4E157",
      500: "#CDDC39",
      600: "#C0CA33",
      700: "#AFB42B",
      800: "#9E9D24",
      900: "#827717",
    },
  },
  {
    displayName: 'Orange 2',
    name: 'orange2',
    hexCodes:  {
      50: "#FFF3E0",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
    },
  },
  {
    displayName: 'Deep Orange',
    name: 'deep_orange',
    hexCodes:  {
      50: "#FBE9E7",
      100: "#FFCCBC",
      200: "#FFAB91",
      300: "#FF8A65",
      400: "#FF7043",
      500: "#FF5722",
      600: "#F4511E",
      700: "#E64A19",
      800: "#D84315",
      900: "#BF360C",
    },
  },
  {
    displayName: 'Brown',
    name: 'brown',
    hexCodes: {
      50: "#EFEBE9",
      100: "#D7CCC8",
      200: "#BCAAA4",
      300: "#A1887F",
      400: "#8D6E63",
      500: "#795548",
      600: "#6D4C41",
      700: "#5D4037",
      800: "#4E342E",
      900: "#3E2723",
    },
  },
  {
    displayName: 'Rose',
    name: 'rose',
    hexCodes: {
      '50': '#fff1f2',
      '100': '#ffe4e6',
      '200': '#fecdd3',
      '300': '#fda4af',
      '400': '#fb7185',
      '500': '#f43f5e',
      '600': '#e11d48',
      '700': '#be123c',
      '800': '#9f1239',
      '900': '#881337'
    }
  },
  {
    displayName: 'Pink',
    name: 'pink',
    hexCodes: {
      '50': '#fdf2f8',
      '100': '#fce7f3',
      '200': '#fbcfe8',
      '300': '#f9a8d4',
      '400': '#f472b6',
      '500': '#ec4899',
      '600': '#db2777',
      '700': '#be185d',
      '800': '#9d174d',
      '900': '#831843'
    }
  },
  {
    displayName: 'Fuchsia',
    name: 'fuchsia',
    hexCodes: {
      '50': '#fdf4ff',
      '100': '#fae8ff',
      '200': '#f5d0fe',
      '300': '#f0abfc',
      '400': '#e879f9',
      '500': '#d946ef',
      '600': '#c026d3',
      '700': '#a21caf',
      '800': '#86198f',
      '900': '#701a75'
    }
  },
  {
    displayName: 'Purple',
    name: 'purple',
    hexCodes: {
      '50': '#faf5ff',
      '100': '#f3e8ff',
      '200': '#e9d5ff',
      '300': '#d8b4fe',
      '400': '#c084fc',
      '500': '#a855f7',
      '600': '#9333ea',
      '700': '#7e22ce',
      '800': '#6b21a8',
      '900': '#581c87'
    }
  },
  {
    displayName: 'Violet',
    name: 'violet',
    hexCodes: {
      '50': '#f5f3ff',
      '100': '#ede9fe',
      '200': '#ddd6fe',
      '300': '#c4b5fd',
      '400': '#a78bfa',
      '500': '#8b5cf6',
      '600': '#7c3aed',
      '700': '#6d28d9',
      '800': '#5b21b6',
      '900': '#4c1d95'
    }
  },
  {
    displayName: 'Blue',
    name: 'blue',
    hexCodes: {
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#3b82f6',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#1e3a8a'
    }
  },
  {
    displayName: 'Light Blue',
    name: 'lightBlue',
    hexCodes: {
      '50': '#f0f9ff',
      '100': '#e0f2fe',
      '200': '#bae6fd',
      '300': '#7dd3fc',
      '400': '#38bdf8',
      '500': '#0ea5e9',
      '600': '#0284c7',
      '700': '#0369a1',
      '800': '#075985',
      '900': '#0c4a6e'
    }
  },
  {
    displayName: 'Cyan',
    name: 'cyan',
    hexCodes: {
      '50': '#ecfeff',
      '100': '#cffafe',
      '200': '#a5f3fc',
      '300': '#67e8f9',
      '400': '#22d3ee',
      '500': '#06b6d4',
      '600': '#0891b2',
      '700': '#0e7490',
      '800': '#155e75',
      '900': '#164e63'
    }
  },
  {
    displayName: 'Teal',
    name: 'teal',
    hexCodes: {
      '50': '#f0fdfa',
      '100': '#ccfbf1','200': '#99f6e4',
      '300': '#5eead4',
      '400': '#2dd4bf',
      '500': '#14b8a6',
      '600': '#0d9488',
      '700': '#0f766e',
      '800': '#115e59',
      '900': '#134e4a'
    }
  },
  {
    displayName: 'Emerald',
    name: 'emerald',
    hexCodes: {
      '50': '#ecfdf5',
      '100': '#d1fae5',
      '200': '#a7f3d0',
      '300': '#6ee7b7',
      '400': '#34d399',
      '500': '#10b981',
      '600': '#059669',
      '700': '#047857',
      '800': '#065f46',
      '900': '#064e3b'
    }
  },
  {
    displayName: 'Green',
    name: 'green',
    hexCodes: {
      '50': '#f0fdf4',
      '100': '#dcfce7',
      '200': '#bbf7d0',
      '300': '#86efac',
      '400': '#4ade80',
      '500': '#22c55e',
      '600': '#16a34a',
      '700': '#15803d',
      '800': '#166534',
      '900': '#14532d'
    }
  },
  {
    displayName: 'Lime',
    name: 'lime',
    hexCodes: {
      '50': '#f7fee7',
      '100': '#ecfccb',
      '200': '#d9f99d',
      '300': '#bef264',
      '400': '#a3e635',
      '500': '#84cc16',
      '600': '#65a30d',
      '700': '#4d7c0f',
      '800': '#3f6212',
      '900': '#365314'
    }
  },
  {
    displayName: 'Yellow',
    name: 'yellow',
    hexCodes: {
      '50': '#fefce8',
      '100': '#fef9c3',
      '200': '#fef08a',
      '300': '#fde047',
      '400': '#facc15',
      '500': '#eab308',
      '600': '#ca8a04',
      '700': '#a16207',
      '800': '#854d0e',
      '900': '#713f12'
    }
  },
  {
    displayName: 'Amber',
    name: 'amber',
    hexCodes: {
      '50': '#fffbeb',
      '100': '#fef3c7',
      '200': '#fde68a',
      '300': '#fcd34d',
      '400': '#fbbf24',
      '500': '#f59e0b',
      '600': '#d97706',
      '700': '#b45309',
      '800': '#92400e',
      '900': '#78350f'
    }
  },
  {
    displayName: 'Orange',
    name: 'orange',
    hexCodes: {
      '50': '#fff7ed',
      '100': '#ffedd5',
      '200': '#fed7aa',
      '300': '#fdba74',
      '400': '#fb923c',
      '500': '#f97316',
      '600': '#ea580c',
      '700': '#c2410c',
      '800': '#9a3412',
      '900': '#7c2d12'
    }
  },
  {
    displayName: 'Red',
    name: 'red',
    hexCodes: {
      '50': '#fef2f2',
      '100': '#fee2e2',
      '200': '#fecaca',
      '300': '#fca5a5',
      '400': '#f87171',
      '500': '#ef4444',
      '600': '#dc2626',
      '700': '#b91c1c',
      '800': '#991b1b',
      '900': '#7f1d1d'
    }
  },
  {
    displayName: 'Warm Grey',
    name: 'warmGray',
    hexCodes: {
      '50': '#fafaf9',
      '100': '#f5f5f4',
      '200': '#e7e5e4',
      '300': '#d6d3d1',
      '400': '#a8a29e',
      '500': '#78716c',
      '600': '#57534e',
      '700': '#44403c',
      '800': '#292524',
      '900': '#1c1917'
    }
  },
  {
    displayName: 'True Grey',
    name: 'trueGray',
    hexCodes: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#e5e5e5',
      '300': '#d4d4d4',
      '400': '#a3a3a3',
      '500': '#737373',
      '600': '#525252',
      '700': '#404040',
      '800': '#262626',
      '900': '#171717'
    }
  },
  {
    displayName: 'Grey',
    name: 'gray',
    hexCodes: {
      '50': '#fafafa',
      '100': '#f4f4f5',
      '200': '#e4e4e7',
      '300': '#d4d4d8',
      '400': '#a1a1aa',
      '500': '#71717a',
      '600': '#52525b',
      '700': '#3f3f46',
      '800': '#27272a',
      '900': '#18181b'
    }
  },
  {
    displayName: 'Cool Grey',
    name: 'coolGray',
    hexCodes: {
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827'
    }
  },
  {
    displayName: 'Blue Grey',
    name: 'blueGray',
    hexCodes: {
      '50': '#f8fafc',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#64748b',
      '600': '#475569',
      '700': '#334155',
      '800': '#1e293b',
      '900': '#0f172a'
    }
  },

  {
    displayName: 'Crimson',
    name: 'crimson',
    hexCodes: {
      '50': '#fbd2da',
      '100': '#f9bcc8',
      '200': '#f7a5b5',
      '300': '#f58fa3',
      '400': '#f27891',
      '500': '#f0627e',
      '600': '#ee4b6c',
      '700': '#ec3559',
      '800': '#ea1e47',
      '900': '#dc143c'
    }
  },

  {
    displayName: 'Desert Sun',
    name: 'desert_sun',
    hexCodes: {
      '50': '#f7ebd6',
      '100': '#f3e1c1',
      '200': '#efd7ac',
      '300': '#ebcd98',
      '400': '#e7c383',
      '500': '#e3b96f',
      '600': '#e0af5a',
      '700': '#dca445',
      '800': '#d89a31',
      '900': '#c98d26'
    }
  },
  {
    displayName: 'Orchid',
    name: 'orchid',
    hexCodes: {
      '50': '#f8e5f8',
      '100': '#f5d8f4',
      '200': '#f2cbf0',
      '300': '#eebeed',
      '400': '#ebb2e9',
      '500': '#e8a5e5',
      '600': '#e498e2',
      '700': '#e18bde',
      '800': '#de7edb',
      '900': '#da70d6'
    }
  },
  {
    displayName: 'Pastel Green',
    name: 'pastel_green',
    hexCodes: {
      '50': '#e7f9e7',
      '100': '#daf6da',
      '200': '#cef3ce',
      '300': '#c2f0c2',
      '400': '#b6edb6',
      '500': '#a9eaa9',
      '600': '#9de79d',
      '700': '#91e391',
      '800': '#85e085',
      '900': '#77dd77'
    }
  },
  {
    displayName: 'Pastel Red',
    name: 'pastel_red',
    hexCodes: {
      '50': '#ffe4e2',
      '100': '#ffd6d4',
      '200': '#ffc8c6',
      '300': '#ffbbb7',
      '400': '#ffada9',
      '500': '#ff9f9a',
      '600': '#ff928c',
      '700': '#ff847e',
      '800': '#ff766f',
      '900': '#ff6961'
    }
  },
  {
    displayName: 'Red Orange',
    name: 'red_orange',
    hexCodes: {
      '50': '#ffdfde',
      '100': '#ffcfcd',
      '200': '#ffc0bc',
      '300': '#ffb0ac',
      '400': '#ffa09b',
      '500': '#ff908a',
      '600': '#ff8079',
      '700': '#ff7069',
      '800': '#ff6058',
      '900': '#ff5349'
    }
  },
  {
    displayName: 'Purple Haze',
    name: 'purple_haze',
    hexCodes: {
      '50': '#e8e5ec',
      '100': '#dcd8e3',
      '200': '#d0cbda',
      '300': '#c4bed0',
      '400': '#b9b2c7',
      '500': '#ada5be',
      '600': '#a198b4',
      '700': '#968bab',
      '800': '#8a7ea2',
      '900': '#7d7098'
    }
  },
  {
    displayName: 'Rose Red',
    name: 'rose_red',
    hexCodes: {
      '50': '#ffd2dc',
      '100': '#ffbbcb',
      '200': '#ffa4b9',
      '300': '#ff8da8',
      '400': '#ff7796',
      '500': '#ff6085',
      '600': '#ff4974',
      '700': '#ff3362',
      '800': '#ff1c51',
      '900': '#ff033e'
    }
  },
  {
    displayName: 'Rose Gold',
    name: 'rose_gold',
    hexCodes: {
      '50': '#f2e5e7',
      '100': '#ecd8db',
      '200': '#e5cbcf',
      '300': '#dfbec3',
      '400': '#d8b1b7',
      '500': '#d2a4ab',
      '600': '#cc979f',
      '700': '#c58a93',
      '800': '#bf7d86',
      '900': '#b76e79'
    }
  },
  {
    displayName: 'Royal Blue',
    name: 'royal_blue',
    hexCodes: {
      '50': '#dde4fa',
      '100': '#cbd6f7',
      '200': '#bac9f4',
      '300': '#a9bbf2',
      '400': '#98adef',
      '500': '#86a0ec',
      '600': '#7592e9',
      '700': '#6485e7',
      '800': '#5377e4',
      '900': '#4169e1'
    }
  },
  {
    displayName: 'Scarlet',
    name: 'scarlet',
    hexCodes: {
      '50': '#ffd8d1',
      '100': '#ffc4b9',
      '200': '#ffb0a2',
      '300': '#ff9c8b',
      '400': '#ff8974',
      '500': '#ff755d',
      '600': '#ff6146',
      '700': '#ff4e2e',
      '800': '#ff3a17',
      '900': '#ff2400'
    }
  },
  {
    displayName: 'Tangerine',
    name: 'tangerine',
    hexCodes: {
      '50': '#ffe9cf',
      '100': '#ffdeb7',
      '200': '#ffd49f',
      '300': '#ffc986',
      '400': '#ffbe6e',
      '500': '#ffb356',
      '600': '#ffa83e',
      '700': '#ff9d26',
      '800': '#ff930e',
      '900': '#f28500'
    }
  },
  {
    displayName: 'Spearmint',
    name: 'spearmint',
    hexCodes: {
      '50': '#dcf1ea',
      '100': '#cbebe0',
      '200': '#bae4d6',
      '300': '#a8ddcc',
      '400': '#97d6c1',
      '500': '#85d0b7',
      '600': '#74c9ad',
      '700': '#63c2a2',
      '800': '#51bb98',
      '900': '#45b08c'
    }
  },
  {
    displayName: 'Taupe',
    name: 'taupe',
    hexCodes: {
      '50': '#e2dbd5',
      '100': '#d4c9c1',
      '200': '#c5b7ac',
      '300': '#b7a597',
      '400': '#a89382',
      '500': '#9a816d',
      '600': '#87705e',
      '700': '#725f4f',
      '800': '#5d4d41',
      '900': '#483c32'
    }
  },
  {
    displayName: 'Teal Green',
    name: 'teal_green',
    hexCodes: {
      '50': '#befff4',
      '100': '#9effef',
      '200': '#7dffe9',
      '300': '#5dffe4',
      '400': '#3cffdf',
      '500': '#1cffd9',
      '600': '#00fad1',
      '700': '#00dab6',
      '800': '#00b99b',
      '900': '#009b81'
    }
  },
  {
    displayName: 'Tiger Lily',
    name: 'tiger_lily',
    hexCodes: {
      '50': '#f8e9e8',
      '100': '#f5dedc',
      '200': '#f2d3d1',
      '300': '#efc9c5',
      '400': '#ebbeba',
      '500': '#e8b3ae',
      '600': '#e5a8a2',
      '700': '#e29d97',
      '800': '#de928b',
      '900': '#db8780'
    }
  },
  {
    displayName: 'Tiffany Blue',
    name: 'tiffany_blue',
    hexCodes: {
      '50': '#c8fcfa',
      '100': '#adfbf8',
      '200': '#92f9f6',
      '300': '#76f8f4',
      '400': '#5bf6f1',
      '500': '#40f5ef',
      '600': '#25f4ed',
      '700': '#0defe7',
      '800': '#0bd3cd',
      '900': '#0abab5'
    }
  },
  {
    displayName: 'Turquoise',
    name: 'turquoise',
    hexCodes: {
      '50': '#d9f7f5',
      '100': '#c6f3f0',
      '200': '#b4f0eb',
      '300': '#a1ece5',
      '400': '#8ee8e0',
      '500': '#7be4db',
      '600': '#68e0d6',
      '700': '#55dcd1',
      '800': '#42d8cc',
      '900': '#30d5c8'
    }
  },
  {
    displayName: 'Yellow Green',
    name: 'yellow_green',
    hexCodes: {
      '50': '#edf6da',
      '100': '#e3f1c7',
      '200': '#daedb4',
      '300': '#d1e8a2',
      '400': '#c8e48f',
      '500': '#bedf7c',
      '600': '#b5db6a',
      '700': '#acd657',
      '800': '#a3d244',
      '900': '#9acd32'
    }
  },
  {
    displayName: 'Carafe',
    name: 'carafe',
    hexCodes: {
      '50': '#e1d3d1',
      '100': '#d1bdbb',
      '200': '#c2a7a4',
      '300': '#b3918d',
      '400': '#a47b76',
      '500': '#926762',
      '600': '#7c5752',
      '700': '#654743',
      '800': '#4e3734',
      '900': '#362624'
    }
  },
  {
    displayName: 'Burgundy',
    name: 'burgundy',
    hexCodes: {
      '50': '#ffb9cb',
      '100': '#ff97b1',
      '200': '#ff7497',
      '300': '#ff517d',
      '400': '#ff2e63',
      '500': '#ff0c48',
      '600': '#e8003a',
      '700': '#c50031',
      '800': '#a20029',
      '900': '#800020'
    }
  },
  {
    displayName: 'Cinnabar',
    name: 'cinnabar',
    hexCodes: {
      '50': '#faddda',
      '100': '#f7ccc8',
      '200': '#f5bbb6',
      '300': '#f2aaa3',
      '400': '#f09991',
      '500': '#ed887e',
      '600': '#eb776c',
      '700': '#e8665a',
      '800': '#e65547',
      '900': '#e34234'
    }
  },
  {
    displayName: 'Marsala',
    name: 'marsala',
    hexCodes: {
      '50': '#f2e6e5',
      '100': '#ebd9d8',
      '200': '#e5cccc',
      '300': '#debfbf',
      '400': '#d7b3b2',
      '500': '#d1a6a5',
      '600': '#ca9998',
      '700': '#c38c8b',
      '800': '#bd807e',
      '900': '#b57170'
    }
  },
  {
    displayName: 'Gunmetal Gray',
    name: 'gunmetal_gray',
    hexCodes: {
      '50': '#eaebea',
      '100': '#e0e1e0',
      '200': '#d5d7d5',
      '300': '#cbcdcb',
      '400': '#c1c3c1',
      '500': '#b6b9b6',
      '600': '#acafac',
      '700': '#a1a5a1',
      '800': '#979b97',
      '900': '#8d918d'
    }
  },
  {
    displayName: 'Kelly Green',
    name: 'kelly_green',
    hexCodes: {
      '50': '#dcf9ce',
      '100': '#caf6b6',
      '200': '#b9f39e',
      '300': '#a7f085',
      '400': '#95ed6d',
      '500': '#84ea55',
      '600': '#72e73c',
      '700': '#61e424',
      '800': '#54d21a',
      '900': '#4cbb17'
    }
  },
  {
    displayName: 'Blue Iris',
    name: 'blue_iris',
    hexCodes: {
      '50': '#e1dff6',
      '100': '#d2cff2',
      '200': '#c3bfed',
      '300': '#b4afe9',
      '400': '#a59fe5',
      '500': '#968fe0',
      '600': '#877fdc',
      '700': '#786fd8',
      '800': '#695fd3',
      '900': '#5a4fcf'
    }
  },
  {
    displayName: 'Blue Green',
    name: 'blue_green',
    hexCodes: {
      '50': '#caf1fb',
      '100': '#b0ebf9',
      '200': '#95e4f8',
      '300': '#7bddf6',
      '400': '#60d6f4',
      '500': '#46d0f2',
      '600': '#2bc9f0',
      '700': '#11c2ee',
      '800': '#0fadd4',
      '900': '#0d98ba'
    }
  },
  {
    displayName: 'Blue Grotto',
    name: 'blue_grotto',
    hexCodes: {
      '50': '#cae7fe',
      '100': '#b0dbfd',
      '200': '#96cefd',
      '300': '#7bc2fc',
      '400': '#61b6fc',
      '500': '#47aafb',
      '600': '#2c9efb',
      '700': '#1292fa',
      '800': '#0584ec',
      '900': '#0476d0'
    }
  },
  {
    displayName: 'Burnt Orange',
    name: 'burnt_orange',
    hexCodes: {
      '50': '#ffdfc7',
      '100': '#ffceac',
      '200': '#ffbe90',
      '300': '#ffae74',
      '400': '#ff9e58',
      '500': '#ff8d3c',
      '600': '#ff7d20',
      '700': '#ff6d05',
      '800': '#e86100',
      '900': '#cc5500'
    }
  },
  {
    displayName: 'Chili Pepper',
    name: 'chili_pepper',
    hexCodes: {
      '50': '#f8c8c9',
      '100': '#f5acad',
      '200': '#f19092',
      '300': '#ee7577',
      '400': '#ea595c',
      '500': '#e73d40',
      '600': '#e42225',
      '700': '#cd191c',
      '800': '#b11619',
      '900': '#961316'
    }
  },
  {
    displayName: 'Chocolate',
    name: 'chocolate',
    hexCodes: {
      '50': '#ff9c33',
      '100': '#ff931f',
      '200': '#ff890a',
      '300': '#f57e00',
      '400': '#e07400',
      '500': '#cc6900',
      '600': '#b85f00',
      '700': '#a35400',
      '800': '#8f4a00',
      '900': '#7b3f00'
    }
  },
  {
    displayName: 'Cognac',
    name: 'cognac',
    hexCodes: {
      '50': '#f0dbd9',
      '100': '#e8c9c5',
      '200': '#e0b7b2',
      '300': '#d9a59f',
      '400': '#d1938c',
      '500': '#c98178',
      '600': '#c26e65',
      '700': '#ba5c52',
      '800': '#ac4f45',
      '900': '#9a463d'
    }
  },
  {
    displayName: 'Coral',
    name: 'coral',
    hexCodes: {
      '50': '#ffe8df',
      '100': '#ffdcd0',
      '200': '#ffd1c0',
      '300': '#ffc5b0',
      '400': '#ffbaa0',
      '500': '#ffae91',
      '600': '#ffa381',
      '700': '#ff9771',
      '800': '#ff8b61',
      '900': '#ff7f50'
    }
  },
  {
    displayName: 'Coffee Pot',
    name: 'coffee_pot',
    hexCodes: {
      '50': '#e7e2e2',
      '100': '#dbd4d4',
      '200': '#cfc5c5',
      '300': '#c3b7b7',
      '400': '#b7a9a9',
      '500': '#ab9a9a',
      '600': '#9f8c8c',
      '700': '#937d7d',
      '800': '#867070',
      '900': '#776464'
    }
  },
  {
    displayName: 'Electric Blue',
    name: 'electric_blue',
    hexCodes: {
      '50': '#befcff',
      '100': '#9efaff',
      '200': '#7df9ff',
      '300': '#5df7ff',
      '400': '#3cf5ff',
      '500': '#1cf4ff',
      '600': '#00eefa',
      '700': '#00cfda',
      '800': '#00b0b9',
      '900': '#009097'
    }
  },
  {
    displayName: 'Forest Green',
    name: 'forest_green',
    hexCodes: {
      '50': '#cef3ce',
      '100': '#b5edb5',
      '200': '#9ce79c',
      '300': '#84e184',
      '400': '#6bdb6b',
      '500': '#53d553',
      '600': '#3acf3a',
      '700': '#2ebd2e',
      '800': '#28a428',
      '900': '#228b22'
    }
  },
  {
    displayName: 'Freesia',
    name: 'freesia',
    hexCodes: {
      '50': '#fdf4d7',
      '100': '#fceec3',
      '200': '#fce8af',
      '300': '#fbe39b',
      '400': '#fadd87',
      '500': '#f9d873',
      '600': '#f8d25f',
      '700': '#f7cc4b',
      '800': '#f7c737',
      '900': '#f6c324'
    }
  },
  {
    displayName: 'Honeysuckle',
    name: 'honeysuckle',
    hexCodes: {
      '50': '#fbfbe5',
      '100': '#f9f9d8',
      '200': '#f8f7cb',
      '300': '#f6f5be',
      '400': '#f4f3b1',
      '500': '#f2f1a4',
      '600': '#f0ef97',
      '700': '#eeed8a',
      '800': '#eceb7d',
      '900': '#eae86f'
    }
  },
  {
    displayName: 'Khaki',
    name: 'khaki',
    hexCodes: {
      '50': '#f7f2c5',
      '100': '#f4eca8',
      '200': '#f0e68a',
      '300': '#ecdf6d',
      '400': '#e8d950',
      '500': '#e5d333',
      '600': '#dac71c',
      '700': '#bdad19',
      '800': '#a09215',
      '900': '#857a11'
    }
  },
  {
    displayName: 'Hot Pink',
    name: 'hot_pink',
    hexCodes: {
      '50': '#ffc3e1',
      '100': '#ffa5d2',
      '200': '#ff86c3',
      '300': '#ff68b4',
      '400': '#ff4aa5',
      '500': '#ff2c96',
      '600': '#ff0e86',
      '700': '#ef0077',
      '800': '#d10068',
      '900': '#b00058'
    }
  },
  {
    displayName: 'Maroon',
    name: 'Maroon',
    hexCodes: {
      '50': '#ffb9b9',
      '100': '#ff9797',
      '200': '#ff7474',
      '300': '#ff5151',
      '400': '#ff2e2e',
      '500': '#ff0c0c',
      '600': '#e80000',
      '700': '#c50000',
      '800': '#a20000',
      '900': '#800000'
    }
  }
].sort(dynamicSort('displayName'));

let allThemes = colors.map((color)=>{
  return {
    name: color.name,
    selectors: [`.${color.name}`],
    theme: {
      colors: {
        primary: color.hexCodes
      }
    }
  }
})

let baseTheme = {...allThemes[33]};
baseTheme.selectors = [':root'];
baseTheme.name = 'base'
export const themes = [...allThemes,baseTheme ]