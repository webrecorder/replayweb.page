/*! 'ui.js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-2024, Webrecorder Software. Licensed under the Affero General Public License v3.' */(()=>{var __webpack_modules__={495:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var o=i(314),r=i.n(o)()((function(e){return e[1]}));r.push([e.id,':root,\n:host,\n.sl-theme-light {\n  color-scheme: light;\n\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  --sl-font-serif: Georgia, "Times New Roman", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-color: var(--sl-color-primary-600);\n  --sl-focus-ring-style: solid;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)\n    var(--sl-focus-ring-color);\n  --sl-focus-ring-offset: 1px;\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n  --sl-input-required-content: "*";\n  --sl-input-required-content-offset: -2px;\n  --sl-input-required-content-color: var(--sl-input-label-color);\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);\n  --sl-input-focus-ring-offset: 0;\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size-small: 0.875rem;\n  --sl-toggle-size-medium: 1.125rem;\n  --sl-toggle-size-large: 1.375rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 6px;\n\n  --sl-z-index-drawer: 700;\n  --sl-z-index-dialog: 800;\n  --sl-z-index-dropdown: 900;\n  --sl-z-index-toast: 950;\n  --sl-z-index-tooltip: 1000;\n}\n\n@supports (scrollbar-gutter: stable) {\n  .sl-scroll-lock {\n    scrollbar-gutter: var(--sl-scroll-lock-gutter) !important;\n  }\n\n  .sl-scroll-lock body {\n    overflow: hidden !important;\n  }\n}\n\n@supports not (scrollbar-gutter: stable) {\n  .sl-scroll-lock body {\n    padding-right: var(--sl-scroll-lock-size) !important;\n    overflow: hidden !important;\n  }\n}\n\n.sl-toast-stack {\n  position: fixed;\n  top: 0;\n  inset-inline-end: 0;\n  z-index: var(--sl-z-index-toast);\n  width: 28rem;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.sl-toast-stack sl-alert {\n  margin: var(--sl-spacing-medium);\n}\n\n.sl-toast-stack sl-alert::part(base) {\n  box-shadow: var(--sl-shadow-large);\n}\n',""]);const n=r},989:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});var o=i(314),r=i.n(o),n=i(495),a=r()((function(e){return e[1]}));a.i(n.A),a.push([e.id,'.input::placeholder,.textarea::placeholder,.select select::placeholder{opacity:1}a:focus{color:#363636}.file-label:focus-within .file-cta{background-color:#e8e8e8;color:#363636}.button.is-primary:focus,.button.is-primary:hover,.button.is-primary:active{background-color:#459558 !important;color:#fff !important}.replay-bar .button{margin:0 1px}.replay-bar .button:focus{box-shadow:none !important;outline:1px dotted #4876ff;outline:-webkit-focus-ring-color auto 1px}.skip-link{border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.skip-link:focus{background-color:#000;border-radius:3px;box-shadow:0 0 2px 2px rgba(0,0,0,.6);clip:auto !important;clip-path:none;color:#fff;display:block;font-family:inherit;font-size:1.3em;font-weight:bold;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}.main-scroll{flex:1;scroll-behavior:smooth;overflow-y:auto;max-height:100vh;height:100%;display:flex;flex-direction:column;overflow-x:hidden}/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis,.file-cta,.file-name,.select select,.textarea,.input,.button{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.5em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.5em - 1px);padding-left:calc(.75em - 1px);padding-right:calc(.75em - 1px);padding-top:calc(.5em - 1px);position:relative;vertical-align:top}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus,.pagination-ellipsis:focus,.file-cta:focus,.file-name:focus,.select select:focus,.textarea:focus,.input:focus,.button:focus,.is-focused.pagination-previous,.is-focused.pagination-next,.is-focused.pagination-link,.is-focused.pagination-ellipsis,.is-focused.file-cta,.is-focused.file-name,.select select.is-focused,.is-focused.textarea,.is-focused.input,.is-focused.button,.pagination-previous:active,.pagination-next:active,.pagination-link:active,.pagination-ellipsis:active,.file-cta:active,.file-name:active,.select select:active,.textarea:active,.input:active,.button:active,.is-active.pagination-previous,.is-active.pagination-next,.is-active.pagination-link,.is-active.pagination-ellipsis,.is-active.file-cta,.is-active.file-name,.select select.is-active,.is-active.textarea,.is-active.input,.is-active.button{outline:none}[disabled].pagination-previous,[disabled].pagination-next,[disabled].pagination-link,[disabled].pagination-ellipsis,[disabled].file-cta,[disabled].file-name,.select select[disabled],[disabled].textarea,[disabled].input,[disabled].button,fieldset[disabled] .pagination-previous,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input,fieldset[disabled] .button{cursor:not-allowed}.is-unselectable,.tabs,.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis,.breadcrumb,.file,.button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless)::after,.select:not(.is-multiple):not(.is-loading)::after{border:3px solid rgba(0,0,0,0);border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:.625em}.tabs:not(:last-child),.pagination:not(:last-child),.message:not(:last-child),.level:not(:last-child),.breadcrumb:not(:last-child),.block:not(:last-child),.title:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.progress:not(:last-child),.notification:not(:last-child),.content:not(:last-child),.box:not(:last-child){margin-bottom:1.5rem}.modal-close,.delete{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:9999px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.modal-close::before,.delete::before,.modal-close::after,.delete::after{background-color:#fff;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.modal-close::before,.delete::before{height:2px;width:50%}.modal-close::after,.delete::after{height:50%;width:2px}.modal-close:hover,.delete:hover,.modal-close:focus,.delete:focus{background-color:rgba(10,10,10,.3)}.modal-close:active,.delete:active{background-color:rgba(10,10,10,.4)}.is-small.modal-close,.is-small.delete{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.modal-close,.is-medium.delete{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.modal-close,.is-large.delete{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.control.is-loading::after,.select.is-loading::after,.loader,.button.is-loading::after{animation:spinAround 500ms infinite linear;border:2px solid #dbdbdb;border-radius:9999px;border-right-color:rgba(0,0,0,0);border-top-color:rgba(0,0,0,0);content:"";display:block;height:1em;position:relative;width:1em}.hero-video,.is-overlay,.modal-background,.modal,.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio{bottom:0;left:0;position:absolute;right:0;top:0}.navbar-burger{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0}/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:inherit}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,optgroup,select,textarea{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#4876ff;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#da1039;font-size:.875em;font-weight:normal;padding:.25em .5em .25em}hr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:rgba(0,0,0,0);color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:inherit}table th{color:#363636}@keyframes spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.box{background-color:#fff;border-radius:6px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);color:#4a4a4a;display:block;padding:1.25rem}a.box:hover,a.box:focus{box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0 0 1px #4876ff}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #4876ff}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.5em - 1px);padding-left:1em;padding-right:1em;padding-top:calc(.5em - 1px);text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-small,.button .icon.is-medium,.button .icon.is-large{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-0.5em - 1px);margin-right:.25em}.button .icon:last-child:not(:first-child){margin-left:.25em;margin-right:calc(-0.5em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-0.5em - 1px);margin-right:calc(-0.5em - 1px)}.button:hover,.button.is-hovered{border-color:#b5b5b5;color:#363636}.button:focus,.button.is-focused{border-color:#485fc7;color:#363636}.button:focus:not(:active),.button.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.button:active,.button.is-active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:#4a4a4a;text-decoration:underline}.button.is-text:hover,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text.is-focused{background-color:#f5f5f5;color:#363636}.button.is-text:active,.button.is-text.is-active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);box-shadow:none}.button.is-ghost{background:none;border-color:rgba(0,0,0,0);color:#4876ff;text-decoration:none}.button.is-ghost:hover,.button.is-ghost.is-hovered{color:#4876ff;text-decoration:underline}.button.is-white{background-color:#fff;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:hover,.button.is-white.is-hovered{background-color:#f9f9f9;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:focus,.button.is-white.is-focused{border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:focus:not(:active),.button.is-white.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.button.is-white:active,.button.is-white.is-active{background-color:#f2f2f2;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover,.button.is-white.is-inverted.is-hovered{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:rgba(0,0,0,0);box-shadow:none;color:#fff}.button.is-white.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-white.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-white.is-outlined:hover,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined.is-focused{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-white.is-outlined.is-loading:hover::after,.button.is-white.is-outlined.is-loading.is-hovered::after,.button.is-white.is-outlined.is-loading:focus::after,.button.is-white.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:hover,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined.is-focused{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading:hover::after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-white.is-inverted.is-outlined.is-loading:focus::after,.button.is-white.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:rgba(0,0,0,0);color:#fff}.button.is-black:hover,.button.is-black.is-hovered{background-color:#040404;border-color:rgba(0,0,0,0);color:#fff}.button.is-black:focus,.button.is-black.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-black:focus:not(:active),.button.is-black.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black:active,.button.is-black.is-active{background-color:#000;border-color:rgba(0,0,0,0);color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover,.button.is-black.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#0a0a0a}.button.is-black.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-black.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:hover,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined.is-focused{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-black.is-outlined.is-loading:hover::after,.button.is-black.is-outlined.is-loading.is-hovered::after,.button.is-black.is-outlined.is-loading:focus::after,.button.is-black.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:hover,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined.is-focused{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading:hover::after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-black.is-inverted.is-outlined.is-loading:focus::after,.button.is-black.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#d2f9d6;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:hover,.button.is-light.is-hovered{background-color:#c7f8cc;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:focus,.button.is-light.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:focus:not(:active),.button.is-light.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.button.is-light:active,.button.is-light.is-active{background-color:#bcf6c2;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#d2f9d6;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-light.is-inverted{background-color:rgba(0,0,0,.7);color:#d2f9d6}.button.is-light.is-inverted:hover,.button.is-light.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#d2f9d6}.button.is-light.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-light.is-outlined{background-color:rgba(0,0,0,0);border-color:#d2f9d6;color:#d2f9d6}.button.is-light.is-outlined:hover,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined.is-focused{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,.7)}.button.is-light.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #d2f9d6 #d2f9d6 !important}.button.is-light.is-outlined.is-loading:hover::after,.button.is-light.is-outlined.is-loading.is-hovered::after,.button.is-light.is-outlined.is-loading:focus::after,.button.is-light.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:rgba(0,0,0,0);border-color:#d2f9d6;box-shadow:none;color:#d2f9d6}.button.is-light.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-light.is-inverted.is-outlined:hover,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#d2f9d6}.button.is-light.is-inverted.is-outlined.is-loading:hover::after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-light.is-inverted.is-outlined.is-loading:focus::after,.button.is-light.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #d2f9d6 #d2f9d6 !important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-dark{background-color:#459558;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:hover,.button.is-dark.is-hovered{background-color:#418c53;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:focus,.button.is-dark.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:focus:not(:active),.button.is-dark.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.button.is-dark:active,.button.is-dark.is-active{background-color:#3d844e;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#459558;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-dark.is-inverted{background-color:#fff;color:#459558}.button.is-dark.is-inverted:hover,.button.is-dark.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#459558}.button.is-dark.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-dark.is-outlined{background-color:rgba(0,0,0,0);border-color:#459558;color:#459558}.button.is-dark.is-outlined:hover,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined.is-focused{background-color:#459558;border-color:#459558;color:#fff}.button.is-dark.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #459558 #459558 !important}.button.is-dark.is-outlined.is-loading:hover::after,.button.is-dark.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-outlined.is-loading:focus::after,.button.is-dark.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:rgba(0,0,0,0);border-color:#459558;box-shadow:none;color:#459558}.button.is-dark.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-dark.is-inverted.is-outlined:hover,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined.is-focused{background-color:#fff;color:#459558}.button.is-dark.is-inverted.is-outlined.is-loading:hover::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-inverted.is-outlined.is-loading:focus::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #459558 #459558 !important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-primary{background-color:#55be6f;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:hover,.button.is-primary.is-hovered{background-color:#4cba67;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:focus,.button.is-primary.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:focus:not(:active),.button.is-primary.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.button.is-primary:active,.button.is-primary.is-active{background-color:#45b461;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#55be6f;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted:hover,.button.is-primary.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#55be6f}.button.is-primary.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-primary.is-outlined{background-color:rgba(0,0,0,0);border-color:#55be6f;color:#55be6f}.button.is-primary.is-outlined:hover,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined.is-focused{background-color:#55be6f;border-color:#55be6f;color:#fff}.button.is-primary.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #55be6f #55be6f !important}.button.is-primary.is-outlined.is-loading:hover::after,.button.is-primary.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-outlined.is-loading:focus::after,.button.is-primary.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:rgba(0,0,0,0);border-color:#55be6f;box-shadow:none;color:#55be6f}.button.is-primary.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:hover,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined.is-focused{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted.is-outlined.is-loading:hover::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-inverted.is-outlined.is-loading:focus::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #55be6f #55be6f !important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.button.is-primary.is-light:hover,.button.is-primary.is-light.is-hovered{background-color:#e7f6eb;border-color:rgba(0,0,0,0);color:#2f7a41}.button.is-primary.is-light:active,.button.is-primary.is-light.is-active{background-color:#def2e3;border-color:rgba(0,0,0,0);color:#2f7a41}.button.is-link{background-color:#4876ff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link:hover,.button.is-link.is-hovered{background-color:#3b6cff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link:focus,.button.is-link.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-link:focus:not(:active),.button.is-link.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.button.is-link:active,.button.is-link.is-active{background-color:#2f63ff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#4876ff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#4876ff}.button.is-link.is-inverted:hover,.button.is-link.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#4876ff}.button.is-link.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-link.is-outlined{background-color:rgba(0,0,0,0);border-color:#4876ff;color:#4876ff}.button.is-link.is-outlined:hover,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined.is-focused{background-color:#4876ff;border-color:#4876ff;color:#fff}.button.is-link.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #4876ff #4876ff !important}.button.is-link.is-outlined.is-loading:hover::after,.button.is-link.is-outlined.is-loading.is-hovered::after,.button.is-link.is-outlined.is-loading:focus::after,.button.is-link.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:rgba(0,0,0,0);border-color:#4876ff;box-shadow:none;color:#4876ff}.button.is-link.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:hover,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined.is-focused{background-color:#fff;color:#4876ff}.button.is-link.is-inverted.is-outlined.is-loading:hover::after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-link.is-inverted.is-outlined.is-loading:focus::after,.button.is-link.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #4876ff #4876ff !important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-link.is-light{background-color:#ebf0ff;color:#0037db}.button.is-link.is-light:hover,.button.is-link.is-light.is-hovered{background-color:#dee6ff;border-color:rgba(0,0,0,0);color:#0037db}.button.is-link.is-light:active,.button.is-link.is-light.is-active{background-color:#d1ddff;border-color:rgba(0,0,0,0);color:#0037db}.button.is-info{background-color:#f0f8ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:hover,.button.is-info.is-hovered{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:focus,.button.is-info.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:focus:not(:active),.button.is-info.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.button.is-info:active,.button.is-info.is-active{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#f0f8ff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-info.is-inverted{background-color:rgba(0,0,0,.7);color:#f0f8ff}.button.is-info.is-inverted:hover,.button.is-info.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#f0f8ff}.button.is-info.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-info.is-outlined{background-color:rgba(0,0,0,0);border-color:#f0f8ff;color:#f0f8ff}.button.is-info.is-outlined:hover,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined.is-focused{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,.7)}.button.is-info.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f0f8ff #f0f8ff !important}.button.is-info.is-outlined.is-loading:hover::after,.button.is-info.is-outlined.is-loading.is-hovered::after,.button.is-info.is-outlined.is-loading:focus::after,.button.is-info.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:rgba(0,0,0,0);border-color:#f0f8ff;box-shadow:none;color:#f0f8ff}.button.is-info.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-info.is-inverted.is-outlined:hover,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#f0f8ff}.button.is-info.is-inverted.is-outlined.is-loading:hover::after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-info.is-inverted.is-outlined.is-loading:focus::after,.button.is-info.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f0f8ff #f0f8ff !important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-info.is-light{background-color:#f0f8ff;color:#004f94}.button.is-info.is-light:hover,.button.is-info.is-light.is-hovered{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:#004f94}.button.is-info.is-light:active,.button.is-info.is-light.is-active{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:#004f94}.button.is-success{background-color:#48c78e;border-color:rgba(0,0,0,0);color:#fff}.button.is-success:hover,.button.is-success.is-hovered{background-color:#3ec487;border-color:rgba(0,0,0,0);color:#fff}.button.is-success:focus,.button.is-success.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-success:focus:not(:active),.button.is-success.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.button.is-success:active,.button.is-success.is-active{background-color:#3abb81;border-color:rgba(0,0,0,0);color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#48c78e;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#48c78e}.button.is-success.is-inverted:hover,.button.is-success.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#48c78e}.button.is-success.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-success.is-outlined{background-color:rgba(0,0,0,0);border-color:#48c78e;color:#48c78e}.button.is-success.is-outlined:hover,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined.is-focused{background-color:#48c78e;border-color:#48c78e;color:#fff}.button.is-success.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important}.button.is-success.is-outlined.is-loading:hover::after,.button.is-success.is-outlined.is-loading.is-hovered::after,.button.is-success.is-outlined.is-loading:focus::after,.button.is-success.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:rgba(0,0,0,0);border-color:#48c78e;box-shadow:none;color:#48c78e}.button.is-success.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:hover,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined.is-focused{background-color:#fff;color:#48c78e}.button.is-success.is-inverted.is-outlined.is-loading:hover::after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-success.is-inverted.is-outlined.is-loading:focus::after,.button.is-success.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-success.is-light{background-color:#effaf5;color:#257953}.button.is-success.is-light:hover,.button.is-success.is-light.is-hovered{background-color:#e6f7ef;border-color:rgba(0,0,0,0);color:#257953}.button.is-success.is-light:active,.button.is-success.is-light.is-active{background-color:#dcf4e9;border-color:rgba(0,0,0,0);color:#257953}.button.is-warning{background-color:#ffd975;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:hover,.button.is-warning.is-hovered{background-color:#ffd568;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:focus,.button.is-warning.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:focus:not(:active),.button.is-warning.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.button.is-warning:active,.button.is-warning.is-active{background-color:#ffd25c;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffd975;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);color:#ffd975}.button.is-warning.is-inverted:hover,.button.is-warning.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#ffd975}.button.is-warning.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-warning.is-outlined{background-color:rgba(0,0,0,0);border-color:#ffd975;color:#ffd975}.button.is-warning.is-outlined:hover,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined.is-focused{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffd975 #ffd975 !important}.button.is-warning.is-outlined.is-loading:hover::after,.button.is-warning.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-outlined.is-loading:focus::after,.button.is-warning.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:rgba(0,0,0,0);border-color:#ffd975;box-shadow:none;color:#ffd975}.button.is-warning.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:hover,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#ffd975}.button.is-warning.is-inverted.is-outlined.is-loading:hover::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-inverted.is-outlined.is-loading:focus::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffd975 #ffd975 !important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-warning.is-light{background-color:#fff9eb;color:#946b00}.button.is-warning.is-light:hover,.button.is-warning.is-light.is-hovered{background-color:#fff6de;border-color:rgba(0,0,0,0);color:#946b00}.button.is-warning.is-light:active,.button.is-warning.is-light.is-active{background-color:#fff2d1;border-color:rgba(0,0,0,0);color:#946b00}.button.is-danger{background-color:#f14668;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:hover,.button.is-danger.is-hovered{background-color:#f03a5f;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:focus,.button.is-danger.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:focus:not(:active),.button.is-danger.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.button.is-danger:active,.button.is-danger.is-active{background-color:#ef2e55;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#f14668;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#f14668}.button.is-danger.is-inverted:hover,.button.is-danger.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#f14668}.button.is-danger.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-danger.is-outlined{background-color:rgba(0,0,0,0);border-color:#f14668;color:#f14668}.button.is-danger.is-outlined:hover,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined.is-focused{background-color:#f14668;border-color:#f14668;color:#fff}.button.is-danger.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important}.button.is-danger.is-outlined.is-loading:hover::after,.button.is-danger.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-outlined.is-loading:focus::after,.button.is-danger.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:rgba(0,0,0,0);border-color:#f14668;box-shadow:none;color:#f14668}.button.is-danger.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:hover,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined.is-focused{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-outlined.is-loading:hover::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-inverted.is-outlined.is-loading:focus::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.button.is-danger.is-light:hover,.button.is-danger.is-light.is-hovered{background-color:#fde0e6;border-color:rgba(0,0,0,0);color:#cc0f35}.button.is-danger.is-light:active,.button.is-danger.is-light.is-active{background-color:#fcd4dc;border-color:rgba(0,0,0,0);color:#cc0f35}.button.is-small{font-size:.75rem}.button.is-small:not(.is-rounded){border-radius:2px}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:rgba(0,0,0,0) !important;pointer-events:none}.button.is-loading::after{position:absolute;left:calc(50% - 1em*.5);top:calc(50% - 1em*.5);position:absolute !important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:9999px;padding-left:calc(1em + .25em);padding-right:calc(1em + .25em)}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-0.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){font-size:.75rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded){border-radius:2px}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button:hover,.buttons.has-addons .button.is-hovered{z-index:2}.buttons.has-addons .button:focus,.buttons.has-addons .button.is-focused,.buttons.has-addons .button:active,.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-selected{z-index:3}.buttons.has-addons .button:focus:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-selected:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1;flex-shrink:1}.buttons.is-centered{justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none !important;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width: 1024px){.container{max-width:960px}}@media screen and (max-width: 1215px){.container.is-widescreen:not(.is-max-desktop){max-width:1152px}}@media screen and (max-width: 1407px){.container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}@media screen and (min-width: 1216px){.container:not(.is-max-desktop){max-width:1152px}}@media screen and (min-width: 1408px){.container:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}.content li+li{margin-top:.25em}.content p:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content ul:not(:last-child),.content blockquote:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sup,.content sub{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:inherit}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-normal{font-size:1rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.icon-text{align-items:flex-start;color:inherit;display:inline-flex;flex-wrap:wrap;line-height:1.5rem;vertical-align:top}.icon-text .icon{flex-grow:0;flex-shrink:0}.icon-text .icon:not(:last-child){margin-right:.25em}.icon-text .icon:not(:first-child){margin-left:.25em}div.icon-text{display:flex}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:9999px}.image.is-fullwidth{width:100%}.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio{height:100%;width:100%}.image.is-square,.image.is-1by1{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;position:relative;padding:1.25rem 2.5rem 1.25rem 1.5rem}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:rgba(0,0,0,0)}.notification>.delete{right:.5rem;position:absolute;top:.5rem}.notification .title,.notification .subtitle,.notification .content{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.notification.is-dark{background-color:#459558;color:#fff}.notification.is-primary{background-color:#55be6f;color:#fff}.notification.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.notification.is-link{background-color:#4876ff;color:#fff}.notification.is-link.is-light{background-color:#ebf0ff;color:#0037db}.notification.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.notification.is-info.is-light{background-color:#f0f8ff;color:#004f94}.notification.is-success{background-color:#48c78e;color:#fff}.notification.is-success.is-light{background-color:#effaf5;color:#257953}.notification.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.notification.is-warning.is-light{background-color:#fff9eb;color:#946b00}.notification.is-danger{background-color:#f14668;color:#fff}.notification.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:9999px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#ededed}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(to right, hsl(0, 0%, 100%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(to right, hsl(0, 0%, 4%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-light::-webkit-progress-value{background-color:#d2f9d6}.progress.is-light::-moz-progress-bar{background-color:#d2f9d6}.progress.is-light::-ms-fill{background-color:#d2f9d6}.progress.is-light:indeterminate{background-image:linear-gradient(to right, #d2f9d6 30%, hsl(0, 0%, 93%) 30%)}.progress.is-dark::-webkit-progress-value{background-color:#459558}.progress.is-dark::-moz-progress-bar{background-color:#459558}.progress.is-dark::-ms-fill{background-color:#459558}.progress.is-dark:indeterminate{background-image:linear-gradient(to right, #459558 30%, hsl(0, 0%, 93%) 30%)}.progress.is-primary::-webkit-progress-value{background-color:#55be6f}.progress.is-primary::-moz-progress-bar{background-color:#55be6f}.progress.is-primary::-ms-fill{background-color:#55be6f}.progress.is-primary:indeterminate{background-image:linear-gradient(to right, #55be6f 30%, hsl(0, 0%, 93%) 30%)}.progress.is-link::-webkit-progress-value{background-color:#4876ff}.progress.is-link::-moz-progress-bar{background-color:#4876ff}.progress.is-link::-ms-fill{background-color:#4876ff}.progress.is-link:indeterminate{background-image:linear-gradient(to right, #4876ff 30%, hsl(0, 0%, 93%) 30%)}.progress.is-info::-webkit-progress-value{background-color:#f0f8ff}.progress.is-info::-moz-progress-bar{background-color:#f0f8ff}.progress.is-info::-ms-fill{background-color:#f0f8ff}.progress.is-info:indeterminate{background-image:linear-gradient(to right, #f0f8ff 30%, hsl(0, 0%, 93%) 30%)}.progress.is-success::-webkit-progress-value{background-color:#48c78e}.progress.is-success::-moz-progress-bar{background-color:#48c78e}.progress.is-success::-ms-fill{background-color:#48c78e}.progress.is-success:indeterminate{background-image:linear-gradient(to right, hsl(153, 53%, 53%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-warning::-webkit-progress-value{background-color:#ffd975}.progress.is-warning::-moz-progress-bar{background-color:#ffd975}.progress.is-warning::-ms-fill{background-color:#ffd975}.progress.is-warning:indeterminate{background-image:linear-gradient(to right, #ffd975 30%, hsl(0, 0%, 93%) 30%)}.progress.is-danger::-webkit-progress-value{background-color:#f14668}.progress.is-danger::-moz-progress-bar{background-color:#f14668}.progress.is-danger::-ms-fill{background-color:#f14668}.progress.is-danger:indeterminate{background-image:linear-gradient(to right, hsl(348, 86%, 61%) 30%, hsl(0, 0%, 93%) 30%)}.progress:indeterminate{animation-duration:1.5s;animation-iteration-count:infinite;animation-name:moveIndeterminate;animation-timing-function:linear;background-color:#ededed;background-image:linear-gradient(to right, hsl(0, 0%, 29%) 30%, hsl(0, 0%, 93%) 30%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:rgba(0,0,0,0)}.progress:indeterminate::-moz-progress-bar{background-color:rgba(0,0,0,0)}.progress:indeterminate::-ms-fill{animation-name:none}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@keyframes moveIndeterminate{from{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,.7)}.table td.is-dark,.table th.is-dark{background-color:#459558;border-color:#459558;color:#fff}.table td.is-primary,.table th.is-primary{background-color:#55be6f;border-color:#55be6f;color:#fff}.table td.is-link,.table th.is-link{background-color:#4876ff;border-color:#4876ff;color:#fff}.table td.is-info,.table th.is-info{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,.7)}.table td.is-success,.table th.is-success{background-color:#48c78e;border-color:#48c78e;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#f14668;border-color:#f14668;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#55be6f;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:#363636}.table th:not([align]){text-align:inherit}.table tr.is-selected{background-color:#55be6f;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:rgba(0,0,0,0)}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:rgba(0,0,0,0)}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:rgba(0,0,0,0)}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-0.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.tag:not(body).is-dark{background-color:#459558;color:#fff}.tag:not(body).is-primary{background-color:#55be6f;color:#fff}.tag:not(body).is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.tag:not(body).is-link{background-color:#4876ff;color:#fff}.tag:not(body).is-link.is-light{background-color:#ebf0ff;color:#0037db}.tag:not(body).is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.tag:not(body).is-info.is-light{background-color:#f0f8ff;color:#004f94}.tag:not(body).is-success{background-color:#48c78e;color:#fff}.tag:not(body).is-success.is-light{background-color:#effaf5;color:#257953}.tag:not(body).is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.tag:not(body).is-warning.is-light{background-color:#fff9eb;color:#946b00}.tag:not(body).is-danger{background-color:#f14668;color:#fff}.tag:not(body).is-danger.is-light{background-color:#feecf0;color:#cc0f35}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-0.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-0.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-0.375em;margin-right:-0.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::before,.tag:not(body).is-delete::after{background-color:currentColor;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:hover,.tag:not(body).is-delete:focus{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:9999px}a.tag:hover{text-decoration:underline}.title,.subtitle{word-break:break-word}.title em,.title span,.subtitle em,.subtitle span{font-weight:inherit}.title sub,.subtitle sub{font-size:.75em}.title sup,.subtitle sup{font-size:.75em}.title .tag,.subtitle .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.number{align-items:center;background-color:#f5f5f5;border-radius:9999px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.select select,.textarea,.input{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.select select::-moz-placeholder,.textarea::-moz-placeholder,.input::-moz-placeholder{color:#757575}.select select::-webkit-input-placeholder,.textarea::-webkit-input-placeholder,.input::-webkit-input-placeholder{color:#757575}.select select:-moz-placeholder,.textarea:-moz-placeholder,.input:-moz-placeholder{color:#757575}.select select:-ms-input-placeholder,.textarea:-ms-input-placeholder,.input:-ms-input-placeholder{color:#757575}.select select:hover,.textarea:hover,.input:hover,.select select.is-hovered,.is-hovered.textarea,.is-hovered.input{border-color:#b5b5b5}.select select:focus,.textarea:focus,.input:focus,.select select.is-focused,.is-focused.textarea,.is-focused.input,.select select:active,.textarea:active,.input:active,.select select.is-active,.is-active.textarea,.is-active.input{border-color:#4876ff;box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder,[disabled].textarea::-moz-placeholder,[disabled].input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder{color:#707070}.select select[disabled]::-webkit-input-placeholder,[disabled].textarea::-webkit-input-placeholder,[disabled].input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder{color:#707070}.select select[disabled]:-moz-placeholder,[disabled].textarea:-moz-placeholder,[disabled].input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder{color:#707070}.select select[disabled]:-ms-input-placeholder,[disabled].textarea:-ms-input-placeholder,[disabled].input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder{color:#707070}.textarea,.input{box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);max-width:100%;width:100%}[readonly].textarea,[readonly].input{box-shadow:none}.is-white.textarea,.is-white.input{border-color:#fff}.is-white.textarea:focus,.is-white.input:focus,.is-white.is-focused.textarea,.is-white.is-focused.input,.is-white.textarea:active,.is-white.input:active,.is-white.is-active.textarea,.is-white.is-active.input{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.is-black.textarea,.is-black.input{border-color:#0a0a0a}.is-black.textarea:focus,.is-black.input:focus,.is-black.is-focused.textarea,.is-black.is-focused.input,.is-black.textarea:active,.is-black.input:active,.is-black.is-active.textarea,.is-black.is-active.input{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.textarea,.is-light.input{border-color:#d2f9d6}.is-light.textarea:focus,.is-light.input:focus,.is-light.is-focused.textarea,.is-light.is-focused.input,.is-light.textarea:active,.is-light.input:active,.is-light.is-active.textarea,.is-light.is-active.input{box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.is-dark.textarea,.is-dark.input{border-color:#459558}.is-dark.textarea:focus,.is-dark.input:focus,.is-dark.is-focused.textarea,.is-dark.is-focused.input,.is-dark.textarea:active,.is-dark.input:active,.is-dark.is-active.textarea,.is-dark.is-active.input{box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.is-primary.textarea,.is-primary.input{border-color:#55be6f}.is-primary.textarea:focus,.is-primary.input:focus,.is-primary.is-focused.textarea,.is-primary.is-focused.input,.is-primary.textarea:active,.is-primary.input:active,.is-primary.is-active.textarea,.is-primary.is-active.input{box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.is-link.textarea,.is-link.input{border-color:#4876ff}.is-link.textarea:focus,.is-link.input:focus,.is-link.is-focused.textarea,.is-link.is-focused.input,.is-link.textarea:active,.is-link.input:active,.is-link.is-active.textarea,.is-link.is-active.input{box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.is-info.textarea,.is-info.input{border-color:#f0f8ff}.is-info.textarea:focus,.is-info.input:focus,.is-info.is-focused.textarea,.is-info.is-focused.input,.is-info.textarea:active,.is-info.input:active,.is-info.is-active.textarea,.is-info.is-active.input{box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.is-success.textarea,.is-success.input{border-color:#48c78e}.is-success.textarea:focus,.is-success.input:focus,.is-success.is-focused.textarea,.is-success.is-focused.input,.is-success.textarea:active,.is-success.input:active,.is-success.is-active.textarea,.is-success.is-active.input{box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.is-warning.textarea,.is-warning.input{border-color:#ffd975}.is-warning.textarea:focus,.is-warning.input:focus,.is-warning.is-focused.textarea,.is-warning.is-focused.input,.is-warning.textarea:active,.is-warning.input:active,.is-warning.is-active.textarea,.is-warning.is-active.input{box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.is-danger.textarea,.is-danger.input{border-color:#f14668}.is-danger.textarea:focus,.is-danger.input:focus,.is-danger.is-focused.textarea,.is-danger.is-focused.input,.is-danger.textarea:active,.is-danger.input:active,.is-danger.is-active.textarea,.is-danger.is-active.input{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.is-small.textarea,.is-small.input{border-radius:2px;font-size:.75rem}.is-medium.textarea,.is-medium.input{font-size:1.25rem}.is-large.textarea,.is-large.input{font-size:1.5rem}.is-fullwidth.textarea,.is-fullwidth.input{display:block;width:100%}.is-inline.textarea,.is-inline.input{display:inline;width:auto}.input.is-rounded{border-radius:9999px;padding-left:calc(calc(0.75em - 1px) + .375em);padding-right:calc(calc(0.75em - 1px) + .375em)}.input.is-static{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.radio,.checkbox{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.radio input,.checkbox input{cursor:pointer}.radio:hover,.checkbox:hover{color:#363636}[disabled].radio,[disabled].checkbox,fieldset[disabled] .radio,fieldset[disabled] .checkbox,.radio input[disabled],.checkbox input[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#4876ff;right:1.125em;z-index:4}.select.is-rounded select{border-radius:9999px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}.select.is-white:not(:hover)::after{border-color:#fff}.select.is-white select{border-color:#fff}.select.is-white select:hover,.select.is-white select.is-hovered{border-color:#f2f2f2}.select.is-white select:focus,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select.is-active{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.select.is-black:not(:hover)::after{border-color:#0a0a0a}.select.is-black select{border-color:#0a0a0a}.select.is-black select:hover,.select.is-black select.is-hovered{border-color:#000}.select.is-black select:focus,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select.is-active{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover)::after{border-color:#d2f9d6}.select.is-light select{border-color:#d2f9d6}.select.is-light select:hover,.select.is-light select.is-hovered{border-color:#bcf6c2}.select.is-light select:focus,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select.is-active{box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.select.is-dark:not(:hover)::after{border-color:#459558}.select.is-dark select{border-color:#459558}.select.is-dark select:hover,.select.is-dark select.is-hovered{border-color:#3d844e}.select.is-dark select:focus,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select.is-active{box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.select.is-primary:not(:hover)::after{border-color:#55be6f}.select.is-primary select{border-color:#55be6f}.select.is-primary select:hover,.select.is-primary select.is-hovered{border-color:#45b461}.select.is-primary select:focus,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select.is-active{box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.select.is-link:not(:hover)::after{border-color:#4876ff}.select.is-link select{border-color:#4876ff}.select.is-link select:hover,.select.is-link select.is-hovered{border-color:#2f63ff}.select.is-link select:focus,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select.is-active{box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.select.is-info:not(:hover)::after{border-color:#f0f8ff}.select.is-info select{border-color:#f0f8ff}.select.is-info select:hover,.select.is-info select.is-hovered{border-color:#d7ecff}.select.is-info select:focus,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select.is-active{box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.select.is-success:not(:hover)::after{border-color:#48c78e}.select.is-success select{border-color:#48c78e}.select.is-success select:hover,.select.is-success select.is-hovered{border-color:#3abb81}.select.is-success select:focus,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select.is-active{box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.select.is-warning:not(:hover)::after{border-color:#ffd975}.select.is-warning select{border-color:#ffd975}.select.is-warning select:hover,.select.is-warning select.is-hovered{border-color:#ffd25c}.select.is-warning select:focus,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select.is-active{box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.select.is-danger:not(:hover)::after{border-color:#f14668}.select.is-danger select{border-color:#f14668}.select.is-danger select:hover,.select.is-danger select.is-hovered{border-color:#ef2e55}.select.is-danger select:focus,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select.is-active{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled::after{border-color:#7a7a7a}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:.625em;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(255,255,255,.25);color:#0a0a0a}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:rgba(0,0,0,0);color:#fff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#040404;border-color:rgba(0,0,0,0);color:#fff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#000;border-color:rgba(0,0,0,0);color:#fff}.file.is-light .file-cta{background-color:#d2f9d6;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#c7f8cc;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(210,249,214,.25);color:rgba(0,0,0,.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#bcf6c2;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-dark .file-cta{background-color:#459558;border-color:rgba(0,0,0,0);color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#418c53;border-color:rgba(0,0,0,0);color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(69,149,88,.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#3d844e;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary .file-cta{background-color:#55be6f;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#4cba67;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(85,190,111,.25);color:#fff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#45b461;border-color:rgba(0,0,0,0);color:#fff}.file.is-link .file-cta{background-color:#4876ff;border-color:rgba(0,0,0,0);color:#fff}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#3b6cff;border-color:rgba(0,0,0,0);color:#fff}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(72,118,255,.25);color:#fff}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#2f63ff;border-color:rgba(0,0,0,0);color:#fff}.file.is-info .file-cta{background-color:#f0f8ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(240,248,255,.25);color:rgba(0,0,0,.7)}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-success .file-cta{background-color:#48c78e;border-color:rgba(0,0,0,0);color:#fff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#3ec487;border-color:rgba(0,0,0,0);color:#fff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(72,199,142,.25);color:#fff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#3abb81;border-color:rgba(0,0,0,0);color:#fff}.file.is-warning .file-cta{background-color:#ffd975;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#ffd568;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(255,217,117,.25);color:rgba(0,0,0,.7)}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#ffd25c;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#f14668;border-color:rgba(0,0,0,0);color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#f03a5f;border-color:rgba(0,0,0,0);color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(241,70,104,.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ef2e55;border-color:rgba(0,0,0,0);color:#fff}.file.is-small{font-size:.75rem}.file.is-normal{font-size:1rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#d2f9d6}.help.is-dark{color:#459558}.help.is-primary{color:#55be6f}.help.is-link{color:#4876ff}.help.is-info{color:#f0f8ff}.help.is-success{color:#48c78e}.help.is-warning{color:#ffd975}.help.is-danger{color:#f14668}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered{z-index:2}.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]).is-active{z-index:3}.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-0.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width: 769px),print{.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width: 768px){.field-label{margin-bottom:.5rem}}@media screen and (min-width: 769px),print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width: 769px),print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#4a4a4a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute !important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#4876ff;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#b5b5b5;content:"/"}.breadcrumb ul,.breadcrumb ol{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li::before{content:"→"}.breadcrumb.has-bullet-separator li+li::before{content:"•"}.breadcrumb.has-dot-separator li+li::before{content:"·"}.breadcrumb.has-succeeds-separator li+li::before{content:"≻"}.card{background-color:#fff;border-radius:.25rem;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);color:#4a4a4a;max-width:100%;position:relative}.card-footer:first-child,.card-content:first-child,.card-header:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-footer:last-child,.card-content:last-child,.card-header:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-header{background-color:rgba(0,0,0,0);align-items:stretch;box-shadow:0 .125em .25em rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem 1rem}.card-header-title.is-centered{justify-content:center}.card-header-icon{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0;align-items:center;cursor:pointer;display:flex;justify-content:center;padding:.75rem 1rem}.card-image{display:block;position:relative}.card-image:first-child img{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-image:last-child img{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-content{background-color:rgba(0,0,0,0);padding:1.5rem}.card-footer{background-color:rgba(0,0,0,0);border-top:1px solid #ededed;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ededed}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#4876ff;color:#fff}.dropdown-divider{background-color:#ededed;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile{display:flex}.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media screen and (min-width: 769px),print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .title,.level-item .subtitle{margin-bottom:0}@media screen and (max-width: 768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media screen and (min-width: 769px),print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width: 768px){.level-left+.level-right{margin-top:1.5rem}}@media screen and (min-width: 769px),print{.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media screen and (min-width: 769px),print{.level-right{display:flex}}.media{align-items:flex-start;display:flex;text-align:inherit}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:inherit}@media screen and (max-width: 768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#4876ff;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a}.message.is-light{background-color:#f6fef7}.message.is-light .message-header{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.message.is-light .message-body{border-color:#d2f9d6}.message.is-dark{background-color:#f8fcf9}.message.is-dark .message-header{background-color:#459558;color:#fff}.message.is-dark .message-body{border-color:#459558}.message.is-primary{background-color:#f0f9f2}.message.is-primary .message-header{background-color:#55be6f;color:#fff}.message.is-primary .message-body{border-color:#55be6f;color:#2f7a41}.message.is-link{background-color:#ebf0ff}.message.is-link .message-header{background-color:#4876ff;color:#fff}.message.is-link .message-body{border-color:#4876ff;color:#0037db}.message.is-info{background-color:#f0f8ff}.message.is-info .message-header{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.message.is-info .message-body{border-color:#f0f8ff;color:#004f94}.message.is-success{background-color:#effaf5}.message.is-success .message-header{background-color:#48c78e;color:#fff}.message.is-success .message-body{border-color:#48c78e;color:#257953}.message.is-warning{background-color:#fff9eb}.message.is-warning .message-header{background-color:#ffd975;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffd975;color:#946b00}.message.is-danger{background-color:#feecf0}.message.is-danger .message-header{background-color:#f14668;color:#fff}.message.is-danger .message-body{border-color:#f14668;color:#cc0f35}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:rgba(0,0,0,0)}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-content,.modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px){.modal-content,.modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-head,.modal-card-foot{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.2rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:2rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand>.navbar-item,.navbar.is-white .navbar-brand .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width: 840px){.navbar.is-white .navbar-start>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-end .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-start .navbar-link::after,.navbar.is-white .navbar-end .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand>.navbar-item,.navbar.is-black .navbar-brand .navbar-link{color:#fff}.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-black .navbar-start>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-end .navbar-link{color:#fff}.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-start .navbar-link::after,.navbar.is-black .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand>.navbar-item,.navbar.is-light .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-light .navbar-start>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-start .navbar-link::after,.navbar.is-light .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#d2f9d6;color:rgba(0,0,0,.7)}}.navbar.is-dark{background-color:#459558;color:#fff}.navbar.is-dark .navbar-brand>.navbar-item,.navbar.is-dark .navbar-brand .navbar-link{color:#fff}.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-dark .navbar-start>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-end .navbar-link{color:#fff}.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-start .navbar-link::after,.navbar.is-dark .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#459558;color:#fff}}.navbar.is-primary{background-color:#55be6f;color:#fff}.navbar.is-primary .navbar-brand>.navbar-item,.navbar.is-primary .navbar-brand .navbar-link{color:#fff}.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-primary .navbar-start>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-end .navbar-link{color:#fff}.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-start .navbar-link::after,.navbar.is-primary .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#55be6f;color:#fff}}.navbar.is-link{background-color:#4876ff;color:#fff}.navbar.is-link .navbar-brand>.navbar-item,.navbar.is-link .navbar-brand .navbar-link{color:#fff}.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-link .navbar-start>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-end .navbar-link{color:#fff}.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-start .navbar-link::after,.navbar.is-link .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#4876ff;color:#fff}}.navbar.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand>.navbar-item,.navbar.is-info .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-info .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-info .navbar-start>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-start .navbar-link::after,.navbar.is-info .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#f0f8ff;color:rgba(0,0,0,.7)}}.navbar.is-success{background-color:#48c78e;color:#fff}.navbar.is-success .navbar-brand>.navbar-item,.navbar.is-success .navbar-brand .navbar-link{color:#fff}.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-success .navbar-start>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-end .navbar-link{color:#fff}.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-start .navbar-link::after,.navbar.is-success .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#48c78e;color:#fff}}.navbar.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand>.navbar-item,.navbar.is-warning .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-warning .navbar-start>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-start .navbar-link::after,.navbar.is-warning .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffd975;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#f14668;color:#fff}.navbar.is-danger .navbar-brand>.navbar-item,.navbar.is-danger .navbar-brand .navbar-link{color:#fff}.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-danger .navbar-start>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-end .navbar-link{color:#fff}.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-start .navbar-link::after,.navbar.is-danger .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#f14668;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:2rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}html.has-navbar-fixed-top,body.has-navbar-fixed-top{padding-top:2rem}html.has-navbar-fixed-bottom,body.has-navbar-fixed-bottom{padding-bottom:2rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:2rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:rgba(0,0,0,0)}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:2rem;position:relative;width:2rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:nth-child(1){transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-0.25rem;margin-right:-0.25rem}a.navbar-item,.navbar-link{cursor:pointer}a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover,a.navbar-item.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,.navbar-link.is-active{background-color:#fafafa;color:#4876ff}.navbar-item{flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid rgba(0,0,0,0);min-height:2rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff}.navbar-item.is-tab.is-active{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff;border-bottom-style:solid;border-bottom-width:3px;color:#4876ff;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless)::after{border-color:#4876ff;margin-top:-0.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width: 839px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 2rem);overflow:auto}html.has-navbar-fixed-top-touch,body.has-navbar-fixed-top-touch{padding-top:2rem}html.has-navbar-fixed-bottom-touch,body.has-navbar-fixed-bottom-touch{padding-bottom:2rem}}@media screen and (min-width: 840px){.navbar,.navbar-menu,.navbar-start,.navbar-end{align-items:stretch;display:flex}.navbar{min-height:2rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-start,.navbar.is-spaced .navbar-end{align-items:center}.navbar.is-spaced a.navbar-item,.navbar.is-spaced .navbar-link{border-radius:4px}.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent .navbar-link.is-active{background-color:rgba(0,0,0,0) !important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:rgba(0,0,0,0) !important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{transform:rotate(135deg) translate(0.25em, -0.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar.is-spaced .navbar-dropdown,.navbar-dropdown.is-boxed{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.navbar>.container .navbar-brand,.container>.navbar .navbar-brand{margin-left:-0.75rem}.navbar>.container .navbar-menu,.container>.navbar .navbar-menu{margin-right:-0.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}html.has-navbar-fixed-top-desktop,body.has-navbar-fixed-top-desktop{padding-top:2rem}html.has-navbar-fixed-bottom-desktop,body.has-navbar-fixed-bottom-desktop{padding-bottom:2rem}html.has-spaced-navbar-fixed-top,body.has-spaced-navbar-fixed-top{padding-top:4rem}html.has-spaced-navbar-fixed-bottom,body.has-spaced-navbar-fixed-bottom{padding-bottom:4rem}a.navbar-item.is-active,.navbar-link.is-active{color:#0a0a0a}a.navbar-item.is-active:not(:focus):not(:hover),.navbar-link.is-active:not(:focus):not(:hover){background-color:rgba(0,0,0,0)}.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link,.navbar-item.has-dropdown.is-active .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 2rem)}.pagination{font-size:1rem;margin:-0.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-previous,.pagination.is-rounded .pagination-next{padding-left:1em;padding-right:1em;border-radius:9999px}.pagination.is-rounded .pagination-link{border-radius:9999px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{font-size:1em;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-previous,.pagination-next,.pagination-link{border-color:#dbdbdb;color:#363636;min-width:2.5em}.pagination-previous:hover,.pagination-next:hover,.pagination-link:hover{border-color:#b5b5b5;color:#363636}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus{border-color:#485fc7}.pagination-previous:active,.pagination-next:active,.pagination-link:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-previous,.pagination-next{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#4876ff;border-color:#4876ff;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}.pagination-list li{list-style:none}@media screen and (max-width: 768px){.pagination{flex-wrap:wrap}.pagination-previous,.pagination-next{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}@media screen and (min-width: 769px),print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{margin-bottom:0;margin-top:0}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between;margin-bottom:0;margin-top:0}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{border-radius:6px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel.is-white .panel-heading{background-color:#fff;color:#0a0a0a}.panel.is-white .panel-tabs a.is-active{border-bottom-color:#fff}.panel.is-white .panel-block.is-active .panel-icon{color:#fff}.panel.is-black .panel-heading{background-color:#0a0a0a;color:#fff}.panel.is-black .panel-tabs a.is-active{border-bottom-color:#0a0a0a}.panel.is-black .panel-block.is-active .panel-icon{color:#0a0a0a}.panel.is-light .panel-heading{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.panel.is-light .panel-tabs a.is-active{border-bottom-color:#d2f9d6}.panel.is-light .panel-block.is-active .panel-icon{color:#d2f9d6}.panel.is-dark .panel-heading{background-color:#459558;color:#fff}.panel.is-dark .panel-tabs a.is-active{border-bottom-color:#459558}.panel.is-dark .panel-block.is-active .panel-icon{color:#459558}.panel.is-primary .panel-heading{background-color:#55be6f;color:#fff}.panel.is-primary .panel-tabs a.is-active{border-bottom-color:#55be6f}.panel.is-primary .panel-block.is-active .panel-icon{color:#55be6f}.panel.is-link .panel-heading{background-color:#4876ff;color:#fff}.panel.is-link .panel-tabs a.is-active{border-bottom-color:#4876ff}.panel.is-link .panel-block.is-active .panel-icon{color:#4876ff}.panel.is-info .panel-heading{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.panel.is-info .panel-tabs a.is-active{border-bottom-color:#f0f8ff}.panel.is-info .panel-block.is-active .panel-icon{color:#f0f8ff}.panel.is-success .panel-heading{background-color:#48c78e;color:#fff}.panel.is-success .panel-tabs a.is-active{border-bottom-color:#48c78e}.panel.is-success .panel-block.is-active .panel-icon{color:#48c78e}.panel.is-warning .panel-heading{background-color:#ffd975;color:rgba(0,0,0,.7)}.panel.is-warning .panel-tabs a.is-active{border-bottom-color:#ffd975}.panel.is-warning .panel-block.is-active .panel-icon{color:#ffd975}.panel.is-danger .panel-heading{background-color:#f14668;color:#fff}.panel.is-danger .panel-tabs a.is-active{border-bottom-color:#f14668}.panel.is-danger .panel-block.is-active .panel-icon{color:#f14668}.panel-tabs:not(:last-child),.panel-block:not(:last-child){border-bottom:1px solid #ededed}.panel-heading{background-color:#ededed;border-radius:6px 6px 0 0;color:#363636;font-size:1.25em;font-weight:700;line-height:1.25;padding:.75em 1em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#4876ff}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#4876ff;color:#363636}.panel-block.is-active .panel-icon{color:#4876ff}.panel-block:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#4876ff;color:#4876ff}.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em;padding-right:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid rgba(0,0,0,0);border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:rgba(0,0,0,0) !important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#4876ff;border-color:#4876ff;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:9999px;border-top-left-radius:9999px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:9999px;border-top-right-radius:9999px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none;width:unset}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{flex:none;width:0%}.columns.is-mobile>.column.is-offset-0{margin-left:0%}.columns.is-mobile>.column.is-1{flex:none;width:8.33333337%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333337%}.columns.is-mobile>.column.is-2{flex:none;width:16.66666674%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66666674%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333337%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333337%}.columns.is-mobile>.column.is-5{flex:none;width:41.66666674%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66666674%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333337%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333337%}.columns.is-mobile>.column.is-8{flex:none;width:66.66666674%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66666674%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333337%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333337%}.columns.is-mobile>.column.is-11{flex:none;width:91.66666674%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66666674%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width: 768px){.column.is-narrow-mobile{flex:none;width:unset}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{flex:none;width:0%}.column.is-offset-0-mobile{margin-left:0%}.column.is-1-mobile{flex:none;width:8.33333337%}.column.is-offset-1-mobile{margin-left:8.33333337%}.column.is-2-mobile{flex:none;width:16.66666674%}.column.is-offset-2-mobile{margin-left:16.66666674%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333337%}.column.is-offset-4-mobile{margin-left:33.33333337%}.column.is-5-mobile{flex:none;width:41.66666674%}.column.is-offset-5-mobile{margin-left:41.66666674%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333337%}.column.is-offset-7-mobile{margin-left:58.33333337%}.column.is-8-mobile{flex:none;width:66.66666674%}.column.is-offset-8-mobile{margin-left:66.66666674%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333337%}.column.is-offset-10-mobile{margin-left:83.33333337%}.column.is-11-mobile{flex:none;width:91.66666674%}.column.is-offset-11-mobile{margin-left:91.66666674%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media screen and (min-width: 769px),print{.column.is-narrow,.column.is-narrow-tablet{flex:none;width:unset}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{flex:none;width:0%}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333337%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333337%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66666674%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66666674%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333337%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333337%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66666674%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66666674%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333337%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333337%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66666674%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66666674%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333337%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333337%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66666674%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66666674%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width: 1023px){.column.is-narrow-touch{flex:none;width:unset}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{flex:none;width:0%}.column.is-offset-0-touch{margin-left:0%}.column.is-1-touch{flex:none;width:8.33333337%}.column.is-offset-1-touch{margin-left:8.33333337%}.column.is-2-touch{flex:none;width:16.66666674%}.column.is-offset-2-touch{margin-left:16.66666674%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333337%}.column.is-offset-4-touch{margin-left:33.33333337%}.column.is-5-touch{flex:none;width:41.66666674%}.column.is-offset-5-touch{margin-left:41.66666674%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333337%}.column.is-offset-7-touch{margin-left:58.33333337%}.column.is-8-touch{flex:none;width:66.66666674%}.column.is-offset-8-touch{margin-left:66.66666674%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333337%}.column.is-offset-10-touch{margin-left:83.33333337%}.column.is-11-touch{flex:none;width:91.66666674%}.column.is-offset-11-touch{margin-left:91.66666674%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width: 1024px){.column.is-narrow-desktop{flex:none;width:unset}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{flex:none;width:0%}.column.is-offset-0-desktop{margin-left:0%}.column.is-1-desktop{flex:none;width:8.33333337%}.column.is-offset-1-desktop{margin-left:8.33333337%}.column.is-2-desktop{flex:none;width:16.66666674%}.column.is-offset-2-desktop{margin-left:16.66666674%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333337%}.column.is-offset-4-desktop{margin-left:33.33333337%}.column.is-5-desktop{flex:none;width:41.66666674%}.column.is-offset-5-desktop{margin-left:41.66666674%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333337%}.column.is-offset-7-desktop{margin-left:58.33333337%}.column.is-8-desktop{flex:none;width:66.66666674%}.column.is-offset-8-desktop{margin-left:66.66666674%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333337%}.column.is-offset-10-desktop{margin-left:83.33333337%}.column.is-11-desktop{flex:none;width:91.66666674%}.column.is-offset-11-desktop{margin-left:91.66666674%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width: 1216px){.column.is-narrow-widescreen{flex:none;width:unset}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{flex:none;width:0%}.column.is-offset-0-widescreen{margin-left:0%}.column.is-1-widescreen{flex:none;width:8.33333337%}.column.is-offset-1-widescreen{margin-left:8.33333337%}.column.is-2-widescreen{flex:none;width:16.66666674%}.column.is-offset-2-widescreen{margin-left:16.66666674%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333337%}.column.is-offset-4-widescreen{margin-left:33.33333337%}.column.is-5-widescreen{flex:none;width:41.66666674%}.column.is-offset-5-widescreen{margin-left:41.66666674%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333337%}.column.is-offset-7-widescreen{margin-left:58.33333337%}.column.is-8-widescreen{flex:none;width:66.66666674%}.column.is-offset-8-widescreen{margin-left:66.66666674%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333337%}.column.is-offset-10-widescreen{margin-left:83.33333337%}.column.is-11-widescreen{flex:none;width:91.66666674%}.column.is-offset-11-widescreen{margin-left:91.66666674%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width: 1408px){.column.is-narrow-fullhd{flex:none;width:unset}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{flex:none;width:0%}.column.is-offset-0-fullhd{margin-left:0%}.column.is-1-fullhd{flex:none;width:8.33333337%}.column.is-offset-1-fullhd{margin-left:8.33333337%}.column.is-2-fullhd{flex:none;width:16.66666674%}.column.is-offset-2-fullhd{margin-left:16.66666674%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333337%}.column.is-offset-4-fullhd{margin-left:33.33333337%}.column.is-5-fullhd{flex:none;width:41.66666674%}.column.is-offset-5-fullhd{margin-left:41.66666674%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333337%}.column.is-offset-7-fullhd{margin-left:58.33333337%}.column.is-8-fullhd{flex:none;width:66.66666674%}.column.is-offset-8-fullhd{margin-left:66.66666674%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333337%}.column.is-offset-10-fullhd{margin-left:83.33333337%}.column.is-11-fullhd{flex:none;width:91.66666674%}.column.is-offset-11-fullhd{margin-left:91.66666674%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem}.columns:last-child{margin-bottom:-0.75rem}.columns:not(:last-child){margin-bottom:calc(1.5rem - 0.75rem)}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0 !important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media screen and (min-width: 769px),print{.columns:not(.is-desktop){display:flex}}@media screen and (min-width: 1024px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap: 0.75rem;margin-left:calc(-1*var(--columnGap));margin-right:calc(-1*var(--columnGap))}.columns.is-variable>.column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap: 0rem}@media screen and (max-width: 768px){.columns.is-variable.is-0-mobile{--columnGap: 0rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-0-tablet{--columnGap: 0rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-0-tablet-only{--columnGap: 0rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-0-touch{--columnGap: 0rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-0-desktop{--columnGap: 0rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-0-desktop-only{--columnGap: 0rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-0-widescreen{--columnGap: 0rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-0-widescreen-only{--columnGap: 0rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-0-fullhd{--columnGap: 0rem}}.columns.is-variable.is-1{--columnGap: 0.25rem}@media screen and (max-width: 768px){.columns.is-variable.is-1-mobile{--columnGap: 0.25rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-1-tablet{--columnGap: 0.25rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-1-tablet-only{--columnGap: 0.25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-1-touch{--columnGap: 0.25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-1-desktop{--columnGap: 0.25rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-1-desktop-only{--columnGap: 0.25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-1-widescreen{--columnGap: 0.25rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-1-widescreen-only{--columnGap: 0.25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-1-fullhd{--columnGap: 0.25rem}}.columns.is-variable.is-2{--columnGap: 0.5rem}@media screen and (max-width: 768px){.columns.is-variable.is-2-mobile{--columnGap: 0.5rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-2-tablet{--columnGap: 0.5rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-2-tablet-only{--columnGap: 0.5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-2-touch{--columnGap: 0.5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-2-desktop{--columnGap: 0.5rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-2-desktop-only{--columnGap: 0.5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-2-widescreen{--columnGap: 0.5rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-2-widescreen-only{--columnGap: 0.5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-2-fullhd{--columnGap: 0.5rem}}.columns.is-variable.is-3{--columnGap: 0.75rem}@media screen and (max-width: 768px){.columns.is-variable.is-3-mobile{--columnGap: 0.75rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-3-tablet{--columnGap: 0.75rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-3-tablet-only{--columnGap: 0.75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-3-touch{--columnGap: 0.75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-3-desktop{--columnGap: 0.75rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-3-desktop-only{--columnGap: 0.75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-3-widescreen{--columnGap: 0.75rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-3-widescreen-only{--columnGap: 0.75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-3-fullhd{--columnGap: 0.75rem}}.columns.is-variable.is-4{--columnGap: 1rem}@media screen and (max-width: 768px){.columns.is-variable.is-4-mobile{--columnGap: 1rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-4-tablet{--columnGap: 1rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-4-tablet-only{--columnGap: 1rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-4-touch{--columnGap: 1rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-4-desktop{--columnGap: 1rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-4-desktop-only{--columnGap: 1rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-4-widescreen{--columnGap: 1rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-4-widescreen-only{--columnGap: 1rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-4-fullhd{--columnGap: 1rem}}.columns.is-variable.is-5{--columnGap: 1.25rem}@media screen and (max-width: 768px){.columns.is-variable.is-5-mobile{--columnGap: 1.25rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-5-tablet{--columnGap: 1.25rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-5-tablet-only{--columnGap: 1.25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-5-touch{--columnGap: 1.25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-5-desktop{--columnGap: 1.25rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-5-desktop-only{--columnGap: 1.25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-5-widescreen{--columnGap: 1.25rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-5-widescreen-only{--columnGap: 1.25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-5-fullhd{--columnGap: 1.25rem}}.columns.is-variable.is-6{--columnGap: 1.5rem}@media screen and (max-width: 768px){.columns.is-variable.is-6-mobile{--columnGap: 1.5rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-6-tablet{--columnGap: 1.5rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-6-tablet-only{--columnGap: 1.5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-6-touch{--columnGap: 1.5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-6-desktop{--columnGap: 1.5rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-6-desktop-only{--columnGap: 1.5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-6-widescreen{--columnGap: 1.5rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-6-widescreen-only{--columnGap: 1.5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-6-fullhd{--columnGap: 1.5rem}}.columns.is-variable.is-7{--columnGap: 1.75rem}@media screen and (max-width: 768px){.columns.is-variable.is-7-mobile{--columnGap: 1.75rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-7-tablet{--columnGap: 1.75rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-7-tablet-only{--columnGap: 1.75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-7-touch{--columnGap: 1.75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-7-desktop{--columnGap: 1.75rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-7-desktop-only{--columnGap: 1.75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-7-widescreen{--columnGap: 1.75rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-7-widescreen-only{--columnGap: 1.75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-7-fullhd{--columnGap: 1.75rem}}.columns.is-variable.is-8{--columnGap: 2rem}@media screen and (max-width: 768px){.columns.is-variable.is-8-mobile{--columnGap: 2rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-8-tablet{--columnGap: 2rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-8-tablet-only{--columnGap: 2rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-8-touch{--columnGap: 2rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-8-desktop{--columnGap: 2rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-8-desktop-only{--columnGap: 2rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-8-widescreen{--columnGap: 2rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-8-widescreen-only{--columnGap: 2rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-8-fullhd{--columnGap: 2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:min-content}.tile.is-ancestor{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem}.tile.is-ancestor:last-child{margin-bottom:-0.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0 !important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem !important}@media screen and (min-width: 769px),print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333337%}.tile.is-2{flex:none;width:16.66666674%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333337%}.tile.is-5{flex:none;width:41.66666674%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333337%}.tile.is-8{flex:none;width:66.66666674%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333337%}.tile.is-11{flex:none;width:91.66666674%}.tile.is-12{flex:none;width:100%}}.has-text-white{color:#fff !important}a.has-text-white:hover,a.has-text-white:focus{color:#e6e6e6 !important}.has-background-white{background-color:#fff !important}.has-text-black{color:#0a0a0a !important}a.has-text-black:hover,a.has-text-black:focus{color:#000 !important}.has-background-black{background-color:#0a0a0a !important}.has-text-light{color:#d2f9d6 !important}a.has-text-light:hover,a.has-text-light:focus{color:#a5f3ad !important}.has-background-light{background-color:#d2f9d6 !important}.has-text-dark{color:#459558 !important}a.has-text-dark:hover,a.has-text-dark:focus{color:#357243 !important}.has-background-dark{background-color:#459558 !important}.has-text-primary{color:#55be6f !important}a.has-text-primary:hover,a.has-text-primary:focus{color:#3ea257 !important}.has-background-primary{background-color:#55be6f !important}.has-text-primary-light{color:#f0f9f2 !important}a.has-text-primary-light:hover,a.has-text-primary-light:focus{color:#cbebd3 !important}.has-background-primary-light{background-color:#f0f9f2 !important}.has-text-primary-dark{color:#2f7a41 !important}a.has-text-primary-dark:hover,a.has-text-primary-dark:focus{color:#3d9f55 !important}.has-background-primary-dark{background-color:#2f7a41 !important}.has-text-link{color:#4876ff !important}a.has-text-link:hover,a.has-text-link:focus{color:#1550ff !important}.has-background-link{background-color:#4876ff !important}.has-text-link-light{color:#ebf0ff !important}a.has-text-link-light:hover,a.has-text-link-light:focus{color:#b8caff !important}.has-background-link-light{background-color:#ebf0ff !important}.has-text-link-dark{color:#0037db !important}a.has-text-link-dark:hover,a.has-text-link-dark:focus{color:#0f4cff !important}.has-background-link-dark{background-color:#0037db !important}.has-text-info{color:#f0f8ff !important}a.has-text-info:hover,a.has-text-info:focus{color:#bde0ff !important}.has-background-info{background-color:#f0f8ff !important}.has-text-info-light{color:#f0f8ff !important}a.has-text-info-light:hover,a.has-text-info-light:focus{color:#bde0ff !important}.has-background-info-light{background-color:#f0f8ff !important}.has-text-info-dark{color:#004f94 !important}a.has-text-info-dark:hover,a.has-text-info-dark:focus{color:#006ac7 !important}.has-background-info-dark{background-color:#004f94 !important}.has-text-success{color:#48c78e !important}a.has-text-success:hover,a.has-text-success:focus{color:#34a873 !important}.has-background-success{background-color:#48c78e !important}.has-text-success-light{color:#effaf5 !important}a.has-text-success-light:hover,a.has-text-success-light:focus{color:#c8eedd !important}.has-background-success-light{background-color:#effaf5 !important}.has-text-success-dark{color:#257953 !important}a.has-text-success-dark:hover,a.has-text-success-dark:focus{color:#31a06e !important}.has-background-success-dark{background-color:#257953 !important}.has-text-warning{color:#ffd975 !important}a.has-text-warning:hover,a.has-text-warning:focus{color:#ffcb42 !important}.has-background-warning{background-color:#ffd975 !important}.has-text-warning-light{color:#fff9eb !important}a.has-text-warning-light:hover,a.has-text-warning-light:focus{color:#ffebb8 !important}.has-background-warning-light{background-color:#fff9eb !important}.has-text-warning-dark{color:#946b00 !important}a.has-text-warning-dark:hover,a.has-text-warning-dark:focus{color:#c79000 !important}.has-background-warning-dark{background-color:#946b00 !important}.has-text-danger{color:#f14668 !important}a.has-text-danger:hover,a.has-text-danger:focus{color:#ee1742 !important}.has-background-danger{background-color:#f14668 !important}.has-text-danger-light{color:#feecf0 !important}a.has-text-danger-light:hover,a.has-text-danger-light:focus{color:#fabdc9 !important}.has-background-danger-light{background-color:#feecf0 !important}.has-text-danger-dark{color:#cc0f35 !important}a.has-text-danger-dark:hover,a.has-text-danger-dark:focus{color:#ee2049 !important}.has-background-danger-dark{background-color:#cc0f35 !important}.has-text-black-bis{color:#121212 !important}.has-background-black-bis{background-color:#121212 !important}.has-text-black-ter{color:#242424 !important}.has-background-black-ter{background-color:#242424 !important}.has-text-grey-darker{color:#363636 !important}.has-background-grey-darker{background-color:#363636 !important}.has-text-grey-dark{color:#4a4a4a !important}.has-background-grey-dark{background-color:#4a4a4a !important}.has-text-grey{color:#7a7a7a !important}.has-background-grey{background-color:#7a7a7a !important}.has-text-grey-light{color:#b5b5b5 !important}.has-background-grey-light{background-color:#b5b5b5 !important}.has-text-grey-lighter{color:#dbdbdb !important}.has-background-grey-lighter{background-color:#dbdbdb !important}.has-text-white-ter{color:#f5f5f5 !important}.has-background-white-ter{background-color:#f5f5f5 !important}.has-text-white-bis{color:#fafafa !important}.has-background-white-bis{background-color:#fafafa !important}.is-flex-direction-row{flex-direction:row !important}.is-flex-direction-row-reverse{flex-direction:row-reverse !important}.is-flex-direction-column{flex-direction:column !important}.is-flex-direction-column-reverse{flex-direction:column-reverse !important}.is-flex-wrap-nowrap{flex-wrap:nowrap !important}.is-flex-wrap-wrap{flex-wrap:wrap !important}.is-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse !important}.is-justify-content-flex-start{justify-content:flex-start !important}.is-justify-content-flex-end{justify-content:flex-end !important}.is-justify-content-center{justify-content:center !important}.is-justify-content-space-between{justify-content:space-between !important}.is-justify-content-space-around{justify-content:space-around !important}.is-justify-content-space-evenly{justify-content:space-evenly !important}.is-justify-content-start{justify-content:start !important}.is-justify-content-end{justify-content:end !important}.is-justify-content-left{justify-content:left !important}.is-justify-content-right{justify-content:right !important}.is-align-content-flex-start{align-content:flex-start !important}.is-align-content-flex-end{align-content:flex-end !important}.is-align-content-center{align-content:center !important}.is-align-content-space-between{align-content:space-between !important}.is-align-content-space-around{align-content:space-around !important}.is-align-content-space-evenly{align-content:space-evenly !important}.is-align-content-stretch{align-content:stretch !important}.is-align-content-start{align-content:start !important}.is-align-content-end{align-content:end !important}.is-align-content-baseline{align-content:baseline !important}.is-align-items-stretch{align-items:stretch !important}.is-align-items-flex-start{align-items:flex-start !important}.is-align-items-flex-end{align-items:flex-end !important}.is-align-items-center{align-items:center !important}.is-align-items-baseline{align-items:baseline !important}.is-align-items-start{align-items:start !important}.is-align-items-end{align-items:end !important}.is-align-items-self-start{align-items:self-start !important}.is-align-items-self-end{align-items:self-end !important}.is-align-self-auto{align-self:auto !important}.is-align-self-flex-start{align-self:flex-start !important}.is-align-self-flex-end{align-self:flex-end !important}.is-align-self-center{align-self:center !important}.is-align-self-baseline{align-self:baseline !important}.is-align-self-stretch{align-self:stretch !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}.is-flex-shrink-0{flex-shrink:0 !important}.is-flex-shrink-1{flex-shrink:1 !important}.is-flex-shrink-2{flex-shrink:2 !important}.is-flex-shrink-3{flex-shrink:3 !important}.is-flex-shrink-4{flex-shrink:4 !important}.is-flex-shrink-5{flex-shrink:5 !important}.is-clearfix::after{clear:both;content:" ";display:table}.is-pulled-left{float:left !important}.is-pulled-right{float:right !important}.is-radiusless{border-radius:0 !important}.is-shadowless{box-shadow:none !important}.is-clickable{cursor:pointer !important;pointer-events:all !important}.is-clipped{overflow:hidden !important}.is-relative{position:relative !important}.is-marginless{margin:0 !important}.is-paddingless{padding:0 !important}.m-0{margin:0 !important}.mt-0{margin-top:0 !important}.mr-0{margin-right:0 !important}.mb-0{margin-bottom:0 !important}.ml-0{margin-left:0 !important}.mx-0{margin-left:0 !important;margin-right:0 !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.m-1{margin:.25rem !important}.mt-1{margin-top:.25rem !important}.mr-1{margin-right:.25rem !important}.mb-1{margin-bottom:.25rem !important}.ml-1{margin-left:.25rem !important}.mx-1{margin-left:.25rem !important;margin-right:.25rem !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.m-2{margin:.5rem !important}.mt-2{margin-top:.5rem !important}.mr-2{margin-right:.5rem !important}.mb-2{margin-bottom:.5rem !important}.ml-2{margin-left:.5rem !important}.mx-2{margin-left:.5rem !important;margin-right:.5rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.m-3{margin:.75rem !important}.mt-3{margin-top:.75rem !important}.mr-3{margin-right:.75rem !important}.mb-3{margin-bottom:.75rem !important}.ml-3{margin-left:.75rem !important}.mx-3{margin-left:.75rem !important;margin-right:.75rem !important}.my-3{margin-top:.75rem !important;margin-bottom:.75rem !important}.m-4{margin:1rem !important}.mt-4{margin-top:1rem !important}.mr-4{margin-right:1rem !important}.mb-4{margin-bottom:1rem !important}.ml-4{margin-left:1rem !important}.mx-4{margin-left:1rem !important;margin-right:1rem !important}.my-4{margin-top:1rem !important;margin-bottom:1rem !important}.m-5{margin:1.5rem !important}.mt-5{margin-top:1.5rem !important}.mr-5{margin-right:1.5rem !important}.mb-5{margin-bottom:1.5rem !important}.ml-5{margin-left:1.5rem !important}.mx-5{margin-left:1.5rem !important;margin-right:1.5rem !important}.my-5{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.m-6{margin:3rem !important}.mt-6{margin-top:3rem !important}.mr-6{margin-right:3rem !important}.mb-6{margin-bottom:3rem !important}.ml-6{margin-left:3rem !important}.mx-6{margin-left:3rem !important;margin-right:3rem !important}.my-6{margin-top:3rem !important;margin-bottom:3rem !important}.m-auto{margin:auto !important}.mt-auto{margin-top:auto !important}.mr-auto{margin-right:auto !important}.mb-auto{margin-bottom:auto !important}.ml-auto{margin-left:auto !important}.mx-auto{margin-left:auto !important;margin-right:auto !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.p-0{padding:0 !important}.pt-0{padding-top:0 !important}.pr-0{padding-right:0 !important}.pb-0{padding-bottom:0 !important}.pl-0{padding-left:0 !important}.px-0{padding-left:0 !important;padding-right:0 !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.p-1{padding:.25rem !important}.pt-1{padding-top:.25rem !important}.pr-1{padding-right:.25rem !important}.pb-1{padding-bottom:.25rem !important}.pl-1{padding-left:.25rem !important}.px-1{padding-left:.25rem !important;padding-right:.25rem !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.p-2{padding:.5rem !important}.pt-2{padding-top:.5rem !important}.pr-2{padding-right:.5rem !important}.pb-2{padding-bottom:.5rem !important}.pl-2{padding-left:.5rem !important}.px-2{padding-left:.5rem !important;padding-right:.5rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.p-3{padding:.75rem !important}.pt-3{padding-top:.75rem !important}.pr-3{padding-right:.75rem !important}.pb-3{padding-bottom:.75rem !important}.pl-3{padding-left:.75rem !important}.px-3{padding-left:.75rem !important;padding-right:.75rem !important}.py-3{padding-top:.75rem !important;padding-bottom:.75rem !important}.p-4{padding:1rem !important}.pt-4{padding-top:1rem !important}.pr-4{padding-right:1rem !important}.pb-4{padding-bottom:1rem !important}.pl-4{padding-left:1rem !important}.px-4{padding-left:1rem !important;padding-right:1rem !important}.py-4{padding-top:1rem !important;padding-bottom:1rem !important}.p-5{padding:1.5rem !important}.pt-5{padding-top:1.5rem !important}.pr-5{padding-right:1.5rem !important}.pb-5{padding-bottom:1.5rem !important}.pl-5{padding-left:1.5rem !important}.px-5{padding-left:1.5rem !important;padding-right:1.5rem !important}.py-5{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.p-6{padding:3rem !important}.pt-6{padding-top:3rem !important}.pr-6{padding-right:3rem !important}.pb-6{padding-bottom:3rem !important}.pl-6{padding-left:3rem !important}.px-6{padding-left:3rem !important;padding-right:3rem !important}.py-6{padding-top:3rem !important;padding-bottom:3rem !important}.p-auto{padding:auto !important}.pt-auto{padding-top:auto !important}.pr-auto{padding-right:auto !important}.pb-auto{padding-bottom:auto !important}.pl-auto{padding-left:auto !important}.px-auto{padding-left:auto !important;padding-right:auto !important}.py-auto{padding-top:auto !important;padding-bottom:auto !important}.is-size-1{font-size:3rem !important}.is-size-2{font-size:2.5rem !important}.is-size-3{font-size:2rem !important}.is-size-4{font-size:1.5rem !important}.is-size-5{font-size:1.25rem !important}.is-size-6{font-size:1rem !important}.is-size-7{font-size:.75rem !important}@media screen and (max-width: 768px){.is-size-1-mobile{font-size:3rem !important}.is-size-2-mobile{font-size:2.5rem !important}.is-size-3-mobile{font-size:2rem !important}.is-size-4-mobile{font-size:1.5rem !important}.is-size-5-mobile{font-size:1.25rem !important}.is-size-6-mobile{font-size:1rem !important}.is-size-7-mobile{font-size:.75rem !important}}@media screen and (min-width: 769px),print{.is-size-1-tablet{font-size:3rem !important}.is-size-2-tablet{font-size:2.5rem !important}.is-size-3-tablet{font-size:2rem !important}.is-size-4-tablet{font-size:1.5rem !important}.is-size-5-tablet{font-size:1.25rem !important}.is-size-6-tablet{font-size:1rem !important}.is-size-7-tablet{font-size:.75rem !important}}@media screen and (max-width: 1023px){.is-size-1-touch{font-size:3rem !important}.is-size-2-touch{font-size:2.5rem !important}.is-size-3-touch{font-size:2rem !important}.is-size-4-touch{font-size:1.5rem !important}.is-size-5-touch{font-size:1.25rem !important}.is-size-6-touch{font-size:1rem !important}.is-size-7-touch{font-size:.75rem !important}}@media screen and (min-width: 1024px){.is-size-1-desktop{font-size:3rem !important}.is-size-2-desktop{font-size:2.5rem !important}.is-size-3-desktop{font-size:2rem !important}.is-size-4-desktop{font-size:1.5rem !important}.is-size-5-desktop{font-size:1.25rem !important}.is-size-6-desktop{font-size:1rem !important}.is-size-7-desktop{font-size:.75rem !important}}@media screen and (min-width: 1216px){.is-size-1-widescreen{font-size:3rem !important}.is-size-2-widescreen{font-size:2.5rem !important}.is-size-3-widescreen{font-size:2rem !important}.is-size-4-widescreen{font-size:1.5rem !important}.is-size-5-widescreen{font-size:1.25rem !important}.is-size-6-widescreen{font-size:1rem !important}.is-size-7-widescreen{font-size:.75rem !important}}@media screen and (min-width: 1408px){.is-size-1-fullhd{font-size:3rem !important}.is-size-2-fullhd{font-size:2.5rem !important}.is-size-3-fullhd{font-size:2rem !important}.is-size-4-fullhd{font-size:1.5rem !important}.is-size-5-fullhd{font-size:1.25rem !important}.is-size-6-fullhd{font-size:1rem !important}.is-size-7-fullhd{font-size:.75rem !important}}.has-text-centered{text-align:center !important}.has-text-justified{text-align:justify !important}.has-text-left{text-align:left !important}.has-text-right{text-align:right !important}@media screen and (max-width: 768px){.has-text-centered-mobile{text-align:center !important}}@media screen and (min-width: 769px),print{.has-text-centered-tablet{text-align:center !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-centered-tablet-only{text-align:center !important}}@media screen and (max-width: 1023px){.has-text-centered-touch{text-align:center !important}}@media screen and (min-width: 1024px){.has-text-centered-desktop{text-align:center !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-centered-desktop-only{text-align:center !important}}@media screen and (min-width: 1216px){.has-text-centered-widescreen{text-align:center !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-centered-widescreen-only{text-align:center !important}}@media screen and (min-width: 1408px){.has-text-centered-fullhd{text-align:center !important}}@media screen and (max-width: 768px){.has-text-justified-mobile{text-align:justify !important}}@media screen and (min-width: 769px),print{.has-text-justified-tablet{text-align:justify !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-justified-tablet-only{text-align:justify !important}}@media screen and (max-width: 1023px){.has-text-justified-touch{text-align:justify !important}}@media screen and (min-width: 1024px){.has-text-justified-desktop{text-align:justify !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-justified-desktop-only{text-align:justify !important}}@media screen and (min-width: 1216px){.has-text-justified-widescreen{text-align:justify !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-justified-widescreen-only{text-align:justify !important}}@media screen and (min-width: 1408px){.has-text-justified-fullhd{text-align:justify !important}}@media screen and (max-width: 768px){.has-text-left-mobile{text-align:left !important}}@media screen and (min-width: 769px),print{.has-text-left-tablet{text-align:left !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-left-tablet-only{text-align:left !important}}@media screen and (max-width: 1023px){.has-text-left-touch{text-align:left !important}}@media screen and (min-width: 1024px){.has-text-left-desktop{text-align:left !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-left-desktop-only{text-align:left !important}}@media screen and (min-width: 1216px){.has-text-left-widescreen{text-align:left !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-left-widescreen-only{text-align:left !important}}@media screen and (min-width: 1408px){.has-text-left-fullhd{text-align:left !important}}@media screen and (max-width: 768px){.has-text-right-mobile{text-align:right !important}}@media screen and (min-width: 769px),print{.has-text-right-tablet{text-align:right !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-right-tablet-only{text-align:right !important}}@media screen and (max-width: 1023px){.has-text-right-touch{text-align:right !important}}@media screen and (min-width: 1024px){.has-text-right-desktop{text-align:right !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-right-desktop-only{text-align:right !important}}@media screen and (min-width: 1216px){.has-text-right-widescreen{text-align:right !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-right-widescreen-only{text-align:right !important}}@media screen and (min-width: 1408px){.has-text-right-fullhd{text-align:right !important}}.is-capitalized{text-transform:capitalize !important}.is-lowercase{text-transform:lowercase !important}.is-uppercase{text-transform:uppercase !important}.is-italic{font-style:italic !important}.is-underlined{text-decoration:underline !important}.has-text-weight-light{font-weight:300 !important}.has-text-weight-normal{font-weight:400 !important}.has-text-weight-medium{font-weight:500 !important}.has-text-weight-semibold{font-weight:600 !important}.has-text-weight-bold{font-weight:700 !important}.is-family-primary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-sans-serif{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-monospace{font-family:monospace !important}.is-family-code{font-family:monospace !important}.is-block{display:block !important}@media screen and (max-width: 768px){.is-block-mobile{display:block !important}}@media screen and (min-width: 769px),print{.is-block-tablet{display:block !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-block-tablet-only{display:block !important}}@media screen and (max-width: 1023px){.is-block-touch{display:block !important}}@media screen and (min-width: 1024px){.is-block-desktop{display:block !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-block-desktop-only{display:block !important}}@media screen and (min-width: 1216px){.is-block-widescreen{display:block !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-block-widescreen-only{display:block !important}}@media screen and (min-width: 1408px){.is-block-fullhd{display:block !important}}.is-flex{display:flex !important}@media screen and (max-width: 768px){.is-flex-mobile{display:flex !important}}@media screen and (min-width: 769px),print{.is-flex-tablet{display:flex !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-flex-tablet-only{display:flex !important}}@media screen and (max-width: 1023px){.is-flex-touch{display:flex !important}}@media screen and (min-width: 1024px){.is-flex-desktop{display:flex !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-flex-desktop-only{display:flex !important}}@media screen and (min-width: 1216px){.is-flex-widescreen{display:flex !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-flex-widescreen-only{display:flex !important}}@media screen and (min-width: 1408px){.is-flex-fullhd{display:flex !important}}.is-inline{display:inline !important}@media screen and (max-width: 768px){.is-inline-mobile{display:inline !important}}@media screen and (min-width: 769px),print{.is-inline-tablet{display:inline !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-tablet-only{display:inline !important}}@media screen and (max-width: 1023px){.is-inline-touch{display:inline !important}}@media screen and (min-width: 1024px){.is-inline-desktop{display:inline !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-desktop-only{display:inline !important}}@media screen and (min-width: 1216px){.is-inline-widescreen{display:inline !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-widescreen-only{display:inline !important}}@media screen and (min-width: 1408px){.is-inline-fullhd{display:inline !important}}.is-inline-block{display:inline-block !important}@media screen and (max-width: 768px){.is-inline-block-mobile{display:inline-block !important}}@media screen and (min-width: 769px),print{.is-inline-block-tablet{display:inline-block !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-block-tablet-only{display:inline-block !important}}@media screen and (max-width: 1023px){.is-inline-block-touch{display:inline-block !important}}@media screen and (min-width: 1024px){.is-inline-block-desktop{display:inline-block !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-block-desktop-only{display:inline-block !important}}@media screen and (min-width: 1216px){.is-inline-block-widescreen{display:inline-block !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-block-widescreen-only{display:inline-block !important}}@media screen and (min-width: 1408px){.is-inline-block-fullhd{display:inline-block !important}}.is-inline-flex{display:inline-flex !important}@media screen and (max-width: 768px){.is-inline-flex-mobile{display:inline-flex !important}}@media screen and (min-width: 769px),print{.is-inline-flex-tablet{display:inline-flex !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-flex-tablet-only{display:inline-flex !important}}@media screen and (max-width: 1023px){.is-inline-flex-touch{display:inline-flex !important}}@media screen and (min-width: 1024px){.is-inline-flex-desktop{display:inline-flex !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-flex-desktop-only{display:inline-flex !important}}@media screen and (min-width: 1216px){.is-inline-flex-widescreen{display:inline-flex !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-flex-widescreen-only{display:inline-flex !important}}@media screen and (min-width: 1408px){.is-inline-flex-fullhd{display:inline-flex !important}}.is-hidden{display:none !important}.is-sr-only{border:none !important;clip:rect(0, 0, 0, 0) !important;height:.01em !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important;width:.01em !important}@media screen and (max-width: 768px){.is-hidden-mobile{display:none !important}}@media screen and (min-width: 769px),print{.is-hidden-tablet{display:none !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-hidden-tablet-only{display:none !important}}@media screen and (max-width: 1023px){.is-hidden-touch{display:none !important}}@media screen and (min-width: 1024px){.is-hidden-desktop{display:none !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-hidden-desktop-only{display:none !important}}@media screen and (min-width: 1216px){.is-hidden-widescreen{display:none !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-hidden-widescreen-only{display:none !important}}@media screen and (min-width: 1408px){.is-hidden-fullhd{display:none !important}}.is-invisible{visibility:hidden !important}@media screen and (max-width: 768px){.is-invisible-mobile{visibility:hidden !important}}@media screen and (min-width: 769px),print{.is-invisible-tablet{visibility:hidden !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-invisible-tablet-only{visibility:hidden !important}}@media screen and (max-width: 1023px){.is-invisible-touch{visibility:hidden !important}}@media screen and (min-width: 1024px){.is-invisible-desktop{visibility:hidden !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-invisible-desktop-only{visibility:hidden !important}}@media screen and (min-width: 1216px){.is-invisible-widescreen{visibility:hidden !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-invisible-widescreen-only{visibility:hidden !important}}@media screen and (min-width: 1408px){.is-invisible-fullhd{visibility:hidden !important}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width: 1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white a.navbar-item:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white .navbar-link:hover,.hero.is-white .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{color:#fff !important;opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg, #e8e3e4 0%, hsl(0, 0%, 100%) 71%, white 100%)}@media screen and (max-width: 768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg, #e8e3e4 0%, hsl(0, 0%, 100%) 71%, white 100%)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:rgba(255,255,255,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,.7)}.hero.is-black a.navbar-item:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black .navbar-link:hover,.hero.is-black .navbar-link.is-active{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{color:#0a0a0a !important;opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg, black 0%, hsl(0, 0%, 4%) 71%, #181616 100%)}@media screen and (max-width: 768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg, black 0%, hsl(0, 0%, 4%) 71%, #181616 100%)}}.hero.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:rgba(0,0,0,.7)}.hero.is-light .subtitle{color:rgba(0,0,0,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-light .navbar-menu{background-color:#d2f9d6}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(0,0,0,.7)}.hero.is-light a.navbar-item:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light .navbar-link:hover,.hero.is-light .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.hero.is-light .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{color:#d2f9d6 !important;opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#d2f9d6}.hero.is-light.is-bold{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}@media screen and (max-width: 768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}}.hero.is-dark{background-color:#459558;color:#fff}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#fff}.hero.is-dark .subtitle{color:rgba(255,255,255,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-dark .navbar-menu{background-color:#459558}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(255,255,255,.7)}.hero.is-dark a.navbar-item:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark .navbar-link.is-active{background-color:#3d844e;color:#fff}.hero.is-dark .tabs a{color:#fff;opacity:.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{color:#459558 !important;opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#fff}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#459558}.hero.is-dark.is-bold{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}@media screen and (max-width: 768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}}.hero.is-primary{background-color:#55be6f;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:rgba(255,255,255,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-primary .navbar-menu{background-color:#55be6f}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,.7)}.hero.is-primary a.navbar-item:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary .navbar-link.is-active{background-color:#45b461;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{color:#55be6f !important;opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#55be6f}.hero.is-primary.is-bold{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}@media screen and (max-width: 768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}}.hero.is-link{background-color:#4876ff;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:rgba(255,255,255,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-link .navbar-menu{background-color:#4876ff}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,.7)}.hero.is-link a.navbar-item:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link .navbar-link:hover,.hero.is-link .navbar-link.is-active{background-color:#2f63ff;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{color:#4876ff !important;opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#4876ff}.hero.is-link.is-bold{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}@media screen and (max-width: 768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}}.hero.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:rgba(0,0,0,.7)}.hero.is-info .subtitle{color:rgba(0,0,0,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-info .navbar-menu{background-color:#f0f8ff}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(0,0,0,.7)}.hero.is-info a.navbar-item:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info .navbar-link:hover,.hero.is-info .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.hero.is-info .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{color:#f0f8ff !important;opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#f0f8ff}.hero.is-info.is-bold{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, white 100%)}@media screen and (max-width: 768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, white 100%)}}.hero.is-success{background-color:#48c78e;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:rgba(255,255,255,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-success .navbar-menu{background-color:#48c78e}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,.7)}.hero.is-success a.navbar-item:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success .navbar-link:hover,.hero.is-success .navbar-link.is-active{background-color:#3abb81;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{color:#48c78e !important;opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#48c78e}.hero.is-success.is-bold{background-image:linear-gradient(141deg, #29b35e 0%, hsl(153, 53%, 53%) 71%, #56d2af 100%)}@media screen and (max-width: 768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg, #29b35e 0%, hsl(153, 53%, 53%) 71%, #56d2af 100%)}}.hero.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-warning .navbar-menu{background-color:#ffd975}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning a.navbar-item:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{color:#ffd975 !important;opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffd975}.hero.is-warning.is-bold{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}@media screen and (max-width: 768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}}.hero.is-danger{background-color:#f14668;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:rgba(255,255,255,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-danger .navbar-menu{background-color:#f14668}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,.7)}.hero.is-danger a.navbar-item:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger .navbar-link.is-active{background-color:#ef2e55;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{color:#f14668 !important;opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#f14668}.hero.is-danger.is-bold{background-image:linear-gradient(141deg, #fa0a62 0%, hsl(348, 86%, 61%) 71%, #f7595f 100%)}@media screen and (max-width: 768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg, #fa0a62 0%, hsl(348, 86%, 61%) 71%, #f7595f 100%)}}.hero.is-small .hero-body{padding:1.5rem}@media screen and (min-width: 769px),print{.hero.is-medium .hero-body{padding:9rem 4.5rem}}@media screen and (min-width: 769px),print{.hero.is-large .hero-body{padding:18rem 6rem}}.hero.is-halfheight .hero-body,.hero.is-fullheight .hero-body,.hero.is-fullheight-with-navbar .hero-body{align-items:center;display:flex}.hero.is-halfheight .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-fullheight-with-navbar .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%, -50%, 0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width: 768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width: 768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media screen and (min-width: 769px),print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-head,.hero-foot{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}@media screen and (min-width: 769px),print{.hero-body{padding:3rem 3rem}}.section{padding:3rem 1.5rem}@media screen and (min-width: 1024px){.section{padding:3rem 3rem}.section.is-medium{padding:9rem 4.5rem}.section.is-large{padding:18rem 6rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}:host{font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;text-rendering:optimizeLegibility;text-size-adjust:100%;font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5;box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}',""]);const s=a},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},563:function(e,t){"use strict";var i=this&&this.__await||function(e){return this instanceof i?(this.v=e,this):new i(e)},o=this&&this.__asyncGenerator||function(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=o.apply(e,t||[]),a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){n[e]&&(r[e]=function(t){return new Promise((function(i,o){a.push([e,t,i,o])>1||l(e,t)}))})}function l(e,t){try{(o=n[e](t)).value instanceof i?Promise.resolve(o.value.v).then(c,d):h(a[0][2],o)}catch(e){h(a[0][3],e)}var o}function c(e){l("next",e)}function d(e){l("throw",e)}function h(e,t){e(t),a.shift(),a.length&&l(a[0][0],a[0][1])}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o(this,arguments,(function*(){const t=/\r?\n/,o=new TextDecoder;let r="",n=e.read();for(;;){const{done:a,value:s}=yield i(n);if(a)return r.length>0&&(yield yield i(JSON.parse(r))),yield i(void 0);r+=o.decode(s,{stream:!0});const l=r.split(t);r=l.pop();for(const e of l)yield yield i(JSON.parse(e));n=e.read()}}))}},112:function(module,__unused_webpack_exports,__webpack_require__){module=__webpack_require__.nmd(module),
/**!
 * FlexSearch.js v0.7.31 (Bundle)
 * Copyright 2018-2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
function _f(self){"use strict";try{module&&(self=module)}catch(e){}var t;function u(e){return void 0===e||e}function aa(e){const t=Array(e);for(let i=0;i<e;i++)t[i]=v();return t}function v(){return Object.create(null)}function ba(e,t){return t.length-e.length}function x(e){return"string"==typeof e}function C(e){return"object"==typeof e}function D(e){return"function"==typeof e}function ca(e,t){var i=da;if(e&&(t&&(e=E(e,t)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),i||""===i)){if(e=e.split(i),this.filter){t=this.filter,i=e.length;const o=[];for(let r=0,n=0;r<i;r++){const i=e[r];i&&!t[i]&&(o[n++]=i)}e=o}return e}return e}self._factory=_f;const da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,t){const i=Object.keys(e),o=i.length,r=[];let n="",a=0;for(let s,l,c=0;c<o;c++)s=i[c],(l=e[s])?(r[a++]=F(t?"(?!\\b)"+s+"(\\b|_)":s),r[a++]=l):n+=(n?"|":"")+s;return n&&(r[a++]=F(t?"(?!\\b)("+n+")(\\b|_)":"("+n+")"),r[a]=""),r}function E(e,t){for(let i=0,o=t.length;i<o&&(e=e.replace(t[i],t[i+1]));i+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let t="",i="";for(let o,r=0,n=e.length;r<n;r++)(o=e[r])!==i&&(t+=i=o);return t}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}const ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,t){e[t+"Async"]=function(){const e=this,i=arguments;var o=i[i.length-1];let r;return D(o)&&(r=o,delete i[i.length-1]),o=new Promise((function(o){setTimeout((function(){e.async=!0;const r=e[t].apply(e,i);e.async=!1,o(r)}))})),r?(o.then(r),this):o}}function ma(e,t,i,o){const r=e.length;let n,a,s=[],l=0;o&&(o=[]);for(let c=r-1;0<=c;c--){const d=e[c],h=d.length,u=v();let p=!n;for(let e=0;e<h;e++){const h=d[e],f=h.length;if(f)for(let e,d,b=0;b<f;b++)if(d=h[b],n){if(n[d]){if(!c)if(i)i--;else if(s[l++]=d,l===t)return s;(c||o)&&(u[d]=1),p=!0}if(o&&(e=(a[d]||0)+1,a[d]=e,e<r)){const t=o[e-2]||(o[e-2]=[]);t[t.length]=d}}else u[d]=1}if(o)n||(a=u);else if(!p)return[];n=u}if(o)for(let e,r,a=o.length-1;0<=a;a--){e=o[a],r=e.length;for(let o,a=0;a<r;a++)if(o=e[a],!n[o]){if(i)i--;else if(s[l++]=o,l===t)return s;n[o]=1}}return s}function na(e,t){const i=v(),o=v(),r=[];for(let t=0;t<e.length;t++)i[e[t]]=1;for(let e,n=0;n<t.length;n++){e=t[n];for(let t,n=0;n<e.length;n++)t=e[n],i[t]&&!o[t]&&(o[t]=1,r[r.length]=t)}return r}function J(e){this.l=!0!==e&&e,this.cache=v(),this.h=[]}function oa(e,t,i){C(e)&&(e=e.query);let o=this.cache.get(e);return o||(o=this.search(e,t,i),this.cache.set(e,o)),o}J.prototype.set=function(e,t){if(!this.cache[e]){var i=this.h.length;for(i===this.l?delete this.cache[this.h[i-1]]:i++,--i;0<i;i--)this.h[i]=this.h[i-1];this.h[0]=e}this.cache[e]=t},J.prototype.get=function(e){const t=this.cache[e];if(this.l&&t&&(e=this.h.indexOf(e))){const t=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=t}return t};const qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,t,i,o,r,n,a){setTimeout((function(){const s=e(i?i+"."+o:o,JSON.stringify(a));s&&s.then?s.then((function(){t.export(e,t,i,r,n+1)})):t.export(e,t,i,r,n+1)}))}function K(e,t){if(!(this instanceof K))return new K(e);var i;if(e){x(e)?e=qa[e]:(i=e.preset)&&(e=Object.assign({},i[i],e)),i=e.charset;var o=e.lang;x(i)&&(-1===i.indexOf(":")&&(i+=":default"),i=G[i]),x(o)&&(o=ka[o])}else e={};let r,n,a=e.context||{};if(this.encode=e.encode||i&&i.encode||ia,this.register=t||v(),this.D=r=e.resolution||9,this.G=t=i&&i.G||e.tokenize||"strict",this.depth="strict"===t&&a.depth,this.l=u(a.bidirectional),this.s=n=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=n?aa(r):v(),this.A=r=a.resolution||1,this.h=n?aa(r):v(),this.F=i&&i.F||e.rtl,this.H=(t=e.matcher||o&&o.H)&&fa(t,!1),this.J=(t=e.stemmer||o&&o.J)&&fa(t,!0),i=t=e.filter||o&&o.filter){i=t,o=v();for(let e=0,t=i.length;e<t;e++)o[i[e]]=1;i=o}this.filter=i,this.cache=(t=e.cache)&&new J(t)}function L(e,t,i,o,r){return i&&1<e?t+(o||0)<=e?i+(r||0):(e-1)/(t+(o||0))*(i+(r||0))+1|0:0}function M(e,t,i,o,r,n,a){let s=a?e.h:e.map;(!t[i]||a&&!t[i][a])&&(e.s&&(s=s[o]),a?((t=t[i]||(t[i]=v()))[a]=1,s=s[a]||(s[a]=v())):t[i]=1,s=s[i]||(s[i]=[]),e.s||(s=s[o]||(s[o]=[])),n&&s.includes(r)||(s[s.length]=r,e.m&&((e=e.register[r]||(e.register[r]=[]))[e.length]=s)))}function sa(e,t,i,o,r,n,a,s){let l=[],c=s?e.h:e.map;if(e.s||(c=ua(c,a,s,e.l)),c){let i=0;const d=Math.min(c.length,s?e.A:e.D);for(let t,h,u=0,p=0;u<d&&!((t=c[u])&&(e.s&&(t=ua(t,a,s,e.l)),r&&t&&n&&(h=t.length,h<=r?(r-=h,t=null):(t=t.slice(r),r=0)),t&&(l[i++]=t,n&&(p+=t.length,p>=o))));u++);if(i)return n?ta(l,o,0):void(t[t.length]=l)}return!i&&l}function ta(e,t,i){return e=1===e.length?e[0]:[].concat.apply([],e),i||e.length>t?e.slice(i,i+t):e}function ua(e,t,i,o){return i?e=(e=e[(o=o&&t>i)?t:i])&&e[o?i:t]:e=e[t],e}function N(e,t,i,o,r){let n=0;if(e.constructor===Array)if(r)-1!==(t=e.indexOf(t))?1<e.length&&(e.splice(t,1),n++):n++;else{r=Math.min(e.length,i);for(let a,s=0;s<r;s++)(a=e[s])&&(n=N(a,t,i,o,r),o||n||delete e[s])}else for(let a in e)(n=N(e[a],t,i,o,r))||delete e[a];return n}function va(e){e=e.data;var t=self._index;const i=e.args;var o=e.task;if("init"===o)o=e.options||{},e=e.factory,t=o.encode,o.cache=!1,t&&0===t.indexOf("function")&&(o.encode=Function("return "+t)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(o),delete self.FlexSearch):self._index=new K(o);else e=e.id,t=t[o].apply(t,i),postMessage("search"===o?{id:e,msg:t}:{id:e})}t=K.prototype,t.append=function(e,t){return this.add(e,t,!0)},t.add=function(e,t,i,o){if(t&&(e||0===e)){if(!o&&!i&&this.register[e])return this.update(e,t);if(o=(t=this.encode(t)).length){const c=v(),d=v(),h=this.depth,u=this.D;for(let p=0;p<o;p++){let f=t[this.F?o-1-p:p];var r=f.length;if(f&&r>=this.B&&(h||!d[f])){var n=L(u,o,p),a="";switch(this.G){case"full":if(2<r){for(n=0;n<r;n++)for(var s=r;s>n;s--)if(s-n>=this.B){var l=L(u,o,p,r,n);M(this,d,a=f.substring(n,s),l,e,i)}break}case"reverse":if(1<r){for(s=r-1;0<s;s--)(a=f[s]+a).length>=this.B&&M(this,d,a,L(u,o,p,r,s),e,i);a=""}case"forward":if(1<r){for(s=0;s<r;s++)(a+=f[s]).length>=this.B&&M(this,d,a,n,e,i);break}default:if(this.C&&(n=Math.min(n/this.C(t,f,p)|0,u-1)),M(this,d,f,n,e,i),h&&1<o&&p<o-1)for(r=v(),a=this.A,n=f,s=Math.min(h+1,o-p),r[n]=1,l=1;l<s;l++)if((f=t[this.F?o-1-p-l:p+l])&&f.length>=this.B&&!r[f]){r[f]=1;const t=this.l&&f>n;M(this,c,t?n:f,L(a+(o/2>a?0:1),o,p,s-1,l-1),e,i,t?f:n)}}}}this.m||(this.register[e]=1)}}return this},t.search=function(e,t,i){i||(!t&&C(e)?e=(i=e).query:C(t)&&(i=t));let o,r,n,a=[],s=0;if(i){e=i.query||e,t=i.limit,s=i.offset||0;var l=i.context;r=i.suggest}if(e&&(o=(e=this.encode(""+e)).length,1<o)){i=v();var c=[];for(let t,n=0,s=0;n<o;n++)if((t=e[n])&&t.length>=this.B&&!i[t]){if(!(this.s||r||this.map[t]))return a;c[s++]=t,i[t]=1}o=(e=c).length}if(!o)return a;t||(t=100),i=0,(l=this.depth&&1<o&&!1!==l)?(n=e[0],i=1):1<o&&e.sort(ba);for(let d,h;i<o;i++){if(h=e[i],l?(d=sa(this,a,r,t,s,2===o,h,n),r&&!1===d&&a.length||(n=h)):d=sa(this,a,r,t,s,1===o,h),d)return d;if(r&&i===o-1){if(!(c=a.length)){if(l){l=0,i=-1;continue}return a}if(1===c)return ta(a[0],t,s)}}return ma(a,t,s,r)},t.contain=function(e){return!!this.register[e]},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e,t){const i=this.register[e];if(i){if(this.m)for(let t,o=0;o<i.length;o++)t=i[o],t.splice(t.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(t||delete this.register[e],this.cache){t=this.cache;for(let i,o,r=0;r<t.h.length;r++)o=t.h[r],i=t.cache[o],i.includes(e)&&(t.h.splice(r--,1),delete t.cache[o])}}return this},t.searchCache=oa,t.export=function(e,t,i,o,r){let n,a;switch(r||(r=0)){case 0:if(n="reg",this.m){a=v();for(let e in this.register)a[e]=1}else a=this.register;break;case 1:n="cfg",a={doc:0,opt:this.s?1:0};break;case 2:n="map",a=this.map;break;case 3:n="ctx",a=this.h;break;default:return}return ra(e,t||this,i,n,o,r,a),!0},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"cfg":this.s=!!t.opt;break;case"reg":this.m=!1,this.register=t;break;case"map":this.map=t;break;case"ctx":this.h=t}},la(K.prototype);let wa=0;function O(e){if(!(this instanceof O))return new O(e);var t;e?D(t=e.encode)&&(e.encode=t.toString()):e={},(t=(self||window)._factory)&&(t=t.toString());const i="undefined"==typeof window&&self.exports,o=this;this.o=xa(t,i,e.worker),this.h=v(),this.o&&(i?this.o.on("message",(function(e){o.h[e.id](e.msg),delete o.h[e.id]})):this.o.onmessage=function(e){e=e.data,o.h[e.id](e.msg),delete o.h[e.id]},this.o.postMessage({task:"init",factory:t,options:e}))}function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){const t=this,i=[].slice.call(arguments);var o=i[i.length-1];let r;return D(o)&&(r=o,i.splice(i.length-1,1)),o=new Promise((function(o){setTimeout((function(){t.h[++wa]=o,t.o.postMessage({task:e,id:wa,args:i})}))})),r?(o.then(r),this):o}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var t,i=e.document||e.doc||e;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(t=i.key||i.id)&&S(t,this.A)||"id",this.m=u(e.fastupdate),this.C=(t=i.store)&&!0!==t&&[],this.store=t&&v(),this.I=(t=i.tag)&&S(t,this.A),this.l=t&&v(),this.cache=(t=e.cache)&&new J(t),e.cache=!1,this.o=e.worker,this.async=!1,t=v();let o=i.index||i.field||i;x(o)&&(o=[o]);for(let i,r,n=0;n<o.length;n++)i=o[n],x(i)||(r=i,i=i.field),r=C(r)?Object.assign({},e,r):e,this.o&&(t[i]=new O(r),t[i].o||(this.o=!1)),this.o||(t[i]=new K(r,this.register)),this.K[n]=S(i,this.A),this.h[n]=i;if(this.C)for(x(e=i.store)&&(e=[e]),i=0;i<e.length;i++)this.C[i]=S(e[i],this.A);this.index=t}function S(e,t){const i=e.split(":");let o=0;for(let r=0;r<i.length;r++)0<=(e=i[r]).indexOf("[]")&&(e=e.substring(0,e.length-2))&&(t[o]=!0),e&&(i[o++]=e);return o<i.length&&(i.length=o),1<o?i:i[0]}function T(e,t){if(x(t))e=e[t];else for(let i=0;e&&i<t.length;i++)e=e[t[i]];return e}function U(e,t,i,o,r){if(e=e[r],o===i.length-1)t[r]=e;else if(e)if(e.constructor===Array)for(t=t[r]=Array(e.length),r=0;r<e.length;r++)U(e,t,i,o,r);else t=t[r]||(t[r]=v()),r=i[++o],U(e,t,i,o,r)}function V(e,t,i,o,r,n,a,s){if(e=e[a])if(o===t.length-1){if(e.constructor===Array){if(i[o]){for(t=0;t<e.length;t++)r.add(n,e[t],!0,!0);return}e=e.join(" ")}r.add(n,e,s,!0)}else if(e.constructor===Array)for(a=0;a<e.length;a++)V(e,t,i,o,r,n,a,s);else a=t[++o],V(e,t,i,o,r,n,a,s)}function ya(e,t,i,o){let r=this.l[e],n=r&&r.length-i;if(n&&0<n)return(n>t||i)&&(r=r.slice(i,i+t)),o&&(r=za.call(this,r)),{tag:e,result:r}}function za(e){const t=Array(e.length);for(let i,o=0;o<e.length;o++)i=e[o],t[o]={id:i,doc:this.store[i]};return t}P("add"),P("append"),P("search"),P("update"),P("remove"),t=Q.prototype,t.add=function(e,t,i){if(C(e)&&(e=T(t=e,this.key)),t&&(e||0===e)){if(!i&&this.register[e])return this.update(e,t);for(let o,r,n=0;n<this.h.length;n++)r=this.h[n],o=this.K[n],x(o)&&(o=[o]),V(t,o,this.A,0,this.index[r],e,o[0],i);if(this.I){let o=T(t,this.I),r=v();x(o)&&(o=[o]);for(let t,n,a=0;a<o.length;a++)if(t=o[a],!r[t]&&(r[t]=1,n=this.l[t]||(this.l[t]=[]),!i||!n.includes(e))&&(n[n.length]=e,this.m)){const t=this.register[e]||(this.register[e]=[]);t[t.length]=n}}if(this.store&&(!i||!this.store[e])){let i;if(this.C){i=v();for(let e,o=0;o<this.C.length;o++)e=this.C[o],x(e)?i[e]=t[e]:U(t,i,e,0,e[0])}this.store[e]=i||t}}return this},t.append=function(e,t){return this.add(e,t,!0)},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var t=0;t<this.h.length&&(this.index[this.h[t]].remove(e,!this.o),!this.m);t++);if(this.I&&!this.m)for(let i in this.l){const o=(t=this.l[i]).indexOf(e);-1!==o&&(1<t.length?t.splice(o,1):delete this.l[i])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,t,i,o){i||(!t&&C(e)?(i=e,e=""):C(t)&&(i=t,t=0));let r,n,a,s,l,c,d=[],h=[],u=0;if(i)if(i.constructor===Array)a=i,i=null;else{if(e=i.query||e,a=(r=i.pluck)||i.index||i.field,s=i.tag,n=this.store&&i.enrich,l="and"===i.bool,t=i.limit||t||100,c=i.offset||0,s&&(x(s)&&(s=[s]),!e)){for(let e,i=0;i<s.length;i++)(e=ya.call(this,s[i],t,c,n))&&(d[d.length]=e,u++);return u?d:[]}x(a)&&(a=[a])}a||(a=this.h),l=l&&(1<a.length||s&&1<s.length);const p=!o&&(this.o||this.async)&&[];for(let r,n,f,b=0;b<a.length;b++){let m;if(n=a[b],x(n)||(m=n,n=m.field,e=m.query||e,t=m.limit||t),p)p[b]=this.index[n].searchAsync(e,t,m||i);else{if(r=o?o[b]:this.index[n].search(e,t,m||i),f=r&&r.length,s&&f){const e=[];let i=0;l&&(e[0]=[r]);for(let t,o,r=0;r<s.length;r++)t=s[r],(f=(o=this.l[t])&&o.length)&&(i++,e[e.length]=l?[o]:o);i&&(r=l?ma(e,t||100,c||0):na(r,e),f=r.length)}if(f)h[u]=n,d[u++]=r;else if(l)return[]}}if(p){const o=this;return new Promise((function(r){Promise.all(p).then((function(n){r(o.search(e,t,i,n))}))}))}if(!u)return[];if(r&&(!n||!this.store))return d[0];for(let e,t=0;t<h.length;t++){if(e=d[t],e.length&&n&&(e=za.call(this,e)),r)return e;d[t]={field:h[t],result:e}}return d},t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,t){return this.store[e]=t,this},t.searchCache=oa,t.export=function(e,t,i,o,r){if(r||(r=0),o||(o=0),o<this.h.length){const i=this.h[o],n=this.index[i];t=this,setTimeout((function(){n.export(e,t,r?i:"",o,r++)||(o++,r=1,t.export(e,t,i,o,r))}))}else{let t,n;switch(r){case 1:t="tag",n=this.l;break;case 2:t="store",n=this.store;break;default:return}ra(e,this,i,t,o,r,n)}},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"tag":this.l=t;break;case"reg":this.m=!1,this.register=t;for(let e,i=0;i<this.h.length;i++)e=this.index[this.h[i]],e.register=t,e.m=!1;break;case"store":this.store=t;break;default:const i=(e=e.split("."))[0];e=e[1],i&&e&&this.index[i].import(e,t)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};const Ca=[F("[àáâãäå]"),"a",F("[èéêë]"),"e",F("[ìíîï]"),"i",F("[òóôõöő]"),"o",F("[ùúûüű]"),"u",F("[ýŷÿ]"),"y",F("ñ"),"n",F("[çc]"),"k",F("ß"),"s",F(" & ")," and "];function Aa(e){var t=e=""+e;return t.normalize&&(t=t.normalize("NFD").replace(ea,"")),ca.call(this,t.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};const Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",ß:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){const t=[];if(e=Aa.call(this,e).join(" ")){const i=e.split(Fa),o=i.length;for(let r,n=0,a=0;n<o;n++)if((e=i[n])&&(!this.filter||!this.filter[e])){r=e[0];let i=Ga[r]||r,o=i;for(let t=1;t<e.length;t++){r=e[t];const n=Ga[r]||r;n&&n!==o&&(i+=n,o=n)}t[a++]=i}}return t}var Ia={encode:Ha,F:!1,G:""};const Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,t){return e&&(2<(e=Da.call(this,e).join(" ")).length&&(e=E(e,Ja)),t||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};const Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(1<(e=Ha.call(this,e,!0)).length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;const W=self;let Y;const Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,t){G[e]=t},registerLanguage:function(e,t){ka[e]=t}};(Y=W.define)&&Y.amd?Y([],(function(){return Z})):W.exports?W.exports=Z:W.FlexSearch=Z}(this)},431:e=>{"use strict";const t=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],r=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],n=(e,t,i)=>{let o=e;return"string"==typeof t||Array.isArray(t)?o=e.toLocaleString(t,i):!0!==t&&void 0===i||(o=e.toLocaleString(void 0,i)),o};e.exports=(e,a)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const s=(a=Object.assign({bits:!1,binary:!1},a)).bits?a.binary?r:o:a.binary?i:t;if(a.signed&&0===e)return` 0 ${s[0]}`;const l=e<0,c=l?"-":a.signed?"+":"";let d;if(l&&(e=-e),void 0!==a.minimumFractionDigits&&(d={minimumFractionDigits:a.minimumFractionDigits}),void 0!==a.maximumFractionDigits&&(d=Object.assign({maximumFractionDigits:a.maximumFractionDigits},d)),e<1){return c+n(e,a.locale,d)+" "+s[0]}const h=Math.min(Math.floor(a.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),s.length-1);e/=Math.pow(a.binary?1024:1e3,h),d||(e=e.toPrecision(3));return c+n(Number(e),a.locale,d)+" "+s[h]}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var i=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(i.exports,i,i.exports,__webpack_require__),i.loaded=!0,i.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var i in t)__webpack_require__.o(t,i)&&!__webpack_require__.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var __webpack_exports__={};(()=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Chooser:()=>xi,Coll:()=>vi,CollIndex:()=>yi,CollInfo:()=>mi,Embed:()=>_o,FaIcon:()=>We,GDrive:()=>ho,IS_APP:()=>Ne,Item:()=>vi,ItemIndex:()=>yi,ItemInfo:()=>mi,LitElement:()=>fe,Loader:()=>uo,PageEntry:()=>yo,Pages:()=>mo,Replay:()=>xo,ReplayWebApp:()=>$i,SWManager:()=>tt,Sorter:()=>ko,Story:()=>co,URLResources:()=>$o,VERSION:()=>qe,WrModal:()=>Ve,apiPrefix:()=>Me,clickOnSpacebarPress:()=>je,css:()=>d,html:()=>Y,replayPrefix:()=>Ue,unsafeCSS:()=>c,unsafeSVG:()=>Ee,updateFaviconLinks:()=>He,wrapCss:()=>Be});function e(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}function t(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))}Object.create;function i(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,o=e[Symbol.asyncIterator];return o?o.call(e):(e=i(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(t){return new Promise((function(o,r){(function(e,t,i,o){Promise.resolve(o).then((function(t){e({value:t,done:i})}),t)})(o,r,(t=e[i](t)).done,t.value)}))}}}Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class l{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new l("string"==typeof e?e:e+"",void 0,a),d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new l(i,e,a)},h=(e,t)=>{if(n)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=r.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},u=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return c(t)})(e):e,{is:p,defineProperty:f,getOwnPropertyDescriptor:b,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:v}=Object,w=globalThis,y=w.trustedTypes,x=y?y.emptyScript:"",k=w.reactiveElementPolyfillSupport,$=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},z=(e,t)=>!p(e,t),_={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&f(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const n=o?.call(this);r.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...m(e),...g(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:S;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??z)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[$("elementProperties")]=new Map,C[$("finalized")]=new Map,k?.({ReactiveElement:C}),(w.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L=globalThis,A=L.trustedTypes,I=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+P,T=`<${D}>`,F=document,R=()=>F.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,O=e=>U(e)||"function"==typeof e?.[Symbol.iterator],B="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,j=/>/g,H=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Y=K(1),Z=K(2),Q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),X=new WeakMap,ee=F.createTreeWalker(F,129);function te(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}const ie=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":"",a=N;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===N?"!--"===l[1]?a=q:void 0!==l[1]?a=j:void 0!==l[2]?(G.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=r??N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?H:'"'===l[3]?V:W):a===V||a===W?a=H:a===q||a===j?a=N:(a=H,r=void 0);const h=a===H&&e[t+1].startsWith("/>")?" ":"";n+=a===N?i+T:c>=0?(o.push(s),i.slice(0,c)+E+i.slice(c)+P+h):i+P+(-2===c?t:h)}return[te(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class oe{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,s=this.parts,[l,c]=ie(e,t);if(this.el=oe.createElement(l,i),ee.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ee.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=c[n++],i=o.getAttribute(e).split(P),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?le:"?"===a[1]?ce:"@"===a[1]?de:se}),o.removeAttribute(e)}else e.startsWith(P)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(G.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],R()),ee.nextNode(),s.push({type:2,index:++r});o.append(e[t],R())}}}else if(8===o.nodeType)if(o.data===D)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)s.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function re(e,t,i=e,o){if(t===Q)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=re(e,r._$AS(e,t.values),r,o)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);ee.currentNode=o;let r=ee.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new ae(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new he(r,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(r=ee.nextNode(),n++)}return ee.currentNode=F,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),M(e)?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):O(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==J&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=oe.createElement(te(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ne(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new oe(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new ae(this.S(R()),this.S(R()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=re(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==Q,n&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=re(this,o[i+a],t,a),s===Q&&(s=this._$AH[a]),n||=!M(s)||s!==this._$AH[a],s===J?e=J:e!==J&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class le extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class ce extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class de extends se{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??J)===Q)return;const i=this._$AH,o=e===J&&i!==J||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==J&&(i===J||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class he{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const ue={P:E,A:P,C:D,M:1,L:ie,R:ne,D:O,V:re,I:ae,H:se,N:ce,U:de,B:le,F:he},pe=L.litHtmlPolyfillSupport;pe?.(oe,ae),(L.litHtmlVersions??=[]).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class fe extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new ae(t.insertBefore(R(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}fe._$litElement$=!0,fe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:fe});const be=globalThis.litElementPolyfillSupport;be?.({LitElement:fe});(globalThis.litElementVersions??=[]).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ge={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:z},ve=(e=ge,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function we(e){return(t,i)=>"object"==typeof i?ve(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ye(e){return we({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ke(e,t){return(i,o,r)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return xe(i,o,{get(){let i=e.call(this);return void 0===i&&(i=n(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return xe(i,o,{get(){return n(this)}})}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e=e=>e??J,Se=1,ze=2,_e=e=>(...t)=>({_$litDirective$:e,values:t});class Ce{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Le extends Ce{constructor(e){if(super(e),this.it=J,e.type!==ze)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===J||null==e)return this._t=void 0,this.it=e;if(e===Q)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Le.directiveName="unsafeHTML",Le.resultType=1;const Ae=_e(Le);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ie extends Le{}Ie.directiveName="unsafeSVG",Ie.resultType=2;const Ee=_e(Ie),Pe="important",De=" !"+Pe,Te=_e(class extends Ce{constructor(e){if(super(e),e.type!==Se||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(De);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?Pe:""):i[e]=o}}return Q}});var Fe,Re=__webpack_require__(989);const Me="./w/api",Ue="./w",Oe=c(Re.A);function Be(e){return[Oe,e]}const Ne=window.IS_APP||(null===(Fe=window.electron)||void 0===Fe?void 0:Fe.IS_APP)||window.matchMedia("(display-mode: standalone)").matches,qe="2.2.4";function je(e){" "==e.key&&(e.preventDefault(),e.target.click())}function He(e){const t=document.querySelector("head"),i=document.querySelectorAll("link[rel*='icon']");for(const e of i)t.removeChild(e);for(const i of e.icons){const e=document.createElement("link");e.rel=i.rel,e.href=i.href,t.appendChild(e)}}class We extends fe{constructor(){super(),this.size="1.1em",this.width=null,this.height=null}static get properties(){return{svg:{type:String},size:{type:String},width:{type:String},height:{type:String}}}static get styles(){return d`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        line-height: 1em;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}render(){if(!this.svg)return Y``;const e={};return this.size?(e.width=this.size,e.height=this.size):(this.width&&(e.width=this.width),this.height&&(e.height=this.height)),Y`<svg style="${Te(e)}">
      <g>
        ${Ee(this.svg)}
      </g>
    </svg>`}}class Ve extends fe{constructor(){super(),this.title="",this.bgClass="",this.noBgClose=!1}static get properties(){return{title:{type:String},bgClass:{type:String},noBgClose:{type:Boolean}}}static get styles(){return Be(d`
      .modal-background {
        background-color: rgba(10, 10, 10, 0.5);
      }

      .modal-card-head {
        background-color: var(--background, #97a1ff);
      }

      .modal-card {
        width: 100%;
        max-width: var(--modal-width, 640px);
      }
    `)}render(){return Y` <div class="modal is-active">
      <div
        class="modal-background"
        @click="${()=>!this.noBgClose&&this.onClose()}"
      ></div>
      <div class="modal-card">
        <header
          class="modal-card-head ${this.bgClass}"
        >
          <p class="modal-card-title is-3">${this.title}</p>
          <button
            class="delete"
            aria-label="close"
            @click="${this.onClose}"
          ></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
      </div>
    </div>`}onClose(){this.dispatchEvent(new CustomEvent("modal-closed"))}}customElements.define("fa-icon",We),customElements.define("wr-modal",Ve);const Ge='<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 24 24"><clipPath id="a"><path d="M0 0h23.04v23.04H0z"/></clipPath><g clip-path="url(#a)"><path d="M6.544 10.796a.239.239 0 0 1-.236-.282 5.32 5.32 0 0 1 2.959-3.801.118.118 0 0 1 .158.155c-.409.993-.69 2.276-.777 3.702a.24.24 0 0 1-.239.226zm7.07-3.927a.12.12 0 0 1 .026-.133.12.12 0 0 1 .133-.024 5.32 5.32 0 0 1 2.958 3.802.24.24 0 0 1-.235.281l-1.865.001a.24.24 0 0 1-.239-.226c-.087-1.426-.368-2.709-.778-3.701m2.882 5.367c.071 0 .138.032.184.086a.24.24 0 0 1 .052.196 5.32 5.32 0 0 1-2.959 3.802.12.12 0 0 1-.133-.024.12.12 0 0 1-.025-.132c.409-.992.69-2.275.777-3.702a.24.24 0 0 1 .239-.226zm-7.07 3.928a.12.12 0 0 1-.159.157 5.32 5.32 0 0 1-2.958-3.803.24.24 0 0 1 .052-.195.24.24 0 0 1 .183-.085c.475-.002 1.429-.002 1.865-.002a.24.24 0 0 1 .239.226c.087 1.427.368 2.71.778 3.702m.666-3.672a.24.24 0 0 1 .064-.18.24.24 0 0 1 .175-.075l2.378-.001a.24.24 0 0 1 .239.256c-.102 1.519-.442 2.843-.957 3.717a2.1 2.1 0 0 1-.397.509.12.12 0 0 1-.148 0 2.1 2.1 0 0 1-.397-.509c-.515-.874-.855-2.198-.957-3.717m2.856-1.951a.24.24 0 0 1-.239.255h-2.378a.24.24 0 0 1-.239-.255c.102-1.52.442-2.843.957-3.717.121-.206.261-.392.397-.509a.12.12 0 0 1 .148 0c.136.117.276.303.397.509.515.874.855 2.197.957 3.717" style="fill:#0891b2"/><path d="M22.833 12.8a.24.24 0 0 1 .122.24c-.746 5.641-5.578 10-11.421 10-5.869 0-10.718-4.398-11.43-10.075a.238.238 0 0 1 .357-.232c.518.3 1.38.802 1.697.987a.24.24 0 0 0 .242-.001l1.706-1.002a.24.24 0 0 1 .358.165 7.205 7.205 0 0 0 7.07 5.838 7.21 7.21 0 0 0 7.057-5.767.24.24 0 0 1 .121-.164l1.961-1.059a.24.24 0 0 1 .23.001zM.226 10.24A.24.24 0 0 1 .104 10C.85 4.359 5.682 0 11.525 0c5.869 0 10.718 4.398 11.43 10.075a.238.238 0 0 1-.357.232c-.518-.3-1.38-.802-1.697-.987a.24.24 0 0 0-.242.001l-1.706 1.002a.24.24 0 0 1-.358-.165 7.205 7.205 0 0 0-7.07-5.838 7.21 7.21 0 0 0-7.057 5.767.24.24 0 0 1-.121.164L2.386 11.31a.24.24 0 0 1-.231-.001z" style="fill:#4d7c0f"/></g></svg>\n',Ke='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>',Ye='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>';var Ze;function Qe(e,t){void 0===t&&(t={});var i=t.registrationOptions;void 0===i&&(i={}),delete t.registrationOptions;var o=function(e){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];t&&t[e]&&t[e].apply(t,i)};"serviceWorker"in navigator&&Ze.then((function(){Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))?(!function(e,t,i){fetch(e).then((function(o){404===o.status?(t("error",new Error("Service worker not found at "+e)),et()):-1===o.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+o.headers.get("content-type"))),et()):Xe(e,t,i)})).catch((function(e){return Je(t,e)}))}(e,o,i),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return Je(o,e)}))):(Xe(e,o,i),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return Je(o,e)})))}))}function Je(e,t){navigator.onLine||e("offline"),e("error",t)}function Xe(e,t,i){navigator.serviceWorker.register(e,i).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var i=e.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return Je(t,e)}))}function et(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return Je(emit,e)}))}"undefined"!=typeof window&&(Ze="undefined"!=typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}});class tt{constructor({name:e="sw.js",scope:t="./",appName:i="ReplayWeb.page",requireSubdomainIframe:o=!1}={}){this.errorMsg=null,this.name=e,this.scope=t,this.appName=i,this.requireSubdomainIframe=o}setAppName(e){this.appName=e}register(){return t(this,void 0,void 0,(function*(){let e,t;const i=new Promise(((i,o)=>{e=i,t=o}));this.errorMsg=this.getSWErrorMsg(),this.errorMsg&&(console.error(this.errorMsg),t(this.errorMsg));const o=e=>{console.error("Error during service worker registration:",e),this.errorMsg=this.getCrossOriginIframeMsg(),this.errorMsg||(this.errorMsg=`${this.appName} could not be loaded due to the following error:\n${e.toString()}`),t(this.errorMsg)};return Qe(this.scope+this.name,{registrationOptions:{scope:this.scope},registered(){console.log("Service worker is registered"),e()},error(e){o(e)}}),i}))}getCrossOriginIframeMsg(){return this.isCrossOriginIframe()?`      Sorry, Service Workers can not be used in cross-origin iframes.\n      This web archive embed is loaded from ${window.location.origin} but the top page is on a different origin.\n      The embed must be loaded from the same origin or a subdomain.`:null}isCrossOriginIframe(){if(window.parent===window)return!1;try{return""===window.top.location.href}catch(e){return!0}}getSWErrorMsg(){if(navigator.serviceWorker)return this.requireSubdomainIframe&&!this.isCrossOriginIframe()?`Sorry, due to security settings, this ${this.appName} embed only be viewed within a subdomain iframe.`:null;const e=this.getCrossOriginIframeMsg();return e||(window.isSecureContext?"MozAppearance"in document.documentElement.style?"Sorry, Service Workers are disabled in Firefox in Private Mode. Please try loading this page in regular mode instead.":`Sorry, ${this.appName} won't work in this browser as Service Workers are not supported in this window.\n  Please try a different browser.`:`\n      Sorry, the ${this.appName} system must be loaded from an HTTPS URL (or localhost), but was loaded from: ${window.location.host}.\n      Please try loading this page from an HTTPS URL`)}renderErrorReport(e=""){const t=this.errorMsg||e;return t?Y`
      <section class="is-fullwidth">
        <div class="has-text-centered">
          <fa-icon
            style="margin: 1em;flex-grow: 1;"
            id="wrlogo"
            size="2.5rem"
            .svg=${Ge}
            aria-hidden="true"
          ></fa-icon>
        </div>
        <div style="white-space: pre-wrap; text-align: center">${t}</div>
      </section>
    `:""}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:it}=ue,ot=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),ot(e,t);return!0},rt=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},nt=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),lt(t)}};function at(e){void 0!==this._$AN?(rt(this),this._$AM=e,nt(this)):this._$AM=e}function st(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)ot(o[e],!1),rt(o[e]);else null!=o&&(ot(o,!1),rt(o));else ot(this,e)}const lt=e=>{e.type==ze&&(e._$AP??=st,e._$AQ??=at)};class ct extends Ce{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),nt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ot(this,e),rt(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=()=>new ht;class ht{}const ut=new WeakMap,pt=_e(class extends ct{render(e){return J}update(e,[t]){const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),J}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let i=ut.get(t);void 0===i&&(i=new WeakMap,ut.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ut.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function ft(e){if(!e)return"";e.length<14&&(e+="00000101000000".substr(e.length));const t=e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8)+"T"+e.substring(8,10)+":"+e.substring(10,12)+":"+e.substring(12,14)+"-00:00";return new Date(t)}function bt(e){let t=null;try{t=new Date(e.ts||e.date)}catch(e){}const i=t&&t instanceof Date?mt(t.toISOString()):"";return{date:t,timestamp:i}}function mt(e){return e.replace(/[-:T]/g,"").slice(0,14)}function gt(e,t,i){const o=new URLSearchParams;return o.set("view",e),o.set("url",t),o.set("ts",i),"#"+o.toString()}function vt(e){return t(this,void 0,void 0,(function*(){try{new URL(e)}catch(t){e=new URL(e,document.baseURI).href}const i=yield function(e,i){return t(this,void 0,void 0,(function*(){const t=(new TextEncoder).encode(e),o=yield crypto.subtle.digest(i,t),r=Array.from(new Uint8Array(o)).map((e=>e.toString(16).padStart(2,"0"))).join("");return r}))}(e,"SHA-256"),o="id-"+i.slice(0,12);return{url:e,item:o}}))}const wt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>',yt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"/></svg>',xt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"/></svg>',kt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"/></svg>';var $t=__webpack_require__(431),St=__webpack_require__.n($t);class zt extends fe{constructor(){super(...arguments),this.collInfo=null,this.ts=null,this.url=null,this.active=!1}get renderRoot(){return this}static get embedStyles(){return d`
      rwp-embed-receipt {
        display: flex;
        flex-direction: column;
      }

      .icon {
        vertical-align: text-top;
      }

      #embed-dropdown {
        max-height: calc(100vh - 50px);
        padding-top: 0;
        margin-top: -0.5rem;
        display: block;
        z-index: 1;
        pointer-events: none;
        transition: all 0.3s linear;
        transform-origin: left top;
        transform: scaleY(0);
        transition: all 300ms cubic-bezier(0.15, 0, 0.1, 1);
        filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.15));
      }

      .dropdown.is-active #embed-dropdown {
        transform: scaleY(1);
      }

      .embed-info-container {
        width: 100%;
        display: flex !important;
        justify-content: center;
      }

      button.embed-info {
        padding: 0;
        background-color: white;
        justify-content: space-between;
        max-width: 40rem;
        width: calc(100% - 1rem);
        height: 42px;
        border-color: #d1d5da;
        border-width: 1px;
        border-style: solid;
        border-radius: 999px;
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
        transition-duration: 50ms;
        transition-timing-function: ease-out;
        cursor: pointer;
        z-index: 2;
      }

      button.embed-info:active {
        color: initial;
      }

      button.embed-info:hover {
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
        transform: scale(1.01);
      }

      button.embed-info:hover:active {
        transform: translateY(0.25rem);
      }

      .embed-info-buttontext {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        text-align: start;
        font-size: 13px;
      }

      .embed-info-drop {
        font-size: 14px;
        padding: 1rem;
        padding-top: 2rem;
        max-width: 38rem;
        max-height: 42rem;
        width: calc(100% - 2rem);
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        pointer-events: auto;
        overflow-y: auto;
      }

      .embed-info-drop > p {
        font-size: 14px;
        color: black;
      }

      .embed-info-drop > h2 {
        margin-bottom: 0.25rem;
        font-size: 16px;
        font-weight: bold;
        text-transform: none;
        letter-spacing: 0;
        color: #24292e;
      }

      .embed-info-drop-statscontainer > h3 {
        font-size: 12px;
        color: #394146;
      }

      .embed-info-drop-statscontainer > p {
        font-size: 14px;
        color: black;
      }

      .embed-info-drop a {
        word-break: break-all;
      }

      .embed-info-drop .show-hash {
        word-break: break-all;
        font-family: monospace;
      }

      .embed-info-drop .show-key {
        text-overflow: ellipsis;
        overflow: hidden;
        whitespace: nowrap;
        font-family: monospace;
      }

      .embed-logo {
        margin: 0.5rem;
        line-height: 0.5rem;
      }
    `}render(){var e,t,i,o;const{numValid:r=0,numInvalid:n=0,domain:a,certFingerprint:s,datapackageHash:l,publicKey:c,software:d}=null!==(t=null===(e=this.collInfo)||void 0===e?void 0:e.verify)&&void 0!==t?t:{},h=null===(i=this.collInfo)||void 0===i?void 0:i.sourceUrl,u=s?`https://crt.sh/?q=${s}`:"",p=ft(this.ts).toLocaleString();return Y`
      <div class="dropdown mb-4 ${this.active?"is-active":""}">
        <div class="dropdown-trigger embed-info-container">
          <button
            class="embed-info is-small is-rounded mt-4"
            aria-haspopup="true"
            aria-controls="embed-dropdown"
            @click="${this.onEmbedDrop}"
          >
            <fa-icon
              class="embed-logo"
              size="1.5rem"
              aria-hidden="true"
              .svg=${Ge}
            ></fa-icon>
            <span class="embed-info-buttontext">
              This embed is part of a web archive. Click here to learn more.
            </span>
            <span class="icon is-small mr-4 ml-2">
              <fa-icon
                title="Toggle"
                .svg="${this.active?'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>\n  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n</svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n</svg>'}"
                aria-hidden="true"
              ></fa-icon>
            </span>
          </button>
        </div>
        <div
          class="dropdown-menu embed-info-container"
          id="embed-dropdown"
          role="menu"
        >
          <div class="dropdown-content embed-info-drop">
            <p class="mb-4">
              Even if the original page goes offline or is changed, the content
              below will remain unchanged as it is loaded from a web archive.
            </p>
            <hr class="dropdown-divider" />
            <h2 class="mt-4">Get A Copy!</h2>
            <p class="mt-2">
              After downloading, this web archive can be loaded and viewed
              directly in your browser via
              <a
                style="white-space: nowrap;"
                target="_blank"
                href="https://replayweb.page"
                >ReplayWeb.page</a
              >.
            </p>
            ${h?Y`
                  <a
                    href="${h}"
                    class="button is-primary mt-4"
                    @keyup="${je}"
                  >
                    <span class="icon is-small">
                      <fa-icon
                        size="1.0em"
                        aria-hidden="true"
                        .svg="${wt}"
                      ></fa-icon>
                    </span>
                    <span>Download Archive</span>
                  </a>
                  <hr class="dropdown-divider mt-4" />
                `:J}
            <h2 class="mt-4">Technical Information</h2>
            <div class="embed-info-drop-statscontainer mb-4">
              ${this.url?Y`
                    <h3>Original URL:</h3>
                    <p>
                      <a target="_blank" href="${this.url}">${this.url}</a>
                    </p>
                  `:J}
              <h3 class="mt-2">Archived On:</h3>
              <p>${p}</p>
              ${a?Y`
                    <h3 class="mt-2">Observed By:</h3>
                    <p>${a}</p>
                    ${u?Y` <p>
                          <a target="_blank" href="${u}"
                            >View Certificate</a
                          >
                        </p>`:""}
                  `:d?Y` <h3 class="mt-2">Created With:</h3>
                    <p>${d}</p>`:""}
              ${!a&&c?Y` <h3 class="mt-2">Observer Public Key:</h3>
                    <p class="show-key">${c}</p>`:""}
              <h3 class="mt-2">Validation:</h3>
              ${r>0||n>0?Y` <p>
                    ${r} hashes
                    verified${n?Y`, ${n} invalid`:""}
                  </p>`:Y` <p>Not Available</p> `}
              <h3 class="mt-2">Package Hash:</h3>
              <p class="show-hash">${l}</p>
              ${null!=(null===(o=this.collInfo)||void 0===o?void 0:o.size)?Y`
                    <h3 class="mt-2">Size</h3>
                    <p>${St()(Number(this.collInfo.size||0))}</p>
                  `:J}
            </div>
            ${h?Y``:""}
            <div
              class="is-size-7 is-flex is-justify-content-space-between is-align-items-center"
              style="margin-top: 40px"
            >
              <div>
                <a
                  target="_blank"
                  href="https://webrecorder.net/"
                  aria-label="Webrecorder"
                >
                  <fa-icon
                    size=""
                    height="1rem"
                    width="10rem"
                    .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1142 96"><path d="M29.438 24.438C22.474 29.935 18 38.449 18 48c0 16.557 13.443 30 30 30h26c16.557 0 30-13.443 30-30v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7c0 26.492-21.508 48-48 48H48C21.508 96 0 74.492 0 48c0-14.517 6.458-27.539 16.657-36.343l-9.95-9.95A1.002 1.002 0 0 1 7.414 0H40a1 1 0 0 1 1 1v32.586a1.002 1.002 0 0 1-1.707.707z" fill="#088eaf"/><path d="M144.562 71.562C151.526 66.065 156 57.551 156 48c0-16.557-13.443-30-30-30h-26c-16.557 0-30 13.443-30 30v7a2 2 0 0 1-2 2H54a2 2 0 0 1-2-2v-7c0-26.492 21.508-48 48-48h26c26.492 0 48 21.508 48 48 0 14.517-6.458 27.539-16.657 36.343l9.95 9.95a1.002 1.002 0 0 1-.707 1.707H134a1 1 0 0 1-1-1V62.414a1.002 1.002 0 0 1 1.707-.707z" fill="#4d7c0f"/><path d="M240.497 94.685h-16.175L212.355 6.97V1.315h20.646l6.822 53.477L254.7 16.044h8.548l14.645 38.009 7.053-52.738h20.384V6.97l-11.836 87.715h-16.57l-17.753-43.003-.329-1.055-.329 1.055zm138.387 0h-57.731V1.315h57.731v18.674h-36.559v20.515h33.535v14.86h-33.535v20.647h36.559zm63.438 0h-45.239V1.315h45.633q11.836 0 18.148 5.918 6.313 5.786 6.313 15.912 0 8.416-5.392 14.992-2.975 3.719-7.296 6.596 5.51 2.372 9.005 6.423 5.787 6.707 5.787 17.096 0 12.23-6.839 19.332-6.837 7.101-20.12 7.101m-24.066-40.11v23.672h19.989q4.734 0 7.102-2.894 2.498-3.024 2.498-8.679 0-5.786-2.498-8.943-2-2.63-5.429-3.156zm0-37.348v24.198h21.324a20.7 20.7 0 0 0 4.32-5.524 16.46 16.46 0 0 0 1.973-7.89q0-4.866-2.499-7.759-2.367-3.025-6.575-3.025zm89.927 46.291v31.167h-21.172V1.315h41.687q14.334 0 21.699 7.101 7.496 7.102 7.496 19.726 0 10.653-5.655 18.674-3.677 5.254-9.57 10.041l15.882 32.831v4.997h-20.778l-16.537-31.167zm0-45.502v30.378h19.843a19.7 19.7 0 0 0 5.933-6.838q2.63-4.734 2.63-10.783 0-6.181-2.893-9.469-2.762-3.288-8.022-3.288zm125.974 76.669h-57.732V1.315h57.732v18.674h-36.559v20.515h33.534v14.86h-33.534v20.647h36.559zM688.783 96q-13.151 0-22.225-4.734-9.074-4.866-13.94-15.518T647.753 48t4.997-27.748 14.203-15.386Q676.158 0 689.046 0q5.26 0 9.994.526 4.734.527 8.811 1.71l-2.893 18.016q-6.18-1.315-13.545-1.315-7.496 0-12.493 3.025-4.866 3.024-7.496 9.468-2.499 6.312-2.499 16.57t2.499 16.701q2.499 6.444 7.364 9.469 4.866 2.893 11.967 2.893 7.496 0 14.598-1.447l2.893 18.148a67 67 0 0 1-9.337 1.71q-4.735.526-10.126.526m69.046 0q-12.361 0-20.778-4.734-8.285-4.734-12.625-15.255-4.34-10.52-4.34-27.88 0-17.49 4.34-28.011 4.34-10.652 12.625-15.386Q745.467 0 757.829 0t20.515 4.734q8.285 4.734 12.625 15.386 4.471 10.521 4.471 28.011 0 17.228-4.34 27.748-4.34 10.521-12.756 15.387Q770.059 96 757.829 96m0-16.833q5.26 0 8.811-2.499 3.55-2.63 5.523-9.337 2.104-6.837 2.104-19.2 0-12.23-2.104-19.068-1.972-6.97-5.523-9.6-3.55-2.762-8.811-2.63-5.523.131-9.206 2.761-3.55 2.5-5.523 9.337-1.84 6.839-1.841 19.2 0 12.363 1.973 19.2 1.972 6.839 5.523 9.337 3.682 2.499 9.074 2.499m75.392-15.649v31.167h-21.172V1.315h41.687q14.334 0 21.699 7.101 7.496 7.102 7.496 19.726 0 10.653-5.655 18.674-3.677 5.254-9.57 10.041l15.882 32.831v4.997H862.81l-16.537-31.167zm0-45.502v30.378h19.843a19.7 19.7 0 0 0 5.933-6.838q2.63-4.734 2.63-10.783 0-6.181-2.893-9.469-2.763-3.288-8.022-3.288zm101.513 76.669h-33.271V1.315h33.797q11.968 0 20.253 4.997 8.416 4.866 12.756 15.387 4.471 10.389 4.471 26.827 0 16.044-4.471 26.301-4.34 10.258-12.756 15.124-8.416 4.734-20.779 4.734m-12.098-76.537v59.704h11.704q5.785 0 9.6-3.288 3.813-3.287 5.655-9.731 1.84-6.576 1.841-16.307 0-14.992-4.208-22.619-4.209-7.76-12.888-7.759zM1047.2 94.685h-57.735V1.315h57.735v18.674h-36.56v20.515h33.53v14.86h-33.53v20.647h36.56zm39.37-31.167v31.167h-21.18V1.315h41.69c9.56 0 16.79 2.367 21.7 7.101q7.5 7.102 7.5 19.726c0 7.102-1.89 13.326-5.66 18.674q-3.675 5.254-9.57 10.041l15.88 32.831v4.997h-20.77l-16.54-31.167zm0-45.502v30.378h19.84a19.65 19.65 0 0 0 5.93-6.838c1.76-3.156 2.63-6.751 2.63-10.783 0-4.121-.96-7.277-2.89-9.469-1.84-2.192-4.51-3.288-8.02-3.288z" fill="currentColor"/></svg>'}
                    aria-label=""
                    aria-hidden="true"
                    style="color:#001219;"
                  ></fa-icon>
                </a>
              </div>
              <span>
                <a
                  class="has-text-black"
                  target="_blank"
                  href="https://github.com/webrecorder/replayweb.page"
                  aria-label="ReplayWeb.page source code"
                  >Source Code
                  <fa-icon
                    class="menu-logo ml-1"
                    size="1rem"
                    aria-hidden="true"
                    .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>'}
                  ></fa-icon>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    `}onEmbedDrop(e){e.stopPropagation(),this.active=!this.active}}e([we({type:Object})],zt.prototype,"collInfo",void 0),e([we({type:String})],zt.prototype,"ts",void 0),e([we({type:String})],zt.prototype,"url",void 0),e([we({type:Boolean})],zt.prototype,"active",void 0),customElements.define("rwp-embed-receipt",zt);var _t="undefined"!=typeof window?window:null,Ct=null===_t,Lt=Ct?void 0:_t.document,At="addEventListener",It="removeEventListener",Et="getBoundingClientRect",Pt="_a",Dt="_b",Tt="_c",Ft="horizontal",Rt=function(){return!1},Mt=Ct?"calc":["","-webkit-","-moz-","-o-"].filter((function(e){var t=Lt.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length})).shift()+"calc",Ut=function(e){return"string"==typeof e||e instanceof String},Ot=function(e){if(Ut(e)){var t=Lt.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},Bt=function(e,t,i){var o=e[t];return void 0!==o?o:i},Nt=function(e,t,i,o){if(t){if("end"===o)return 0;if("center"===o)return e/2}else if(i){if("start"===o)return 0;if("center"===o)return e/2}return e},qt=function(e,t){var i=Lt.createElement("div");return i.className="gutter gutter-"+t,i},jt=function(e,t,i){var o={};return Ut(t)?o[e]=t:o[e]=Mt+"("+t+"% - "+i+"px)",o},Ht=function(e,t){var i;return(i={})[e]=t+"px",i};const Wt=function(e,t){if(void 0===t&&(t={}),Ct)return{};var i,o,r,n,a,s,l=e;Array.from&&(l=Array.from(l));var c=Ot(l[0]).parentNode,d=getComputedStyle?getComputedStyle(c):null,h=d?d.flexDirection:null,u=Bt(t,"sizes")||l.map((function(){return 100/l.length})),p=Bt(t,"minSize",100),f=Array.isArray(p)?p:l.map((function(){return p})),b=Bt(t,"maxSize",1/0),m=Array.isArray(b)?b:l.map((function(){return b})),g=Bt(t,"expandToMin",!1),v=Bt(t,"gutterSize",10),w=Bt(t,"gutterAlign","center"),y=Bt(t,"snapOffset",30),x=Bt(t,"dragInterval",1),k=Bt(t,"direction",Ft),$=Bt(t,"cursor",k===Ft?"col-resize":"row-resize"),S=Bt(t,"gutter",qt),z=Bt(t,"elementStyle",jt),_=Bt(t,"gutterStyle",Ht);function C(e,t,o,r){var n=z(i,t,o,r);Object.keys(n).forEach((function(t){e.style[t]=n[t]}))}function L(){return s.map((function(e){return e.size}))}function A(e){return"touches"in e?e.touches[0][o]:e[o]}function I(e){var t=s[this.a],i=s[this.b],o=t.size+i.size;t.size=e/this.size*o,i.size=o-e/this.size*o,C(t.element,t.size,this[Dt],t.i),C(i.element,i.size,this[Tt],i.i)}function E(e){var i,o=s[this.a],r=s[this.b];this.dragging&&(i=A(e)-this.start+(this[Dt]-this.dragOffset),x>1&&(i=Math.round(i/x)*x),i<=o.minSize+y+this[Dt]?i=o.minSize+this[Dt]:i>=this.size-(r.minSize+y+this[Tt])&&(i=this.size-(r.minSize+this[Tt])),i>=o.maxSize-y+this[Dt]?i=o.maxSize+this[Dt]:i<=this.size-(r.maxSize-y+this[Tt])&&(i=this.size-(r.maxSize+this[Tt])),I.call(this,i),Bt(t,"onDrag",Rt)(L()))}function P(){var e=s[this.a].element,t=s[this.b].element,o=e[Et](),a=t[Et]();this.size=o[i]+a[i]+this[Dt]+this[Tt],this.start=o[r],this.end=o[n]}function D(e){var t=function(e){if(!getComputedStyle)return null;var t=getComputedStyle(e);if(!t)return null;var i=e[a];return 0===i?null:i-=k===Ft?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)}(c);if(null===t)return e;if(f.reduce((function(e,t){return e+t}),0)>t)return e;var i=0,o=[],r=e.map((function(r,n){var a=t*r/100,s=Nt(v,0===n,n===e.length-1,w),l=f[n]+s;return a<l?(i+=l-a,o.push(0),l):(o.push(a-l),a)}));return 0===i?e:r.map((function(e,r){var n=e;if(i>0&&o[r]-i>0){var a=Math.min(i,o[r]-i);i-=a,n=e-a}return n/t*100}))}function T(){var e=this,i=s[e.a].element,o=s[e.b].element;e.dragging&&Bt(t,"onDragEnd",Rt)(L()),e.dragging=!1,_t[It]("mouseup",e.stop),_t[It]("touchend",e.stop),_t[It]("touchcancel",e.stop),_t[It]("mousemove",e.move),_t[It]("touchmove",e.move),e.stop=null,e.move=null,i[It]("selectstart",Rt),i[It]("dragstart",Rt),o[It]("selectstart",Rt),o[It]("dragstart",Rt),i.style.userSelect="",i.style.webkitUserSelect="",i.style.MozUserSelect="",i.style.pointerEvents="",o.style.userSelect="",o.style.webkitUserSelect="",o.style.MozUserSelect="",o.style.pointerEvents="",e.gutter.style.cursor="",e.parent.style.cursor="",Lt.body.style.cursor=""}function F(e){if(!("button"in e)||0===e.button){var i=this,o=s[i.a].element,r=s[i.b].element;i.dragging||Bt(t,"onDragStart",Rt)(L()),e.preventDefault(),i.dragging=!0,i.move=E.bind(i),i.stop=T.bind(i),_t[At]("mouseup",i.stop),_t[At]("touchend",i.stop),_t[At]("touchcancel",i.stop),_t[At]("mousemove",i.move),_t[At]("touchmove",i.move),o[At]("selectstart",Rt),o[At]("dragstart",Rt),r[At]("selectstart",Rt),r[At]("dragstart",Rt),o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",i.gutter.style.cursor=$,i.parent.style.cursor=$,Lt.body.style.cursor=$,P.call(i),i.dragOffset=A(e)-i.end}}k===Ft?(i="width",o="clientX",r="left",n="right",a="clientWidth"):"vertical"===k&&(i="height",o="clientY",r="top",n="bottom",a="clientHeight"),u=D(u);var R=[];function M(e){var t=e.i===R.length,i=t?R[e.i-1]:R[e.i];P.call(i);var o=t?i.size-e.minSize-i[Tt]:e.minSize+i[Dt];I.call(i,o)}return s=l.map((function(e,t){var o,r={element:Ot(e),size:u[t],minSize:f[t],maxSize:m[t],i:t};if(t>0&&((o={a:t-1,b:t,dragging:!1,direction:k,parent:c})[Dt]=Nt(v,t-1==0,!1,w),o[Tt]=Nt(v,!1,t===l.length-1,w),"row-reverse"===h||"column-reverse"===h)){var n=o.a;o.a=o.b,o.b=n}if(t>0){var a=S(t,k,r.element);!function(e,t,o){var r=_(i,t,o);Object.keys(r).forEach((function(t){e.style[t]=r[t]}))}(a,v,t),o[Pt]=F.bind(o),a[At]("mousedown",o[Pt]),a[At]("touchstart",o[Pt]),c.insertBefore(a,r.element),o.gutter=a}return C(r.element,r.size,Nt(v,0===t,t===l.length-1,w),t),t>0&&R.push(o),r})),s.forEach((function(e){var t=e.element[Et]()[i];t<e.minSize&&(g?M(e):e.minSize=t)})),{setSizes:function(e){var t=D(e);t.forEach((function(e,i){if(i>0){var o=R[i-1],r=s[o.a],n=s[o.b];r.size=t[i-1],n.size=e,C(r.element,r.size,o[Dt],r.i),C(n.element,n.size,o[Tt],n.i)}}))},getSizes:L,collapse:function(e){M(s[e])},destroy:function(e,t){R.forEach((function(o){if(!0!==t?o.parent.removeChild(o.gutter):(o.gutter[It]("mousedown",o[Pt]),o.gutter[It]("touchstart",o[Pt])),!0!==e){var r=z(i,o.a.size,o[Dt]);Object.keys(r).forEach((function(e){s[o.a].element.style[e]="",s[o.b].element.style[e]=""}))}}))},parent:c,pairs:R}};var Vt="";function Gt(e){Vt=e}var Kt={name:"default",resolver:e=>function(e=""){if(!Vt){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)Gt(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let i="";t&&(i=t.getAttribute("src")),Gt(i.split("/").slice(0,-1).join("/"))}}return Vt.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},Yt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Zt={name:"system",resolver:e=>e in Yt?`data:image/svg+xml,${encodeURIComponent(Yt[e])}`:""},Qt=[Kt,Zt],Jt=[];function Xt(e){return Qt.find((t=>t.name===e))}var ei,ti=Object.defineProperty,ii=Object.defineProperties,oi=Object.getOwnPropertyDescriptor,ri=Object.getOwnPropertyDescriptors,ni=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,si=Object.prototype.propertyIsEnumerable,li=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ci=(e,t,i)=>t in e?ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,di=(e,t)=>{for(var i in t||(t={}))ai.call(t,i)&&ci(e,i,t[i]);if(ni)for(var i of ni(t))si.call(t,i)&&ci(e,i,t[i]);return e},hi=(e,t)=>ii(e,ri(t)),ui=(e,t,i,o)=>{for(var r,n=o>1?void 0:o?oi(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o?r(t,i,n):r(n))||n);return o&&n&&ti(t,i,n),n},pi=function(e,t){this[0]=e,this[1]=t},fi=e=>{var t,i=e[li("asyncIterator")],o=!1,r={};return null==i?(i=e[li("iterator")](),t=e=>r[e]=t=>i[e](t)):(i=i.call(e),t=e=>r[e]=t=>{if(o){if(o=!1,"throw"===e)throw t;return t}return o=!0,{done:!1,value:new pi(new Promise((o=>{var r=i[e](t);if(!(r instanceof Object))throw TypeError("Object expected");o(r)})),1)}}),r[li("iterator")]=()=>r,t("next"),"throw"in i?t("throw"):r.throw=e=>{throw e},"return"in i&&t("return"),r};!function(e,t){!function(e){Qt=Qt.filter((t=>t.name!==e))}(e),Qt.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),Jt.forEach((t=>{t.library===e&&t.setIcon()}))}("system",{resolver:e=>"x-lg"===e?Zt.resolver(e):""});let bi=ei=class extends fe{static get styles(){return Be(ei.compStyles)}static get compStyles(){return d`
      :host {
        min-width: unset; /* @todo(emma, 2023-11-06) see about removing this, if the min-width set on all web components is unnecessary */
      }

      /* @todo(emma, 2023-11-06) add option for monospace treatment, rather than making everything mono. this could also be a class on the host element? */
      .col-content {
        font-family: monospace;
        font-size: 14px;
        color: #1f2937;
        display: flex;
        align-items: center;
      }
      .minihead {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }
    `}render(){return Y`${this.label?Y`<p class="minihead">${this.label}</p>`:J}
      <div class="col-content">
        <slot></slot>
        ${this.copy?Y` <sl-copy-button .value=${this.copy||""}>
              <fa-icon
                slot="copy-icon"
                .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"/></svg>'}
                aria-hidden="true"
              ></fa-icon>
              <fa-icon
                slot="success-icon"
                .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>'}
                aria-hidden="true"
              ></fa-icon>
              <fa-icon
                slot="error-icon"
                .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>'}
                aria-hidden="true"
              ></fa-icon>
            </sl-copy-button>`:J}
      </div>`}};e([we({type:String})],bi.prototype,"copy",void 0),e([we({type:String})],bi.prototype,"label",void 0),e([we({type:String})],bi.prototype,"class",void 0),bi=ei=e([me("wr-labeled-field")],bi);class mi extends fe{constructor(){super(...arguments),this.item=null,this.detailed=!1,this.canDelete=!1}static get styles(){return Be(mi.compStyles)}static get compStyles(){return d`
      .columns {
        width: 100%;
      }
      .column {
        word-break: break-word;
        position: relative;
      }

      :host {
        width: 100%;
        height: 100%;
        min-width: 0px;
      }

      :host(.is-list) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.is-list) .column {
        width: 100% !important;
        flex: 1 1 auto;
      }

      .col-title:hover {
      }
      .col-title a {
        display: block;
        height: 100%;
      }
      .column:hover > .copy,
      .col-content:hover .copy,
      .copy:hover {
        color: inherit;
      }
      .copy {
        color: black;
        margin: 0px;
        margin: -4px 0 0;
        line-height: 0.4em;
        padding: 6px;
        border-radius: 10px;
        position: absolute;
      }
      .copy:active {
        background-color: lightgray;
      }
      .col-content {
        font-family: monospace;
        font-size: 14px;
        color: #1f2937;
      }
      .minihead {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }
    `}renderSource(e=!0){const t=this.item;return Y`
      <wr-labeled-field
        label="Source"
        copy="${t.sourceUrl}"
        class="column is-4"
        >${t.sourceUrl&&(t.sourceUrl.startsWith("http://")||t.sourceUrl.startsWith("https://"))?Y` <a href="${t.sourceUrl}">${t.sourceUrl}</a> `:Y` ${t.sourceUrl}`}
        ${t.sourceUrl&&t.sourceUrl.startsWith("googledrive://")?Y` <i>(${t.filename})</i>`:J}
      </wr-labeled-field>
      ${e?Y`<wr-labeled-field
            label="Archived Item ID"
            .copy=${t.coll}
            class="column"
          >
            ${t.coll||"No ID"}
          </wr-labeled-field>`:J}
      <wr-labeled-field label="Date Loaded" class="column is-2">
        ${t.ctime?new Date(t.ctime).toLocaleString():J}
      </wr-labeled-field>
      <wr-labeled-field label="Total Size" class="column is-2">
        ${St()(Number(t.totalSize||t.size||0))}
      </wr-labeled-field>
    `}renderSummaryView(){const e=this.item;return Y` <div class="columns">
      <div class="column col-title is-4">
        <span class="subtitle has-text-weight-bold">
          <a href="?source=${encodeURIComponent(e.sourceUrl)}"
            >${e.name||e.title||e.filename}</a
          >
        </span>
      </div>
      ${this.renderSource(!1)}
    </div>`}renderDetailed(){const e=this.item,{numValid:t=0,numInvalid:i=0,domain:o,certFingerprint:r,datapackageHash:n,publicKey:a,software:s}=this.item.verify||{},l=r?`https://crt.sh/?q=${r}`:"";return Y` <div class="columns">
      ${e.name||e.title?Y`<wr-labeled-field label="Title" class="column">
            ${e.name||e.title}
          </wr-labeled-field>`:J}
      <wr-labeled-field label="Filename" class="column">
        ${e.filename}
      </wr-labeled-field>
      ${e.resources?Y`<wr-labeled-field label="Files" class="column">
            <ol style="padding: revert">
              ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(e,t){if(void 0!==e){let i=0;for(const o of e)yield t(o,i++)}}(e.resources,(e=>Y`<li>
                    <a href="${e.path}">${e.name+"\n"}</a>
                  </li>`))}
            </ol>
          </wr-labeled-field>`:J}
      ${this.renderSource()}
      ${o?Y`
            <wr-labeled-field label="Observed By" class="column">
              <p>${o}</p>
              ${l?Y`<span
                    ><a target="_blank" href="${l}"
                      >&nbsp;View Certificate</a
                    ></span
                  >`:J}
            </wr-labeled-field>
          `:J}
      ${s?Y`
            <wr-labeled-field label="Created With" class="column">
              ${s||"Unknown"}
            </wr-labeled-field>
          `:J}

      <wr-labeled-field label="Validation" class="column">
        ${t>0||i>0?Y` <p>
              ${t} hashes
              verified${i?Y`, ${i} invalid`:J}
            </p>`:Y` Not Available`}
      </wr-labeled-field>

      <wr-labeled-field
        label="Package Hash"
        class="column"
        .copy=${n}
      >
        ${n||"Not Available"}
      </wr-labeled-field>

      <wr-labeled-field
        label="Observer Public Key"
        class="column"
        .copy=${a}
      >
        ${a||"Not Available"}
      </wr-labeled-field>

      <wr-labeled-field label="Loading Mode" class="column">
        ${e.onDemand?"Download On-Demand":"Fully Local"}
      </wr-labeled-field>
    </div>`}render(){return this.detailed?this.renderDetailed():this.renderSummaryView()}onCopy(e,t){return e.preventDefault(),e.stopPropagation(),t&&navigator.clipboard.writeText(t),!1}onPurge(e){const t={reload:e};this.dispatchEvent(new CustomEvent("item-purge",{detail:t}))}}e([we({type:Object})],mi.prototype,"item",void 0),e([we({type:Boolean})],mi.prototype,"detailed",void 0),e([we({type:Boolean})],mi.prototype,"canDelete",void 0),customElements.define("wr-item-info",mi);const gi="search://";class vi extends fe{constructor(){super(),this.inited=!1,this.sourceUrl=null,this.loadInfo=null,this.showSidebar=null,this.itemInfo=null,this.item="",this.hasStory=!1,this.isLoading=!1,this.tabData={},this.url="",this.ts="",this.isFullscreen=null,this.menuActive=!1,this.embed=null,this.embedDropdownActive=!1,this.editable=!1,this.browsable=!0,this.clearable=!0,this.isVisible=!0,this.favIconUrl="",this.appName="ReplayWeb.page",this.appVersion=qe,this.autoUpdateInterval=10,this.swName=null,this.replayNotFoundError=!1,this.multiTs=[],this.splitter=null,this._replaceLoc=!1,this._locUpdateNeeded=!1,this._locationHash="",this._autoUpdater=null,this.archiveInfoDialog=dt(),this.tabNames=["pages","story","resources","info"],this.tabLabels={pages:"Pages",story:"Story",resources:"URLs"},this._lastUrlUpdate=null,this.showSidebar="1"===localStorage.getItem("pages:showSidebar")&&this.browsable}firstUpdated(){this.inited=!0,window.addEventListener("hashchange",(()=>this.onHashChange())),this.addEventListener("fullscreenchange",(()=>{this.isFullscreen=!!document.fullscreenElement})),this.embed&&this.loadInfo&&this.loadInfo.hideOffscreen&&(this.observer=new IntersectionObserver((e=>{this.isVisible=e[0].isIntersecting})),this.observer.observe(this)),this.embed&&window.addEventListener("message",(e=>{e.source===window.parent&&"fullReload"===e.data.type&&this.deleteFully(!0)}))}runUpdateLoop(){var e;return t(this,void 0,void 0,(function*(){try{for(;this.editable&&this.autoUpdateInterval&&(!(null===(e=this.itemInfo)||void 0===e?void 0:e.pages)||this.itemInfo.pages.length<100);)yield new Promise((e=>setTimeout(e,1e3*this.autoUpdateInterval))),yield this.doUpdateInfo(!0)}finally{this._autoUpdater=null}}))}getMultiTimestamps(){return t(this,void 0,void 0,(function*(){if(!this.tabData.url)return;const e=yield fetch(Me+"/c/"+this.item+"/ts/?url="+window.encodeURIComponent(this.tabData.url));if(200!==e.status)return void(this.multiTs=[]);const t=yield e.json();this.multiTs=t.timestamps}))}willUpdate(e){if(e.has("tabData")){const t={};Object.entries(this.tabData).forEach((([e,i])=>{i&&(t[e]=i)})),this.tabData=t;const i=e.get("tabData");this.tabData.url&&this.tabData.url!==(null==i?void 0:i.url)&&this.getMultiTimestamps()}}updated(e){var t;if(e.has("sourceUrl")&&this.doUpdateInfo(),e.has("editable")&&this.editable&&this.autoUpdateInterval&&!this._autoUpdater&&(this._autoUpdater=this.runUpdateLoop()),e.has("tabData")){if(!(null===(t=this.itemInfo)||void 0===t?void 0:t.coll))return;const i="#"+new URLSearchParams(this.tabData).toString();if(this.tabData.url||(this.url=gi+decodeURIComponent(this._paramsToString(this.tabData))),i!==this._locationHash){if(this._locationHash=i,this._replaceLoc||0===Object.keys(e.get("tabData")||{}).length){const e=new URL(window.location.href);e.hash=this._locationHash,window.history.replaceState({},"",e.href),this._replaceLoc=!1}else if(window.location.hash=this._locationHash,!this.showSidebar){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.focus()}if(this.embed&&window.parent!==window){const{url:e,ts:t,view:i,query:o,title:r}=this.tabData,n=this._lastUrlUpdate,a=this.replayNotFoundError;if(!n||n.url!==e||n.ts!==t||n.view!==i||n.query!==o||n.title!==r){const n={type:"urlchange",url:e,ts:t,view:i,query:o,title:r,replayNotFoundError:a};window.parent.postMessage(n,"*"),this._lastUrlUpdate=n}}}this._locUpdateNeeded=!1}e.has("showSidebar")&&(this.embed||localStorage.setItem("pages:showSidebar",this.showSidebar?"1":"0")),(e.has("tabData")||e.has("showSidebar"))&&this.configureSplitter()}configureSplitter(){if(this.tabData.url&&this.showSidebar){const e=this.renderRoot.querySelector("#contents"),t=this.renderRoot.querySelector("wr-coll-replay");if(e&&t&&!this.splitter){const i={sizes:[30,70],minSize:[300,300],gutterSize:4,onDragStart(){t.setDisablePointer(!0)},onDragEnd(){t.setDisablePointer(!1)}};this.splitter=Wt([e,t],i)}}else if(this.splitter){try{this.splitter.destroy()}catch(e){}this.splitter=null}}doUpdateInfo(e=!1){var i,o,r,n;return t(this,void 0,void 0,(function*(){if(e&&this.tabData.url&&!this.showSidebar)return;let t=null===(i=this.loadInfo)||void 0===i?void 0:i.customColl;if(!t){t=(yield vt(this.sourceUrl)).item}this.item=t;const a=Me+"/c/"+t,s=Ue+"/"+t,l=yield fetch(a+"?all=1");if(200!=l.status)return void(this.itemInfo={});const c=yield l.json();if(this.itemInfo=Object.assign({apiPrefix:a,replayPrefix:s,coll:t},c),null===(r=null===(o=this.loadInfo)||void 0===o?void 0:o.extraConfig)||void 0===r?void 0:r.headers){const e=this.loadInfo.extraConfig.headers;yield fetch(`${a}/updateAuth`,{method:"POST",body:JSON.stringify({headers:e})})}this.itemInfo.title||(this.itemInfo.title=this.itemInfo.filename),"replayonly"!==this.embed&&"replay-with-info"!==this.embed||(this.showSidebar=!1),this.hasStory=Boolean(this.itemInfo.desc||(null===(n=this.itemInfo.lists)||void 0===n?void 0:n.length)),this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{collInfo:this.itemInfo,alreadyLoaded:!0}})),this.onHashChange()}))}onItemLoaded(e){this.doUpdateInfo(),this.loadInfo=null,e.detail.sourceUrl&&(this.sourceUrl=e.detail.sourceUrl),this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{sourceUrl:this.sourceUrl,collInfo:this.itemInfo}}))}onItemUpdate(e){this.editable&&(this.itemInfo=Object.assign(Object.assign({},this.itemInfo),e.detail))}onHashChange(){var e,t,i;const o=window.location.hash;if(o&&o!==this._locationHash&&(this.tabData=Object.fromEntries(new URLSearchParams(o.slice(1)).entries()),this._locationHash=o),(null===(e=this.itemInfo)||void 0===e?void 0:e.coll)&&(!this.tabData.view||!this.tabNames.includes(this.tabData.view))){const e=this.hasStory?"story":this.editable||(null===(t=this.itemInfo.pages)||void 0===t?void 0:t.length)?"pages":"resources";this.tabData=Object.assign(Object.assign({},this.tabData),{view:e})}if(this.tabData.url&&this.tabData.url.startsWith("page:")){const e=Number(this.tabData.url.slice(5));if((null===(i=this.itemInfo)||void 0===i?void 0:i.pages)&&!isNaN(e)&&e<this.itemInfo.pages.length){const t=this.itemInfo.pages[e];this.tabData.url=t.url,this.tabData.ts=bt(t).timestamp}}this.hasStory||"story"!==this.tabData.view||(this.tabData.view="pages"),this.tabData.url&&this.tabData.query&&this.browsable&&(this.showSidebar=!0)}onTabClick(e){e.preventDefault();const t=e.currentTarget.getAttribute("href");return this.tabData=Object.assign(Object.assign({},this.tabData),{view:t.slice(1)}),!1}onItemTabNav(e){if(e.detail.reload)return void this.onRefresh(null,!0);const t=e.target.id,{data:i,replaceLoc:o,replayNotFoundError:r}=e.detail;this.replayNotFoundError=r,(t===this.tabData.view||"replay"===t&&this.tabData.url||this.showSidebar&&this.tabData.url)&&this.updateTabData(i,o)}updateTabData(e,t=!1){this.tabData=Object.assign(Object.assign({},this.tabData),e),this.tabData.url&&(this.url=this.tabData.url||""),this.tabData.ts&&(this.ts=this.tabData.ts||""),this._replaceLoc=!this._locUpdateNeeded&&t,this._locUpdateNeeded=!0}static get styles(){return Be(vi.compStyles)}static get compStyles(){return d`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-width: 0px;
      }

      .icon {
        vertical-align: text-top;
      }

      .back fa-icon {
        width: 1.5em;
        vertical-align: bottom;
        line-height: 0.5em;
      }

      li.is-active {
        font-weight: bold;
      }

      .tab-label {
        display: inline;
      }

      @media screen and (max-width: ${Ne?d`1163px`:d`1053px`}) {
        .tab-label {
          display: none;
        }

        .main.tabs span.icon {
          margin: 0px;
        }
      }

      .main.tabs {
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
        overflow: unset;
      }

      .main.tabs ul {
        position: relative;
      }

      .main.tabs li {
        line-height: 1.5;
        padding: 6px 0 4px 0;
      }

      @media screen and (max-width: 319px) {
        .main.tabs li a {
          padding-right: 4px;
          padding-left: 4px;
        }
      }

      .sidebar.main.tabs li a {
        padding-right: 6px;
        padding-left: 6px;
      }

      #contents {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 0px;
        flex: auto;
        background-color: white;
      }

      #tabContents {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height: 0px;
        flex: auto;
      }

      rwp-embed-receipt {
        flex-direction: column;
        display: flex;
      }

      ${zt.embedStyles}

      ${vi.replayBarStyles}
    `}static get replayBarStyles(){return d`
      .breadbar {
        display: flex;
        align-items: center;
        height: 35px;
        width: 100%;
        background-color: aliceblue;
        padding: 0.5em;
      }

      .replay-bar {
        padding: 0.5em;
        max-width: none;
        border-bottom: solid 0.1rem #97989a;
        width: 100%;
        background-color: white;
      }

      input#url {
        border-radius: 4px;
      }

      .favicon img {
        width: 20px;
        height: 20px;
        margin: 8px;
        /*filter: drop-shadow(1px 1px 2px grey);*/
      }

      #datetime {
        position: absolute;
        right: 0.5rem;
        z-index: 10;
        background: #fff;
        top: 1px;
        bottom: 1px;
        display: flex;
        align-items: center;
        line-height: 2;
      }

      /* Gradient to indicate URL clipping */
      #datetime:before {
        content: "";
        position: absolute;
        top: 0;
        width: 2em;
        height: 100%;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          #fff 50%,
          #fff
        );
        pointer-events: none;
      }

      .timestamp-dropdown-btn {
        all: unset;
        cursor: pointer;
        display: flex;
        gap: var(--sl-spacing-x-small);
        align-items: center;
        transition: background-color var(--sl-transition-fast);
        color: var(--sl-color-neutral-600);
      }

      .timestamp-dropdown-btn:hover {
        color: var(--sl-color-neutral-900);
      }

      .timestamp-dropdown-btn:hover .timestamp-count-badge {
        background-color: var(--sl-color-blue-600);
      }

      .timestamp-count-badge {
        display: inline-flex;
        gap: var(--sl-spacing-2x-small);
        background-color: var(--sl-color-blue-500);
        color: var(--sl-color-neutral-0);
        line-height: 1;
        padding: var(--sl-spacing-3x-small) var(--sl-spacing-x-small);
        border-radius: var(--sl-border-radius-small);
        transition: background-color var(--sl-transition-fast);
      }

      .timestamp-count {
        font-weight: 600;
        transform: translateY(0.075em);
      }

      .timestamp-menu-item[aria-selected="true"]::part(label) {
        color: var(--sl-color-blue-600);
      }

      .menu-head {
        font-size: 10px;
        font-weight: bold;
        display: block;
      }
      .menu-logo {
        vertical-align: middle;
      }
      .menu-version {
        font-size: 10px;
      }
      .dropdown-item.info {
        font-style: italic;
      }

      input:focus + #datetime {
        display: none;
      }

      .grey-disabled {
        --fa-icon-fill-color: lightgrey;
        color: lightgrey;
      }

      .replay-bar .button:focus {
        box-shadow: none;
      }

      .is-borderless {
        border: 0px;
      }

      .narrow {
        padding: calc(0.5em - 1px) 0.8em;
      }

      form {
        width: 100%;
        margin: 0 0 0 0.5em;
      }

      .gutter.gutter-horizontal {
        cursor: col-resize;
        float: left;
        background-color: rgb(151, 152, 154);
      }

      .gutter.gutter-horizontal:hover {
        cursor: col-resize;
      }

      main,
      wr-coll-replay {
        width: 100%;
      }

      .is-list {
        height: fit-content;
      }

      #contents.full-pages {
        width: 100% !important;
      }

      .sidebar-nav {
        position: absolute;
        vertical-align: middle;
      }

      .sidebar-nav a {
        display: inline-block;
        border-bottom: 0px;
      }

      .sidebar-nav span.nav-hover {
        font-size: smaller;
        display: none;
      }

      .sidebar-nav:hover span.nav-hover,
      .sidebar-nav:focus-within span.nav-hover {
        display: initial;
        color: rgb(72, 118, 255);
      }

      .sidebar-nav fa-icon {
        vertical-align: bottom;
      }

      .sidebar-nav:hover fa-icon {
        color: rgb(72, 118, 255);
      }

      .sidebar-nav.left {
        left: 8px;
      }

      .sidebar-nav.right {
        right: 8px;
      }

      /* Since the replay sometimes programmatically receives keyboard focus,
       and that is visually unexpected for mouse-users, and since this won't
       particularly trip up keyboard users, just remove the focus style. */
      wr-coll-replay:focus {
        outline: none;
      }
      /* Some keyboard-users may see this replacement style */
      wr-coll-replay:focus-visible {
        outline: 1px solid rgb(72, 118, 255);
      }
    `}render(){var e;if(!this.inited)return Y``;const t=!!this.tabData.url,i=t&&this.showSidebar;if(!t&&(null===(e=this.tabData)||void 0===e?void 0:e.view)){const e={title:this.tabLabels[this.tabData.view],replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}return this.itemInfo&&!this.itemInfo.coll?Y` <wr-loader
        .loadInfo="${this.loadInfo}"
        embed="${this.embed||""}"
        swName="${$e(null===this.swName?void 0:this.swName)}"
        .coll="${this.item}"
        sourceUrl="${this.sourceUrl||""}"
        @coll-loaded=${this.onItemLoaded}
      ></wr-loader>`:this.itemInfo?Y`
        ${this.renderLocationBar()} ${this.renderVerifyInfo()}
        <sl-dialog label="Archive Info" ${pt(this.archiveInfoDialog)}>
          ${this.renderItemInfo()}
          <sl-button
            slot="footer"
            variant="primary"
            @click="${this.onHideInfoDialog}"
            >Close</sl-button
          >
        </sl-dialog>
        <div id="tabContents">
          <div
            id="contents"
            class="is-light ${i?"sidebar":t?"is-hidden":"full-pages"}"
            role="${$e(i?"complementary":void 0)}"
            aria-label="${i?"Browse Contents":""}"
          >
            ${this.renderTabHeader(i)}
            ${i||!t?this.renderItemTabs(i):Y``}
          </div>

          ${t&&this.isVisible?Y`
                <wr-coll-replay
                  role="main"
                  tabindex="-1"
                  .collInfo="${this.itemInfo}"
                  sourceUrl="${this.sourceUrl||""}"
                  url="${this.tabData.url||""}"
                  ts="${this.tabData.ts||""}"
                  @coll-tab-nav="${this.onItemTabNav}"
                  id="replay"
                  @replay-loading="${this.onReplayLoading}"
                  @replay-favicons="${this.onFavIcons}"
                >
                </wr-coll-replay>
              `:""}
        </div>
      `:Y``}renderTabHeader(e){return Y` <nav
      class="main tabs is-centered ${e?"sidebar":""}"
      aria-label="tabs"
    >
      <ul>
        ${e?Y` <li class="sidebar-nav left">
              <a
                role="button"
                href="#"
                @click="${this.onHideSidebar}"
                @keyup="${je}"
                class="is-marginless is-size-6 is-paddingless"
              >
                <fa-icon
                  title="Hide"
                  .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>'}"
                  aria-hidden="true"
                ></fa-icon>
                <span class="nav-hover" aria-hidden="true">Hide</span>
                <span class="is-sr-only">Hide Sidebar</span>
              </a>
            </li>`:""}
        ${this.hasStory?Y` <li
              class="${"story"===this.tabData.view?"is-active":""}"
            >
              <a
                @click="${this.onTabClick}"
                href="#story"
                class="is-size-6"
                aria-label="Story"
                aria-current="${$e("story"===this.tabData.view?"location":void 0)}"
              >
                <span class="icon"
                  ><fa-icon
                    .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/></svg>'}"
                    aria-hidden="true"
                    title="Story"
                  ></fa-icon
                ></span>
                <span
                  class="tab-label ${e?"is-hidden":""}"
                  title="Story"
                  >Story</span
                >
              </a>
            </li>`:""}

        <li class="${"pages"===this.tabData.view?"is-active":""}">
          <a
            @click="${this.onTabClick}"
            href="#pages"
            class="is-size-6"
            aria-label="Pages"
            aria-current="${$e("pages"===this.tabData.view?"location":void 0)}"
          >
            <span class="icon"
              ><fa-icon
                .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/></svg>'}"
                aria-hidden="true"
                title="Pages"
              ></fa-icon
            ></span>
            <span class="tab-label" title="Pages">Pages</span>
          </a>
        </li>

        <li class="${"resources"===this.tabData.view?"is-active":""}">
          <a
            @click="${this.onTabClick}"
            href="#resources"
            class="is-size-6"
            aria-label="URLs"
            aria-current="${$e("resources"===this.tabData.view?"location":void 0)}"
          >
            <span class="icon"
              ><fa-icon
                .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"/></svg>'}"
                aria-hidden="true"
                title="Resources"
              ></fa-icon
            ></span>
            <span class="tab-label" title="Resources">Resources</span>
          </a>
        </li>

        ${e?Y` <li class="sidebar-nav right">
              <a
                role="button"
                href="#"
                @click="${this.onFullPageView}"
                @keyup="${je}"
                class="is-marginless is-size-6 is-paddingless"
              >
                <span class="nav-hover" aria-hidden="true">Expand</span>
                <span class="is-sr-only">Expand Sidebar to Full View</span>
                <fa-icon
                  title="Expand"
                  .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>'}"
                  aria-hidden="true"
                ></fa-icon>
              </a>
            </li>`:""}
      </ul>
    </nav>`}renderToolbarLeft(){const e=!!this.tabData.url;return Y` ${this.browsable?Y` <a
            href="#"
            role="button"
            class="button narrow is-borderless is-hidden-mobile ${e?"":"grey-disabled"}"
            @click="${this.onShowPages}"
            @keyup="${je}"
            ?disabled="${!e}"
            title="Browse Contents"
            aria-label="Browse Contents"
            aria-controls="contents"
          >
            <span class="icon is-small">
              <fa-icon
                size="1.0em"
                class="has-text-grey"
                aria-hidden="true"
                .svg="${yt}"
              ></fa-icon>
            </span>
          </a>`:""}
      <a
        href="#"
        role="button"
        class="button narrow is-borderless"
        @click="${this.onGoBack}"
        @keyup="${je}"
        title="Back"
        aria-label="Back"
      >
        <span class="icon is-small">
          <fa-icon
            size="1.0em"
            class="has-text-grey"
            aria-hidden="true"
            .svg="${Ke}"
          ></fa-icon>
        </span>
      </a>
      <a
        href="#"
        role="button"
        class="button narrow is-borderless"
        @click="${this.onGoForward}"
        @keyup="${je}"
        title="Forward"
        aria-label="Forward"
      >
        <span class="icon is-small">
          <fa-icon
            size="1.0em"
            class="has-text-grey"
            aria-hidden="true"
            .svg="${Ye}"
          ></fa-icon>
        </span>
      </a>
      <a
        href="#"
        role="button"
        class="button narrow is-borderless ${this.isLoading?"is-loading":""}"
        id="refresh"
        @click="${this.onRefresh}"
        @keyup="${je}"
        title="Reload"
        aria-label="Reload"
      >
        <span class="icon is-small">
          ${this.isLoading?"":Y`
                <fa-icon
                  size="1.0em"
                  class="has-text-grey"
                  aria-hidden="true"
                  .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"/></svg>'}"
                ></fa-icon>
              `}
        </span>
      </a>`}renderLocationBar(){if("replayonly"===this.embed||"replay-with-info"==this.embed)return"";const e=!!this.tabData.url,t=e&&this.favIconUrl;return Y` <a
        class="skip-link"
        href="#skip-replay-target"
        @click="${this.skipMenu}"
        >Skip replay navigation</a
      >
      <nav class="replay-bar" aria-label="replay">
        <div class="field has-addons">
          ${this.renderToolbarLeft()}
          <form @submit="${this.onSubmit}">
            <div
              class="control is-expanded ${t?"has-icons-left":""}"
            >
              <input
                id="url"
                class="input"
                type="text"
                @keydown="${this.onKeyDown}"
                @blur="${this.onLostFocus}"
                .value="${this.url}"
                placeholder="Enter text to search or a URL to replay"
              />
              ${e?this.renderTimestamp():""}
              ${t?Y` <span class="favicon icon is-small is-left">
                    <img src="${this.favIconUrl}" />
                  </span>`:Y``}
            </div>
          </form>
          ${this.renderToolbarRight()}
        </div>
      </nav>
      <p id="skip-replay-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderToolbarRight(){var e,t;const i=!!this.tabData.url,o=ft(this.ts).toLocaleString();return Y` <div
      class="dropdown is-right ${this.menuActive?"is-active":""}"
      @click="${()=>this.menuActive=!1}"
    >
      <a
        href="#"
        role="button"
        class="button narrow is-borderless is-hidden-touch"
        id="fullscreen"
        @click="${this.onFullscreenToggle}"
        @keyup="${je}"
        title="${this.isFullscreen?"Exit Full Screen":"Full Screen"}"
        aria-label="${this.isFullscreen?"Exit Fullscreen":"Fullscreen"}"
      >
        <span class="icon is-small">
          <fa-icon
            size="1.0em"
            class="has-text-grey"
            aria-hidden="true"
            .svg="${this.isFullscreen?kt:xt}"
          ></fa-icon>
        </span>
      </a>
      <div class="dropdown-trigger">
        <button
          class="button is-borderless"
          aria-haspopup="true"
          aria-controls="menu-dropdown"
          aria-expanded="${this.menuActive}"
          @click="${this.onMenu}"
          aria-label="more replay controls"
        >
          <span class="icon is-small">
            <fa-icon
              size="1.0em"
              class="has-text-grey"
              aria-hidden="true"
              .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/></svg>'}"
            ></fa-icon>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="menu-dropdown">
        <div class="dropdown-content">
          <a
            href="#"
            role="button"
            class="dropdown-item is-hidden-desktop"
            @click="${this.onFullscreenToggle}"
            @keyup="${je}"
          >
            <span class="icon is-small">
              <fa-icon
                size="1.0em"
                class="has-text-grey"
                aria-hidden="true"
                .svg="${this.isFullscreen?kt:xt}"
              ></fa-icon>
            </span>
            <span>Full Screen</span>
          </a>
          ${this.browsable?Y` <a
                href="#"
                role="button"
                class="dropdown-item is-hidden-tablet ${i?"":"grey-disabled"}"
                @click="${this.onShowPages}"
                @keyup="${je}"
              >
                <span class="icon is-small">
                  <fa-icon
                    size="1.0em"
                    class="has-text-grey"
                    aria-hidden="true"
                    .svg="${yt}"
                  ></fa-icon>
                </span>
                <span>Browse Contents</span>
              </a>`:""}
          ${this.clearable?Y` <hr class="dropdown-divider is-hidden-desktop" />
                <a
                  href="#"
                  role="button"
                  class="dropdown-item"
                  @click="${this.onPurgeCache}"
                  @keyup="${je}"
                >
                  <span class="icon is-small">
                    <fa-icon
                      size="1.0em"
                      class="has-text-grey"
                      aria-hidden="true"
                      .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"/></svg>'}"
                    ></fa-icon>
                  </span>
                  <span>Purge Cache + Full Reload</span>
                </a>`:Y``}
          ${!this.editable&&(null===(e=this.sourceUrl)||void 0===e?void 0:e.startsWith("http://"))||(null===(t=this.sourceUrl)||void 0===t?void 0:t.startsWith("https://"))?Y` <hr class="dropdown-divider" />
                <a
                  href="${this.sourceUrl}"
                  role="button"
                  class="dropdown-item"
                  @keyup="${je}"
                >
                  <span class="icon is-small">
                    <fa-icon
                      size="1.0em"
                      class="has-text-grey"
                      aria-hidden="true"
                      .svg="${wt}"
                    ></fa-icon>
                  </span>
                  <span>Download Archive</span>
                </a>`:Y``}
          ${o?Y` <hr class="dropdown-divider is-hidden-desktop" />
                <div class="dropdown-item info is-hidden-tablet">
                  <span class="menu-head">Capture Date</span>${o}
                </div>`:""}
          ${this.editable?"":Y` <a
                  href="#"
                  role="button"
                  class="dropdown-item"
                  @click="${this.onShowInfoDialog}"
                >
                  <span class="icon is-small">
                    <fa-icon
                      class="has-text-grey"
                      aria-hidden="true"
                      .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg>'}"
                    ></fa-icon>
                  </span>
                  <span>Archive Info</span>
                </a>
                <hr class="dropdown-divider" />`}
          <a
            href="#"
            role="button"
            class="dropdown-item"
            @click="${this.onAbout}"
          >
            <fa-icon
              class="has-text-grey"
              size="1.0rem"
              aria-hidden="true"
              .svg=${'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M9.014 8.5c-.048 1-.24 1.86-.497 2.47-.15.357-.304.582-.424.701a1 1 0 0 1-.07.062 1 1 0 0 1-.07-.062c-.12-.12-.273-.343-.424-.7-.257-.61-.448-1.472-.497-2.471zM10.018 8.5c-.052 1.183-.288 2.236-.638 2.999A3.76 3.76 0 0 0 11.75 8.5zM6.666 11.499A3.76 3.76 0 0 1 4.296 8.5h1.732c.053 1.183.288 2.236.638 2.999M7.032 7.5c.049-1 .24-1.86.497-2.47.15-.357.305-.581.424-.701a1 1 0 0 1 .07-.062q.026.018.07.062c.12.12.274.344.424.7.258.61.449 1.472.497 2.471zM6.028 7.5H4.295a3.76 3.76 0 0 1 2.371-2.999c-.35.763-.585 1.816-.638 2.999M9.38 4.501A3.76 3.76 0 0 1 11.75 7.5h-1.733c-.052-1.183-.288-2.236-.638-2.999"/><path fill="currentColor" d="M12.921 9.078A5.01 5.01 0 0 1 8.023 13a5.01 5.01 0 0 1-4.981-4.42l-1.538.92-1.48-.886C.337 12.745 3.798 16 8.023 16c4.104 0 7.489-3.073 7.965-7.038L14.542 8zM16.023 7.386C15.71 3.255 12.247 0 8.023 0 3.92 0 .533 3.073.057 7.038L1.504 8l1.621-1.078A5.01 5.01 0 0 1 8.023 3a5.01 5.01 0 0 1 4.981 4.42l1.538-.92z"/></svg>\n'}
            ></fa-icon>
            <span>&nbsp;About ${this.appName}</span>
            <span class="menu-version">(${this.appVersion})</span>
          </a>
        </div>
      </div>
    </div>`}renderTimestamp(){var e;const t=[];null===(e=this.multiTs)||void 0===e||e.forEach((e=>{try{const i=function(e){let t=null;return t=new Date(e),t&&t instanceof Date?mt(t.toISOString()):""}(+e),o=ft(i).toLocaleString();t.push({date:i,label:o})}catch(e){}}));const i=ft(this.ts).toLocaleString();return Y`<div id="datetime" class="control is-hidden-mobile">
      ${t.length>1?Y`
            <sl-dropdown placement="top-end" hoist>
              <button
                type="button"
                class="timestamp-dropdown-btn"
                slot="trigger"
                @blur=${this.onTimestampDropdownBtnBlur}
              >
                <div>${i}</div>
                <div class="timestamp-count-badge">
                  <div class="timestamp-count">${t.length}</div>
                  <fa-icon .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>'}" aria-hidden="true"></fa-icon>
                </div>
              </button>
              <sl-menu @sl-select=${this.onSelectTimestamp}>
                ${t.map((({date:e,label:t})=>{const i=this.ts===e;return Y`<sl-menu-item
                    class="timestamp-menu-item"
                    value=${e}
                    aria-selected="${i}"
                  >
                    ${t}</sl-menu-item
                  >`}))}
              </sl-menu>
            </sl-dropdown>
          `:i}
    </div>`}renderVerifyInfo(){return"replay-with-info"!==this.embed?"":Y`<rwp-embed-receipt
      .collInfo=${this.itemInfo||{}}
      url=${this.url}
      ts=${this.ts}
    >
    </rwp-embed-receipt>`}dragStart(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!0)}dragEnd(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!1)}renderItemInfo(){return this.itemInfo?Y`<wr-item-info
      class="is-list"
      .item="${this.itemInfo}"
      ?detailed="${!0}"
      ?canDelete="${!this.embed}"
      @item-purge="${this.onPurgeCache}"
    ></wr-item-info>`:Y`<sl-alert open variant="warning">
        <fa-icon
          slot="icon"
          .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'}
          aria-hidden="true"
        ></fa-icon>
        <strong>Archive info is not available</strong><br />
        Please reload and try again.
      </sl-alert>`}renderItemTabs(e){const t=this.hasStory&&"story"===this.tabData.view,i="pages"===this.tabData.view,o="resources"===this.tabData.view;return Y`
      ${t?Y` <wr-coll-story
            .collInfo="${this.itemInfo||{}}"
            .active="${t}"
            currList="${this.tabData.currList||0}"
            @coll-tab-nav="${this.onItemTabNav}"
            id="story"
            .isSidebar="${e}"
            class="${t?"":"is-hidden"} ${e?"sidebar":""}"
            role="${$e(e?void 0:"main")}"
          >
          </wr-coll-story>`:""}
      ${o?Y` <wr-coll-resources
            .collInfo="${this.itemInfo||{}}"
            .active="${o}"
            query="${this.tabData.query||""}"
            urlSearchType="${this.tabData.urlSearchType||""}"
            .currMime="${this.tabData.currMime||""}"
            @coll-tab-nav="${this.onItemTabNav}"
            id="resources"
            .isSidebar="${e}"
            class="is-paddingless ${o?"":"is-hidden"} ${e?"sidebar":""}"
            role="${$e(e?void 0:"main")}"
          >
          </wr-coll-resources>`:""}
      ${i?Y` <wr-page-view
            .collInfo="${this.itemInfo}"
            .active="${i}"
            .editable="${this.editable}"
            .isSidebar="${e}"
            currList="${this.tabData.currList||0}"
            query="${this.tabData.query||""}"
            .url="${this.tabData.url||""}"
            .ts="${this.tabData.ts||""}"
            @coll-tab-nav="${this.onItemTabNav}"
            id="pages"
            @coll-update="${this.onItemUpdate}"
            class="${i?"":"is-hidden"} ${e?"sidebar":""}"
            role="${$e(e?void 0:"main")}"
          >
          </wr-page-view>`:""}
    `}skipMenu(e){var t;e.preventDefault(),null===(t=this.renderRoot.querySelector("#skip-replay-target"))||void 0===t||t.focus()}onKeyDown(e){"Esc"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.value=this.url)}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",(()=>{this.menuActive=!1}),{once:!0})}onFullscreenToggle(e){e.preventDefault(),this.menuActive=!1,this.isFullscreen?document.exitFullscreen():this.requestFullscreen()}onGoBack(e){e.preventDefault(),this.menuActive=!1,window.history.back()}onGoForward(e){e.preventDefault(),this.menuActive=!1,window.history.forward()}onShowPages(e){e.preventDefault(),this.showSidebar||document.documentElement.clientWidth>=769?this.showSidebar=!this.showSidebar:(this.showSidebar=!1,this.updateTabData({url:"",ts:""})),this.browsable||(this.showSidebar=!1)}onFullPageView(e){e.preventDefault(),this.updateTabData({url:"",ts:""})}onHideSidebar(e){e.preventDefault(),this.showSidebar=!1}onReplayLoading(e){return t(this,void 0,void 0,(function*(){this.embed&&window.parent!==window&&this.isLoading!==e.detail.loading&&window.parent.postMessage(Object.assign({type:"page-loading"},e.detail),"*"),this.isLoading=e.detail.loading}))}onFavIcons(e){return t(this,void 0,void 0,(function*(){this.embed&&window.parent!==window&&window.parent.postMessage(Object.assign({type:"favicons"},e.detail),"*");for(const t of e.detail.icons){const e=yield fetch(t.href);if(200===e.status){const i=e.headers.get("Content-Type");if(i&&!i.startsWith("text/"))return void(this.favIconUrl=t.href)}}this.favIconUrl=""}))}onPurgeCache(e){e.preventDefault();const t=!e.detail||void 0===e.detail.reload||e.detail.reload;this.deleteFully(t)}deleteFully(e=!1){return t(this,void 0,void 0,(function*(){const t=this.itemInfo.apiPrefix+(e?"?reload=1":""),i=yield fetch(t,{method:"DELETE"});200!==i.status&&console.warn("purge failed: "+i.status),e||this.embed?window.location.reload():window.location.search=""}))}onSubmit(e){e.preventDefault();const t=this.renderRoot.querySelector("input");return t.value?this.navigateTo(t.value):t.value=this.url,!1}onLostFocus(e){e.currentTarget.value||(e.currentTarget.value=this.url)}onTimestampDropdownBtnBlur(e){const t=e.currentTarget.closest("sl-dropdown"),i=e.relatedTarget;i&&(null==t?void 0:t.contains(i))||(null==t?void 0:t.open)&&t.hide()}onSelectTimestamp(e){const{item:t}=e.detail;this.updateTabData({ts:t.value})}navigateTo(e){let t;if(e.startsWith("http://")||e.startsWith("https://")){if(t={url:e},e===this.tabData.url){const e=this.renderRoot.querySelector("wr-coll-replay");return void(e&&e.refresh())}}else t=e.startsWith(gi)?this._stringToParams(e):{query:e,view:"pages"};this.updateTabData(t)}_stringToParams(e){const t=new URLSearchParams(e.slice(9)),i={url:"",ts:""};for(const e of["query","view","currList","currMime","urlSearchType"])t.has(e)&&(i[e]=t.get(e));return i}_paramsToString(e){const t=new URLSearchParams;for(const i of["query","view","currList","currMime","urlSearchType"])i in e&&t.set(i,String(e[i]));return t.toString()}onRefresh(e,t=!1){if(e&&e.preventDefault(),this.menuActive=!1,this.tabData.url){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.refresh()}else t||window.location.reload()}onAbout(){this.dispatchEvent(new CustomEvent("about-show"))}onShowInfoDialog(){var e;null===(e=this.archiveInfoDialog.value)||void 0===e||e.show()}onHideInfoDialog(){var e;null===(e=this.archiveInfoDialog.value)||void 0===e||e.hide()}}e([we({type:Boolean})],vi.prototype,"inited",void 0),e([we({type:String})],vi.prototype,"sourceUrl",void 0),e([we({type:Object,attribute:!1})],vi.prototype,"loadInfo",void 0),e([we({type:Boolean})],vi.prototype,"showSidebar",void 0),e([we({type:Object,attribute:!1})],vi.prototype,"itemInfo",void 0),e([we({type:String})],vi.prototype,"item",void 0),e([we({type:Boolean})],vi.prototype,"hasStory",void 0),e([we({type:Boolean})],vi.prototype,"isLoading",void 0),e([we({type:Object,attribute:!1})],vi.prototype,"tabData",void 0),e([we({type:String})],vi.prototype,"url",void 0),e([we({type:String})],vi.prototype,"ts",void 0),e([we({type:Boolean})],vi.prototype,"isFullscreen",void 0),e([we({type:Boolean})],vi.prototype,"menuActive",void 0),e([we({type:String})],vi.prototype,"embed",void 0),e([we({type:Boolean})],vi.prototype,"embedDropdownActive",void 0),e([we({type:Boolean})],vi.prototype,"editable",void 0),e([we({type:Boolean})],vi.prototype,"browsable",void 0),e([we({type:Boolean})],vi.prototype,"clearable",void 0),e([we({type:Boolean})],vi.prototype,"isVisible",void 0),e([we({type:String})],vi.prototype,"favIconUrl",void 0),e([we({type:String})],vi.prototype,"appName",void 0),e([we({type:String})],vi.prototype,"appVersion",void 0),e([we({type:Number})],vi.prototype,"autoUpdateInterval",void 0),e([we({type:String})],vi.prototype,"swName",void 0),e([we({type:Boolean})],vi.prototype,"replayNotFoundError",void 0),e([we({type:Array})],vi.prototype,"multiTs",void 0),customElements.define("wr-item",vi);const wi='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>';class yi extends fe{get typeFilter(){return""}get indexParams(){return""}constructor(){super(),this.items=[],this.query="",this.filteredItems=[],this.sortedItems=[],this.hideHeader=!1,this.dateName="Date Loaded",this.headerName="Loaded Archives",this._deleting={},this.hideHeader="1"===localStorage.getItem("index:hideHeader")}get sortKeys(){return[{key:"title",name:"Title"},{key:"sourceUrl",name:"Source"},{key:"ctime",name:this.dateName},{key:"size",name:"Total Size"}]}firstUpdated(){this.loadItems()}updated(e){e.has("hideHeader")&&localStorage.setItem("index:hideHeader",this.hideHeader?"1":"0"),(e.has("items")||e.has("query"))&&this.filter()}filter(){if(this.query){this.filteredItems=[];for(const e of this.items)(e.sourceUrl.indexOf(this.query)>=0||e.filename&&e.filename.indexOf(this.query)>=0||Boolean(e.loadUrl&&e.loadUrl.indexOf(this.query)>=0)||e.title&&e.title.indexOf(this.query)>=0)&&this.filteredItems.push(e)}else this.filteredItems=this.items}loadItems(){return t(this,void 0,void 0,(function*(){const e=yield fetch(`${Me}/coll-index?${this.indexParams}`);try{if(200!==e.status)throw new Error("Invalid API Response, Retry");const t=yield e.json();this.items=t.colls.map((e=>{var t;return e.title=null!==(t=e.title)&&void 0!==t?t:e.filename,e})),this._deleting={},this.sortedItems=[]}catch(e){setTimeout((()=>this.loadItems()),500)}}))}onDeleteItem(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),e.stopPropagation(),!this.sortedItems)return;const t=Number(e.currentTarget.getAttribute("data-coll-index")),i=this.sortedItems[t];if(!i||this._deleting[i.sourceUrl])return;this._deleting[i.sourceUrl]=!0,this.requestUpdate();const o=yield fetch(`${Me}/c/${i.id}`,{method:"DELETE"});if(200===o.status){const e=yield o.json();this.items=e.colls}return!1}))}static get styles(){return Be(yi.compStyles)}static get compStyles(){return d`
      :host {
        overflow-y: auto;
        min-width: 0;
      }
      .size {
        margin-right: 20px;
      }
      .extra-padding {
        padding: 2em;
      }
      .no-top-padding {
        padding-top: 1em;
      }
      .panel-heading {
        font-size: 0.85rem;
      }
      .is-loading {
        line-height: 1.5em;
        height: 1.5em;
        border: 0px;
        background-color: transparent !important;
        width: auto;
      }
      div.panel.is-light {
        margin-bottom: 2em;
      }

      fa-icon {
        vertical-align: middle;
      }

      .panel-color {
        background-color: rgb(210, 249, 214);
      }

      .copy {
        color: black;
        margin: 0px;
        margin: 0;
        line-height: 0.4em;
        padding: 6px;
        border-radius: 10px;
        position: absolute;
      }
      .copy:active {
        background-color: lightgray;
      }
      .sort-header {
        padding: 0.3rem 0.3rem 0.3rem 0;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
      }
      .sort-header .control {
        flex: auto;

        padding-left: 0.3rem;
        width: initial;
      }
      wr-sorter {
        padding: 0.3rem;
      }
      a.button.is-small.collapse {
        border-radius: 6px;
      }
      .icon.is-left {
        margin-left: 0.5rem;
      }
      .coll-block {
        position: relative;
      }
      .delete-button {
        width: 32px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
      #sort-select::after {
        display: none;
      }
      header {
        transform: translate(0px, 0px);
        transition: all 0.5s ease 0s;
        visibility: visible;
        display: flex;
        flex-direction: column;
      }
      header.closed {
        transform: translate(0, -100%);
        transition: all 0.5s ease 0s;
        visibility: visible;
        height: 269px;
        margin-top: -269px;
      }
    `}renderHeader(){return Y`<h2 class="panel-heading panel-color">
      <span>${this.headerName}</span>
    </h2>`}renderSearchHeader(){return""}render(){var e;const t=this.childElementCount>0;return Y`
      <header class="${this.hideHeader?"closed":""}">
        <slot name="header"></slot>
      </header>
      <section class="section no-top-padding">
        <div class="sort-header is-small">
          ${t?Y`
        <button @click=${()=>this.hideHeader=!this.hideHeader} class="collapse button is-small">
          <span class="icon"><fa-icon .svg=${this.hideHeader?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>'}></span>
          <span>${this.hideHeader?"Show ":"Hide"} <span class="is-sr-only">Header</span></span>
        </button>`:""}
        </div>
        <div class="panel">
          ${this.renderHeader()}
          ${this.items.length?Y`
                <div class="panel-block sort-header is-small">
                  ${this.renderSearchHeader()}
                  <div class="control has-icons-left has-addons">
                    <input
                      type="text"
                      class="input is-small"
                      @input="${e=>this.query=e.currentTarget.value}"
                      .value="${this.query}"
                      placeholder="Search by Archive Title or Source"
                    />
                    <span class="icon is-left is-small">
                      <fa-icon .svg="${wi}"></fa-icon>
                    </span>
                  </div>
                  <wr-sorter
                    id="index"
                    sortKey="ctime"
                    ?sortDesc="${!0}"
                    .sortKeys="${this.sortKeys}"
                    .data="${this.filteredItems}"
                    @sort-changed="${e=>this.sortedItems=e.detail.sortedData}"
                  >
                  </wr-sorter>
                </div>

                <div class="coll-list">
                  ${null===(e=this.sortedItems)||void 0===e?void 0:e.map(((e,t)=>Y`
                      <div class="coll-block panel-block">
                        ${this.renderItemInfo(e)}
                        ${this._deleting[e.sourceUrl]?Y` <span
                              class="button delete-button is-loading is-static"
                            >
                              Deleting
                            </span>`:Y`
                              <button
                                class="delete delete-button"
                                aria-label="Unload Item"
                                title="Unload Item"
                                data-coll-index="${t}"
                                @click="${this.onDeleteItem}"
                              ></button>
                            `}
                      </div>
                    `))}
                </div>
              `:Y`
                <div class="panel-block extra-padding">
                  ${null===this.sortedItems?Y`<i>Loading Archives...</i>`:this.renderEmpty()}
                </div>
              `}
        </div>
      </section>
    `}renderItemInfo(e){return Y`<wr-item-info .item=${e}></wr-item-info>`}renderEmpty(){return Y`
      <p>
        Don't have any web archives yet? Check out
        <a href="https://webrecorder.net/archivewebpage" target="_blank"
          >ArchiveWeb.page</a
        >
        to save pages as you browse the web, or
        <a href="https://webrecorder.net/browsertrix" target="_blank"
          >sign up for Browsertrix</a
        >
        to archive entire websites with automated crawling!
      </p>
    `}}e([we({type:Array})],yi.prototype,"items",void 0),e([we({type:String})],yi.prototype,"query",void 0),e([we({type:Array})],yi.prototype,"filteredItems",void 0),e([we({type:Array})],yi.prototype,"sortedItems",void 0),e([we({type:Boolean})],yi.prototype,"hideHeader",void 0),e([we({type:String})],yi.prototype,"dateName",void 0),e([we({type:String})],yi.prototype,"headerName",void 0),e([ye()],yi.prototype,"_deleting",void 0),customElements.define("wr-item-index",yi);let xi=class extends fe{constructor(){super(...arguments),this.fileDisplayName="",this.file=null,this.droppedFile=null,this.hasNativeFS=!!window.showOpenFilePicker&&!Ne,this.showOpenFilePickerOptions={types:[{description:"WARC, WACZ, and HAR Files",accept:{"application/warc":[".warc",".gz"],"application/har":[".har"],"application/wacz":[".wacz"],"application/json":[".json"]}}]},this.newFullImport=!1,this.noHead=!1}updated(e){e.has("droppedFile")&&this.droppedFile&&this.onDropFile()}onDropFile(){const e=this.showOpenFilePickerOptions.types.map((e=>e.accept)).map(Object.values).flat(2).some((e=>{var t;return null===(t=this.droppedFile)||void 0===t?void 0:t.name.endsWith(e)}));if(e){if(null===this.droppedFile)return;this.setFile(this.droppedFile),this.dispatchEvent(new CustomEvent("did-drop-file",{bubbles:!0,composed:!0})),this.onStartLoad()}}onChooseFile(e){0!==e.currentTarget.files.length&&this.setFile(e.currentTarget.files[0])}setFile(e){var t;this.file=e,Ne&&(null===(t=window.electron)||void 0===t?void 0:t.getPath)&&(this.file.path=window.electron.getPath(this.file)),this.fileDisplayName="file://"+(e.path||e.name)}onChooseNativeFile(){return t(this,void 0,void 0,(function*(){if(!this.hasNativeFS)return;const[e]=yield window.showOpenFilePicker(this.showOpenFilePickerOptions);this.fileHandle=e,this.file=yield e.getFile(),this.fileDisplayName="file://"+e.name}))}randomId(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}onStartLoad(e){e&&e.preventDefault();const t={sourceUrl:this.fileDisplayName,newFullImport:this.newFullImport};return this.file&&(t.isFile=!0,this.file.path?(t.loadUrl="file2://"+this.file.path,t.noCache=!0):this.fileHandle?(t.loadUrl=this.fileDisplayName,t.extra={fileHandle:this.fileHandle},t.noCache=!1):(t.loadUrl=URL.createObjectURL(this.file),t.blob=this.file,t.noCache=!1),t.size=this.file.size,t.name=this.fileDisplayName),this.dispatchEvent(new CustomEvent("load-start",{bubbles:!0,composed:!0,detail:t})),!1}onInput(e){this.fileDisplayName=e.currentTarget.value,this.file&&this.fileDisplayName&&this.fileDisplayName.startsWith("file://")&&(this.file=null,this.fileDisplayName="")}static get styles(){return Be(d`
      :host {
        min-width: 0;
      }
      .extra-padding {
        padding: 1.5em;
      }
      .less-padding {
        padding-top: 1em;
        padding-bottom: 1em;
      }
      div.field.has-addons {
        flex: auto;
      }
      .panel-heading {
        background-color: #cff3ff;
      }
      .message-header {
        background-color: #cff3ff;
        color: black;
      }
      .heading-size {
        font-size: 0.85rem;
      }
      form {
        flex-grow: 1;
        flex-shrink: 0;
        margin-bottom: 0;
      }
      p.control.is-expanded {
        width: min-content;
      }
      input.input.file-name:invalid {
        border: 1px dashed red;
      }
      input.input.file-name {
        border-width: 1px;
        margin-left: -1px;
        max-width: 100%;
      }
      @media screen and (max-width: 1023px) {
        .file-icon {
          margin-right: 0px;
        }
      }

      @media screen and (max-width: 768px) {
        #filename {
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
        }
      }
    `)}render(){return Y` <section
      class="section ${this.noHead?"is-paddingless":"less-padding"}"
    >
      <div class="${this.noHead?"":"panel"}">
        <div
          class="${this.noHead?"is-hidden":"panel-heading"} heading-size"
        >
          ${this.newFullImport?"Import Existing":"Load"} Web Archive
        </div>
        <div
          class="${this.noHead?"":"panel-body extra-padding"} file has-name"
        >
          <form class="is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              ${this.hasNativeFS?"":Y` <input
                    class="file-input"
                    @click="${e=>e.currentTarget.value=null}"
                    @change=${this.onChooseFile}
                    type="file"
                    id="fileupload"
                    name="fileupload"
                  />`}
              <span class="file-cta" @click="${this.onChooseNativeFile}">
                <span class="file-icon">
                  <fa-icon
                    size="0.9em"
                    .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>'}
                    aria-hidden="true"
                  ></fa-icon>
                </span>
                <span class="file-label is-hidden-touch"> Choose File... </span>
              </span>
            </label>

            <div class="field has-addons">
              <p class="control is-expanded">
                <input
                  class="file-name input"
                  type="text"
                  name="filename"
                  id="filename"
                  pattern="((file|http|https|ipfs|s3)://.*.(warc|warc.gz|zip|wacz|har|json)([?#].*)?)|(googledrive://.+)|(ssb://.+)"
                  .value="${this.fileDisplayName}"
                  @input="${this.onInput}"
                  autocomplete="off"
                  placeholder="${this.newFullImport?"Click 'Choose File' to select a local archive to import":"Enter a URL or click 'Choose File' to select a WARC, WACZ, or HAR file"}"
                />
              </p>
              <div class="control">
                <button type="submit" class="button is-primary">
                  ${this.newFullImport?"Import":"Load"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>`}};var ki;e([we({type:String})],xi.prototype,"fileDisplayName",void 0),e([we({attribute:!1})],xi.prototype,"file",void 0),e([we({attribute:!1})],xi.prototype,"droppedFile",void 0),e([we({type:Boolean})],xi.prototype,"hasNativeFS",void 0),e([we({type:Object})],xi.prototype,"showOpenFilePickerOptions",void 0),e([we({type:Boolean})],xi.prototype,"newFullImport",void 0),e([we({type:Boolean})],xi.prototype,"noHead",void 0),xi=e([me("wr-chooser")],xi);let $i=ki=class extends fe{constructor(e="sw.js"){super(),this.inited=!1,this.pageParams=new URLSearchParams,this.sourceUrl=null,this.navMenuShown=!1,this.showAbout=!1,this.showFileDropOverlay=!1,this.collTitle=null,this.loadInfo=null,this.embed=null,this.collPageUrl="",this.pageTitle="",this.pageReplay=!1,this.source=null,this.skipRuffle=!1,this.swErrorMsg=null,this.useRuffle=!1,this.droppedFile=null,this.maybeStartFileDrop=e=>{this.sourceUrl||(this.showFileDropOverlay=!0,e.preventDefault())},this.swName=e,this.swmanager=null,this.skipRuffle=!1,this.useRuffle=!1,this.safariKeyframes(),this.addEventListener("dragenter",(e=>{this.maybeStartFileDrop(e)})),this.addEventListener("dragover",(e=>{this.maybeStartFileDrop(e)})),this.addEventListener("dragleave",(()=>{this.showFileDropOverlay=!1})),this.addEventListener("dragend",(()=>{this.showFileDropOverlay=!1})),this.addEventListener("drop",(e=>{var t;this.droppedFile=(null===(t=e.dataTransfer)||void 0===t?void 0:t.files[0])||null,this.showFileDropOverlay=!1,e.preventDefault()}))}get appName(){return"ReplayWeb.page"}get homeUrl(){return window.location.pathname}static get styles(){return Be(ki.appStyles)}static get appStyles(){return d`
      #wrlogo {
        max-height: 1rem;
      }
      .navbar {
        height: 1.5rem;
      }
      .navbar-brand {
        height: 1.5rem;
        display: flex;
        align-items: center;
      }
      .wr-logo-item {
        padding: 0 0.5rem 0 0;

        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
      .no-wrap {
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
      .has-allcaps {
        font-variant-caps: small-caps;
      }
      :host {
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        display: flex;
        min-width: 0px;
        flex-direction: column;
      }
      wr-item {
        height: 100%;
      }
      .navbar {
        padding: 0 0.5em;
      }

      div.navbar-menu fa-icon {
        vertical-align: sub;
      }
      .tagline {
        margin-top: 1rem;
      }

      .drop-file-overlay {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 0;
        z-index: 50;
        font-weight: bold;
        font-size: 1.5rem;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
      }

      .drop-file-overlay:after {
        pointer-events: none;
        content: " ";
        position: absolute;
        inset: 0;
        border: 5px dashed #aaa;
        margin: 15px;
      }

      @media screen and (min-width: 840px) {
        .menu-only {
          display: none;
        }

        a.arrow-button {
          padding-left: 4px;
          padding-right: 4px;
        }

        .info-menu {
          padding: 0 1em;
        }

        .logo-text {
          padding-left: 0px;
          margin-left: 6px;
        }

        a.navbar-item.logo-text:hover {
          background-color: initial;
        }
      }

      @media screen and (max-width: 840px) {
        .wide-only {
          display: none !important;
        }
      }
    `}get mainLogo(){return Ge}renderNavBrand(){return Y` <fa-icon
      .svg="${'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 189 24"><clipPath id="a"><path d="M0-.001h188.88v23.04H0z"/></clipPath><g clip-path="url(#a)"><path d="M32.997 13.728v4.437h-3.014V4.874h5.934q2.04 0 3.089 1.01 1.067 1.011 1.067 2.808 0 1.516-.805 2.659a7.1 7.1 0 0 1-1.362 1.429l2.26 4.673v.712h-2.957l-2.354-4.437zm0-6.477v4.324h2.824q.536-.387.845-.973.374-.674.374-1.535 0-.88-.412-1.348-.392-.468-1.142-.468zm17.932 10.914h-8.218V4.874h8.218v2.658h-5.204v2.92h4.773v2.116h-4.773v2.939h5.204zm5.604-3.295v3.295H53.52V4.874h5.222q1.592 0 2.64.561a3.47 3.47 0 0 1 1.554 1.685q.524 1.104.524 2.752 0 1.61-.524 2.733a3.58 3.58 0 0 1-1.554 1.685q-1.048.58-2.64.58zm0-7.619v5.242h2.135q.86 0 1.31-.674.468-.675.468-1.947 0-.823-.206-1.404-.206-.6-.618-.899a1.47 1.47 0 0 0-.954-.318zm17.194 10.914h-7.9V4.874h3.014v10.558h4.886zm34.178 0h-2.303l-1.703-12.486v-.805h2.939l.971 7.612 2.117-5.516h1.217l2.085 5.411 1.004-7.507h2.902v.805l-1.685 12.486h-2.359l-2.527-6.122-.047-.15-.047.15zm19.699 0h-8.218V4.874h8.218v2.658H122.4v2.92h4.774v2.116H122.4v2.939h5.204zm9.03 0h-6.439V4.874h6.496q1.684 0 2.583.842.898.824.898 2.265a3.27 3.27 0 0 1-.767 2.134 4.5 4.5 0 0 1-1.039.939q.785.338 1.282.914.824.955.824 2.434 0 1.741-.973 2.752-.974 1.011-2.865 1.011m-3.425-11.026v3.444h3.035q.38-.346.615-.786.28-.524.281-1.123 0-.693-.356-1.105-.336-.43-.936-.43zm0 5.316v3.37h2.845q.673 0 1.011-.412.356-.43.356-1.236 0-.823-.356-1.273a1.15 1.15 0 0 0-.773-.449zm12.801 2.415v3.295h-3.014V4.874h5.223q1.591 0 2.639.561a3.47 3.47 0 0 1 1.554 1.685q.524 1.104.524 2.752 0 1.61-.524 2.733a3.58 3.58 0 0 1-1.554 1.685q-1.048.58-2.639.58zm0-7.619v5.242h2.134q.861 0 1.31-.674.468-.675.468-1.947 0-.823-.206-1.404-.206-.6-.617-.899a1.47 1.47 0 0 0-.955-.318zm41.707 10.914h-8.218V4.874h8.218v2.658h-5.204v2.92h4.774v2.116h-4.774v2.939h5.204zM78.842 15.862l-.733 2.303h-2.864v-.655l4.268-12.636h2.996l4.212 12.579v.712h-2.977l-.706-2.303zm3.6-1.947L80.98 9.146l-1.518 4.769zm8.283-.522L86.85 5.66v-.786h2.77l2.546 5.874 2.565-5.874h2.751v.805l-3.871 7.742.015 4.744h-2.901zm66.79 2.469-.733 2.303h-2.864v-.655l4.268-12.636h2.996l4.212 12.579v.712h-2.977l-.706-2.303zm3.6-1.947-1.462-4.769-1.518 4.769zm11.706 4.437q-1.985 0-3.332-.693-1.348-.71-2.041-2.227-.693-1.536-.692-3.95 0-2.284.73-3.782.749-1.516 2.19-2.265t3.557-.749q1.628 0 3.313.412l-.505 2.471a14 14 0 0 0-2.677-.262q-1.216 0-2.022.449-.786.432-1.198 1.367-.393.936-.393 2.434 0 1.535.318 2.489.318.956.973 1.404.656.43 1.704.431a9 9 0 0 0 1.142-.075v-3.07l-2.022-.487v-1.834h4.736v7.375a12 12 0 0 1-1.872.412q-.954.15-1.909.15" style="fill:#14122d"/><path d="M6.544 10.796a.239.239 0 0 1-.236-.283 5.32 5.32 0 0 1 2.959-3.801.12.12 0 0 1 .133.023.12.12 0 0 1 .025.133c-.409.992-.69 2.275-.777 3.702a.24.24 0 0 1-.239.225zm7.07-3.928a.12.12 0 0 1 .159-.157 5.32 5.32 0 0 1 2.958 3.803.24.24 0 0 1-.052.195.24.24 0 0 1-.183.085c-.475.002-1.429.002-1.865.002a.24.24 0 0 1-.239-.226c-.087-1.427-.368-2.71-.778-3.702m2.882 5.368a.238.238 0 0 1 .236.282 5.32 5.32 0 0 1-2.959 3.801.12.12 0 0 1-.133-.023.12.12 0 0 1-.025-.133c.409-.992.69-2.275.777-3.702a.24.24 0 0 1 .239-.225zm-7.07 3.927a.12.12 0 0 1-.159.157 5.32 5.32 0 0 1-2.958-3.803.24.24 0 0 1 .052-.195.24.24 0 0 1 .183-.085l1.865-.001c.127 0 .232.099.239.225.087 1.427.368 2.71.778 3.702m.666-3.672a.24.24 0 0 1 .239-.255h2.378a.24.24 0 0 1 .239.255c-.102 1.519-.442 2.843-.957 3.717a2.1 2.1 0 0 1-.397.509.12.12 0 0 1-.148 0 2.1 2.1 0 0 1-.397-.509c-.515-.874-.855-2.198-.957-3.717m2.856-1.951a.24.24 0 0 1-.239.255l-2.378.001a.24.24 0 0 1-.239-.256c.102-1.519.442-2.843.957-3.717.121-.206.261-.391.397-.509a.12.12 0 0 1 .148 0c.136.118.276.303.397.509.515.874.855 2.198.957 3.717" style="fill:#0891b2"/><path d="M22.833 12.799a.24.24 0 0 1 .122.241c-.746 5.64-5.578 9.999-11.421 9.999-5.869 0-10.718-4.397-11.43-10.074a.238.238 0 0 1 .357-.233c.518.3 1.38.803 1.697.987a.24.24 0 0 0 .242 0l1.706-1.003a.24.24 0 0 1 .358.165 7.204 7.204 0 0 0 7.07 5.838 7.21 7.21 0 0 0 7.057-5.767.24.24 0 0 1 .121-.164l1.961-1.059a.24.24 0 0 1 .23.001zM.226 10.239a.24.24 0 0 1-.122-.24c.746-5.641 5.578-10 11.421-10 5.869 0 10.718 4.398 11.43 10.075a.24.24 0 0 1-.107.226.24.24 0 0 1-.25.007c-.518-.3-1.38-.803-1.697-.988a.24.24 0 0 0-.242.001l-1.706 1.003a.24.24 0 0 1-.358-.165 7.205 7.205 0 0 0-7.07-5.839 7.21 7.21 0 0 0-7.057 5.767.24.24 0 0 1-.121.164l-1.961 1.06a.24.24 0 0 1-.231-.002z" style="fill:#4d7c0f"/></g></svg>\n'}"
      size=""
      width="9.5rem"
      height="1.25rem"
      aria-hidden="true"
    ></fa-icon>`}renderNavBar(){return Y` <a
        href="#skip-main-target"
        @click=${this.skipMenu}
        class="skip-link"
        >Skip main navigation</a
      >
      <nav class="navbar" aria-label="main">
        <div class="navbar-brand">
          ${this.embed?Y`
                <span class="navbar-item wr-logo-item">
                  <fa-icon
                    id="wrlogo"
                    size="1.0rem"
                    .svg=${this.mainLogo}
                    aria-hidden="true"
                  ></fa-icon>
                </span>
              `:Y`
                <a
                  href="${this.homeUrl}"
                  class="navbar-item wr-logo-item"
                  aria-label="ReplayWeb.page Home"
                >
                  ${this.renderNavBrand()}
                </a>
                ${this.collTitle?Y`
                      <a
                        href="${this.collPageUrl}"
                        class="no-wrap is-size-6 has-text-black"
                        >/&nbsp;&nbsp;<i>${this.collTitle}</i></a
                      >
                      <span class="no-wrap is-size-6"
                        >&nbsp;&nbsp;/&nbsp;
                        ${this.pageReplay?Y`<i>${this.pageTitle}</i>`:this.pageTitle}
                      </span>
                    `:""}
              `}
          <a
            href="#"
            role="button"
            id="menu-button"
            @click="${this.onNavMenu}"
            @keyup="${je}"
            class="navbar-burger burger ${this.navMenuShown?"is-active":""}"
            aria-label="main menu"
            aria-haspopup="true"
            aria-expanded="${this.navMenuShown}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        ${this.sourceUrl?Y``:Y` <div
              class="navbar-menu ${this.navMenuShown?"is-active":""}"
            >
              <div class="navbar-start">
                ${Ne?Y`
                      <a
                        role="button"
                        href="#"
                        class="navbar-item arrow-button"
                        title="Go Back"
                        @click="${()=>window.history.back()}"
                        @keyup="${je}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${Ke}"
                          aria-hidden="true"
                        ></fa-icon
                        ><span class="menu-only is-size-7">&nbsp;Go Back</span>
                      </a>
                      <a
                        role="button"
                        href="#"
                        class="navbar-item arrow-button"
                        title="Go Forward"
                        @click="${()=>window.history.forward()}"
                        @keyup="${je}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${Ye}"
                          aria-hidden="true"
                        ></fa-icon
                        ><span class="menu-only is-size-7"
                          >&nbsp;Go Forward</span
                        >
                      </a>
                    `:""}
              </div>
              ${this.embed?Y``:Y` <div class="navbar-end">${this.renderNavEnd()}</div>`}
            </div>`}
      </nav>
      <p id="skip-main-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderNavEnd(){return Y` <a href="/docs" target="_blank" class="navbar-item is-size-6">
        <fa-icon .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/></svg>'}" aria-hidden="true"></fa-icon
        ><span>&nbsp;User Docs</span>
      </a>
      <!--
    -- NB: the About modal is currently inaccessible to people using keyboards or screen readers.
    --  Should all the JS and infrastructure for accessible modals be added, or should About be a normal page?
    -->
      <a
        href="?terms"
        @click="${e=>{e.preventDefault(),this.showAbout=!0}}"
        class="navbar-item is-size-6"
        >About
      </a>`}renderColl(){return Y` <wr-item
      .loadInfo="${this.loadInfo}"
      sourceUrl="${this.sourceUrl||""}"
      embed="${$e(null===this.embed?void 0:this.embed)}"
      appName="${this.appName}"
      swName="${$e(this.swName)}"
      @replay-favicons=${this.onFavIcons}
      @update-title=${this.onTitle}
      @coll-loaded=${this.onCollLoaded}
      @about-show=${()=>this.showAbout=!0}
    ></wr-item>`}renderHomeIndex(){return Y` <wr-item-index>
      ${Ne?"":Y`
            <p slot="header" class="tagline is-size-5 has-text-centered">
              Explore and Replay Interactive Archived Webpages Directly in your
              Browser.
              <i
                ><a
                  target="_blank"
                  href="https://webrecorder.net/replaywebpage/"
                  >(Learn More)</a
                ></i
              >
            </p>
          `}
      <wr-chooser
        slot="header"
        .droppedFile=${this.droppedFile}
        @did-drop-file="${()=>this.droppedFile=null}"
        @load-start=${this.onStartLoad}
      ></wr-chooser>
    </wr-item-index>`}render(){return this.inited?this.embed&&this.swErrorMsg?this.swErrorMsg:Y`
      ${this.embed&&"full"!==this.embed?"":this.renderNavBar()}
      ${this.sourceUrl?this.renderColl():this.renderHomeIndex()}
      ${this.showAbout?this.renderAbout():""}
      ${this.showFileDropOverlay?this.renderDropFileOverlay():""}
    `:Y``}firstUpdated(){this.initRoute();let e=this.swName;const t=new URLSearchParams;let i="";this.useRuffle&&t.set("injectScripts","ruffle/ruffle.js"),this.embed&&t.set("serveIndex","1"),i=t.toString(),i.length&&(e+="?"+i),this.swmanager=new tt({name:e,appName:this.appName}),this.swmanager.register().catch((()=>{var e;return this.swErrorMsg=null===(e=this.swmanager)||void 0===e?void 0:e.renderErrorReport()})),window.addEventListener("popstate",(()=>{this.initRoute()}))}updated(e){e.has("sourceUrl")&&(this.collTitle=null)}onFavIcons(e){He(e.detail)}skipMenu(e){var t;e.preventDefault(),null===(t=this.renderRoot.querySelector("#skip-main-target"))||void 0===t||t.focus()}onNavMenu(e){e.preventDefault(),e.stopPropagation(),this.navMenuShown=!this.navMenuShown,this.navMenuShown&&(document.addEventListener("click",(e=>{var t;e.preventDefault(),this.navMenuShown=!1,null===(t=this.renderRoot.querySelector("#menu-button"))||void 0===t||t.focus()}),{once:!0}),document.addEventListener("keypress",(e=>{var t;"Escape"==e.key&&(e.preventDefault(),this.navMenuShown=!1,null===(t=this.renderRoot.querySelector("#menu-button"))||void 0===t||t.focus())}),{once:!0}))}initRoute(){this.inited=!0,this.pageParams=new URLSearchParams(window.location.search);const e=this.pageParams.get("state");if(e)try{const t=JSON.parse(e);if(t.ids instanceof Array&&t.userId&&"open"===t.action)return this.pageParams.set("source","googledrive://"+t.ids[0]),this.pageParams.delete("state"),void(window.location.search=this.pageParams.toString())}catch(e){console.log(e)}if(this.source){this.pageParams.set("source",this.source);const e=new URL(window.location.href);e.search=this.pageParams.toString(),window.history.replaceState({},document.title,e.href)}if(this.sourceUrl=this.pageParams.get("source")||"",this.embed=this.pageParams.get("embed")||"",this.embed?this.useRuffle="1"===this.pageParams.get("ruffle"):this.useRuffle=!this.skipRuffle,this.pageParams.has("terms")&&(this.showAbout=!0),this.pageParams.has("embed")&&(this.loadInfo||(this.loadInfo={})),this.pageParams.get("config"))try{this.loadInfo.extraConfig=JSON.parse(this.pageParams.get("config")||"")}catch(e){console.log("invalid config: "+e)}this.pageParams.get("baseUrlSourcePrefix")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrlSourcePrefix=this.pageParams.get("baseUrlSourcePrefix")),this.pageParams.get("basePageUrl")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrl=this.pageParams.get("basePageUrl")),this.pageParams.get("adblockUrl")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.adblockUrl=this.pageParams.get("adblockUrl")),this.pageParams.get("customColl")&&(this.loadInfo.customColl=this.pageParams.get("customColl")),"1"===this.pageParams.get("noWebWorker")&&(this.loadInfo.noWebWorker=!0),"1"===this.pageParams.get("noCache")&&(this.loadInfo.noCache=!0),"1"===this.pageParams.get("hideOffscreen")&&(this.loadInfo.hideOffscreen=!0),"eager"===this.pageParams.get("loading")&&(this.loadInfo.loadEager=!0),this.pageParams.get("swName")&&(this.swName=this.pageParams.get("swName")||void 0),Ne&&this.sourceUrl.startsWith("file://")&&(this.loadInfo={sourceUrl:this.sourceUrl,loadUrl:this.sourceUrl.replace("file://","file2://")})}onStartLoad(e){this.pageParams.set("source",e.detail.sourceUrl);const t=new URL(window.location.href);t.search=this.pageParams.toString(),this.collPageUrl=t.toString(),e.detail.isFile?(window.history.pushState({},"",this.collPageUrl),this.sourceUrl=e.detail.sourceUrl,this.loadInfo=e.detail):window.location.search=this.pageParams.toString()}onCollLoaded(e){this.loadInfo=null,e.detail.collInfo&&(this.collTitle=e.detail.collInfo.name||e.detail.collInfo.title),e.detail.alreadyLoaded||e.detail.sourceUrl!==this.sourceUrl&&(this.pageParams.set("source",e.detail.sourceUrl),window.location.search=this.pageParams.toString())}onTitle(e){e.detail.title&&(this.pageTitle=e.detail.title,this.pageReplay=e.detail.replayTitle,document.title=(e.detail.replayTitle?"Archive of ":"")+this.pageTitle+" | "+this.appName)}safariKeyframes(){const e=document.createElement("style");document.head.appendChild(e),e.appendChild(document.createTextNode("\n    @keyframes spinAround {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(359deg);\n      }\n    }\n    "))}renderAbout(){return Y`
      <div class="modal is-active">
        <div class="modal-background" @click="${this.onAboutClose}"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">About ReplayWeb.page ${Ne?"App":""}</p>
              <button class="delete" aria-label="close" @click="${this.onAboutClose}"></button>
            </header>
            <section class="modal-card-body">
              <div class="container">
                <div class="content">
                  <div style="display: flex">
                    <div class="has-text-centered" style="width: 220px">
                      <fa-icon
                        size="3rem"
                        .svg=${Ge}
                        aria-label="ReplayWeb.page Logo"
                        role="img"
                      ></fa-icon>
                      <div style="font-size: smaller; margin-bottom: 1em">${Ne?"App":""} v${qe}</div>
                    </div>

                    ${Ne?Y`
                            <p>
                              ReplayWeb.page App is a standalone app for Mac,
                              Windows and Linux that loads web archive files
                              provided by the user and renders them for replay.
                            </p>
                          `:Y` <p>
                            <a href="https://replayweb.page" target="_blank"
                              >ReplayWeb.page</a
                            >
                            is a browser-based viewer that loads web archive
                            files provided by the user and renders them for
                            replay in the browser.
                          </p>`}
                  </div>

                  <p>Full source code is available 
                    <a href="https://github.com/webrecorder/replayweb.page" target="_blank">on GitHub</a>.
                  </p>

                  <p>See the <a target="_blank" href="./docs">documentation</a> for more info on how it works.</p>

                  <p>ReplayWeb.page is developed by <a href="https://webrecorder.net/" target="_blank">Webrecorder</a>.</p>

                  <h3>Privacy</h3>
                  <p><b>No data is uploaded anywhere and no information is collected.</b></p>
                  <p>All content rendered stays directly in your browser.<br/>When loading an archive from Google Drive,
                  the site may ask for account authorization to download the specified file only.</p>

                  <h4>Disclaimer of Warranties</h4>
                  <p>The application is provided "as is" without any guarantees.</p>
                  <details>
                    <summary>Legalese:</summary>
                    <p style="font-size: 0.8rem">DISCLAIMER OF SOFTWARE WARRANTY. WEBRECORDER SOFTWARE PROVIDES THIS SOFTWARE TO YOU "AS AVAILABLE"
                    AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE,
                    INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p>
                  </details>
                  <div class="has-text-centered">
                    <a class="button is-warning" href="#" @click="${this.onAboutClose}">Close</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>`}onAboutClose(){this.showAbout=!1}renderDropFileOverlay(){return Y`
      <div class="drop-file-overlay">Drop to load web archive</div>
    `}};function Si(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e([we({type:Boolean})],$i.prototype,"inited",void 0),e([we({type:Object})],$i.prototype,"pageParams",void 0),e([we({type:String})],$i.prototype,"sourceUrl",void 0),e([we({type:Boolean})],$i.prototype,"navMenuShown",void 0),e([we({type:Boolean})],$i.prototype,"showAbout",void 0),e([we({type:Boolean})],$i.prototype,"showFileDropOverlay",void 0),e([we({type:String})],$i.prototype,"collTitle",void 0),e([we({type:Object})],$i.prototype,"loadInfo",void 0),e([we({type:String})],$i.prototype,"embed",void 0),e([we({type:String})],$i.prototype,"collPageUrl",void 0),e([we({type:String})],$i.prototype,"pageTitle",void 0),e([we({type:Boolean})],$i.prototype,"pageReplay",void 0),e([we({type:String})],$i.prototype,"source",void 0),e([we({type:Boolean})],$i.prototype,"skipRuffle",void 0),e([we({type:String})],$i.prototype,"swErrorMsg",void 0),$i=ki=e([me("replay-app-main")],$i);let zi={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const _i=/[&<>"']/,Ci=/[&<>"']/g,Li=/[<>"']|&(?!#?\w+;)/,Ai=/[<>"']|&(?!#?\w+;)/g,Ii={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ei=e=>Ii[e];function Pi(e,t){if(t){if(_i.test(e))return e.replace(Ci,Ei)}else if(Li.test(e))return e.replace(Ai,Ei);return e}const Di=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ti(e){return e.replace(Di,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Fi=/(^|[^\[])\^/g;function Ri(e,t){e=e.source||e,t=t||"";const i={replace:(t,o)=>(o=(o=o.source||o).replace(Fi,"$1"),e=e.replace(t,o),i),getRegex:()=>new RegExp(e,t)};return i}const Mi=/[^\w:]/g,Ui=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Oi(e,t,i){if(e){let e;try{e=decodeURIComponent(Ti(i)).replace(Mi,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Ui.test(i)&&(i=function(e,t){Bi[" "+e]||(Ni.test(e)?Bi[" "+e]=e+"/":Bi[" "+e]=Gi(e,"/",!0));e=Bi[" "+e];const i=-1===e.indexOf(":");return"//"===t.substring(0,2)?i?t:e.replace(qi,"$1")+t:"/"===t.charAt(0)?i?t:e.replace(ji,"$1")+t:e+t}(t,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(e){return null}return i}const Bi={},Ni=/^[^:]+:\/*[^/]*$/,qi=/^([^:]+:)[\s\S]*$/,ji=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Hi={exec:function(){}};function Wi(e){let t,i,o=1;for(;o<arguments.length;o++)for(i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}function Vi(e,t){const i=e.replace(/\|/g,((e,t,i)=>{let o=!1,r=t;for(;--r>=0&&"\\"===i[r];)o=!o;return o?"|":" |"})),o=i.split(/ \|/);let r=0;if(o[0].trim()||o.shift(),o[o.length-1].trim()||o.pop(),o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(/\\\|/g,"|");return o}function Gi(e,t,i){const o=e.length;if(0===o)return"";let r=0;for(;r<o;){const n=e.charAt(o-r-1);if(n!==t||i){if(n===t||!i)break;r++}else r++}return e.substr(0,o-r)}function Ki(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Yi(e,t){if(t<1)return"";let i="";for(;t>1;)1&t&&(i+=e),t>>=1,e+=e;return i+e}function Zi(e,t,i,o){const r=t.href,n=t.title?Pi(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){o.state.inLink=!0;const e={type:"link",raw:i,href:r,title:n,text:a,tokens:o.inlineTokens(a,[])};return o.state.inLink=!1,e}return{type:"image",raw:i,href:r,title:n,text:Pi(a)}}class Qi{constructor(e){this.options=e||zi}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Gi(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],i=function(e,t){const i=e.match(/^(\s+)(?:```)/);if(null===i)return t;const o=i[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[i]=t;return i.length>=o.length?e.slice(o.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=Gi(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const i={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,o,r,n,a,s,l,c,d,h,u,p,f=t[1].trim();const b=f.length>1,m={type:"list",raw:"",ordered:b,start:b?+f.slice(0,-1):"",loose:!1,items:[]};f=b?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=b?f:"[*+-]");const g=new RegExp(`^( {0,3}${f})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(i=t[0],e=e.substring(i.length),c=t[2].split("\n",1)[0],d=e.split("\n",1)[0],this.options.pedantic?(n=2,u=c.trimLeft()):(n=t[2].search(/[^ ]/),n=n>4?1:n,u=c.slice(n),n+=t[1].length),s=!1,!c&&/^ *$/.test(d)&&(i+=d+"\n",e=e.substring(d.length+1),p=!0),!p){const t=new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(h=e.split("\n",1)[0],c=h,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=n||!c.trim())u+="\n"+c.slice(n);else{if(s)break;u+="\n"+c}s||c.trim()||(s=!0),i+=h+"\n",e=e.substring(h.length+1)}}m.loose||(l?m.loose=!0:/\n *\n *$/.test(i)&&(l=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(u),o&&(r="[ ] "!==o[0],u=u.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:i,task:!!o,checked:r,loose:!1,text:u}),m.raw+=i}m.items[m.items.length-1].raw=i.trimRight(),m.items[m.items.length-1].text=u.trimRight(),m.raw=m.raw.trimRight();const v=m.items.length;for(a=0;a<v;a++){this.lexer.state.top=!1,m.items[a].tokens=this.lexer.blockTokens(m.items[a].text,[]);const e=m.items[a].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let i=0;for(const e of t)if("\n"===e&&(i+=1),i>1)return!0;return!1}));!m.loose&&e.length&&t&&(m.loose=!0,m.items[a].loose=!0)}return m}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):Pi(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:Vi(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,o,r,n,a=e.align.length;for(i=0;i<a;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(a=e.rows.length,i=0;i<a;i++)e.rows[i]=Vi(e.rows[i],e.header.length).map((e=>({text:e})));for(a=e.header.length,o=0;o<a;o++)e.header[o].tokens=[],this.lexer.inlineTokens(e.header[o].text,e.header[o].tokens);for(a=e.rows.length,o=0;o<a;o++)for(n=e.rows[o],r=0;r<n.length;r++)n[r].tokens=[],this.lexer.inlineTokens(n[r].text,n[r].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Pi(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Pi(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=Gi(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const i=e.length;let o=0,r=0;for(;r<i;r++)if("\\"===e[r])r++;else if(e[r]===t[0])o++;else if(e[r]===t[1]&&(o--,o<0))return r;return-1}(t[2],"()");if(e>-1){const i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);e&&(i=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),Zi(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:o?o.replace(this.rules.inline._escapes,"$1"):o},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=(i[2]||i[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return Zi(i,e,i[0],this.lexer)}}emStrong(e,t,i=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o)return;if(o[3]&&i.match(/[\p{L}\p{N}]/u))return;const r=o[1]||o[2]||"";if(!r||r&&(""===i||this.rules.inline.punctuation.exec(i))){const i=o[0].length-1;let r,n,a=i,s=0;const l="*"===o[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+i);null!=(o=l.exec(t));){if(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!r)continue;if(n=r.length,o[3]||o[4]){a+=n;continue}if((o[5]||o[6])&&i%3&&!((i+n)%3)){s+=n;continue}if(a-=n,a>0)continue;if(n=Math.min(n,n+a+s),Math.min(i,n)%2){const t=e.slice(1,i+o.index+n);return{type:"em",raw:e.slice(0,i+o.index+n+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,i+o.index+n-1);return{type:"strong",raw:e.slice(0,i+o.index+n+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),o=/^ /.test(e)&&/ $/.test(e);return i&&o&&(e=e.substring(1,e.length-1)),e=Pi(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let e,o;return"@"===i[2]?(e=Pi(this.options.mangle?t(i[1]):i[1]),o="mailto:"+e):(e=Pi(i[1]),o=e),{type:"link",raw:i[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let e,o;if("@"===i[2])e=Pi(this.options.mangle?t(i[0]):i[0]),o="mailto:"+e;else{let t;do{t=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(t!==i[0]);e=Pi(i[0]),o="www."===i[1]?"http://"+e:e}return{type:"link",raw:i[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Pi(i[0]):i[0]:Pi(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:e}}}}const Ji={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Hi,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Ji.def=Ri(Ji.def).replace("label",Ji._label).replace("title",Ji._title).getRegex(),Ji.bullet=/(?:[*+-]|\d{1,9}[.)])/,Ji.listItemStart=Ri(/^( *)(bull) */).replace("bull",Ji.bullet).getRegex(),Ji.list=Ri(Ji.list).replace(/bull/g,Ji.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ji.def.source+")").getRegex(),Ji._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ji._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Ji.html=Ri(Ji.html,"i").replace("comment",Ji._comment).replace("tag",Ji._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ji.paragraph=Ri(Ji._paragraph).replace("hr",Ji.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ji._tag).getRegex(),Ji.blockquote=Ri(Ji.blockquote).replace("paragraph",Ji.paragraph).getRegex(),Ji.normal=Wi({},Ji),Ji.gfm=Wi({},Ji.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Ji.gfm.table=Ri(Ji.gfm.table).replace("hr",Ji.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ji._tag).getRegex(),Ji.gfm.paragraph=Ri(Ji._paragraph).replace("hr",Ji.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ji.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ji._tag).getRegex(),Ji.pedantic=Wi({},Ji.normal,{html:Ri("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ji._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hi,paragraph:Ri(Ji.normal._paragraph).replace("hr",Ji.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ji.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Xi={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Hi,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Hi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function eo(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function to(e){let t,i,o="";const r=e.length;for(t=0;t<r;t++)i=e.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),o+="&#"+i+";";return o}Xi._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Xi.punctuation=Ri(Xi.punctuation).replace(/punctuation/g,Xi._punctuation).getRegex(),Xi.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Xi.escapedEmSt=/\\\*|\\_/g,Xi._comment=Ri(Ji._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Xi.emStrong.lDelim=Ri(Xi.emStrong.lDelim).replace(/punct/g,Xi._punctuation).getRegex(),Xi.emStrong.rDelimAst=Ri(Xi.emStrong.rDelimAst,"g").replace(/punct/g,Xi._punctuation).getRegex(),Xi.emStrong.rDelimUnd=Ri(Xi.emStrong.rDelimUnd,"g").replace(/punct/g,Xi._punctuation).getRegex(),Xi._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Xi._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Xi._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Xi.autolink=Ri(Xi.autolink).replace("scheme",Xi._scheme).replace("email",Xi._email).getRegex(),Xi._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Xi.tag=Ri(Xi.tag).replace("comment",Xi._comment).replace("attribute",Xi._attribute).getRegex(),Xi._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xi._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Xi._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Xi.link=Ri(Xi.link).replace("label",Xi._label).replace("href",Xi._href).replace("title",Xi._title).getRegex(),Xi.reflink=Ri(Xi.reflink).replace("label",Xi._label).replace("ref",Ji._label).getRegex(),Xi.nolink=Ri(Xi.nolink).replace("ref",Ji._label).getRegex(),Xi.reflinkSearch=Ri(Xi.reflinkSearch,"g").replace("reflink",Xi.reflink).replace("nolink",Xi.nolink).getRegex(),Xi.normal=Wi({},Xi),Xi.pedantic=Wi({},Xi.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ri(/^!?\[(label)\]\((.*?)\)/).replace("label",Xi._label).getRegex(),reflink:Ri(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xi._label).getRegex()}),Xi.gfm=Wi({},Xi.normal,{escape:Ri(Xi.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Xi.gfm.url=Ri(Xi.gfm.url,"i").replace("email",Xi.gfm._extended_email).getRegex(),Xi.breaks=Wi({},Xi.gfm,{br:Ri(Xi.br).replace("{2,}","*").getRegex(),text:Ri(Xi.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class io{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zi,this.options.tokenizer=this.options.tokenizer||new Qi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ji.normal,inline:Xi.normal};this.options.pedantic?(t.block=Ji.pedantic,t.inline=Xi.pedantic):this.options.gfm&&(t.block=Ji.gfm,this.options.breaks?t.inline=Xi.breaks:t.inline=Xi.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ji,inline:Xi}}static lex(e,t){return new io(t).lex(e)}static lexInline(e,t){return new io(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let i,o,r,n;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o=>!!(i=o.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),1===i.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(i);else if(i=this.tokenizer.code(e))e=e.substring(i.raw.length),o=t[t.length-1],!o||"paragraph"!==o.type&&"text"!==o.type?t.push(i):(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.list(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.def(e))e=e.substring(i.raw.length),o=t[t.length-1],!o||"paragraph"!==o.type&&"text"!==o.type?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(o.raw+="\n"+i.raw,o.text+="\n"+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else{if(r=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const i=e.slice(1);let o;this.options.extensions.startBlock.forEach((function(e){o=e.call({lexer:this},i),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r)))o=t[t.length-1],n&&"paragraph"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(i),n=r.length!==e.length,e=e.substring(i.raw.length);else if(i=this.tokenizer.text(e))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let i,o,r,n,a,s,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,n.index)+"["+Yi("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,n.index)+"["+Yi("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,n.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(s=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((o=>!!(i=o.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,l,s))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.autolink(e,to))e=e.substring(i.raw.length),t.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(e,to))){if(r=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const i=e.slice(1);let o;this.options.extensions.startInline.forEach((function(e){o=e.call({lexer:this},i),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(r,eo))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(s=i.raw.slice(-1)),a=!0,o=t[t.length-1],o&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}}class oo{constructor(e){this.options=e||zi}code(e,t,i){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,o);null!=t&&t!==e&&(i=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",o?'<pre><code class="'+this.options.langPrefix+Pi(o,!0)+'">'+(i?e:Pi(e,!0))+"</code></pre>\n":"<pre><code>"+(i?e:Pi(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,i,o){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+o.slug(i)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,i){const o=t?"ol":"ul";return"<"+o+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+o+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(null===(e=Oi(this.options.sanitize,this.options.baseUrl,e)))return i;let o='<a href="'+Pi(e)+'"';return t&&(o+=' title="'+t+'"'),o+=">"+i+"</a>",o}image(e,t,i){if(null===(e=Oi(this.options.sanitize,this.options.baseUrl,e)))return i;let o='<img src="'+e+'" alt="'+i+'"';return t&&(o+=' title="'+t+'"'),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class ro{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class no{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,o=0;if(this.seen.hasOwnProperty(i)){o=this.seen[e];do{o++,i=e+"-"+o}while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=o,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class ao{constructor(e){this.options=e||zi,this.options.renderer=this.options.renderer||new oo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ro,this.slugger=new no}static parse(e,t){return new ao(t).parse(e)}static parseInline(e,t){return new ao(t).parseInline(e)}parse(e,t=!0){let i,o,r,n,a,s,l,c,d,h,u,p,f,b,m,g,v,w,y,x="";const k=e.length;for(i=0;i<k;i++)if(h=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(y=this.options.extensions.renderers[h.type].call({parser:this},h),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))x+=y||"";else switch(h.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(h.tokens),h.depth,Ti(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(c="",l="",n=h.header.length,o=0;o<n;o++)l+=this.renderer.tablecell(this.parseInline(h.header[o].tokens),{header:!0,align:h.align[o]});for(c+=this.renderer.tablerow(l),d="",n=h.rows.length,o=0;o<n;o++){for(s=h.rows[o],l="",a=s.length,r=0;r<a;r++)l+=this.renderer.tablecell(this.parseInline(s[r].tokens),{header:!1,align:h.align[r]});d+=this.renderer.tablerow(l)}x+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(h.tokens),x+=this.renderer.blockquote(d);continue;case"list":for(u=h.ordered,p=h.start,f=h.loose,n=h.items.length,d="",o=0;o<n;o++)m=h.items[o],g=m.checked,v=m.task,b="",m.task&&(w=this.renderer.checkbox(g),f?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=w+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=w+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:w}):b+=w),b+=this.parse(m.tokens,f),d+=this.renderer.listitem(b,v,g);x+=this.renderer.list(d,u,p);continue;case"html":x+=this.renderer.html(h.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(d=h.tokens?this.parseInline(h.tokens):h.text;i+1<k&&"text"===e[i+1].type;)h=e[++i],d+="\n"+(h.tokens?this.parseInline(h.tokens):h.text);x+=t?this.renderer.paragraph(d):d;continue;default:{const e='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return x}parseInline(e,t){t=t||this.renderer;let i,o,r,n="";const a=e.length;for(i=0;i<a;i++)if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(r=this.options.extensions.renderers[o.type].call({parser:this},o),!1!==r||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))n+=r||"";else switch(o.type){case"escape":case"text":n+=t.text(o.text);break;case"html":n+=t.html(o.text);break;case"link":n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break;case"image":n+=t.image(o.href,o.title,o.text);break;case"strong":n+=t.strong(this.parseInline(o.tokens,t));break;case"em":n+=t.em(this.parseInline(o.tokens,t));break;case"codespan":n+=t.codespan(o.text);break;case"br":n+=t.br();break;case"del":n+=t.del(this.parseInline(o.tokens,t));break;default:{const e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return n}}function so(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(i=t,t=null),Ki(t=Wi({},so.defaults,t||{})),i){const o=t.highlight;let r;try{r=io.lex(e,t)}catch(e){return i(e)}const n=function(e){let n;if(!e)try{t.walkTokens&&so.walkTokens(r,t.walkTokens),n=ao.parse(r,t)}catch(t){e=t}return t.highlight=o,e?i(e):i(null,n)};if(!o||o.length<3)return n();if(delete t.highlight,!r.length)return n();let a=0;return so.walkTokens(r,(function(e){"code"===e.type&&(a++,setTimeout((()=>{o(e.text,e.lang,(function(t,i){if(t)return n(t);null!=i&&i!==e.text&&(e.text=i,e.escaped=!0),a--,0===a&&n()}))}),0))})),void(0===a&&n())}try{const i=io.lex(e,t);return t.walkTokens&&so.walkTokens(i,t.walkTokens),ao.parse(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Pi(e.message+"",!0)+"</pre>";throw e}}so.options=so.setOptions=function(e){var t;return Wi(so.defaults,e),t=so.defaults,zi=t,so},so.getDefaults=Si,so.defaults=zi,so.use=function(...e){const t=Wi({},...e),i=so.defaults.extensions||{renderers:{},childTokens:{}};let o;e.forEach((e=>{if(e.extensions&&(o=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=i.renderers?i.renderers[e.name]:null;i.renderers[e.name]=t?function(...i){let o=e.renderer.apply(this,i);return!1===o&&(o=t.apply(this,i)),o}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");i[e.level]?i[e.level].unshift(e.tokenizer):i[e.level]=[e.tokenizer],e.start&&("block"===e.level?i.startBlock?i.startBlock.push(e.start):i.startBlock=[e.start]:"inline"===e.level&&(i.startInline?i.startInline.push(e.start):i.startInline=[e.start]))}e.childTokens&&(i.childTokens[e.name]=e.childTokens)}))),e.renderer){const i=so.defaults.renderer||new oo;for(const t in e.renderer){const o=i[t];i[t]=(...r)=>{let n=e.renderer[t].apply(i,r);return!1===n&&(n=o.apply(i,r)),n}}t.renderer=i}if(e.tokenizer){const i=so.defaults.tokenizer||new Qi;for(const t in e.tokenizer){const o=i[t];i[t]=(...r)=>{let n=e.tokenizer[t].apply(i,r);return!1===n&&(n=o.apply(i,r)),n}}t.tokenizer=i}if(e.walkTokens){const i=so.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),i&&i.call(this,t)}}o&&(t.extensions=i),so.setOptions(t)}))},so.walkTokens=function(e,t){for(const i of e)switch(t.call(so,i),i.type){case"table":for(const e of i.header)so.walkTokens(e.tokens,t);for(const e of i.rows)for(const i of e)so.walkTokens(i.tokens,t);break;case"list":so.walkTokens(i.items,t);break;default:so.defaults.extensions&&so.defaults.extensions.childTokens&&so.defaults.extensions.childTokens[i.type]?so.defaults.extensions.childTokens[i.type].forEach((function(e){so.walkTokens(i[e],t)})):i.tokens&&so.walkTokens(i.tokens,t)}},so.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");Ki(t=Wi({},so.defaults,t||{}));try{const i=io.lexInline(e,t);return t.walkTokens&&so.walkTokens(i,t.walkTokens),ao.parseInline(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Pi(e.message+"",!0)+"</pre>";throw e}},so.Parser=ao,so.parser=ao.parse,so.Renderer=oo,so.TextRenderer=ro,so.Lexer=io,so.lexer=io.lex,so.Tokenizer=Qi,so.Slugger=no,so.parse=so;so.options,so.setOptions,so.use,so.walkTokens,so.parseInline,ao.parse,io.lex;var lo;let co=lo=class extends fe{constructor(){super(...arguments),this.collInfo=null,this.curatedPageMap={},this.currList=0,this.active=!1,this.isSidebar=!1,this.splitDirection=!1,this.lastST=0,this.clickTime=0,this.splitter=null}recalcSplitter(e){this.splitDirection=this.isSidebar||e<769?"vertical":"horizontal"}firstUpdated(){this.recalcSplitter(document.documentElement.clientWidth),this.obs=new ResizeObserver((e=>{this.recalcSplitter(e[0].contentRect.width)})),this.obs.observe(this)}updated(e){e.has("collInfo")&&this.doLoadCurated(),(e.has("collInfo")||e.has("isSidebar"))&&this.recalcSplitter(document.documentElement.clientWidth),e.has("splitDirection")&&this.configureSplitter(),e.has("currList")&&this.active&&this.sendChangeEvent({currList:this.currList})}configureSplitter(){const e=this.renderRoot.querySelector(".sidebar"),t=this.renderRoot.querySelector(".main-content");if(this.splitter){try{this.splitter.destroy()}catch(e){}this.splitter=null}if(e&&t&&!this.splitter){const i={sizes:[20,80],gutterSize:4,direction:this.splitDirection};this.splitter=Wt([e,t],i)}}doLoadCurated(){return t(this,void 0,void 0,(function*(){if(null==this.collInfo)return;this.curatedPageMap={};const e={};for(const t of this.collInfo.pages)e[t.id]=t;for(const e of this.collInfo.curatedPages){this.curatedPageMap[e.list]||(this.curatedPageMap[e.list]=[]);const t=e,i=t.url,o=t.ts,r=t.title||t.url,n=e.desc;this.curatedPageMap[e.list].push({url:i,ts:o,title:r,desc:n})}this.scrollToList()}))}static get styles(){return Be(d`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 0px;

        justify-content: flex-start;
        align-items: center;
      }

      :host(.sidebar) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.sidebar) .column.sidebar.is-one-fifth {
        width: 100% !important;
      }

      ${lo.sidebarStyles(c(":host(.sidebar)"))}

      .desc p {
        margin-bottom: 1em;
      }

      .columns {
        width: 100%;
        height: 100%;
        justify-self: stretch;
        margin: 1em 0 0 0 !important;
        min-height: 0;
      }

      .column.main-content {
        min-height: 0;
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin-left: 0.75em;
      }

      .column.main-content.main-scroll {
        padding-right: 0.75em;
        word-break: break-all;
      }

      ul.menu-list a.is-active {
        background-color: #55be6f;
      }
      ol {
        margin-left: 30px;
      }

      @media screen and (min-width: 769px) {
        .columns {
          margin-top: 0.75em;
        }

        .column.sidebar {
          max-height: 100%;
          overflow-y: auto;
        }
      }

      @media screen and (max-width: 768px) {
        ${lo.sidebarStyles()}
      }

      .gutter.gutter-vertical:hover {
        cursor: row-resize;
      }

      .gutter.gutter-horizontal:hover {
        cursor: col-resize;
      }
    `)}static sidebarStyles(e=d``){return d`
      ${e} .columns {
        position: relative;
      }

      ${e} .column.sidebar {
        overflow-y: auto;
        margin-top: 0.75em;
      }

      ${e} .column.main-content {
        position: relative;
        overflow-y: auto;

        border-top: 1px solid black;

        height: 100%;
      }

      ${e} .menu {
        font-size: 0.8rem;
      }
    `}render(){var e,t;const i=this.currList;return Y`
      <div
        class="is-sr-only"
        role="heading"
        aria-level="${this.isSidebar?"2":"1"}"
      >
        Story for ${this.collInfo.title}
      </div>
      <div class="columns">
        <div class="column sidebar is-one-fifth">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a
                  href="#list-0"
                  data-list="0"
                  class="${0===i?"is-active":""} menu-label is-size-4"
                  @click=${this.onClickScroll}
                  >${null===(e=this.collInfo)||void 0===e?void 0:e.title}</a
                >
                <ul class="menu-list">
                  ${null===(t=this.collInfo)||void 0===t?void 0:t.lists.map((e=>Y` <li>
                        <a
                          @click=${this.onClickScroll}
                          href="#list-${e.id}"
                          data-list="${e.id}"
                          class="${i===e.id?"is-active":""}"
                          >${e.title}</a
                        >
                      </li>`))}
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div @scroll=${this.onScroll} class="column main-content main-scroll">
          <section id="list-0" class="desc">
            <h2 class="has-text-centered title is-3">
              ${this.collInfo.title}
            </h2>

            ${this.collInfo.desc?Ae(so(this.collInfo.desc)):""}
          </section>
          ${this.renderLists()}
        </div>
      </div>
    `}renderLists(){var e,t;return Y` ${null===(t=null===(e=this.collInfo)||void 0===e?void 0:e.lists)||void 0===t?void 0:t.map((e=>Y`
        <article id="list-${e.id}">
          <div class="content">
            <hr />
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
            <ol>
              ${this.curatedPageMap[e.id]?this.curatedPageMap[e.id].map((e=>this.renderCPage(e))):Y``}
            </ol>
          </div>
        </article>
      `))}`}renderCPage(e){const t=new Date(e.ts),i=mt(t.toISOString());return Y` <li>
      <div class="content">
        <a
          @click="${this.onReplay}"
          data-url="${e.url}"
          data-ts="${i}"
          href="${gt("story",e.url,i)}"
        >
          <p class="is-size-6 has-text-weight-bold has-text-link">${e.title}</p>
          <p class="has-text-dark">${e.url}</p>
        </a>
        <p>${t.toLocaleString()}</p>
        <p>${e.desc}</p>
      </div>
      <hr />
    </li>`}onReplay(e){e.preventDefault();const t={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.sendChangeEvent(t),!1}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}onClickScroll(e){return e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list")),this.scrollToList(),!1}scrollToList(){var e,t,i;this.currList>(null!==(i=null===(t=null===(e=this.collInfo)||void 0===e?void 0:e.lists)||void 0===t?void 0:t.length)&&void 0!==i?i:0)&&(this.currList=0);const o={behavior:"smooth",block:"nearest",inline:"nearest"};this.clickTime=(new Date).getTime();const r=this.renderRoot.getElementById("list-"+this.currList);r&&r.scrollIntoView(o)}onScroll(e){const t=e.currentTarget,i=this.renderRoot.getElementById("list-"+this.currList);if(!i)return;let o=i;const r=t.offsetTop,n=t.scrollTop;if(n>this.lastST)for(;o.nextElementSibling&&o.nextElementSibling.getBoundingClientRect().top<r;)o=o.nextElementSibling;else for(;o.previousElementSibling&&o.previousElementSibling.getBoundingClientRect().bottom>=r;)o=o.previousElementSibling;if(this.lastST=n,o&&o!=i&&o.id.startsWith("list-")&&(this.currList=Number(o.id.slice(5))),(new Date).getTime()-this.clickTime<1e3)return;const a=this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);if(a){const e={behavior:"smooth",block:"nearest",inline:"nearest"};a.scrollIntoView(e)}}};e([we({type:Object})],co.prototype,"collInfo",void 0),e([we({type:Object})],co.prototype,"curatedPageMap",void 0),e([we({type:Number})],co.prototype,"currList",void 0),e([we({type:Boolean})],co.prototype,"active",void 0),e([we({type:Boolean})],co.prototype,"isSidebar",void 0),e([we({type:Boolean})],co.prototype,"splitDirection",void 0),co=lo=e([me("wr-coll-story")],co);class ho extends fe{constructor(){super(),this.state="trypublic",this.sourceUrl="",this.scriptLoaded=!1,this.error=!1}static get properties(){return{state:{type:String},sourceUrl:{type:String},error:{type:Boolean},reauth:{type:Boolean}}}updated(e){e.has("sourceUrl")&&(this.error=!1,this.state="trypublic",this.tryPublicAccess().then((e=>{e||(this.state="tryauto",this.requestUpdate())})))}tryPublicAccess(){return t(this,void 0,void 0,(function*(){try{const e=this.sourceUrl,t=`https://helper-proxy.webrecorder.workers.dev/g/${e.slice(14)}`;let i=null;try{i=yield fetch(t)}catch(e){return!1}const o=yield i.json();if(!o.url||!o.name||!o.size)return!1;if(o.size>15e6)return!1;const r=o.url;try{const e=new AbortController,t=e.signal;if(i=yield fetch(r,{signal:t}),e.abort(),200!=i.status)return!1}catch(e){return!1}const n=o.name,a={publicUrl:r},s=Number(o.size);return this.dispatchEvent(new CustomEvent("load-ready",{detail:{name:n,extra:a,size:s,sourceUrl:e}})),!0}catch(e){return!1}}))}onLoad(){this.scriptLoaded=!0,this.gauth("none",(e=>{e.error?"implicitonly"!==this.state&&(this.state="trymanual"):this.authed(e)}))}onClickAuth(){this.gauth("select_account",(e=>{e.error||this.authed(e)}))}authed(e){return t(this,void 0,void 0,(function*(){const t=this.sourceUrl,i=`https://www.googleapis.com/drive/v3/files/${t.slice(14)}`,o={Authorization:`Bearer ${e.access_token}`},r=yield fetch(i+"?fields=name,size&supportsAllDrives=true",{headers:o});if(404===r.status||403==r.status)return"implicitonly"!==this.state&&(this.state="trymanual"),void(this.error=!0);this.error=!1;const n=yield r.json(),a=n.name,s=Number(n.size);this.dispatchEvent(new CustomEvent("load-ready",{detail:{sourceUrl:t,headers:o,size:s,name:a}}))}))}static get styles(){return Be(d``)}render(){return Y` ${this.script()}
    ${"trymanual"!==this.state?Y` <p>Connecting to Google Drive...</p> `:Y`
          ${this.error?Y`
                <div class="error has-text-danger">
                  <p>
                    ${this.reauth?"Some resources are loaded on demand from Google Drive, which requires reauthorization.":"Could not access this file with the current Google Drive account."}
                  </p>
                  <p>
                    If you have multiple Google Drive accounts, be sure to
                    select the correct one.
                  </p>
                </div>
                <br />
              `:""}
          <button
            class="button is-warning is-rounded"
            @click="${this.onClickAuth}"
          >
            <span class="icon"
              ><fa-icon .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"/></svg>'}"></fa-icon
            ></span>
            <span>Authorize Google Drive</span>
          </button>
        `}`}script(){if("trypublic"===this.state||this.scriptLoaded)return Y``;const e=document.createElement("script");return e.onload=()=>this.onLoad(),e.src="https://apis.google.com/js/platform.js",e}gauth(e,t){self.gapi.load("auth2",(()=>{self.gapi.auth2.authorize({client_id:"160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.file",response_type:"token",prompt:e},t)}))}}customElements.define("wr-gdrive",ho);class uo extends fe{constructor(){super(...arguments),this.loadInfo=null,this.state="waiting",this.progress=0,this.percent=0,this.currentSize=0,this.totalSize=0,this.total=0,this.coll="",this.tryFileHandle=!!window.showOpenFilePicker,this.errorAllowRetry=!1,this.pingInterval=0,this.fileHandle=null,this.noWebWorker=!1}firstUpdated(){this.initMessages()}initMessages(){if(this.noWebWorker=Boolean(this.loadInfo&&this.loadInfo.noWebWorker),this.noWebWorker){if(!navigator.serviceWorker)return;this.worker=navigator.serviceWorker}else this.worker=new Worker(this.swName);this.worker.addEventListener("message",(e=>{var t;switch(e.data.msg_type){case"collProgress":if(e.data.name===this.coll){if(this.percent=e.data.percent,e.data.error)if(this.error=e.data.error,this.state="errored",this.errorAllowRetry=!0,this.fileHandle=e.data.fileHandle,"missing_local_file"===this.error)this.tryFileHandle=!1;else if("permission_needed"===this.error&&e.data.fileHandle){this.state="permission_needed";break}e.data.currentSize&&e.data.totalSize&&(this.currentSize=e.data.currentSize,this.totalSize=e.data.totalSize),this.extraMsg=e.data.extraMsg}break;case"collAdded":e.data.name===this.coll&&(this.total||(this.total=100),this.progress=this.total,this.percent=100,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:e.data})),this.noWebWorker?this.pingInterval&&clearInterval(this.pingInterval):null===(t=this.worker)||void 0===t||t.terminate(),this.worker=null)}}))}doLoad(){var e,i;return t(this,void 0,void 0,(function*(){let t,o,r=this.sourceUrl,n=null;if(this.percent=this.currentSize=this.totalSize=0,null===(e=this.loadInfo)||void 0===e?void 0:e.swError)return this.state="errored",this.error=this.loadInfo.swError,void(this.errorAllowRetry=!1);try{const{scheme:e,host:t,path:o}=function(e){let t=e.indexOf("://"),i=0,o="",r="",n="";return t>=0?(o=e.slice(0,t),t+=3):(t++,e.startsWith("//")&&(t+=2)),i=e.indexOf("/",t),i>0?(r=e.slice(t,i),n=e.slice(i)):(r=e.slice(t),n=""),{scheme:o,host:r,path:n}}(r);switch(e){case"googledrive":this.state="googledrive",n=null!==(i=yield this.googledriveInit())&&void 0!==i?i:null;break;case"s3":n={sourceUrl:r,loadUrl:`https://${t}.s3.amazonaws.com${o}`,name:this.sourceUrl};break;case"file":if(!this.loadInfo&&!this.tryFileHandle)return this.state="errored",this.error="File URLs can not be entered directly or shared.\nYou can select a file to upload from the main page by clicking the 'Choose File...' button.",void(this.errorAllowRetry=!1);n=this.loadInfo;break;case"proxy":r="proxy:"+r.slice(8)}}catch(e){console.log(e)}n||(n={sourceUrl:r}),this.state="started",this.loadInfo&&(n.newFullImport=this.loadInfo.newFullImport,n.loadEager=this.loadInfo.loadEager,n.noCache=this.loadInfo.noCache,this.loadInfo.extraConfig&&(o=this.loadInfo.extraConfig),r.startsWith("proxy:")&&(null==o?void 0:o.recording)&&(t="recordingproxy"));const a={msg_type:"addColl",name:this.coll,extraConfig:o,type:t,skipExisting:!0,file:n};navigator.serviceWorker.controller||(yield new Promise((e=>{navigator.serviceWorker.addEventListener("controllerchange",(()=>e()))}))),this.worker&&(this.noWebWorker?(navigator.serviceWorker.controller.postMessage(a),this.pingInterval=setInterval((()=>{navigator.serviceWorker.controller.postMessage({msg_type:"ping"})}),15e3)):this.worker.postMessage(a))}))}googledriveInit(){return this._gdWait=new Promise((e=>this._gdResolve=e)),this._gdWait}onLoadReady(e){this._gdResolve&&this._gdResolve(e.detail)}onCancel(){var e;if(!this.worker)return;const t={msg_type:"cancelLoad",name:this.coll};this.noWebWorker?(null===(e=navigator.serviceWorker)||void 0===e?void 0:e.controller)&&(navigator.serviceWorker.controller.postMessage(t),this.pingInterval&&clearInterval(this.pingInterval)):this.worker.postMessage(t)}updated(e){(Boolean(this.sourceUrl&&e.has("sourceUrl"))||e.has("tryFileHandle"))&&this.doLoad()}static get styles(){return Be(d`
      :host {
        height: 100%;
        display: flex;
      }

      .progress-div {
        position: relative;
        width: 400px !important;
      }

      .progress-label {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: calc(1.5rem / 1.5);
        line-height: 1.5rem;
      }

      .loaded-prog {
        margin-bottom: 1em;
      }

      .error {
        white-space: pre-wrap;
        margin-bottom: 2em;
      }

      section.container {
        margin: auto;
      }

      .extra-msg {
        font-size: 0.8rem;
      }
    `)}render(){return Y`
      <section class="container">
        <div class="is-justify-content-center is-flex">
          <fa-icon
            size="5rem"
            style="margin-bottom: 1rem;"
            .svg=${Ge}
            aria-label="ReplayWeb.page Logo"
            role="img"
          ></fa-icon>
        </div>
        ${this.embed?"":Y` <div class="level">
              <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
            </div>`}
        <div class="level">
          <div class="level-item has-text-centered">
            ${this.renderContent()}
          </div>
        </div>
      </section>
    `}renderContent(){switch(this.state){case"googledrive":return Y`<wr-gdrive
          .sourceUrl=${this.sourceUrl}
          @load-ready=${this.onLoadReady}
        ></wr-gdrive>`;case"started":return Y` <div class="progress-div">
          <progress
            id="progress"
            class="progress is-primary is-large"
            value="${this.percent}"
            max="100"
          ></progress>
          <label class="progress-label" for="progress">${this.percent}%</label>

          ${this.currentSize&&this.totalSize?Y` <div class="loaded-prog">
                Loaded
                <b>${St()(this.currentSize)}</b>
                of

                <b>${St()(this.totalSize)}</b>

                ${this.extraMsg&&Y` <p class="extra-msg">(${this.extraMsg})</p> `}
              </div>`:Y``}
          ${this.embed?"":Y` <button @click="${this.onCancel}" class="button is-danger">
                Cancel
              </button>`}
        </div>`;case"errored":return Y` <div class="has-text-left">
          <div class="error has-text-danger">${this.error}</div>
          <div>
            ${this.errorAllowRetry?Y` <a
                  class="button is-warning"
                  @click=${()=>window.parent.location.reload()}
                  >Try Again</a
                >`:""}
            ${this.embed?Y``:Y` <a href="/" class="button is-warning">Back</a>`}
          </div>
        </div>`;case"permission_needed":return Y` <div class="has-text-left">
          <div class="">
            Permission is needed to reload the archive file. (Click
            <i>Cancel</i> to cancel loading this archive.)
          </div>
          <button @click="${this.onAskPermission}" class="button is-primary">
            Show Permission
          </button>
          <a href="/" class="button is-danger">Cancel</a>
        </div>`;default:return Y`<progress
          class="progress is-primary is-large"
          style="max-width: 400px"
        ></progress>`}}onAskPermission(){var e;return t(this,void 0,void 0,(function*(){"granted"===(yield null===(e=this.fileHandle)||void 0===e?void 0:e.requestPermission({mode:"read"}))&&this.doLoad()}))}}e([we({type:String})],uo.prototype,"sourceUrl",void 0),e([we({type:Object})],uo.prototype,"loadInfo",void 0),e([we({type:String})],uo.prototype,"state",void 0),e([we({type:Number})],uo.prototype,"progress",void 0),e([we({type:Number})],uo.prototype,"percent",void 0),e([we({type:Number})],uo.prototype,"currentSize",void 0),e([we({type:Number})],uo.prototype,"totalSize",void 0),e([we({type:String})],uo.prototype,"error",void 0),e([we({type:Number})],uo.prototype,"total",void 0),e([we({type:String})],uo.prototype,"status",void 0),e([we({type:String})],uo.prototype,"coll",void 0),e([we({type:String})],uo.prototype,"embed",void 0),e([we({type:Boolean})],uo.prototype,"tryFileHandle",void 0),e([we({type:Boolean})],uo.prototype,"errorAllowRetry",void 0),e([we({type:String})],uo.prototype,"extraMsg",void 0),e([we({type:String})],uo.prototype,"swName",void 0),customElements.define("wr-loader",uo);var po=__webpack_require__(563),fo=__webpack_require__.n(po),bo=__webpack_require__(112);class mo extends fe{constructor(){super(...arguments),this.filteredPages=[],this.sortedPages=[],this.query="",this.flex=null,this.textPages=null,this.newQuery=null,this.loading=!1,this.updatingSearch=!1,this.showAllPages=!1,this.hasExtraPages=!1,this.currList=0,this.active=!1,this.editable=!1,this.changeNeeded=!1,this.selectedPages=new Set,this.menuActive=!1,this.sortKey="date",this.sortDesc=!0,this.isSidebar=!1,this.url="",this.ts="",this.editing=!1,this.toDeletePages=null,this.toDeletePage=null,this.collInfo=null,this.allSelected=!1,this.defaultKey=""}static get sortKeys(){return[{key:"",name:"Best Match"},{key:"title",name:"Title"},{key:"date",name:"Date"}]}_timedUpdate(){null!==this.newQuery&&(this.query=this.newQuery,this.newQuery=null,this.filter())}updated(e){return t(this,void 0,void 0,(function*(){if(e.has("collInfo")?this.updateTextSearch():(e.has("query")||e.has("currList")||e.has("showAllPages"))&&this.filter(),e.has("active")&&this.active&&this.changeNeeded&&this.filter(),e.has("query")){this.query?(this.sortKey="",this.sortDesc=!1):(this.sortKey="date",this.sortDesc=!0);const e=this.renderRoot.querySelector("wr-sorter");e&&(e.sortKey=this.sortKey,e.sortDesc=this.sortDesc)}if(e.has("sortedPages")&&this.isSidebar){const e=this.renderRoot.querySelector(".current");if(e){const t={behavior:"smooth",block:"nearest",inline:"nearest"};setTimeout((()=>e.scrollIntoView(t)),100)}}}))}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout((()=>this._timedUpdate()),250)}filter(){return t(this,void 0,void 0,(function*(){if(this.loading)return;if(this.active||(this.changeNeeded=!0),this.loading=!0,this.flex&&this.query&&this.textPages){const e=yield this.flex.searchAsync(this.query,25);this.filteredPages=e.map((e=>this.textPages[e]))}else this.showAllPages&&this.hasExtraPages?this.filteredPages=[...this.textPages]:this.filteredPages=[...this.collInfo.pages];0!==this.currList&&(yield this.filterCurated());for(const e of this.filteredPages){const{timestamp:t,date:i}=bt(e);if(null==i)throw new Error("Page date is null");e.timestamp=t,e.date=i}this.loading=!1,this.changeNeeded=!1;const e={query:this.query,currList:this.currList};this.sendChangeEvent(e)}))}filterCurated(){return t(this,void 0,void 0,(function*(){const e=yield fetch(`${this.collInfo.apiPrefix}/curated/${this.currList}`),t=(yield e.json()).curated;this.filteredPages=t}))}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}addPages(e){var t;const i=new bo.Index;return this.flex=i,this.textPages=e,this.hasExtraPages=Boolean(this.textPages&&(null===(t=this.collInfo)||void 0===t?void 0:t.pages)&&this.textPages.length>this.collInfo.pages.length),Promise.all(e.map(((e,t)=>{let o=e.url;return e.title&&(o+=" "+e.title),e.text&&(o+=" "+e.text),i.addAsync(t,o)})))}updateTextSearch(){var e,i,r,n;return t(this,void 0,void 0,(function*(){if(this.updatingSearch)return;this.updatingSearch=!0;let t=0;try{const c=yield caches.open("cache:"+this.collInfo.coll),d=`${this.collInfo.apiPrefix}/textIndex`;let h=yield c.match(d);h&&Number(h.headers.get("Content-Length"))||(h=yield fetch(d),200===h.status&&Number(h.headers.get("Content-Length"))&&c.put(d,h.clone()));const u=[];try{for(var a,s=!0,l=o(fo()(h.body.getReader()));a=yield l.next(),!(e=a.done);s=!0){n=a.value,s=!1;const e=n;e.url&&(e.id=++t,u.push(e))}}catch(e){i={error:e}}finally{try{s||e||!(r=l.return)||(yield r.call(l))}finally{if(i)throw i.error}}yield this.addPages(u)}catch(e){console.warn(e)}finally{0===t&&(yield this.addPages(this.collInfo.pages)),this.updatingSearch=!1}yield this.filter()}))}static get styles(){return Be(d`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        min-width: 0px;
        flex-direction: column;
        box-sizing: border-box !important;
      }

      div[role="main"],
      #contents div[role="complementary"] {
        height: 100%;
      }

      .main.columns {
        width: 100%;
        justify-self: stretch;
        min-height: 0px;
        margin: 0px;
      }

      .header.columns {
        width: 100%;
        margin-bottom: 0px;
      }
      .header a {
        color: black;
      }

      .header .column.pagetitle {
        padding-left: 0.25em;
      }

      .column.main-content {
        min-height: 0px;
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin-top: 0.5em;
        margin-left: 0.75em;
      }

      .thumbnail {
        width: 6rem;
        flex: 0 0 auto;
        box-sizing: content-box;
      }

      .index-bar {
        display: flex;
        flex-direction: column;
        border-right: 3px solid rgb(237, 237, 237);
        background-color: whitesmoke;
        padding-right: 0px;
        position: relative;
      }

      .index-bar-title {
        font-size: 1.25rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        word-break: break-word;
      }

      .index-bar-title:hover + .editIcon {
        display: block;
      }

      .editIcon {
        display: none;
        position: absolute;
        right: 8px;
        top: 8px;
      }

      .index-bar-status {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.5rem;
        padding-right: 0.75em;
      }

      .index-bar-menu {
        margin-top: 1rem;
      }

      #filter-label {
        margin-bottom: 0px;
      }

      .num-results {
        font-style: italic;
        font-weight: normal;
        line-height: 2.5;
      }

      .asc:after {
        content: "▼";
        font-size: 0.75em;
      }
      .desc:after {
        content: "▲";
        font-size: 0.75em;
      }

      @media screen and (min-width: 769px) {
        .main.columns {
          max-height: 100%;
          height: 100%;
        }
        .index-bar-menu {
          max-height: 100%;
          overflow-y: auto;
        }
      }

      @media screen and (max-width: 768px) {
        ${mo.sidebarStyles()}
      }

      ${mo.sidebarStyles(c`:host(.sidebar)`)}

      .mobile-lists {
        display: block !important;
      }

      :host(.sidebar) .columns.is-hidden-mobile,
      :host(.sidebar) .is-hidden-mobile {
        display: none !important;
      }

      :host(.sidebar) .mobile-header {
        display: flex !important;
      }

      :host(.sidebar) .columns {
        display: flex !important;
      }

      .scroller {
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        flex: auto;

        padding-bottom: 1em;
        min-height: 0px;
      }

      .page-entry {
        padding-bottom: 1.5rem;
      }

      .selected {
        background-color: rgb(207, 243, 255);
      }

      .is-disabled {
        pointer-events: none;
        opacity: 0.65;
      }

      .page-header {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        width: 100%;
        min-height: fit-content;

        margin-bottom: 1em;
        border-bottom: 3px solid rgb(237, 237, 237);
      }

      .check-select {
        padding: 0 1em 0 0.5em;
      }

      .search-bar {
        width: auto;
        display: flex;
        flex-direction: column;
      }

      .flex-auto {
        flex: auto;
      }

      .index-bar-description {
        margin-bottom: 20px;
        font-style: italic;
      }
    `)}static sidebarStyles(e=d``){return d`
      ${e} .main.columns {
        position: relative;
        max-height: 100%;
        height: 100%;
      }

      ${e} .index-bar-menu {
        max-height: 75px;
        overflow-y: auto;
        margin-top: 0.75em;
      }

      ${e} .column.main-content {
        position: relative;
        overflow-y: auto;

        width: 100%;
        min-height: 0px;
        height: 100%;
        padding: 0px;
        margin: 0px;
      }

      ${e} .mobile-header {
        margin: 0.5rem;
        margin-left: 1rem;
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        min-height: 24px;
        width: 100%;
      }

      ${e} .menu {
        font-size: 0.8rem;
      }
    `}onSelectList(e){e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list"))}onSelectListDrop(e){e.preventDefault(),this.currList=Number(e.currentTarget.value)}render(){const e=this.currList;return Y`
      <div
        class="is-sr-only"
        role="heading"
        aria-level="${this.isSidebar?"2":"1"}"
      >
        Pages in ${this.collInfo.title}
      </div>
      <div class="search-bar notification is-marginless">
        ${this.isSidebar?Y`<h3 class="is-sr-only">Search and Filter Pages</h3>`:""}
        <div class="field flex-auto">
          <div
            class="control has-icons-left ${this.loading?"is-loading":""}"
          >
            <input
              class="input"
              @input="${this.onChangeQuery}"
              .value="${this.query}"
              type="text"
              placeholder="Search by Page URL, Title, or Text"
            />
            <span class="icon is-left"
              ><fa-icon .svg="${wi}" aria-hidden="true"></fa-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="main columns">
        <div
          class="column index-bar is-one-fifth ${this.isSidebar?"is-hidden-mobile":""}"
        >
          ${this.editable&&this.editing?Y`
                <form @submit="${this.onUpdateTitle}">
                  <input
                    id="titleEdit"
                    class="input"
                    value="${$e(this.collInfo.title)}"
                    @blur="${this.onUpdateTitle}"
                  />
                </form>
              `:Y` <div
                  class="index-bar-title"
                  @dblclick="${()=>this.editing=!0}"
                >
                  ${this.collInfo.name||this.collInfo.title}
                </div>
                ${this.collInfo.description?Y`<div
                      class="index-bar-description"
                      @dblclick="${()=>this.editing=!0}"
                    >
                      ${this.collInfo.description}
                    </div>`:Y``}`}
          ${this.editable?Y`<fa-icon class="editIcon" .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>'}"></fa-icon>`:Y``}
          ${this.hasExtraPages?Y` <span class="check-select">
                <label class="checkbox">
                  <input
                    @change=${e=>this.showAllPages=e.currentTarget.checked}
                    type="checkbox"
                    .checked="${this.showAllPages}"
                  />
                  Show Non-Seed Pages
                </label>
              </span>`:""}

          <span
            class="num-results is-hidden-mobile"
            aria-live="polite"
            aria-atomic="true"
            >${this.formatResults()}</span
          >
          ${this.editable?Y` <div class="index-bar-actions">
                ${this.renderDownloadMenu()}
              </div>`:""}
          ${this.collInfo.lists.length?Y`
                <p id="filter-label" class="menu-label">Filter By List:</p>
                <div class="index-bar-menu menu">
                  <ul class="menu-list">
                    <li>
                      <a
                        href="#list-0"
                        data-list="0"
                        class="${0===e?"is-active":""}"
                        @click=${this.onSelectList}
                        ><i>All Pages</i></a
                      >
                    </li>
                    ${this.collInfo.lists.map((t=>Y` <li>
                          <a
                            @click=${this.onSelectList}
                            href="#list-${t.id}"
                            data-list="${t.id}"
                            class="${e===t.id?"is-active":""}"
                            >${t.title}</a
                          >
                        </li>`))}
                  </ul>
                </div>
              `:""}
        </div>
        <div class="column main-content">
          <div
            class="is-sr-only"
            role="heading"
            aria-level="${this.isSidebar?"3":"2"}"
          >
            Page List
          </div>
          ${this.renderPages()}
        </div>
      </div>
      ${this.renderDeleteModal()}
    `}renderDownloadMenu(){return Y` <div class="dropdown ${this.menuActive?"is-active":""}">
      <div class="dropdown-trigger">
        <button
          @click="${this.onMenu}"
          class="button is-small"
          aria-haspopup="true"
          aria-expanded="${this.menuActive}"
          aria-controls="dropdown-menu"
        >
          <span>Download</span>
          <span class="icon is-small">
            <fa-icon .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>'}" aria-hidden="true"></fa-icon>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu">
        <div class="dropdown-content">
          <a
            role="button"
            href="#"
            @click="${e=>this.onDownload(e,"wacz")}"
            @keyup="${je}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WACZ (Web Archive Collection Zip)
          </a>
          <a
            role="button"
            href="#"
            @click="${e=>this.onDownload(e,"warc")}"
            @keyup="${je}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WARC 1.1 Only
          </a>
          <a
            role="button"
            href="#"
            @click="${e=>this.onDownload(e,"warc1.0")}"
            @keyup="${je}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WARC 1.0 Only
          </a>
        </div>
      </div>
    </div>`}renderPageHeader(){return Y`
      ${!this.isSidebar&&this.editable&&this.filteredPages.length?Y` <div class="check-select">
            <label class="checkbox">
              <input
                @change=${this.onSelectAll}
                type="checkbox"
                .checked="${this.allSelected}"
              />
            </label>
          </div>`:Y``}

      <div class="header columns is-hidden-mobile">
        ${this.query?Y` <a
              role="button"
              href="#"
              @click="${this.onSort}"
              @keyup="${je}"
              data-key=""
              class="column is-1 ${""===this.sortKey?this.sortDesc?"desc":"asc":""}"
              >Match</a
            >`:""}

        <a
          role="button"
          href="#"
          @click="${this.onSort}"
          @keyup="${je}"
          data-key="date"
          class="column is-2 ${"date"===this.sortKey?this.sortDesc?"desc":"asc":""}"
          >Date</a
        >
        <div class="column thumbnail">
          <span class="sr-only">Page thumbnail or favicon</span>
        </div>
        <a
          role="button"
          href="#"
          @click="${this.onSort}"
          @keyup="${je}"
          data-key="title"
          class="column is-6 pagetitle ${this.query?"is-5":"is-6"} ${"title"===this.sortKey?this.sortDesc?"desc":"asc":""}"
          >Page Title</a
        >
      </div>

      <div class="is-hidden-tablet mobile-header">
        <div class="num-results" aria-live="polite" aria-atomic="true">
          ${this.formatResults()}
        </div>
        <wr-sorter
          id="pages"
          .sortKey="${this.sortKey}"
          .sortDesc="${this.sortDesc}"
          .sortKeys="${mo.sortKeys}"
          .data="${this.filteredPages}"
          pageResults="100"
          @sort-changed="${this.onSortChanged}"
          class="${this.filteredPages.length?"":"is-hidden"}"
        >
        </wr-sorter>
      </div>
    `}renderDeleteModal(){return this.toDeletePages?Y` <wr-modal
      bgClass="has-background-grey-lighter"
      @modal-closed="${()=>this.toDeletePages=this.toDeletePage=null}"
      title="Confirm Delete"
    >
      ${this.toDeletePage?Y` <p>
            Are you sure you want to delete the page
            <b>${this.toDeletePage.title}</b>? (Size:
            <b>${St()(this.toDeletePage.size)}</b>)
          </p>`:Y`
            <p>
              Are you sure you want to delete the
              <b
                >${Array.isArray(this.toDeletePages)?new Set(this.toDeletePage).size:this.toDeletePages.size}</b
              >
              selected pages?
            </p>
          `}
      <p>This operation can not be undone.</p>

      <button @click="${this.onDeletePages}" class="button is-danger">
        Delete
      </button>
      <button
        @click="${()=>this.toDeletePages=this.toDeletePage=null}"
        class="button"
      >
        Cancel
      </button>
    </wr-modal>`:Y``}isCurrPage(e){if(this.isSidebar&&e.url===this.url){let t=e.timestamp;return!t&&e.date?t=mt(e.date):"string"==typeof e.ts&&(t=mt(e.ts)),t===this.ts}return!1}renderPages(){return Y`
      <div class="page-header has-text-weight-bold">
        ${this.renderPageHeader()}
      </div>
      <ul class="scroller" @scroll="${this.onScroll}">
        ${this.sortedPages.length?Y` ${this.sortedPages.map(((e,t)=>{const i=this.selectedPages.has(e.id);return Y` <li class="page-entry ${i?"selected":""}">
                <wr-page-entry
                  .index="${this.query||this.isSidebar?t+1:0}"
                  ?editable="${this.editable}"
                  ?selected="${i}"
                  ?isCurrent="${this.isCurrPage(e)}"
                  ?isSidebar="${this.isSidebar}"
                  .page="${e}"
                  pid="${e.id}"
                  @sel-page="${this.onSelectToggle}"
                  @delete-page="${this.onDeleteConfirm}"
                  replayPrefix="${this.collInfo.replayPrefix}"
                  query="${this.query}"
                  class="${this.isSidebar?"sidebar":""}"
                >
                </wr-page-entry>
              </li>`}))}`:Y`<p class="mobile-header">${this.getNoResultsMessage()}</p>`}
      </ul>
    `}onUpdateTitle(e){if(e.preventDefault(),this.editing=!1,!this.editable)return;const t=this.renderRoot.querySelector("#titleEdit");if(!(null==t?void 0:t.value.trim()))return;const i=t.value,o=JSON.stringify({title:i});fetch(`${this.collInfo.apiPrefix}/metadata`,{method:"POST",body:o}).then((e=>{200===e.status&&this.dispatchEvent(new CustomEvent("coll-update",{detail:{title:i}}))}))}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",(()=>{this.menuActive=!1}),{once:!0})}onSort(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-key")||"";t===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=t)}onSortChanged(e){this.sortedPages=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc}onSelectToggle(e){const{page:t,selected:i}=e.detail;i?this.selectedPages.add(t):this.selectedPages.delete(t),this.allSelected=this.selectedPages.size===this.sortedPages.length,this.requestUpdate()}onSelectAll(e){this.allSelected=e.currentTarget.checked,this.allSelected?this.sortedPages.forEach((e=>{this.selectedPages.add(e.id)})):this.selectedPages.clear(),this.requestUpdate()}onDownload(e,i){return t(this,void 0,void 0,(function*(){e.preventDefault();const t=this.selectedPages.size>0,o=new URLSearchParams;o.set("pages",t?Array.from(this.selectedPages.keys()).join(","):"all"),o.set("format",i),this.collInfo.filename&&o.set("filename",this.collInfo.filename),window.location.href=`${this.collInfo.apiPrefix}/dl?`+o.toString()}))}onDeleteConfirm(e){const t=e.currentTarget.page;this.selectedPages.has(t.id)?(this.toDeletePages=this.selectedPages,this.toDeletePage=null):(this.toDeletePages=[t.id],this.toDeletePage=t)}onDeletePages(){return t(this,void 0,void 0,(function*(){const e={};for(const t of this.toDeletePages){const i=this.renderRoot.querySelector(`wr-page-entry[pid="${t}"]`);i&&(i.deleting=!0,e[t]=i)}for(const t of this.toDeletePages){const i=yield fetch(`${this.collInfo.apiPrefix}/page/${t}`,{method:"DELETE"}),o=yield i.json();if(o.error){console.warn(o.error);continue}const r=e[t];if(!r)continue;const n=this.collInfo.pages.indexOf(r);n<0||this.collInfo.pages.splice(n,1)}this.toDeletePages=null,this.toDeletePage=null,this.updateTextSearch(),this.requestUpdate()}))}formatResults(){if(!this.query){const e=this.filteredPages.length;return e===this.sortedPages.length?`${e} Page${1!==e?"s":""}`:`${this.sortedPages.length} of ${e} Pages Shown`}return 1===this.sortedPages.length?"1 Page":`${this.sortedPages.length} Pages`}getNoResultsMessage(){var e;return(null===(e=this.collInfo)||void 0===e?void 0:e.pages.length)?this.updatingSearch?"Initializing Search...":this.loading?"Searching...":this.query?Y`<span class="fix-text-wrapping"
        >No matching pages found. Try changing the search query, or
        <a href="#view=resources">browse by URL</a>.</span
      >`:"No Pages Found":Y`<span class="fix-text-wrapping"
        >No Pages are defined in this archive. The archive may be empty.
        <a href="#view=resources">Try browsing by URL</a>.</span
      >`}onScroll(e){const t=e.currentTarget;if(t.scrollHeight-t.scrollTop-t.clientHeight<40){const e=this.renderRoot.querySelector("wr-sorter");e&&e.getMore()}}}e([we({type:Array})],mo.prototype,"filteredPages",void 0),e([we({type:Array})],mo.prototype,"sortedPages",void 0),e([we({type:String})],mo.prototype,"query",void 0),e([we({attribute:!1})],mo.prototype,"flex",void 0),e([we({attribute:!1})],mo.prototype,"textPages",void 0),e([we()],mo.prototype,"newQuery",void 0),e([we({type:Boolean})],mo.prototype,"loading",void 0),e([we({type:Boolean})],mo.prototype,"updatingSearch",void 0),e([we({type:Boolean})],mo.prototype,"showAllPages",void 0),e([we({type:Boolean})],mo.prototype,"hasExtraPages",void 0),e([we({type:Number})],mo.prototype,"currList",void 0),e([we({type:Boolean})],mo.prototype,"active",void 0),e([we({type:Boolean})],mo.prototype,"editable",void 0),e([we({type:Boolean})],mo.prototype,"changeNeeded",void 0),e([we({attribute:!1})],mo.prototype,"selectedPages",void 0),e([we({type:Boolean})],mo.prototype,"menuActive",void 0),e([we({type:String})],mo.prototype,"sortKey",void 0),e([we({type:Boolean})],mo.prototype,"sortDesc",void 0),e([we({type:Boolean})],mo.prototype,"isSidebar",void 0),e([we({type:String})],mo.prototype,"url",void 0),e([we({type:String})],mo.prototype,"ts",void 0),e([we({type:Boolean})],mo.prototype,"editing",void 0),e([we({type:Array})],mo.prototype,"toDeletePages",void 0),e([we({type:Object})],mo.prototype,"toDeletePage",void 0),e([we({type:Object})],mo.prototype,"collInfo",void 0),e([we({type:Boolean})],mo.prototype,"allSelected",void 0),e([we({type:String})],mo.prototype,"defaultKey",void 0),customElements.define("wr-page-view",mo);const go=new RegExp(`[${["-","[","]","/","{","}","(",")","*","+","?",".","\\","^","$","|"].join("\\")}]`,"g"),vo=e=>e.replace(go,"\\$&");class wo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["keywords","delimiter"]}get keywords(){var e;return null!==(e=this.getAttribute("keywords"))&&void 0!==e?e:""}set keywords(e){this.setAttribute("keywords",e)}get delimiter(){var e;return null!==(e=this.getAttribute("delimiter"))&&void 0!==e?e:""}set delimiter(e){this.setAttribute("delimiter",e)}attributeChangedCallback(e,t,i){"keywords"!==e&&"delimiter"!==e||i!==t&&this._render()}connectedCallback(){this._render(),this.__observer=new MutationObserver((()=>{this._render()})),this.__observer.observe(this,{childList:!0,characterData:!0,subtree:!0})}disconnectedCallback(){this.__observer&&(this.__observer.disconnect(),this.__observer=void 0)}_render(){if(!this.shadowRoot)return;const e=this.textContent||"",t=this.getAttribute("keywords"),i=this.getAttribute("delimiter")||/\s+/;if(!t)return void(this.shadowRoot.textContent=e);const o=e.toLowerCase(),r=t.toLowerCase().split(i).sort(((e,t)=>t.length-e.length)),n=new RegExp(`${r.map(vo).join("|")}`,"gi"),a=e.split(n),s=document.createElement("div");let l=0;for(const t of a)if(s.appendChild(document.createTextNode(t)),l+=t.length,l<o.length){const t=o.substring(l),i=r.find((e=>t.startsWith(e)));if(i){const t=document.createElement("mark");t.textContent=e.substr(l,i.length),s.appendChild(t),l+=i.length}}this.shadowRoot.innerHTML=`\n      <style>\n        mark {\n          color: var(--keyword-mark-color);\n          background: var(--keyword-mark-background, yellow);\n        }\n      </style>\n      ${s.innerHTML}\n    `}}customElements.define("keyword-mark",wo);class yo extends fe{constructor(){super(...arguments),this.query="",this.textSnippet="",this.page=null,this.replayPrefix="",this.deleting=!1,this.selected=!1,this.editable=!1,this.index=0,this.isCurrent=!1,this.isSidebar=!1,this.thumbnailValid=!0,this.iconValid=!0}static get styles(){return Be(d`
      :host {
        min-height: min-content;
        width: 100%;
        word-break: break-all;
        position: relative;
        display: flex;
        flex-direction: row;
        background: transparent;
      }

      :host(.sidebar) .column {
        width: unset !important;
      }

      :host(.sidebar) {
        width: 100%;
      }

      .check-select {
        padding: 0 1em 0 0.5em;
        height: 100%;
        margin: auto 0 auto 0;
      }

      .columns {
        width: 100%;
      }

      /* Override Bulma to add the tiniest margin, so the focus indicator isn't obscured */
      .columns {
        margin-top: calc(-0.75rem + 2px);
      }
      .columns:last-child {
        margin-bottom: calc(-0.75rem + 2px);
      }

      .favicon {
        display: inline-block;
        vertical-align: text-bottom;
      }

      .media-left .favicon {
        width: 2rem;
        height: 2rem;
      }
      .media-left img.favicon {
        filter: drop-shadow(1px 1px 2px grey);
      }

      .media-content .favicon {
        width: 1.15rem;
        height: 1.15rem;
        margin: 0 0.25rem;
      }

      .media-left {
        width: 6rem;
        align-self: center;
        text-align: center;
      }

      .delete-button {
        position: absolute;
        top: 8px;
        right: 8px;
      }

      .delete:hover {
        background-color: rgb(241, 70, 104);
      }

      .is-loading {
        line-height: 1.5em;
        height: 1.5em;
        border: 0px;
        background-color: transparent !important;
        width: auto;
      }

      @media screen and (max-width: 768px) {
        ${yo.sidebarStyles()}
      }

      ${yo.sidebarStyles(c`:host(.sidebar)`)}

      .current a {
        background-color: rgb(207, 243, 255);
        font-style: italic;
        display: block;
      }

      .current .curr-page {
        font-style: italic;
        font-size: 9px;
        color: black;
      }

      .is-inline-date {
        display: none;
      }

      .media-content a {
        display: block;
      }
    `)}static sidebarStyles(e=d``){return d`
      ${e} .col-date {
        margin-left: calc(24px + 1rem);
        display: none;
      }
      ${e} .col-date div {
        display: inline;
      }
      ${e} .col-index {
        display: none;
      }
      ${e} .columns {
        display: flex;
        flex-direction: column-reverse;
      }
      ${e} .is-inline-date {
        display: initial !important;
        font-style: italic;
      }
      ${e} .media-left {
        padding-left: 0.75rem;
      }
    `}updated(e){(e.has("page")||e.has("query"))&&(this.updateSnippet(),this.deleting=!1)}render(){const e=this.page,t=this.page.date,i="number"==typeof e.size,o=this.editable&&!this.isSidebar;return Y`
      ${o?Y` <div class="check-select">
            <label class="checkbox">
              <input
                @change=${this.onSendSelToggle}
                type="checkbox"
                .checked="${this.selected}"
              />
            </label>
          </div>`:""}

      <div class="columns">
        ${this.index?Y`
              <div class="column col-index is-1 is-size-7">${this.index}.</div>
            `:""}
        <div class="column col-date is-2">
          <div>
            ${t?t.toLocaleDateString():""}
          </div>
          <div>
            ${t?t.toLocaleTimeString():""}
          </div>
        </div>
        <div class="column">
          <div class="media">
            <figure class="media-left">${this.renderPageIcon()}</figure>
            <div class="media-content ${this.isCurrent?"current":""}">
              <div role="heading" aria-level="${this.isSidebar?"4":"3"}">
                <a
                  @dblclick="${this.onReload}"
                  @click="${this.onReplay}"
                  href="${gt("pages",this.page.url,this.page.timestamp)}"
                >
                  <p class="is-size-6 has-text-weight-bold has-text-link text">
                    <keyword-mark keywords="${this.query}"
                      >${e.title||e.url}</keyword-mark
                    >
                  </p>
                  <p class="has-text-dark text">
                    <keyword-mark keywords="${this.query}"
                      >${e.url}</keyword-mark
                    >${this.thumbnailValid?this.renderFavicon():""}
                  </p>
                  <p class="has-text-grey-dark text is-inline-date">
                    ${t?t.toLocaleString():""}
                  </p>
                </a>
                ${this.textSnippet?Y` <div class="text">
                      <keyword-mark keywords="${this.query}"
                        >${this.textSnippet}</keyword-mark
                      >
                    </div>`:Y``}
              </div>
              ${i?Y` <div class="media-right" style="margin-right: 2em">
                    ${St()(e.size)}
                  </div>`:""}
            </div>
          </div>
        </div>

        ${o?Y` ${this.deleting?Y`
                  <button
                    class="button is-loading delete-button is-static"
                  ></button>
                `:Y` <button
                  @click="${this.onSendDeletePage}"
                  class="delete delete-button"
                ></button>`}`:""}
      </div>
    `}renderPageIcon(){return this.thumbnailValid?Y`<img
      class="thumbnail"
      @error=${()=>this.thumbnailValid=!1}
      src=${`${this.replayPrefix}/${this.page.timestamp}id_/urn:thumbnail:${this.page.url}`}
      loading="lazy"
    />`:this.renderFavicon()}renderFavicon(){if(this.iconValid&&this.page.favIconUrl)return Y`<img
      class="favicon"
      @error=${()=>this.iconValid=!1}
      src=${`${this.replayPrefix}/${this.page.timestamp}id_/${this.page.favIconUrl}`}
      loading="lazy"
    />`}updateSnippet(){const e=this.textSnippet;if(!this.query||!this.page.text)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);let t=this.page.text,i=this.query,o=t.indexOf(this.query);if(o<0){const r=t.toLowerCase(),n=i.toLowerCase();if(o=r.indexOf(n),o<0)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);t=r,i=n}let r=o;o=Math.max(o-100,0),r=Math.min(r+200,t.length),0===o&&r===t.length?this.textSnippet=t:this.textSnippet="..."+t.slice(o,r)+"...",this.requestUpdate("textSnippet",e)}onReplay(e,t=!1){e.preventDefault();const i={url:this.page.url,ts:this.page.timestamp};return this.sendChangeEvent(i,t),!1}onReload(e){return this.onReplay(e,!0)}sendChangeEvent(e,t){this.dispatchEvent(new CustomEvent("coll-tab-nav",{bubbles:!0,composed:!0,detail:{data:e,reload:t}}))}onSendDeletePage(){const e=this.page;this.dispatchEvent(new CustomEvent("delete-page",{detail:{page:e}}))}onSendSelToggle(e){const t=this.page.id,i=e.currentTarget.checked;this.dispatchEvent(new CustomEvent("sel-page",{detail:{page:t,selected:i}}))}}e([we({type:String})],yo.prototype,"query",void 0),e([we({type:String})],yo.prototype,"textSnippet",void 0),e([we({type:Object})],yo.prototype,"page",void 0),e([we({type:String})],yo.prototype,"replayPrefix",void 0),e([we({type:Boolean})],yo.prototype,"deleting",void 0),e([we({type:Boolean})],yo.prototype,"selected",void 0),e([we({type:Boolean})],yo.prototype,"editable",void 0),e([we({type:Number})],yo.prototype,"index",void 0),e([we({type:Boolean})],yo.prototype,"isCurrent",void 0),e([we({type:Boolean})],yo.prototype,"isSidebar",void 0),e([ye()],yo.prototype,"thumbnailValid",void 0),e([ye()],yo.prototype,"iconValid",void 0),customElements.define("wr-page-entry",yo);class xo extends fe{constructor(){super(...arguments),this.collInfo=null,this.sourceUrl=null,this.url="",this.ts="",this.replayUrl="",this.replayTS="",this.actualTS="",this.title="",this.iframeUrl=null,this.showAuth=!1,this.replayNotFoundError=!1,this.authFileHandle=null,this.reauthWait=null,this._loadPoll=null}firstUpdated(){window.addEventListener("message",(e=>this.onReplayMessage(e))),navigator.serviceWorker.addEventListener("message",(e=>this.handleSWMessage(e)))}handleSWMessage(e){return t(this,void 0,void 0,(function*(){if("authneeded"===e.data.type&&this.collInfo&&e.data.coll===this.collInfo.coll){if(e.data.fileHandle){this.authFileHandle=e.data.fileHandle;try{if("granted"===(yield this.authFileHandle.requestPermission({mode:"read"})))return this.showAuth=!1,this.reauthWait=null,void this.refresh()}catch(e){console.warn(e)}}else this.authFileHandle=null;this.reauthWait?yield this.reauthWait:this.showAuth=!0}else e.data.type&&window.parent.postMessage(e.data)}))}doSetIframeUrl(){this.iframeUrl=this.url&&this.collInfo?`${this.collInfo.replayPrefix}/${this.ts||""}mp_/${this.url}`:""}updated(e){if((e.has("sourceUrl")||e.has("collInfo"))&&(this.reauthWait=null),!this.url||this.replayUrl==this.url&&this.replayTS==this.ts||!e.has("url")&&!e.has("ts")||(this.replayUrl=this.url,this.replayTS=this.ts,this.showAuth=!1,this.reauthWait=null,this.doSetIframeUrl()),this.iframeUrl&&e.has("iframeUrl")){this.waitForLoad();const e={title:"Archived Page",replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}if(this.replayUrl&&e.has("replayUrl")||this.replayTS&&e.has("replayTS")){const e={url:this.replayUrl,ts:this.replayTS};this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:!0,data:e,replayNotFoundError:this.replayNotFoundError}}))}if(this.title&&(e.has("title")||e.has("actualTS"))){const e={title:this.title,url:this.replayUrl,ts:this.actualTS,replayTitle:!0};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}}setDisablePointer(e){const t=this.renderRoot.querySelector("iframe");t&&(t.style.pointerEvents=e?"none":"all")}onReplayMessage(e){const t=this.renderRoot.querySelector("iframe");if(t&&e.source===t.contentWindow)if("load"===e.data.wb_type||"replace-url"===e.data.wb_type||"archive-not-found"===e.data.wb_type){if(this.replayTS=e.data.is_live?"":e.data.ts,this.actualTS=e.data.ts,this.replayUrl=e.data.url,this.title=e.data.title||this.title,this.replayNotFoundError="archive-not-found"===e.data.wb_type,this.clearLoading(t.contentWindow),e.data.icons){const t=e.data.icons;this.dispatchEvent(new CustomEvent("replay-favicons",{bubbles:!0,composed:!0,detail:{icons:t}}))}}else if("title"===e.data.wb_type)this.title=e.data.title;else{const t=Object.assign({type:e.data.wb_type},e.data);delete t.wb_type,window.parent.postMessage(t)}}onReAuthed(e){this.reauthWait=(()=>t(this,void 0,void 0,(function*(){if(this.authFileHandle){if("granted"!==(yield this.authFileHandle.requestPermission({mode:"read"})))return void(this.reauthWait=null);this.authFileHandle=null}else{const t=e.detail.headers;yield fetch(`${this.collInfo.apiPrefix}/updateAuth`,{method:"POST",body:JSON.stringify({headers:t})})}this.showAuth&&(this.showAuth=!1,this.reauthWait=null),this.refresh()})))()}waitForLoad(){this.setLoading(),this._loadPoll=window.setInterval((()=>{const e=this.renderRoot.querySelector("iframe");(null==e?void 0:e.contentDocument)&&e.contentWindow&&("complete"!==e.contentDocument.readyState||e.contentWindow._WBWombat)||this.clearLoading(null==e?void 0:e.contentWindow)}),5e3)}clearLoading(e){if(this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!1}})),this._loadPoll&&(window.clearInterval(this._loadPoll),this._loadPoll=null),e)try{e.addEventListener("beforeunload",(()=>{this.setLoading()}))}catch(e){}}setLoading(){this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!0}}))}refresh(){var e;const t=this.renderRoot.querySelector("iframe");if(!t)return;const i=this.iframeUrl;this.doSetIframeUrl(),i!==this.iframeUrl&&this.url!==this.replayUrl||(this.waitForLoad(),null===(e=t.contentWindow)||void 0===e||e.location.reload())}static get styles(){return Be(d`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .iframe-container {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0px;
      }

      .iframe-main {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
      }

      .intro-panel .panel-heading {
        font-size: 1em;
        display: inline-block;
      }

      .iframe-main.modal-bg {
        z-index: 200;
        background-color: rgba(10, 10, 10, 0.7);
      }

      #wrlogo {
        vertical-align: middle;
      }

      .intro-panel .panel-block {
        padding: 1em;
        flex-direction: column;
        line-height: 2.5em;
      }

      div.intro-panel.panel {
        min-width: 40%;
        display: flex;
        flex-direction: column;
        margin: 3em;
        background-color: white;
      }
    `)}render(){const e=`Replay of ${this.title?`${this.title}:`:""} ${this.url}`;return Y` <h1 id="replay-heading" class="is-sr-only">${e}</h1>

      ${this.iframeUrl?Y`
            <div class="iframe-container">
              <iframe
                class="iframe-main"
                name="___wb_replay_top_frame"
                @message="${this.onReplayMessage}"
                allow="autoplay 'self'; fullscreen"
                allowfullscreen
                src="${this.iframeUrl}"
                title="${e}"
              ></iframe>

              ${this.showAuth?Y`
                    <div class="iframe-main modal-bg">
                      <div class="panel intro-panel">
                        <p class="panel-heading">
                          <fa-icon
                            id="wrlogo"
                            size="1.5rem"
                            .svg=${Ge}
                            aria-hidden="true"
                          ></fa-icon>
                          Authorization Needed
                        </p>
                        <div class="panel-block">
                          ${this.authFileHandle?Y`
                                <p>
                                  This archive is loaded from a local file:
                                  <b>${this.authFileHandle.name}</b>
                                </p>
                                <p>
                                  The browser needs to confirm your permission
                                  to continue loading from this file.
                                </p>
                                <button
                                  class="button is-warning is-rounded"
                                  @click="${this.onReAuthed}"
                                >
                                  Show Confirmation
                                </button>
                              `:Y` <wr-gdrive
                                .sourceUrl="${this.sourceUrl}"
                                state="trymanual"
                                .reauth="${!0}"
                                @load-ready="${this.onReAuthed}"
                              ></wr-gdrive>`}
                        </div>
                      </div>
                    </div>
                  `:""}
            </div>
          `:Y` <div class="panel intro-panel">
            <p class="panel-heading">Replay Web Page</p>
            <div class="panel-block">
              <p>Enter a URL above to replay it from the web archive!</p>
              <p>
                (Or, check out <a href="#view=pages">Pages</a> or
                <a href="#view=resources">URLs</a> to explore the contents of
                this archive.)
              </p>
            </div>
          </div>`}`}}e([we({type:Object})],xo.prototype,"collInfo",void 0),e([we({type:String})],xo.prototype,"sourceUrl",void 0),e([we({type:String})],xo.prototype,"url",void 0),e([we({type:String})],xo.prototype,"ts",void 0),e([we({type:String})],xo.prototype,"replayUrl",void 0),e([we({type:String})],xo.prototype,"replayTS",void 0),e([we({type:String})],xo.prototype,"actualTS",void 0),e([we({type:String})],xo.prototype,"title",void 0),e([we({type:String})],xo.prototype,"iframeUrl",void 0),e([we({type:Boolean})],xo.prototype,"showAuth",void 0),e([we({type:Boolean})],xo.prototype,"replayNotFoundError",void 0),e([we({type:Object})],xo.prototype,"authFileHandle",void 0),customElements.define("wr-coll-replay",xo);let ko=class extends fe{constructor(){super(...arguments),this.sortedData=[],this.data=[],this.pageResults=0,this.numResults=0,this.sortKey=null,this.sortDesc=null}firstUpdated(){if(this.id){const e=localStorage.getItem(`${this.id}:sortKey`);null!==e&&(this.sortKey=e);const t=localStorage.getItem(`${this.id}:sortDesc`);null!==t&&(this.sortDesc="1"===t)}}updated(e){const t=e.has("sortKey"),i=e.has("sortDesc"),o=e.has("data");t&&null!==this.sortKey&&localStorage.setItem(`${this.id}:sortKey`,this.sortKey),i&&null!==this.sortDesc&&localStorage.setItem(`${this.id}:sortDesc`,this.sortDesc?"1":"0"),(t||i||o)&&this.sortData()}sortData(){this.sortedData=[...this.data],this.numResults=this.pageResults,""===this.sortKey?this.sortDesc&&this.sortedData.reverse():this.sortedData.sort(((e,t)=>e[this.sortKey]===t[this.sortKey]?0:this.sortDesc==e[this.sortKey]<t[this.sortKey]?1:-1)),this.sendSortChanged()}sendSortChanged(){const e={sortKey:this.sortKey,sortDesc:this.sortDesc,sortedData:this.numResults?this.sortedData.slice(0,this.numResults):this.sortedData};this.dispatchEvent(new CustomEvent("sort-changed",{detail:e}))}getMore(e=100){this.pageResults&&this.numResults>=this.sortedData.length||(this.numResults+=e,this.sendSortChanged())}static get styles(){return Be(d`
      :host {
        min-width: 100px;
        box-sizing: border-box !important;
      }
      button.button.is-small {
        border-radius: 4px;
      }
    `)}render(){var e;return Y`
    <div class="select is-small">
      <select id="sort-select" @change=${e=>this.sortKey=e.currentTarget.value}>

      ${null===(e=this.sortKeys)||void 0===e?void 0:e.map((e=>Y`
          <option value="${e.key}" ?selected="${e.key===this.sortKey}">
            Sort By: ${e.name}
          </option>
        `))}
      </select>
    </div>
    <button @click=${()=>this.sortDesc=!this.sortDesc} class="button is-small">
      <span>Order:</span>
      <span class="is-sr-only">${this.sortDesc?"Ascending":"Descending"}</span>
      <span class="icon"><fa-icon aria-hidden="true" .svg=${this.sortDesc?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/></svg>'}></span>
    </button>`}};e([we({attribute:!1})],ko.prototype,"sortedData",void 0),e([we({attribute:!1})],ko.prototype,"data",void 0),e([we({type:String})],ko.prototype,"id",void 0),e([we({type:Number})],ko.prototype,"pageResults",void 0),e([we({attribute:!1})],ko.prototype,"numResults",void 0),e([we({type:String})],ko.prototype,"sortKey",void 0),e([we({type:Boolean})],ko.prototype,"sortDesc",void 0),e([we({attribute:!1})],ko.prototype,"sortKeys",void 0),ko=e([me("wr-sorter")],ko);class $o extends fe{static get filters(){return[{name:"HTML",filter:"text/html,text/xhtml"},{name:"Images",filter:"image/"},{name:"Audio/Video",filter:"audio/,video/"},{name:"PDF",filter:"application/pdf"},{name:"Javascript",filter:"application/javascript,application/x-javascript"},{name:"CSS",filter:"text/css"},{name:"Fonts",filter:"font/,application/font-woff"},{name:"Plain Text",filter:"text/plain"},{name:"JSON",filter:"application/json"},{name:"DASH/HLS",filter:"application/dash+xml,application/x-mpegURL,application/vnd.apple.mpegurl"},{name:"All URLs",filter:""}]}static get sortKeys(){return[{key:"url",name:"URL"},{key:"ts",name:"Date"},{key:"mime",name:"Media Type"},{key:"status",name:"Status"}]}constructor(){super(),this.collInfo=null,this.isSidebar=!1,this.currMime="",this.query="",this.urlSearchType="",this.filteredResults=[],this.sortedResults=[],this.results=[],this.newQuery=null,this.tryMore=!1,this.loading=!1,this.sortKey="url",this.sortDesc=!1}static get properties(){return{collInfo:{type:Object},isSidebar:{type:Boolean},currMime:{type:String},query:{type:String},urlSearchType:{type:String},filteredResults:{type:Array},sortedResults:{type:Array},loading:{type:Boolean},sortKey:{type:String},sortDesc:{type:Boolean}}}firstUpdated(){""===this.urlSearchType&&(this.urlSearchType="prefix")}_timedUpdate(){null!==this.newQuery&&(this.query=this.newQuery,this.newQuery=null)}updated(e){if(e.has("query")||e.has("urlSearchType")||e.has("currMime")){this.doLoadResources();const t={query:this.query,urlSearchType:this.urlSearchType,currMime:this.currMime},i=!e.has("currMime")&&!e.has("urlSearchType");this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:i,data:t}}))}(e.has("sortKey")||e.has("sortDesc"))&&this.filter()}doLoadResources(e=!1){return t(this,void 0,void 0,(function*(){if(e&&(!this.tryMore||!this.results.length))return;if(this.loading)return;this.loading=!0;const t="contains"!==this.urlSearchType?this.query:"",i=t&&"prefix"===this.urlSearchType?1:0,o=this.currMime,r=new URLSearchParams({mime:o,url:t,prefix:String(i),count:String(100)});if(e){const e=this.results[this.results.length-1];r.set("fromMime",e.mime),r.set("fromUrl",e.url),r.set("fromStatus",e.status),r.set("fromTs",String(new Date(e.date).getTime()))}const n=yield fetch(`${this.collInfo.apiPrefix}/urls?${r.toString()}`),a=yield n.json();this.results=e?this.results.concat(a.urls):a.urls,this.tryMore=a.urls.length>=100,this.filter(),this.loading=!1}))}onChangeTypeSearch(e){this.currMime=e.currentTarget.value}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout((()=>this._timedUpdate()),250)}onClickUrlType(e){this.urlSearchType=e.currentTarget.value}filter(){const e=[],t="contains"===this.urlSearchType?this.query:"";for(const i of this.results)(!t||i.url.indexOf(t)>=0)&&e.push(i);this.filteredResults=e}onScroll(e){const t=e.currentTarget,i=t.scrollHeight-t.scrollTop-t.clientHeight;this.tryMore&&i<40&&this.doLoadResources(!0)}static get styles(){return Be(d`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        min-width: 0px;
        flex-direction: column;
      }
      :host(.sidebar) .is-hidden-tablet {
        display: flex !important;
      }

      :host(.sidebar) .is-hidden-mobile {
        display: none !important;
      }

      :host(.sidebar) .level,
      :host(.sidebar) .level-left,
      :host(.sidebar) .level-right {
        display: block !important;
      }

      :host(.sidebar) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.sidebar) .column {
        width: 100% !important;
      }

      .notification {
        width: 100%;
      }
      .all-results {
        margin: 0 0 0 0.5em;
        display: flex;
        flex-direction: column;
        min-height: 0;
      }
      .main-scroll {
        flex-grow: 1;
      }
      .minihead {
        font-size: 10px;
        font-weight: bold;
      }
      .columns {
        margin: 0px;
      }
      thead {
        margin-bottom: 24px;
      }
      table th:not([align]) {
        text-align: left;
      }
      .result {
        border-bottom: 1px #dbdbdb solid;
        min-height: fit-content;
      }
      .results-head {
        border-bottom: 2px #dbdbdb solid;
        margin-right: 16px;
        min-height: fit-content;
        display: block;
        width: 100%;
      }
      .results-head a {
        color: black;
      }
      .all-results .column {
        word-break: break-word;
      }
      div.sort-header {
        padding: 10px;
        margin-bottom: 0px !important;
        min-height: fit-content;
      }
      .flex-auto {
        flex: auto;
      }
      .asc:after {
        content: "▼";
        font-size: 0.75em;
      }
      .desc:after {
        content: "▲";
        font-size: 0.75em;
      }
      .num-results {
        margin-left: 1em;
        font-style: italic;
      }
    `)}render(){return Y`
      <div
        role="heading"
        aria-level="${this.isSidebar?"2":"1"}"
        class="is-sr-only"
      >
        URLs in ${this.collInfo.title}
      </div>

      <div
        role="heading"
        aria-level="${this.isSidebar?"3":"2"}"
        class="is-sr-only"
      >
        Search and Filter
      </div>
      <div class="notification level is-marginless">
        <div class="level-left flex-auto">
          <div class="level-item flex-auto">
            <span class="is-hidden-mobile">Search:&nbsp;&nbsp;</span>
            <div class="select">
              <select @change="${this.onChangeTypeSearch}">
                ${$o.filters.map((e=>Y`
                    <option
                      value="${e.filter}"
                      ?selected="${e.filter===this.currMime}"
                    >
                      ${e.name}
                    </option>
                  `))}
              </select>
            </div>
            <div class="field flex-auto">
              <div
                class="control has-icons-left ${this.loading?"is-loading":""}"
              >
                <input
                  type="text"
                  class="input"
                  @input="${this.onChangeQuery}"
                  .value="${this.query}"
                  placeholder="Enter URL to Search"
                />
                <span class="icon is-left"
                  ><fa-icon .svg="${wi}"></fa-icon
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control level-right">
          <div style="margin-left: 1em" class="control">
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="contains"
                ?checked="${"contains"===this.urlSearchType}"
                @click="${this.onClickUrlType}"
              />&nbsp;Contains</label
            >
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="prefix"
                ?checked="${"prefix"===this.urlSearchType}"
                @click="${this.onClickUrlType}"
              />&nbsp;Prefix</label
            >
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="exact"
                ?checked="${"exact"===this.urlSearchType}"
                @click="${this.onClickUrlType}"
              />&nbsp;Exact</label
            >
            <span
              id="num-results"
              class="num-results"
              is-pulled-right
              aria-live="polite"
              aria-atomic="true"
              >${this.filteredResults.length} Result(s)</span
            >
          </div>
        </div>
      </div>

      <div class="sort-header is-hidden-tablet">
        <wr-sorter
          id="urls"
          .sortKey="${this.sortKey}"
          .sortDesc="${this.sortDesc}"
          .sortKeys="${$o.sortKeys}"
          .data="${this.filteredResults}"
          @sort-changed="${this.onSortChanged}"
        >
        </wr-sorter>
      </div>

      <div
        role="heading"
        aria-level="${this.isSidebar?"3":"2"}"
        id="results-heading"
        class="is-sr-only"
      >
        Results
      </div>

      <table class="all-results" aria-labelledby="results-heading num-results">
        <thead>
          <tr class="columns results-head has-text-weight-bold">
            <th scope="col" class="column col-url is-6 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${je}"
                data-key="url"
                class="${"url"===this.sortKey?this.sortDesc?"desc":"asc":""}"
                >URL</a
              >
            </th>
            <th scope="col" class="column col-ts is-2 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${je}"
                data-key="ts"
                class="${"ts"===this.sortKey?this.sortDesc?"desc":"asc":""}"
                >Date</a
              >
            </th>
            <th scope="col" class="column col-mime is-3 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${je}"
                data-key="mime"
                class="${"mime"===this.sortKey?this.sortDesc?"desc":"asc":""}"
                >Media Type</a
              >
            </th>
            <th scope="col" class="column col-status is-1 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${je}"
                data-key="status"
                class="${"status"===this.sortKey?this.sortDesc?"desc":"asc":""}"
                >Status</a
              >
            </th>
          </tr>
        </thead>

        <tbody class="main-scroll" @scroll="${this.onScroll}">
          ${this.sortedResults.length?this.sortedResults.map((e=>Y`
                  <tr class="columns result">
                    <td class="column col-url is-6">
                      <p class="minihead is-hidden-tablet">URL</p>
                      <a
                        @click="${this.onReplay}"
                        data-url="${e.url}"
                        data-ts="${e.ts}"
                        href="${gt("resources",e.url,e.ts)}"
                      >
                        <keyword-mark keywords="${this.query}"
                          >${e.url}</keyword-mark
                        >
                      </a>
                    </td>
                    <td class="column col-ts is-2">
                      <p class="minihead is-hidden-tablet">Date</p>
                      ${new Date(e.date).toLocaleString()}
                    </td>
                    <td class="column col-mime is-3">
                      <p class="minihead is-hidden-tablet">Media Type</p>
                      ${e.mime}
                    </td>
                    <td class="column col-status is-1">
                      <p class="minihead is-hidden-tablet">Status</p>
                      ${e.status}
                    </td>
                  </tr>
                `)):Y`<tr class="section">
                <td colspan="4"><i>No Results Found.</i></td>
              </tr>`}
        </tbody>
      </table>
    `}onSort(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-key");t===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=t)}onSortChanged(e){this.sortedResults=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc}onReplay(e){e.preventDefault();const t={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:t}})),!1}}customElements.define("wr-coll-resources",$o);const So=document.currentScript&&document.currentScript.src;let zo="";class _o extends fe{constructor(){super(...arguments),this.url="",this.ts="",this.query="",this.view="replay",this.embed=null,this.replaybase="./replay/",this.swName="sw.js",this.coll="",this.config="",this.inited=!1,this.paramString=null,this.deepLink=!1,this.updateFavicons=!1,this.sandbox=!1,this.noSandbox=null,this.noWebWorker=!1,this.noCache=!1,this.useAdblock=!1,this.adblockRulesUrl="./adblock/adblock.gz",this.newWindowBase="",this.loading="",this.useRuffle=!1,this.replayfile=zo,this.mainElementName="replay-app-main",this.appName="ReplayWeb.page",this.customConfig=null,this.reloadCount=0}static setDefaultReplayFile(e){zo=e}doRegister(){return t(this,void 0,void 0,(function*(){const e=new URL(this.replaybase,window.location.href);if(this.isCrossOrigin=e.origin!==window.location.origin,this.isCrossOrigin)return void(this.inited=!0);const t=this.swName+"?serveIndex=1",i=this.appName,o=this.replaybase,r=this.requireSubdomainIframe;this.swmanager=new tt({name:t,scope:o,requireSubdomainIframe:r,appName:i});try{yield this.swmanager.register(),this.inited=!0}catch(e){this.errorMessage=this.swmanager.renderErrorReport()}}))}fullReload(){const e=this.renderRoot.querySelector("iframe");(null==e?void 0:e.contentWindow)&&e.contentWindow.postMessage({type:"fullReload"})}handleMessage(e){const t=this.renderRoot.querySelector("iframe");if(t&&e.source===t.contentWindow)switch(e.data.type){case"urlchange":this.deepLink&&this.handleUrlChangeMessage(e.data),this.dispatchEvent(new CustomEvent("rwp-url-change",{detail:e.data}));break;case"page-loading":this.dispatchEvent(new CustomEvent("rwp-page-loading",{detail:e.data}));break;case"favicons":this.updateFavicons&&He(e.data)}}handleUrlChangeMessage(e){const{url:t,ts:i,view:o,query:r,title:n}=e;n&&(this.title=n);const a={};t&&(a.url=t),i&&(a.ts=i),r&&(a.query=r),o&&!t&&(a.view=o);const s=new URLSearchParams(a),l=new URL(window.location.href);l.hash="#"+s.toString(),window.history.replaceState({},"",l)}firstUpdated(){this.noSandbox&&console.warn("The noSandbox flag is deprecated. ReplayWeb.page does not add a sandbox by default. To enable sandboxing, use 'sandbox' flag instead. This may result in PDFs not loading and pages opening in new windows, but may be more secure in some situations"),this.doRegister(),window.addEventListener("message",(e=>this.handleMessage(e))),this.deepLink&&(this.updateFromHash(),window.addEventListener("hashchange",(()=>this.updateFromHash()))),this.loadBrowserDefaults()}loadBrowserDefaults(){var e;void 0!==window.GestureEvent&&void 0===window.SharedWorker&&(this.noWebWorker=!0),(null===(e=navigator.storage)||void 0===e?void 0:e.estimate)||(this.noCache=!0)}updateFromHash(){const e=new URLSearchParams(window.location.hash.slice(1));e.has("url")&&(this.url=e.get("url")),e.has("ts")&&(this.ts=e.get("ts")),e.has("query")&&(this.query=e.get("query")),e.has("view")&&(this.view=e.get("view"))}mergeConfigs(){if(!this.customConfig)return this.config;if(this.config){const e=Object.assign(Object.assign({},this.customConfig),JSON.parse(this.config));return JSON.stringify(e)}return JSON.stringify(this.customConfig)}updated(e){if(e.has("url")||e.has("ts")||e.has("query")||e.has("view")||e.has("source")||e.has("src")){this.embed=this.embed||"default",this.src&&(this.source=this.src);const e=new URL(this.source,document.baseURI),t=this.mergeConfigs(),i={source:e,customColl:this.coll,config:t,basePageUrl:window.location.href.split("#")[0],baseUrlSourcePrefix:this.newWindowBase,embed:this.embed};this.deepLink||i.baseUrlSourcePrefix||(i.baseUrlSourcePrefix="https://replayweb.page/"),this.noWebWorker&&(i.noWebWorker="1"),this.noCache&&(i.noCache="1"),this.hideOffscreen&&(i.hideOffscreen="1"),"eager"===this.loading&&(i.loading="eager"),"sw.js"!==this.swName&&(i.swName=this.swName),this.useRuffle&&(i.ruffle="1"),this.useAdblock&&this.adblockRulesUrl&&(i.adblockUrl=this.adblockRulesUrl),this.paramString=new URLSearchParams(i).toString();const o={url:this.url,ts:this.ts,query:this.query};this.url||(o.view=this.view),this.hashString=new URLSearchParams(o).toString()}}static get styles(){return Be(d`
      .logo {
        margin: 1em;
        flex-grow: 1;
      }
      .error {
        white-space: pre-wrap;
        text-align: center;
      }
      .full-width {
        width: 100%;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: 0px;
        padding: 0px;
        margin: 0px;
      }
      :host {
        width: 100%;
        height: 100%;
        display: block;
      }
    `)}render(){return Y`
      ${this.paramString&&this.hashString&&this.inited?Y`
            <iframe
              sandbox="${$e(this.sandbox?"allow-downloads allow-modals allow-orientation-lock allow-pointer-lock         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts         allow-same-origin allow-forms":void 0)}"
              @load="${this.onLoad}"
              src="${this.replaybase}${this.replayfile}?${this.paramString}#${this.hashString}"
              allow="autoplay *; fullscreen"
              title="Replay of ${this.title?`${this.title}:`:""} ${this.url}"
            ></iframe>
          `:Y``}
      ${this.errorMessage}
    `}onLoad(e){if(this.isCrossOrigin)return;const t=e.target.contentWindow,i=e.target.contentDocument;if(t.navigator.serviceWorker&&!t.navigator.serviceWorker.controller&&this.reloadCount<=2)return this.reloadCount++,void setTimeout((()=>t.location.reload()),100);if(this.reloadCount=0,t.customElements.get(this.mainElementName))return;const o=i.createElement("script");o.src=So,i.head.appendChild(o)}}e([we({type:String})],_o.prototype,"url",void 0),e([we({type:String})],_o.prototype,"ts",void 0),e([we({type:String})],_o.prototype,"query",void 0),e([we({type:String})],_o.prototype,"source",void 0),e([we({type:String})],_o.prototype,"src",void 0),e([we({type:String})],_o.prototype,"view",void 0),e([we({type:String})],_o.prototype,"embed",void 0),e([we({type:String})],_o.prototype,"replaybase",void 0),e([we({type:String})],_o.prototype,"swName",void 0),e([we({type:String})],_o.prototype,"title",void 0),e([we({type:String})],_o.prototype,"coll",void 0),e([we({type:String})],_o.prototype,"config",void 0),e([we({type:Boolean})],_o.prototype,"inited",void 0),e([we({type:String})],_o.prototype,"paramString",void 0),e([we({type:String})],_o.prototype,"hashString",void 0),e([we({type:Boolean})],_o.prototype,"deepLink",void 0),e([we({type:Boolean})],_o.prototype,"updateFavicons",void 0),e([we({type:Boolean})],_o.prototype,"sandbox",void 0),e([we({type:Boolean})],_o.prototype,"noSandbox",void 0),e([we({type:Boolean})],_o.prototype,"noWebWorker",void 0),e([we({type:Boolean})],_o.prototype,"noCache",void 0),e([we({type:Boolean})],_o.prototype,"hideOffscreen",void 0),e([we({type:Boolean})],_o.prototype,"useAdblock",void 0),e([we({type:String})],_o.prototype,"adblockRulesUrl",void 0),e([we({type:String})],_o.prototype,"newWindowBase",void 0),e([we({type:String})],_o.prototype,"errorMessage",void 0),e([we({type:Boolean})],_o.prototype,"requireSubdomainIframe",void 0),e([we({type:String})],_o.prototype,"loading",void 0),e([we({type:Boolean})],_o.prototype,"useRuffle",void 0),function(){t(this,void 0,void 0,(function*(){customElements.define("replay-web-page",_o)}))}();var Co=d`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Lo=d`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Ao(e,t){const i=di({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:r}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),n=this[r];t!==n&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,n))}})),r.call(this,e)}}}var Io=d`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Eo=class extends fe{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,di({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let r=" (unknown version)",n=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(n=" v"+o.version),r&&n&&r===n||console.warn(`Attempted to register <${e}>${r}, but <${e}>${n} has already been registered.`)}};Eo.version="2.15.1",Eo.dependencies={},ui([we()],Eo.prototype,"dir",2),ui([we()],Eo.prototype,"lang",2);var Po,Do=Symbol(),To=Symbol(),Fo=new Map,Ro=class extends Eo{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(null==t?void 0:t.spriteSheet){this.svg=Y`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof t.mutator&&t.mutator(i),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return 410===o.status?Do:To}catch(e){return To}try{const e=document.createElement("div");e.innerHTML=await o.text();const t=e.firstElementChild;if("svg"!==(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase()))return Do;Po||(Po=new DOMParser);const r=Po.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):Do}catch(e){return Do}}connectedCallback(){var e;super.connectedCallback(),e=this,Jt.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Jt=Jt.filter((t=>t!==e))}getIconSource(){const e=Xt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?Xt(this.library):void 0;if(!t)return void(this.svg=null);let r=Fo.get(t);if(r||(r=this.resolveIcon(t,o),Fo.set(t,r)),!this.initialRender)return;const n=await r;if(n===To&&Fo.delete(t),t===this.getIconSource().url)if(((e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t)(n))this.svg=n;else switch(n){case To:case Do:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};Ro.styles=[Io,Lo],ui([ye()],Ro.prototype,"svg",2),ui([we({reflect:!0})],Ro.prototype,"name",2),ui([we()],Ro.prototype,"src",2),ui([we()],Ro.prototype,"label",2),ui([we({reflect:!0})],Ro.prototype,"library",2),ui([Ao("label")],Ro.prototype,"handleLabelChange",1),ui([Ao(["name","src","library"])],Ro.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mo=_e(class extends Ce{constructor(e){if(super(e),e.type!==Se||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return Q}}),Uo=Symbol.for(""),Oo=e=>{if(e?.r===Uo)return e?._$litStatic$},Bo=(e,...t)=>({_$litStatic$:t.reduce(((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1]),e[0]),r:Uo}),No=new Map,qo=e=>(t,...i)=>{const o=i.length;let r,n;const a=[],s=[];let l,c=0,d=!1;for(;c<o;){for(l=t[c];c<o&&void 0!==(n=i[c],r=Oo(n));)l+=r+t[++c],d=!0;c!==o&&s.push(n),a.push(l),c++}if(c===o&&a.push(t[o]),d){const e=a.join("$$lit$$");void 0===(t=No.get(e))&&(a.raw=a,No.set(e,t=a)),i=s}return e(t,...i)},jo=qo(Y);qo(Z);var Ho=class extends Eo{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Bo`a`:Bo`button`;return jo`
      <${t}
        part="base"
        class=${Mo({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${$e(e?void 0:this.disabled)}
        type=${$e(e?void 0:"button")}
        href=${$e(e?this.href:void 0)}
        target=${$e(e?this.target:void 0)}
        download=${$e(e?this.download:void 0)}
        rel=${$e(e&&this.target?"noreferrer noopener":void 0)}
        role=${$e(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${$e(this.name)}
          library=${$e(this.library)}
          src=${$e(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ho.styles=[Io,Co],Ho.dependencies={"sl-icon":Ro},ui([ke(".icon-button")],Ho.prototype,"button",2),ui([ye()],Ho.prototype,"hasFocus",2),ui([we()],Ho.prototype,"name",2),ui([we()],Ho.prototype,"library",2),ui([we()],Ho.prototype,"src",2),ui([we()],Ho.prototype,"href",2),ui([we()],Ho.prototype,"target",2),ui([we()],Ho.prototype,"download",2),ui([we()],Ho.prototype,"label",2),ui([we({type:Boolean,reflect:!0})],Ho.prototype,"disabled",2);var Wo=new Map,Vo=new WeakMap;function Go(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Ko(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Yo(e,t){Wo.set(e,Go(t))}function Zo(e,t,i){const o=Vo.get(e);if(null==o?void 0:o[t])return Ko(o[t],i.dir);const r=Wo.get(t);return r?Ko(r,i.dir):{keyframes:[],options:{duration:0}}}function Qo(e,t){return new Promise((i=>{e.addEventListener(t,(function o(r){r.target===e&&(e.removeEventListener(t,o),i())}))}))}function Jo(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,hi(di({},i),{duration:er()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})}))}function Xo(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function er(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function tr(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}const ir=new Set,or=new MutationObserver(cr),rr=new Map;let nr,ar=document.documentElement.dir||"ltr",sr=document.documentElement.lang||navigator.language;function lr(...e){e.map((e=>{const t=e.$code.toLowerCase();rr.has(t)?rr.set(t,Object.assign(Object.assign({},rr.get(t)),e)):rr.set(t,e),nr||(nr=e)})),cr()}function cr(){ar=document.documentElement.dir||"ltr",sr=document.documentElement.lang||navigator.language,[...ir.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}or.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class dr{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ir.add(this.host)}hostDisconnected(){ir.delete(this.host)}dir(){return`${this.host.dir||ar}`.toLowerCase()}lang(){return`${this.host.lang||sr}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),n=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:r,region:n,primary:rr.get(`${r}-${n}`),secondary:rr.get(r)}}exists(e,t){var i;const{primary:o,secondary:r}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||r&&r[e]||t.includeFallback&&nr&&nr[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(o&&o[e])r=o[e];else{if(!nr||!nr[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=nr[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var hr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};lr(hr);var ur=hr,pr=class extends dr{};lr(ur);var fr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var br=d`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,mr=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),gr=class extends Eo{constructor(){super(...arguments),this.hasSlotController=new fr(this,"icon","suffix"),this.localize=new pr(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await tr(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Zo(this,"alert.show",{dir:this.localize.dir()});await Jo(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await tr(this.base);const{keyframes:e,options:t}=Zo(this,"alert.hide",{dir:this.localize.dir()});await Jo(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Qo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qo(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===mr.parentElement&&document.body.append(mr),mr.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{mr.removeChild(this),e(),null===mr.querySelector("sl-alert")&&mr.remove()}),{once:!0})}))}render(){return Y`
      <div
        part="base"
        class=${Mo({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?Y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};gr.styles=[Io,br],gr.dependencies={"sl-icon-button":Ho},ui([ke('[part~="base"]')],gr.prototype,"base",2),ui([we({type:Boolean,reflect:!0})],gr.prototype,"open",2),ui([we({type:Boolean,reflect:!0})],gr.prototype,"closable",2),ui([we({reflect:!0})],gr.prototype,"variant",2),ui([we({type:Number})],gr.prototype,"duration",2),ui([Ao("open",{waitUntilFirstUpdate:!0})],gr.prototype,"handleOpenChange",1),ui([Ao("duration")],gr.prototype,"handleDurationChange",1),Yo("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Yo("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});gr.define("sl-alert");var vr=d`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,wr=class extends Eo{constructor(){super(...arguments),this.localize=new pr(this)}render(){return Y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};wr.styles=[Io,vr];var yr=new WeakMap,xr=new WeakMap,kr=new WeakMap,$r=new WeakSet,Sr=new WeakMap,zr=class{constructor(e,t){this.handleFormData=e=>{const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach((t=>{e.formData.append(i,t.toString())})):e.formData.append(i,o.toString()))},this.handleFormSubmit=e=>{var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=yr.get(this.form))||t.forEach((e=>{this.setUserInteracted(e,!0)}))),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Sr.set(this.host,[])},this.handleInteraction=e=>{const t=Sr.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=di({form:e=>{const t=e.form;if(t){const i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Sr.set(this.host,[]),this.options.assumeInteractionOn.forEach((e=>{this.host.addEventListener(e,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Sr.delete(this.host),this.options.assumeInteractionOn.forEach((e=>{this.host.removeEventListener(e,this.handleInteraction)}))}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,yr.has(this.form)?yr.get(this.form).add(this.host):yr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),xr.has(this.form)||(xr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),kr.has(this.form)||(kr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=yr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),xr.has(this.form)&&(this.form.reportValidity=xr.get(this.form),xr.delete(this.form)),kr.has(this.form)&&(this.form.checkValidity=kr.get(this.form),kr.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?$r.add(e):$r.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))}))),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=Boolean($r.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},_r=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Cr=(Object.freeze(hi(di({},_r),{valid:!1,valueMissing:!0})),Object.freeze(hi(di({},_r),{valid:!1,customError:!0})),d`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`),Lr=class extends Eo{constructor(){super(...arguments),this.formControlController=new zr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new fr(this,"[default]","prefix","suffix"),this.localize=new pr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:_r}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Bo`a`:Bo`button`;return jo`
      <${t}
        part="base"
        class=${Mo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$e(e?void 0:this.disabled)}
        type=${$e(e?void 0:this.type)}
        title=${this.title}
        name=${$e(e?void 0:this.name)}
        value=${$e(e?void 0:this.value)}
        href=${$e(e?this.href:void 0)}
        target=${$e(e?this.target:void 0)}
        download=${$e(e?this.download:void 0)}
        rel=${$e(e?this.rel:void 0)}
        role=${$e(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?jo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?jo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Lr.styles=[Io,Cr],Lr.dependencies={"sl-icon":Ro,"sl-spinner":wr},ui([ke(".button")],Lr.prototype,"button",2),ui([ye()],Lr.prototype,"hasFocus",2),ui([ye()],Lr.prototype,"invalid",2),ui([we()],Lr.prototype,"title",2),ui([we({reflect:!0})],Lr.prototype,"variant",2),ui([we({reflect:!0})],Lr.prototype,"size",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"caret",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"loading",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"outline",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"pill",2),ui([we({type:Boolean,reflect:!0})],Lr.prototype,"circle",2),ui([we()],Lr.prototype,"type",2),ui([we()],Lr.prototype,"name",2),ui([we()],Lr.prototype,"value",2),ui([we()],Lr.prototype,"href",2),ui([we()],Lr.prototype,"target",2),ui([we()],Lr.prototype,"rel",2),ui([we()],Lr.prototype,"download",2),ui([we()],Lr.prototype,"form",2),ui([we({attribute:"formaction"})],Lr.prototype,"formAction",2),ui([we({attribute:"formenctype"})],Lr.prototype,"formEnctype",2),ui([we({attribute:"formmethod"})],Lr.prototype,"formMethod",2),ui([we({attribute:"formnovalidate",type:Boolean})],Lr.prototype,"formNoValidate",2),ui([we({attribute:"formtarget"})],Lr.prototype,"formTarget",2),ui([Ao("disabled",{waitUntilFirstUpdate:!0})],Lr.prototype,"handleDisabledChange",1);Lr.define("sl-button");var Ar=d`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ir=d`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Er=Math.min,Pr=Math.max,Dr=Math.round,Tr=Math.floor,Fr=e=>({x:e,y:e}),Rr={left:"right",right:"left",bottom:"top",top:"bottom"},Mr={start:"end",end:"start"};function Ur(e,t,i){return Pr(e,Er(t,i))}function Or(e,t){return"function"==typeof e?e(t):e}function Br(e){return e.split("-")[0]}function Nr(e){return e.split("-")[1]}function qr(e){return"x"===e?"y":"x"}function jr(e){return"y"===e?"height":"width"}function Hr(e){return["top","bottom"].includes(Br(e))?"y":"x"}function Wr(e){return qr(Hr(e))}function Vr(e){return e.replace(/start|end/g,(e=>Mr[e]))}function Gr(e){return e.replace(/left|right|bottom|top/g,(e=>Rr[e]))}function Kr(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Yr(e){const{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function Zr(e,t,i){let{reference:o,floating:r}=e;const n=Hr(t),a=Wr(t),s=jr(a),l=Br(t),c="y"===n,d=o.x+o.width/2-r.width/2,h=o.y+o.height/2-r.height/2,u=o[s]/2-r[s]/2;let p;switch(l){case"top":p={x:d,y:o.y-r.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-r.width,y:h};break;default:p={x:o.x,y:o.y}}switch(Nr(t)){case"start":p[a]-=u*(i&&c?-1:1);break;case"end":p[a]+=u*(i&&c?-1:1)}return p}async function Qr(e,t){var i;void 0===t&&(t={});const{x:o,y:r,platform:n,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=Or(t,e),f=Kr(p),b=s[u?"floating"===h?"reference":"floating":h],m=Yr(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(b)))||i?b:b.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(s.floating)),boundary:c,rootBoundary:d,strategy:l})),g="floating"===h?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==n.getOffsetParent?void 0:n.getOffsetParent(s.floating)),w=await(null==n.isElement?void 0:n.isElement(v))&&await(null==n.getScale?void 0:n.getScale(v))||{x:1,y:1},y=Yr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:g,offsetParent:v,strategy:l}):g);return{top:(m.top-y.top+f.top)/w.y,bottom:(y.bottom-m.bottom+f.bottom)/w.y,left:(m.left-y.left+f.left)/w.x,right:(y.right-m.right+f.right)/w.x}}function Jr(e){return tn(e)?(e.nodeName||"").toLowerCase():"#document"}function Xr(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function en(e){var t;return null==(t=(tn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function tn(e){return e instanceof Node||e instanceof Xr(e).Node}function on(e){return e instanceof Element||e instanceof Xr(e).Element}function rn(e){return e instanceof HTMLElement||e instanceof Xr(e).HTMLElement}function nn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Xr(e).ShadowRoot)}function an(e){const{overflow:t,overflowX:i,overflowY:o,display:r}=hn(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function sn(e){return["table","td","th"].includes(Jr(e))}function ln(e){const t=cn(),i=hn(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function cn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function dn(e){return["html","body","#document"].includes(Jr(e))}function hn(e){return Xr(e).getComputedStyle(e)}function un(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function pn(e){if("html"===Jr(e))return e;const t=e.assignedSlot||e.parentNode||nn(e)&&e.host||en(e);return nn(t)?t.host:t}function fn(e){const t=pn(e);return dn(t)?e.ownerDocument?e.ownerDocument.body:e.body:rn(t)&&an(t)?t:fn(t)}function bn(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const r=fn(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),a=Xr(r);return n?t.concat(a,a.visualViewport||[],an(r)?r:[],a.frameElement&&i?bn(a.frameElement):[]):t.concat(r,bn(r,[],i))}function mn(e){const t=hn(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=rn(e),n=r?e.offsetWidth:i,a=r?e.offsetHeight:o,s=Dr(i)!==n||Dr(o)!==a;return s&&(i=n,o=a),{width:i,height:o,$:s}}function gn(e){return on(e)?e:e.contextElement}function vn(e){const t=gn(e);if(!rn(t))return Fr(1);const i=t.getBoundingClientRect(),{width:o,height:r,$:n}=mn(t);let a=(n?Dr(i.width):i.width)/o,s=(n?Dr(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const wn=Fr(0);function yn(e){const t=Xr(e);return cn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:wn}function xn(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const r=e.getBoundingClientRect(),n=gn(e);let a=Fr(1);t&&(o?on(o)&&(a=vn(o)):a=vn(e));const s=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Xr(e))&&t}(n,i,o)?yn(n):Fr(0);let l=(r.left+s.x)/a.x,c=(r.top+s.y)/a.y,d=r.width/a.x,h=r.height/a.y;if(n){const e=Xr(n),t=o&&on(o)?Xr(o):o;let i=e,r=i.frameElement;for(;r&&o&&t!==i;){const e=vn(r),t=r.getBoundingClientRect(),o=hn(r),n=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;l*=e.x,c*=e.y,d*=e.x,h*=e.y,l+=n,c+=a,i=Xr(r),r=i.frameElement}}return Yr({width:d,height:h,x:l,y:c})}const kn=[":popover-open",":modal"];function $n(e){return kn.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Sn(e){return xn(en(e)).left+un(e).scrollLeft}function zn(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=Xr(e),o=en(e),r=i.visualViewport;let n=o.clientWidth,a=o.clientHeight,s=0,l=0;if(r){n=r.width,a=r.height;const e=cn();(!e||e&&"fixed"===t)&&(s=r.offsetLeft,l=r.offsetTop)}return{width:n,height:a,x:s,y:l}}(e,i);else if("document"===t)o=function(e){const t=en(e),i=un(e),o=e.ownerDocument.body,r=Pr(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),n=Pr(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+Sn(e);const s=-i.scrollTop;return"rtl"===hn(o).direction&&(a+=Pr(t.clientWidth,o.clientWidth)-r),{width:r,height:n,x:a,y:s}}(en(e));else if(on(t))o=function(e,t){const i=xn(e,!0,"fixed"===t),o=i.top+e.clientTop,r=i.left+e.clientLeft,n=rn(e)?vn(e):Fr(1);return{width:e.clientWidth*n.x,height:e.clientHeight*n.y,x:r*n.x,y:o*n.y}}(t,i);else{const i=yn(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return Yr(o)}function _n(e,t){const i=pn(e);return!(i===t||!on(i)||dn(i))&&("fixed"===hn(i).position||_n(i,t))}function Cn(e,t,i){const o=rn(t),r=en(t),n="fixed"===i,a=xn(e,!0,n,t);let s={scrollLeft:0,scrollTop:0};const l=Fr(0);if(o||!o&&!n)if(("body"!==Jr(t)||an(r))&&(s=un(t)),o){const e=xn(t,!0,n,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else r&&(l.x=Sn(r));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Ln(e){return"static"===hn(e).position}function An(e,t){return rn(e)&&"fixed"!==hn(e).position?t?t(e):e.offsetParent:null}function In(e,t){const i=Xr(e);if($n(e))return i;if(!rn(e)){let t=pn(e);for(;t&&!dn(t);){if(on(t)&&!Ln(t))return t;t=pn(t)}return i}let o=An(e,t);for(;o&&sn(o)&&Ln(o);)o=An(o,t);return o&&dn(o)&&Ln(o)&&!ln(o)?i:o||function(e){let t=pn(e);for(;rn(t)&&!dn(t);){if(ln(t))return t;t=pn(t)}return null}(e)||i}const En={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e;const n="fixed"===r,a=en(o),s=!!t&&$n(t.floating);if(o===a||s&&n)return i;let l={scrollLeft:0,scrollTop:0},c=Fr(1);const d=Fr(0),h=rn(o);if((h||!h&&!n)&&(("body"!==Jr(o)||an(a))&&(l=un(o)),rn(o))){const e=xn(o);c=vn(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x,y:i.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:en,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e;const n=[..."clippingAncestors"===i?$n(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=bn(e,[],!1).filter((e=>on(e)&&"body"!==Jr(e))),r=null;const n="fixed"===hn(e).position;let a=n?pn(e):e;for(;on(a)&&!dn(a);){const t=hn(a),i=ln(a);i||"fixed"!==t.position||(r=null),(n?!i&&!r:!i&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||an(a)&&!i&&_n(e,a))?o=o.filter((e=>e!==a)):r=t,a=pn(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=n[0],s=n.reduce(((e,i)=>{const o=zn(t,i,r);return e.top=Pr(o.top,e.top),e.right=Er(o.right,e.right),e.bottom=Er(o.bottom,e.bottom),e.left=Pr(o.left,e.left),e}),zn(t,a,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:In,getElementRects:async function(e){const t=this.getOffsetParent||In,i=this.getDimensions,o=await i(e.floating);return{reference:Cn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=mn(e);return{width:t,height:i}},getScale:vn,isElement:on,isRTL:function(e){return"rtl"===hn(e).direction}};function Pn(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=gn(e),d=r||n?[...c?bn(c):[],...bn(t)]:[];d.forEach((e=>{r&&e.addEventListener("scroll",i,{passive:!0}),n&&e.addEventListener("resize",i)}));const h=c&&s?function(e,t){let i,o=null;const r=en(e);function n(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),n();const{left:c,top:d,width:h,height:u}=e.getBoundingClientRect();if(s||t(),!h||!u)return;const p={rootMargin:-Tr(d)+"px "+-Tr(r.clientWidth-(c+h))+"px "+-Tr(r.clientHeight-(d+u))+"px "+-Tr(c)+"px",threshold:Pr(0,Er(1,l))||1};let f=!0;function b(e){const t=e[0].intersectionRatio;if(t!==l){if(!f)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{o=new IntersectionObserver(b,{...p,root:r.ownerDocument})}catch(e){o=new IntersectionObserver(b,p)}o.observe(e)}(!0),n}(c,i):null;let u,p=-1,f=null;a&&(f=new ResizeObserver((e=>{let[o]=e;o&&o.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),i()})),c&&!l&&f.observe(c),f.observe(t));let b=l?xn(e):null;return l&&function t(){const o=xn(e);!b||o.x===b.x&&o.y===b.y&&o.width===b.width&&o.height===b.height||i();b=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;d.forEach((e=>{r&&e.removeEventListener("scroll",i),n&&e.removeEventListener("resize",i)})),null==h||h(),null==(e=f)||e.disconnect(),f=null,l&&cancelAnimationFrame(u)}}const Dn=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:r,y:n,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:i,platform:o,elements:r}=e,n=await(null==o.isRTL?void 0:o.isRTL(r.floating)),a=Br(i),s=Nr(i),l="y"===Hr(i),c=["left","top"].includes(a)?-1:1,d=n&&l?-1:1,h=Or(t,e);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return s&&"number"==typeof f&&(p="end"===s?-1*f:f),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(t,e);return a===(null==(i=s.offset)?void 0:i.placement)&&null!=(o=s.arrow)&&o.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:a}}}}},Tn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:r}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...l}=Or(e,t),c={x:i,y:o},d=await Qr(t,l),h=Hr(Br(r)),u=qr(h);let p=c[u],f=c[h];if(n){const e="y"===u?"bottom":"right";p=Ur(p+d["y"===u?"top":"left"],p,p-d[e])}if(a){const e="y"===h?"bottom":"right";f=Ur(f+d["y"===h?"top":"left"],f,f-d[e])}const b=s.fn({...t,[u]:p,[h]:f});return{...b,data:{x:b.x-i,y:b.y-o}}}}},Fn=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:r,middlewareData:n,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:b=!0,...m}=Or(e,t);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};const g=Br(r),v=Br(s)===s,w=await(null==l.isRTL?void 0:l.isRTL(c.floating)),y=u||(v||!b?[Gr(s)]:function(e){const t=Gr(e);return[Vr(e),t,Vr(t)]}(s));u||"none"===f||y.push(...function(e,t,i,o){const r=Nr(e);let n=function(e,t,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?r:o:t?o:r;case"left":case"right":return t?n:a;default:return[]}}(Br(e),"start"===i,o);return r&&(n=n.map((e=>e+"-"+r)),t&&(n=n.concat(n.map(Vr)))),n}(s,b,f,w));const x=[s,...y],k=await Qr(t,m),$=[];let S=(null==(o=n.flip)?void 0:o.overflows)||[];if(d&&$.push(k[g]),h){const e=function(e,t,i){void 0===i&&(i=!1);const o=Nr(e),r=Wr(e),n=jr(r);let a="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=Gr(a)),[a,Gr(a)]}(r,a,w);$.push(k[e[0]],k[e[1]])}if(S=[...S,{placement:r,overflows:$}],!$.every((e=>e<=0))){var z,_;const e=((null==(z=n.flip)?void 0:z.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let i=null==(_=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:_.placement;if(!i)switch(p){case"bestFit":{var C;const e=null==(C=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:C[0];e&&(i=e);break}case"initialPlacement":i=s}if(r!==i)return{reset:{placement:i}}}return{}}}},Rn=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:r,elements:n}=t,{apply:a=(()=>{}),...s}=Or(e,t),l=await Qr(t,s),c=Br(i),d=Nr(i),h="y"===Hr(i),{width:u,height:p}=o.floating;let f,b;"top"===c||"bottom"===c?(f=c,b=d===(await(null==r.isRTL?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(b=c,f="end"===d?"top":"bottom");const m=p-l.top-l.bottom,g=u-l.left-l.right,v=Er(p-l[f],m),w=Er(u-l[b],g),y=!t.middlewareData.shift;let x=v,k=w;if(h?k=d||y?Er(w,g):g:x=d||y?Er(v,m):m,y&&!d){const e=Pr(l.left,0),t=Pr(l.right,0),i=Pr(l.top,0),o=Pr(l.bottom,0);h?k=u-2*(0!==e||0!==t?e+t:Pr(l.left,l.right)):x=p-2*(0!==i||0!==o?i+o:Pr(l.top,l.bottom))}await a({...t,availableWidth:k,availableHeight:x});const $=await r.getDimensions(n.floating);return u!==$.width||p!==$.height?{reset:{rects:!0}}:{}}}},Mn=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:r,rects:n,platform:a,elements:s,middlewareData:l}=t,{element:c,padding:d=0}=Or(e,t)||{};if(null==c)return{};const h=Kr(d),u={x:i,y:o},p=Wr(r),f=jr(p),b=await a.getDimensions(c),m="y"===p,g=m?"top":"left",v=m?"bottom":"right",w=m?"clientHeight":"clientWidth",y=n.reference[f]+n.reference[p]-u[p]-n.floating[f],x=u[p]-n.reference[p],k=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let $=k?k[w]:0;$&&await(null==a.isElement?void 0:a.isElement(k))||($=s.floating[w]||n.floating[f]);const S=y/2-x/2,z=$/2-b[f]/2-1,_=Er(h[g],z),C=Er(h[v],z),L=_,A=$-b[f]-C,I=$/2-b[f]/2+S,E=Ur(L,I,A),P=!l.arrow&&null!=Nr(r)&&I!==E&&n.reference[f]/2-(I<L?_:C)-b[f]/2<0,D=P?I<L?I-L:I-A:0;return{[p]:u[p]+D,data:{[p]:E,centerOffset:I-E-D,...P&&{alignmentOffset:D}},reset:P}}}),Un=(e,t,i)=>{const o=new Map,r={platform:En,...i},n={...r.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:a}=i,s=n.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:h}=Zr(c,o,l),u=o,p={},f=0;for(let i=0;i<s.length;i++){const{name:n,fn:b}=s[i],{x:m,y:g,data:v,reset:w}=await b({x:d,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,h=null!=g?g:h,p={...p,[n]:{...p[n],...v}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(c=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:d,y:h}=Zr(c,u,l))),i=-1)}return{x:d,y:h,placement:u,strategy:r,middlewareData:p}})(e,t,{...r,platform:n})};function On(e){return Nn(e)}function Bn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Nn(e){for(let t=e;t;t=Bn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Bn(e);t;t=Bn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var qn=class extends Eo{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,r=0,n=0,a=0,s=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,r=e.right,n=e.bottom,a=t.left,s=t.top,l=t.right,c=t.top):(i=t.left,o=t.bottom,r=t.right,n=t.bottom,a=e.left,s=e.top,l=e.right,c=e.top):e.left<t.left?(i=e.right,o=e.top,r=t.left,n=t.top,a=e.right,s=e.bottom,l=t.left,c=t.bottom):(i=t.right,o=t.top,r=e.left,n=e.top,a=t.right,s=t.bottom,l=e.left,c=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Pn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Dn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Rn({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Fn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Tn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Rn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Mn({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>En.getOffsetParent(e,On):En.getOffsetParent;Un(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:hi(di({},En),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const r="rtl"===getComputedStyle(this).direction,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",s="",l="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",l=r?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,l=r?i:"",s="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:s,left:l,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Mo({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Mo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};qn.styles=[Io,Ir],ui([ke(".popup")],qn.prototype,"popup",2),ui([ke(".popup__arrow")],qn.prototype,"arrowEl",2),ui([we()],qn.prototype,"anchor",2),ui([we({type:Boolean,reflect:!0})],qn.prototype,"active",2),ui([we({reflect:!0})],qn.prototype,"placement",2),ui([we({reflect:!0})],qn.prototype,"strategy",2),ui([we({type:Number})],qn.prototype,"distance",2),ui([we({type:Number})],qn.prototype,"skidding",2),ui([we({type:Boolean})],qn.prototype,"arrow",2),ui([we({attribute:"arrow-placement"})],qn.prototype,"arrowPlacement",2),ui([we({attribute:"arrow-padding",type:Number})],qn.prototype,"arrowPadding",2),ui([we({type:Boolean})],qn.prototype,"flip",2),ui([we({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],qn.prototype,"flipFallbackPlacements",2),ui([we({attribute:"flip-fallback-strategy"})],qn.prototype,"flipFallbackStrategy",2),ui([we({type:Object})],qn.prototype,"flipBoundary",2),ui([we({attribute:"flip-padding",type:Number})],qn.prototype,"flipPadding",2),ui([we({type:Boolean})],qn.prototype,"shift",2),ui([we({type:Object})],qn.prototype,"shiftBoundary",2),ui([we({attribute:"shift-padding",type:Number})],qn.prototype,"shiftPadding",2),ui([we({attribute:"auto-size"})],qn.prototype,"autoSize",2),ui([we()],qn.prototype,"sync",2),ui([we({type:Object})],qn.prototype,"autoSizeBoundary",2),ui([we({attribute:"auto-size-padding",type:Number})],qn.prototype,"autoSizePadding",2),ui([we({attribute:"hover-bridge",type:Boolean})],qn.prototype,"hoverBridge",2);var jn=class extends Eo{constructor(){super(),this.localize=new pr(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Xo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Xo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await tr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=Zo(this,"tooltip.show",{dir:this.localize.dir()});await Jo(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await tr(this.body);const{keyframes:e,options:i}=Zo(this,"tooltip.hide",{dir:this.localize.dir()});await Jo(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Qo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qo(this,"sl-after-hide")}render(){return Y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Mo({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};jn.styles=[Io,Ar],jn.dependencies={"sl-popup":qn},ui([ke("slot:not([name])")],jn.prototype,"defaultSlot",2),ui([ke(".tooltip__body")],jn.prototype,"body",2),ui([ke("sl-popup")],jn.prototype,"popup",2),ui([we()],jn.prototype,"content",2),ui([we()],jn.prototype,"placement",2),ui([we({type:Boolean,reflect:!0})],jn.prototype,"disabled",2),ui([we({type:Number})],jn.prototype,"distance",2),ui([we({type:Boolean,reflect:!0})],jn.prototype,"open",2),ui([we({type:Number})],jn.prototype,"skidding",2),ui([we()],jn.prototype,"trigger",2),ui([we({type:Boolean})],jn.prototype,"hoist",2),ui([Ao("open",{waitUntilFirstUpdate:!0})],jn.prototype,"handleOpenChange",1),ui([Ao(["content","distance","hoist","placement","skidding"])],jn.prototype,"handleOptionsChange",1),ui([Ao("disabled")],jn.prototype,"handleDisabledChange",1),Yo("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Yo("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Hn=d`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Wn=class extends Eo{constructor(){super(...arguments),this.localize=new pr(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let r=this.from,n="";i?[r,n]=this.from.trim().split("."):o&&([r,n]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(r):null;a?e=o?a.getAttribute(n)||"":i?a[n]||"":a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(e)try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch(e){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r="success"===e?this.successIcon:this.errorIcon,n=Zo(this,"copy.in",{dir:"ltr"}),a=Zo(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===e?i:o,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=e,r.hidden=!1,await r.animate(n.keyframes,n.options).finished,setTimeout((async()=>{await r.animate(a.keyframes,a.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=t,this.isCopying=!1}),this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return Y`
      <sl-tooltip
        class=${Mo({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Wn.styles=[Io,Hn],Wn.dependencies={"sl-icon":Ro,"sl-tooltip":jn},ui([ke('slot[name="copy-icon"]')],Wn.prototype,"copyIcon",2),ui([ke('slot[name="success-icon"]')],Wn.prototype,"successIcon",2),ui([ke('slot[name="error-icon"]')],Wn.prototype,"errorIcon",2),ui([ke("sl-tooltip")],Wn.prototype,"tooltip",2),ui([ye()],Wn.prototype,"isCopying",2),ui([ye()],Wn.prototype,"status",2),ui([we()],Wn.prototype,"value",2),ui([we()],Wn.prototype,"from",2),ui([we({type:Boolean,reflect:!0})],Wn.prototype,"disabled",2),ui([we({attribute:"copy-label"})],Wn.prototype,"copyLabel",2),ui([we({attribute:"success-label"})],Wn.prototype,"successLabel",2),ui([we({attribute:"error-label"})],Wn.prototype,"errorLabel",2),ui([we({attribute:"feedback-duration",type:Number})],Wn.prototype,"feedbackDuration",2),ui([we({attribute:"tooltip-placement"})],Wn.prototype,"tooltipPlacement",2),ui([we({type:Boolean})],Wn.prototype,"hoist",2),Yo("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),Yo("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Wn.define("sl-copy-button");var Vn=new WeakMap;function Gn(e){let t=Vn.get(e);return t||(t=window.getComputedStyle(e,null),Vn.set(e,t)),t}function Kn(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(e.hasAttribute("disabled"))return!1;if(e.closest("[inert]"))return!1;if("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))return!1;if(!function(e){if("function"==typeof e.checkVisibility)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Gn(e);return"hidden"!==t.visibility&&"none"!==t.display}(e))return!1;if(("audio"===t||"video"===t)&&e.hasAttribute("controls"))return!0;if(e.hasAttribute("tabindex"))return!0;if(e.hasAttribute("contenteditable")&&"false"!==e.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)||function(e){const t=Gn(e),{overflowY:i,overflowX:o}=t;return"scroll"===i||"scroll"===o||"auto"===i&&"auto"===o&&(e.scrollHeight>e.clientHeight&&"auto"===i||!(!(e.scrollWidth>e.clientWidth)||"auto"!==o))}(e)}function Yn(e){const t=new WeakMap,i=[];return function o(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]"))return;if(t.has(r))return;t.set(r,!0),!i.includes(r)&&Kn(r)&&i.push(r),r instanceof HTMLSlotElement&&function(e,t){var i;return(null==(i=e.getRootNode({composed:!0}))?void 0:i.host)!==t}(r,e)&&r.assignedElements({flatten:!0}).forEach((e=>{o(e)})),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&o(r.shadowRoot)}for(const e of r.children)o(e)}(e),i.sort(((e,t)=>{const i=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-i}))}function*Zn(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*fi(Zn(e.shadowRoot.activeElement))))}var Qn=[],Jn=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;const i=[...Zn()].pop();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Yn(this.element);let r=o.findIndex((e=>e===i));this.previousFocus=this.currentFocus;const n="forward"===this.tabDirection?1:-1;for(;;){r+n>=o.length?r=0:r+n<0?r=o.length-1:r+=n,this.previousFocus=this.currentFocus;const i=o[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;e.preventDefault(),this.currentFocus=i,null==(t=this.currentFocus)||t.focus({preventScroll:!1});const a=[...Zn()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Qn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Qn=Qn.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Qn[Qn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Yn(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],o="forward"===this.tabDirection?t:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};var Xn=new Set;function ea(e){if(Xn.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}()+function(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}();let t=getComputedStyle(document.documentElement).scrollbarGutter;t&&"auto"!==t||(t="stable"),e<=0&&(t="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function ta(e){Xn.delete(e),0===Xn.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var ia=d`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,oa=class extends Eo{constructor(){super(...arguments),this.hasSlotController=new fr(this,"footer"),this.localize=new pr(this),this.modal=new Jn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ea(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),ta(this),null==(e=this.closeWatcher)||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=Zo(this,"dialog.denyClose",{dir:this.localize.dir()});Jo(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ea(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([tr(this.dialog),tr(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=Zo(this,"dialog.show",{dir:this.localize.dir()}),i=Zo(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Jo(this.panel,t.keyframes,t.options),Jo(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([tr(this.dialog),tr(this.overlay)]);const e=Zo(this,"dialog.hide",{dir:this.localize.dir()}),t=Zo(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Jo(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),Jo(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ta(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout((()=>i.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Qo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qo(this,"sl-after-hide")}render(){return Y`
      <div
        part="base"
        class=${Mo({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$e(this.noHeader?this.label:void 0)}
          aria-labelledby=${$e(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":Y`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};oa.styles=[Io,ia],oa.dependencies={"sl-icon-button":Ho},ui([ke(".dialog")],oa.prototype,"dialog",2),ui([ke(".dialog__panel")],oa.prototype,"panel",2),ui([ke(".dialog__overlay")],oa.prototype,"overlay",2),ui([we({type:Boolean,reflect:!0})],oa.prototype,"open",2),ui([we({reflect:!0})],oa.prototype,"label",2),ui([we({attribute:"no-header",type:Boolean,reflect:!0})],oa.prototype,"noHeader",2),ui([Ao("open",{waitUntilFirstUpdate:!0})],oa.prototype,"handleOpenChange",1),Yo("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Yo("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Yo("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Yo("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Yo("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});oa.define("sl-dialog");var ra=d`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,na=class extends Eo{constructor(){super(...arguments),this.localize=new pr(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open&&!this.closeWatcher)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,i;const o=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(i=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:i.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(r),r.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>function(e){var t,i;const o=Yn(e);return{start:null!=(t=o[0])?t:null,end:null!=(i=o[o.length-1])?i:null}}(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Qo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qo(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await tr(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Zo(this,"dropdown.show",{dir:this.localize.dir()});await Jo(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await tr(this);const{keyframes:e,options:t}=Zo(this,"dropdown.hide",{dir:this.localize.dir()});await Jo(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Y`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${$e(this.sync?this.sync:void 0)}
        class=${Mo({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};na.styles=[Io,ra],na.dependencies={"sl-popup":qn},ui([ke(".dropdown")],na.prototype,"popup",2),ui([ke(".dropdown__trigger")],na.prototype,"trigger",2),ui([ke(".dropdown__panel")],na.prototype,"panel",2),ui([we({type:Boolean,reflect:!0})],na.prototype,"open",2),ui([we({reflect:!0})],na.prototype,"placement",2),ui([we({type:Boolean,reflect:!0})],na.prototype,"disabled",2),ui([we({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],na.prototype,"stayOpenOnSelect",2),ui([we({attribute:!1})],na.prototype,"containingElement",2),ui([we({type:Number})],na.prototype,"distance",2),ui([we({type:Number})],na.prototype,"skidding",2),ui([we({type:Boolean})],na.prototype,"hoist",2),ui([we({reflect:!0})],na.prototype,"sync",2),ui([Ao("open",{waitUntilFirstUpdate:!0})],na.prototype,"handleOpenChange",1),Yo("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Yo("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});na.define("sl-dropdown");var aa=d`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,sa=class extends Eo{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath().find((e=>{var i;return t.includes((null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,"role"))||"")}));if(!i)return;const o=i;"checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if("Enter"===e.key||" "===e.key){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),null==t||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),"ArrowDown"===e.key?o++:"ArrowUp"===e.key?o--:"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return Y`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};sa.styles=[Io,aa],ui([ke("slot")],sa.prototype,"defaultSlot",2);sa.define("sl-menu");var la=d`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,ca=class{constructor(e,t,i){this.popupRef=dt(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e)}},this.handleClick=e=>{var t;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&("sl-menu-item"===e.target.tagName||(null==(t=e.target.role)?void 0:t.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),t=null==e?void 0:e.assignedElements({flatten:!0}).filter((e=>"sl-menu"===e.localName))[0],i="rtl"===this.localize.dir();if(!t)return;const{left:o,top:r,width:n,height:a}=t.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+n:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+n:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const e of t.assignedElements())if(i=e.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let e=1;e!==i.length;++e)i[e].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{i[0]instanceof HTMLElement&&i[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!(null==(e=this.host.parentElement)?void 0:e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce(((e,i)=>{var o;const r=null!=(o=t.get(i))?o:new CSSUnitValue(0,"px");return e-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const e="ltr"===this.localize.dir();return this.isConnected?Y`
      <sl-popup
        ${pt(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:Y` <slot name="submenu" hidden></slot> `}},da=class extends Eo{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new pr(this),this.hasSlotController=new fr(this,"submenu"),this.submenuController=new ca(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)})),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e="rtl"===this.localize.dir(),t=this.submenuController.isExpanded();return Y`
      <div
        id="anchor"
        part="base"
        class=${Mo({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?Y` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};da.styles=[Io,la],da.dependencies={"sl-icon":Ro,"sl-popup":qn,"sl-spinner":wr},ui([ke("slot:not([name])")],da.prototype,"defaultSlot",2),ui([ke(".menu-item")],da.prototype,"menuItem",2),ui([we()],da.prototype,"type",2),ui([we({type:Boolean,reflect:!0})],da.prototype,"checked",2),ui([we()],da.prototype,"value",2),ui([we({type:Boolean,reflect:!0})],da.prototype,"loading",2),ui([we({type:Boolean,reflect:!0})],da.prototype,"disabled",2),ui([Ao("checked")],da.prototype,"handleCheckedChange",1),ui([Ao("disabled")],da.prototype,"handleDisabledChange",1),ui([Ao("type")],da.prototype,"handleTypeChange",1);da.define("sl-menu-item")})();var __webpack_export_target__=self;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();