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
    displayName: 'Red 2',
    name: 'red2',
    hexCodes: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
    }
  },
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
    displayName: 'Indigo 2',
    name: 'indigo2',
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
    displayName: 'Blue 2',
    name: 'blue2',
    hexCodes: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
    }
  },
  {
    displayName: 'Light Blue 2',
    name: 'light_blue',
    hexCodes: {
      50: "#E1F5FE",
      100: "#B3E5FC",
      200: "#81D4FA",
      300: "#4FC3F7",
      400: "#29B6F6",
      500: "#03A9F4",
      600: "#039BE5",
      700: "#0288D1",
      800: "#0277BD",
      900: "#01579B",
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
      50: "#F1F8E9",
      100: "#DCEDC8",
      200: "#C5E1A5",
      300: "#AED581",
      400: "#9CCC65",
      500: "#8BC34A",
      600: "#7CB342",
      700: "#689F38",
      800: "#558B2F",
      900: "#33691E",
    },
  },
  {
    displayName: 'Lime 2',
    name: 'lime2',
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
    displayName: 'Yellow 2',
    name: 'yellow2',
    hexCodes: {
      50: "#FFFDE7",
      100: "#FFF9C4",
      200: "#FFF59D",
      300: "#FFF176",
      400: "#FFEE58",
      500: "#FFEB3B",
      600: "#FDD835",
      700: "#FBC02D",
      800: "#F9A825",
      900: "#F57F17",
    },
  },
  {
    displayName: 'Amber 2',
    name: 'amber2',
    hexCodes: {
      50: "#FFF8E1",
      100: "#FFECB3",
      200: "#FFE082",
      300: "#FFD54F",
      400: "#FFCA28",
      500: "#FFC107",
      600: "#FFB300",
      700: "#FFA000",
      800: "#FF8F00",
      900: "#FF6F00",
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
    displayName: 'Grey 2',
    name: 'grey2',
    hexCodes: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  {
    displayName: 'Blue Grey 2',
    name: 'blue_grey',
    hexCodes: {
      50: "#ECEFF1",
      100: "#CFD8DC",
      200: "#B0BEC5",
      300: "#90A4AE",
      400: "#78909C",
      500: "#607D8B",
      600: "#546E7A",
      700: "#455A64",
      800: "#37474F",
      900: "#263238",
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
    displayName: 'Indigo',
    name: 'indigo',
    hexCodes: {
      '50': '#eef2ff',
      '100': '#e0e7ff',
      '200': '#c7d2fe',
      '300': '#a5b4fc',
      '400': '#818cf8',
      '500': '#6366f1',
      '600': '#4f46e5',
      '700': '#4338ca',
      '800': '#3730a3',
      '900': '#312e81'
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