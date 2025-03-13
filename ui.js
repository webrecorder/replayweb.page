/*! 'ui.js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-2025, Webrecorder Software. Licensed under the Affero General Public License v3.' */(()=>{var __webpack_modules__={495:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var o=i(314),n=i.n(o)()((function(e){return e[1]}));n.push([e.id,':root,\n:host,\n.sl-theme-light {\n  color-scheme: light;\n\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  --sl-font-serif: Georgia, "Times New Roman", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-color: var(--sl-color-primary-600);\n  --sl-focus-ring-style: solid;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)\n    var(--sl-focus-ring-color);\n  --sl-focus-ring-offset: 1px;\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n  --sl-input-required-content: "*";\n  --sl-input-required-content-offset: -2px;\n  --sl-input-required-content-color: var(--sl-input-label-color);\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);\n  --sl-input-focus-ring-offset: 0;\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size-small: 0.875rem;\n  --sl-toggle-size-medium: 1.125rem;\n  --sl-toggle-size-large: 1.375rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 6px;\n\n  --sl-z-index-drawer: 700;\n  --sl-z-index-dialog: 800;\n  --sl-z-index-dropdown: 900;\n  --sl-z-index-toast: 950;\n  --sl-z-index-tooltip: 1000;\n}\n\n@supports (scrollbar-gutter: stable) {\n  .sl-scroll-lock {\n    scrollbar-gutter: var(--sl-scroll-lock-gutter) !important;\n  }\n\n  .sl-scroll-lock body {\n    overflow: hidden !important;\n  }\n}\n\n@supports not (scrollbar-gutter: stable) {\n  .sl-scroll-lock body {\n    padding-right: var(--sl-scroll-lock-size) !important;\n    overflow: hidden !important;\n  }\n}\n\n.sl-toast-stack {\n  position: fixed;\n  top: 0;\n  inset-inline-end: 0;\n  z-index: var(--sl-z-index-toast);\n  width: 28rem;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.sl-toast-stack sl-alert {\n  margin: var(--sl-spacing-medium);\n}\n\n.sl-toast-stack sl-alert::part(base) {\n  box-shadow: var(--sl-shadow-large);\n}\n',""]);const r=n},989:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var o=i(314),n=i.n(o),r=i(495),s=n()((function(e){return e[1]}));s.i(r.A),s.push([e.id,'.input::placeholder,.textarea::placeholder,.select select::placeholder{opacity:1}a:focus{color:#363636}.file-label:focus-within .file-cta{background-color:#e8e8e8;color:#363636}.button.is-primary:focus,.button.is-primary:hover,.button.is-primary:active{background-color:#459558 !important;color:#fff !important}.replay-bar .button{margin:0 1px}.replay-bar .button:focus{box-shadow:none !important;outline:1px dotted #4876ff;outline:-webkit-focus-ring-color auto 1px}.skip-link{border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.skip-link:focus{background-color:#000;border-radius:3px;box-shadow:0 0 2px 2px rgba(0,0,0,.6);clip:auto !important;clip-path:none;color:#fff;display:block;font-family:inherit;font-size:1.3em;font-weight:bold;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}.main-scroll{flex:1;scroll-behavior:smooth;overflow-y:auto;max-height:100vh;height:100%;display:flex;flex-direction:column;overflow-x:hidden}/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis,.file-cta,.file-name,.select select,.textarea,.input,.button{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.5em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.5em - 1px);padding-left:calc(.75em - 1px);padding-right:calc(.75em - 1px);padding-top:calc(.5em - 1px);position:relative;vertical-align:top}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus,.pagination-ellipsis:focus,.file-cta:focus,.file-name:focus,.select select:focus,.textarea:focus,.input:focus,.button:focus,.is-focused.pagination-previous,.is-focused.pagination-next,.is-focused.pagination-link,.is-focused.pagination-ellipsis,.is-focused.file-cta,.is-focused.file-name,.select select.is-focused,.is-focused.textarea,.is-focused.input,.is-focused.button,.pagination-previous:active,.pagination-next:active,.pagination-link:active,.pagination-ellipsis:active,.file-cta:active,.file-name:active,.select select:active,.textarea:active,.input:active,.button:active,.is-active.pagination-previous,.is-active.pagination-next,.is-active.pagination-link,.is-active.pagination-ellipsis,.is-active.file-cta,.is-active.file-name,.select select.is-active,.is-active.textarea,.is-active.input,.is-active.button{outline:none}[disabled].pagination-previous,[disabled].pagination-next,[disabled].pagination-link,[disabled].pagination-ellipsis,[disabled].file-cta,[disabled].file-name,.select select[disabled],[disabled].textarea,[disabled].input,[disabled].button,fieldset[disabled] .pagination-previous,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input,fieldset[disabled] .button{cursor:not-allowed}.is-unselectable,.tabs,.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis,.breadcrumb,.file,.button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless)::after,.select:not(.is-multiple):not(.is-loading)::after{border:3px solid rgba(0,0,0,0);border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:.625em}.tabs:not(:last-child),.pagination:not(:last-child),.message:not(:last-child),.level:not(:last-child),.breadcrumb:not(:last-child),.block:not(:last-child),.title:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.progress:not(:last-child),.notification:not(:last-child),.content:not(:last-child),.box:not(:last-child){margin-bottom:1.5rem}.modal-close,.delete{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:9999px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.modal-close::before,.delete::before,.modal-close::after,.delete::after{background-color:#fff;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.modal-close::before,.delete::before{height:2px;width:50%}.modal-close::after,.delete::after{height:50%;width:2px}.modal-close:hover,.delete:hover,.modal-close:focus,.delete:focus{background-color:rgba(10,10,10,.3)}.modal-close:active,.delete:active{background-color:rgba(10,10,10,.4)}.is-small.modal-close,.is-small.delete{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.modal-close,.is-medium.delete{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.modal-close,.is-large.delete{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.control.is-loading::after,.select.is-loading::after,.loader,.button.is-loading::after{animation:spinAround 500ms infinite linear;border:2px solid #dbdbdb;border-radius:9999px;border-right-color:rgba(0,0,0,0);border-top-color:rgba(0,0,0,0);content:"";display:block;height:1em;position:relative;width:1em}.hero-video,.is-overlay,.modal-background,.modal,.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio{bottom:0;left:0;position:absolute;right:0;top:0}.navbar-burger{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0}/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:inherit}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,optgroup,select,textarea{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#4876ff;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#da1039;font-size:.875em;font-weight:normal;padding:.25em .5em .25em}hr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:rgba(0,0,0,0);color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:inherit}table th{color:#363636}@keyframes spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.box{background-color:#fff;border-radius:6px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);color:#4a4a4a;display:block;padding:1.25rem}a.box:hover,a.box:focus{box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0 0 1px #4876ff}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #4876ff}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.5em - 1px);padding-left:1em;padding-right:1em;padding-top:calc(.5em - 1px);text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-small,.button .icon.is-medium,.button .icon.is-large{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-0.5em - 1px);margin-right:.25em}.button .icon:last-child:not(:first-child){margin-left:.25em;margin-right:calc(-0.5em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-0.5em - 1px);margin-right:calc(-0.5em - 1px)}.button:hover,.button.is-hovered{border-color:#b5b5b5;color:#363636}.button:focus,.button.is-focused{border-color:#485fc7;color:#363636}.button:focus:not(:active),.button.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.button:active,.button.is-active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:#4a4a4a;text-decoration:underline}.button.is-text:hover,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text.is-focused{background-color:#f5f5f5;color:#363636}.button.is-text:active,.button.is-text.is-active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);box-shadow:none}.button.is-ghost{background:none;border-color:rgba(0,0,0,0);color:#4876ff;text-decoration:none}.button.is-ghost:hover,.button.is-ghost.is-hovered{color:#4876ff;text-decoration:underline}.button.is-white{background-color:#fff;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:hover,.button.is-white.is-hovered{background-color:#f9f9f9;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:focus,.button.is-white.is-focused{border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white:focus:not(:active),.button.is-white.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.button.is-white:active,.button.is-white.is-active{background-color:#f2f2f2;border-color:rgba(0,0,0,0);color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover,.button.is-white.is-inverted.is-hovered{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:rgba(0,0,0,0);box-shadow:none;color:#fff}.button.is-white.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-white.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-white.is-outlined:hover,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined.is-focused{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-white.is-outlined.is-loading:hover::after,.button.is-white.is-outlined.is-loading.is-hovered::after,.button.is-white.is-outlined.is-loading:focus::after,.button.is-white.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:hover,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined.is-focused{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading:hover::after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-white.is-inverted.is-outlined.is-loading:focus::after,.button.is-white.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:rgba(0,0,0,0);color:#fff}.button.is-black:hover,.button.is-black.is-hovered{background-color:#040404;border-color:rgba(0,0,0,0);color:#fff}.button.is-black:focus,.button.is-black.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-black:focus:not(:active),.button.is-black.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black:active,.button.is-black.is-active{background-color:#000;border-color:rgba(0,0,0,0);color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover,.button.is-black.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#0a0a0a}.button.is-black.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-black.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:hover,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined.is-focused{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-black.is-outlined.is-loading:hover::after,.button.is-black.is-outlined.is-loading.is-hovered::after,.button.is-black.is-outlined.is-loading:focus::after,.button.is-black.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:rgba(0,0,0,0);border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:hover,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined.is-focused{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading:hover::after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-black.is-inverted.is-outlined.is-loading:focus::after,.button.is-black.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #0a0a0a #0a0a0a !important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#d2f9d6;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:hover,.button.is-light.is-hovered{background-color:#c7f8cc;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:focus,.button.is-light.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light:focus:not(:active),.button.is-light.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.button.is-light:active,.button.is-light.is-active{background-color:#bcf6c2;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#d2f9d6;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-light.is-inverted{background-color:rgba(0,0,0,.7);color:#d2f9d6}.button.is-light.is-inverted:hover,.button.is-light.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#d2f9d6}.button.is-light.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-light.is-outlined{background-color:rgba(0,0,0,0);border-color:#d2f9d6;color:#d2f9d6}.button.is-light.is-outlined:hover,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined.is-focused{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,.7)}.button.is-light.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #d2f9d6 #d2f9d6 !important}.button.is-light.is-outlined.is-loading:hover::after,.button.is-light.is-outlined.is-loading.is-hovered::after,.button.is-light.is-outlined.is-loading:focus::after,.button.is-light.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:rgba(0,0,0,0);border-color:#d2f9d6;box-shadow:none;color:#d2f9d6}.button.is-light.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-light.is-inverted.is-outlined:hover,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#d2f9d6}.button.is-light.is-inverted.is-outlined.is-loading:hover::after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-light.is-inverted.is-outlined.is-loading:focus::after,.button.is-light.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #d2f9d6 #d2f9d6 !important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-dark{background-color:#459558;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:hover,.button.is-dark.is-hovered{background-color:#418c53;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:focus,.button.is-dark.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-dark:focus:not(:active),.button.is-dark.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.button.is-dark:active,.button.is-dark.is-active{background-color:#3d844e;border-color:rgba(0,0,0,0);color:#fff}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#459558;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-dark.is-inverted{background-color:#fff;color:#459558}.button.is-dark.is-inverted:hover,.button.is-dark.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#459558}.button.is-dark.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-dark.is-outlined{background-color:rgba(0,0,0,0);border-color:#459558;color:#459558}.button.is-dark.is-outlined:hover,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined.is-focused{background-color:#459558;border-color:#459558;color:#fff}.button.is-dark.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #459558 #459558 !important}.button.is-dark.is-outlined.is-loading:hover::after,.button.is-dark.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-outlined.is-loading:focus::after,.button.is-dark.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:rgba(0,0,0,0);border-color:#459558;box-shadow:none;color:#459558}.button.is-dark.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-dark.is-inverted.is-outlined:hover,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined.is-focused{background-color:#fff;color:#459558}.button.is-dark.is-inverted.is-outlined.is-loading:hover::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-inverted.is-outlined.is-loading:focus::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #459558 #459558 !important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-primary{background-color:#55be6f;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:hover,.button.is-primary.is-hovered{background-color:#4cba67;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:focus,.button.is-primary.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-primary:focus:not(:active),.button.is-primary.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.button.is-primary:active,.button.is-primary.is-active{background-color:#45b461;border-color:rgba(0,0,0,0);color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#55be6f;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted:hover,.button.is-primary.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#55be6f}.button.is-primary.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-primary.is-outlined{background-color:rgba(0,0,0,0);border-color:#55be6f;color:#55be6f}.button.is-primary.is-outlined:hover,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined.is-focused{background-color:#55be6f;border-color:#55be6f;color:#fff}.button.is-primary.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #55be6f #55be6f !important}.button.is-primary.is-outlined.is-loading:hover::after,.button.is-primary.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-outlined.is-loading:focus::after,.button.is-primary.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:rgba(0,0,0,0);border-color:#55be6f;box-shadow:none;color:#55be6f}.button.is-primary.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:hover,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined.is-focused{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted.is-outlined.is-loading:hover::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-inverted.is-outlined.is-loading:focus::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #55be6f #55be6f !important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.button.is-primary.is-light:hover,.button.is-primary.is-light.is-hovered{background-color:#e7f6eb;border-color:rgba(0,0,0,0);color:#2f7a41}.button.is-primary.is-light:active,.button.is-primary.is-light.is-active{background-color:#def2e3;border-color:rgba(0,0,0,0);color:#2f7a41}.button.is-link{background-color:#4876ff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link:hover,.button.is-link.is-hovered{background-color:#3b6cff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link:focus,.button.is-link.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-link:focus:not(:active),.button.is-link.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.button.is-link:active,.button.is-link.is-active{background-color:#2f63ff;border-color:rgba(0,0,0,0);color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#4876ff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#4876ff}.button.is-link.is-inverted:hover,.button.is-link.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#4876ff}.button.is-link.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-link.is-outlined{background-color:rgba(0,0,0,0);border-color:#4876ff;color:#4876ff}.button.is-link.is-outlined:hover,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined.is-focused{background-color:#4876ff;border-color:#4876ff;color:#fff}.button.is-link.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #4876ff #4876ff !important}.button.is-link.is-outlined.is-loading:hover::after,.button.is-link.is-outlined.is-loading.is-hovered::after,.button.is-link.is-outlined.is-loading:focus::after,.button.is-link.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:rgba(0,0,0,0);border-color:#4876ff;box-shadow:none;color:#4876ff}.button.is-link.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:hover,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined.is-focused{background-color:#fff;color:#4876ff}.button.is-link.is-inverted.is-outlined.is-loading:hover::after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-link.is-inverted.is-outlined.is-loading:focus::after,.button.is-link.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #4876ff #4876ff !important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-link.is-light{background-color:#ebf0ff;color:#0037db}.button.is-link.is-light:hover,.button.is-link.is-light.is-hovered{background-color:#dee6ff;border-color:rgba(0,0,0,0);color:#0037db}.button.is-link.is-light:active,.button.is-link.is-light.is-active{background-color:#d1ddff;border-color:rgba(0,0,0,0);color:#0037db}.button.is-info{background-color:#f0f8ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:hover,.button.is-info.is-hovered{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:focus,.button.is-info.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info:focus:not(:active),.button.is-info.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.button.is-info:active,.button.is-info.is-active{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#f0f8ff;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-info.is-inverted{background-color:rgba(0,0,0,.7);color:#f0f8ff}.button.is-info.is-inverted:hover,.button.is-info.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#f0f8ff}.button.is-info.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-info.is-outlined{background-color:rgba(0,0,0,0);border-color:#f0f8ff;color:#f0f8ff}.button.is-info.is-outlined:hover,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined.is-focused{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,.7)}.button.is-info.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f0f8ff #f0f8ff !important}.button.is-info.is-outlined.is-loading:hover::after,.button.is-info.is-outlined.is-loading.is-hovered::after,.button.is-info.is-outlined.is-loading:focus::after,.button.is-info.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:rgba(0,0,0,0);border-color:#f0f8ff;box-shadow:none;color:#f0f8ff}.button.is-info.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-info.is-inverted.is-outlined:hover,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#f0f8ff}.button.is-info.is-inverted.is-outlined.is-loading:hover::after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-info.is-inverted.is-outlined.is-loading:focus::after,.button.is-info.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f0f8ff #f0f8ff !important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-info.is-light{background-color:#f0f8ff;color:#004f94}.button.is-info.is-light:hover,.button.is-info.is-light.is-hovered{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:#004f94}.button.is-info.is-light:active,.button.is-info.is-light.is-active{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:#004f94}.button.is-success{background-color:#48c78e;border-color:rgba(0,0,0,0);color:#fff}.button.is-success:hover,.button.is-success.is-hovered{background-color:#3ec487;border-color:rgba(0,0,0,0);color:#fff}.button.is-success:focus,.button.is-success.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-success:focus:not(:active),.button.is-success.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.button.is-success:active,.button.is-success.is-active{background-color:#3abb81;border-color:rgba(0,0,0,0);color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#48c78e;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#48c78e}.button.is-success.is-inverted:hover,.button.is-success.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#48c78e}.button.is-success.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-success.is-outlined{background-color:rgba(0,0,0,0);border-color:#48c78e;color:#48c78e}.button.is-success.is-outlined:hover,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined.is-focused{background-color:#48c78e;border-color:#48c78e;color:#fff}.button.is-success.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important}.button.is-success.is-outlined.is-loading:hover::after,.button.is-success.is-outlined.is-loading.is-hovered::after,.button.is-success.is-outlined.is-loading:focus::after,.button.is-success.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:rgba(0,0,0,0);border-color:#48c78e;box-shadow:none;color:#48c78e}.button.is-success.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:hover,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined.is-focused{background-color:#fff;color:#48c78e}.button.is-success.is-inverted.is-outlined.is-loading:hover::after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-success.is-inverted.is-outlined.is-loading:focus::after,.button.is-success.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #48c78e #48c78e !important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-success.is-light{background-color:#effaf5;color:#257953}.button.is-success.is-light:hover,.button.is-success.is-light.is-hovered{background-color:#e6f7ef;border-color:rgba(0,0,0,0);color:#257953}.button.is-success.is-light:active,.button.is-success.is-light.is-active{background-color:#dcf4e9;border-color:rgba(0,0,0,0);color:#257953}.button.is-warning{background-color:#ffd975;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:hover,.button.is-warning.is-hovered{background-color:#ffd568;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:focus,.button.is-warning.is-focused{border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning:focus:not(:active),.button.is-warning.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.button.is-warning:active,.button.is-warning.is-active{background-color:#ffd25c;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffd975;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);color:#ffd975}.button.is-warning.is-inverted:hover,.button.is-warning.is-inverted.is-hovered{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,0);box-shadow:none;color:#ffd975}.button.is-warning.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-warning.is-outlined{background-color:rgba(0,0,0,0);border-color:#ffd975;color:#ffd975}.button.is-warning.is-outlined:hover,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined.is-focused{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffd975 #ffd975 !important}.button.is-warning.is-outlined.is-loading:hover::after,.button.is-warning.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-outlined.is-loading:focus::after,.button.is-warning.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.7) rgba(0,0,0,.7) !important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:rgba(0,0,0,0);border-color:#ffd975;box-shadow:none;color:#ffd975}.button.is-warning.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:hover,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,.7);color:#ffd975}.button.is-warning.is-inverted.is-outlined.is-loading:hover::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-inverted.is-outlined.is-loading:focus::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #ffd975 #ffd975 !important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-warning.is-light{background-color:#fff9eb;color:#946b00}.button.is-warning.is-light:hover,.button.is-warning.is-light.is-hovered{background-color:#fff6de;border-color:rgba(0,0,0,0);color:#946b00}.button.is-warning.is-light:active,.button.is-warning.is-light.is-active{background-color:#fff2d1;border-color:rgba(0,0,0,0);color:#946b00}.button.is-danger{background-color:#f14668;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:hover,.button.is-danger.is-hovered{background-color:#f03a5f;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:focus,.button.is-danger.is-focused{border-color:rgba(0,0,0,0);color:#fff}.button.is-danger:focus:not(:active),.button.is-danger.is-focused:not(:active){box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.button.is-danger:active,.button.is-danger.is-active{background-color:#ef2e55;border-color:rgba(0,0,0,0);color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#f14668;border-color:rgba(0,0,0,0);box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#f14668}.button.is-danger.is-inverted:hover,.button.is-danger.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:rgba(0,0,0,0);box-shadow:none;color:#f14668}.button.is-danger.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-danger.is-outlined{background-color:rgba(0,0,0,0);border-color:#f14668;color:#f14668}.button.is-danger.is-outlined:hover,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined.is-focused{background-color:#f14668;border-color:#f14668;color:#fff}.button.is-danger.is-outlined.is-loading::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important}.button.is-danger.is-outlined.is-loading:hover::after,.button.is-danger.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-outlined.is-loading:focus::after,.button.is-danger.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff !important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:rgba(0,0,0,0);border-color:#f14668;box-shadow:none;color:#f14668}.button.is-danger.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:hover,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined.is-focused{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-outlined.is-loading:hover::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-inverted.is-outlined.is-loading:focus::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #f14668 #f14668 !important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:rgba(0,0,0,0);border-color:#fff;box-shadow:none;color:#fff}.button.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.button.is-danger.is-light:hover,.button.is-danger.is-light.is-hovered{background-color:#fde0e6;border-color:rgba(0,0,0,0);color:#cc0f35}.button.is-danger.is-light:active,.button.is-danger.is-light.is-active{background-color:#fcd4dc;border-color:rgba(0,0,0,0);color:#cc0f35}.button.is-small{font-size:.75rem}.button.is-small:not(.is-rounded){border-radius:2px}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:rgba(0,0,0,0) !important;pointer-events:none}.button.is-loading::after{position:absolute;left:calc(50% - 1em*.5);top:calc(50% - 1em*.5);position:absolute !important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:9999px;padding-left:calc(1em + .25em);padding-right:calc(1em + .25em)}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-0.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){font-size:.75rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded){border-radius:2px}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button:hover,.buttons.has-addons .button.is-hovered{z-index:2}.buttons.has-addons .button:focus,.buttons.has-addons .button.is-focused,.buttons.has-addons .button:active,.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-selected{z-index:3}.buttons.has-addons .button:focus:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-selected:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1;flex-shrink:1}.buttons.is-centered{justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none !important;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width: 1024px){.container{max-width:960px}}@media screen and (max-width: 1215px){.container.is-widescreen:not(.is-max-desktop){max-width:1152px}}@media screen and (max-width: 1407px){.container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}@media screen and (min-width: 1216px){.container:not(.is-max-desktop){max-width:1152px}}@media screen and (min-width: 1408px){.container:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}.content li+li{margin-top:.25em}.content p:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content ul:not(:last-child),.content blockquote:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sup,.content sub{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:inherit}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-normal{font-size:1rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.icon-text{align-items:flex-start;color:inherit;display:inline-flex;flex-wrap:wrap;line-height:1.5rem;vertical-align:top}.icon-text .icon{flex-grow:0;flex-shrink:0}.icon-text .icon:not(:last-child){margin-right:.25em}.icon-text .icon:not(:first-child){margin-left:.25em}div.icon-text{display:flex}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:9999px}.image.is-fullwidth{width:100%}.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio{height:100%;width:100%}.image.is-square,.image.is-1by1{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;position:relative;padding:1.25rem 2.5rem 1.25rem 1.5rem}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:rgba(0,0,0,0)}.notification>.delete{right:.5rem;position:absolute;top:.5rem}.notification .title,.notification .subtitle,.notification .content{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.notification.is-dark{background-color:#459558;color:#fff}.notification.is-primary{background-color:#55be6f;color:#fff}.notification.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.notification.is-link{background-color:#4876ff;color:#fff}.notification.is-link.is-light{background-color:#ebf0ff;color:#0037db}.notification.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.notification.is-info.is-light{background-color:#f0f8ff;color:#004f94}.notification.is-success{background-color:#48c78e;color:#fff}.notification.is-success.is-light{background-color:#effaf5;color:#257953}.notification.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.notification.is-warning.is-light{background-color:#fff9eb;color:#946b00}.notification.is-danger{background-color:#f14668;color:#fff}.notification.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:9999px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#ededed}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(to right, hsl(0, 0%, 100%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(to right, hsl(0, 0%, 4%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-light::-webkit-progress-value{background-color:#d2f9d6}.progress.is-light::-moz-progress-bar{background-color:#d2f9d6}.progress.is-light::-ms-fill{background-color:#d2f9d6}.progress.is-light:indeterminate{background-image:linear-gradient(to right, #d2f9d6 30%, hsl(0, 0%, 93%) 30%)}.progress.is-dark::-webkit-progress-value{background-color:#459558}.progress.is-dark::-moz-progress-bar{background-color:#459558}.progress.is-dark::-ms-fill{background-color:#459558}.progress.is-dark:indeterminate{background-image:linear-gradient(to right, #459558 30%, hsl(0, 0%, 93%) 30%)}.progress.is-primary::-webkit-progress-value{background-color:#55be6f}.progress.is-primary::-moz-progress-bar{background-color:#55be6f}.progress.is-primary::-ms-fill{background-color:#55be6f}.progress.is-primary:indeterminate{background-image:linear-gradient(to right, #55be6f 30%, hsl(0, 0%, 93%) 30%)}.progress.is-link::-webkit-progress-value{background-color:#4876ff}.progress.is-link::-moz-progress-bar{background-color:#4876ff}.progress.is-link::-ms-fill{background-color:#4876ff}.progress.is-link:indeterminate{background-image:linear-gradient(to right, #4876ff 30%, hsl(0, 0%, 93%) 30%)}.progress.is-info::-webkit-progress-value{background-color:#f0f8ff}.progress.is-info::-moz-progress-bar{background-color:#f0f8ff}.progress.is-info::-ms-fill{background-color:#f0f8ff}.progress.is-info:indeterminate{background-image:linear-gradient(to right, #f0f8ff 30%, hsl(0, 0%, 93%) 30%)}.progress.is-success::-webkit-progress-value{background-color:#48c78e}.progress.is-success::-moz-progress-bar{background-color:#48c78e}.progress.is-success::-ms-fill{background-color:#48c78e}.progress.is-success:indeterminate{background-image:linear-gradient(to right, hsl(153, 53%, 53%) 30%, hsl(0, 0%, 93%) 30%)}.progress.is-warning::-webkit-progress-value{background-color:#ffd975}.progress.is-warning::-moz-progress-bar{background-color:#ffd975}.progress.is-warning::-ms-fill{background-color:#ffd975}.progress.is-warning:indeterminate{background-image:linear-gradient(to right, #ffd975 30%, hsl(0, 0%, 93%) 30%)}.progress.is-danger::-webkit-progress-value{background-color:#f14668}.progress.is-danger::-moz-progress-bar{background-color:#f14668}.progress.is-danger::-ms-fill{background-color:#f14668}.progress.is-danger:indeterminate{background-image:linear-gradient(to right, hsl(348, 86%, 61%) 30%, hsl(0, 0%, 93%) 30%)}.progress:indeterminate{animation-duration:1.5s;animation-iteration-count:infinite;animation-name:moveIndeterminate;animation-timing-function:linear;background-color:#ededed;background-image:linear-gradient(to right, hsl(0, 0%, 29%) 30%, hsl(0, 0%, 93%) 30%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:rgba(0,0,0,0)}.progress:indeterminate::-moz-progress-bar{background-color:rgba(0,0,0,0)}.progress:indeterminate::-ms-fill{animation-name:none}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@keyframes moveIndeterminate{from{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,.7)}.table td.is-dark,.table th.is-dark{background-color:#459558;border-color:#459558;color:#fff}.table td.is-primary,.table th.is-primary{background-color:#55be6f;border-color:#55be6f;color:#fff}.table td.is-link,.table th.is-link{background-color:#4876ff;border-color:#4876ff;color:#fff}.table td.is-info,.table th.is-info{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,.7)}.table td.is-success,.table th.is-success{background-color:#48c78e;border-color:#48c78e;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#f14668;border-color:#f14668;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#55be6f;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:#363636}.table th:not([align]){text-align:inherit}.table tr.is-selected{background-color:#55be6f;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:rgba(0,0,0,0)}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:rgba(0,0,0,0)}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:rgba(0,0,0,0)}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-0.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.tag:not(body).is-dark{background-color:#459558;color:#fff}.tag:not(body).is-primary{background-color:#55be6f;color:#fff}.tag:not(body).is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.tag:not(body).is-link{background-color:#4876ff;color:#fff}.tag:not(body).is-link.is-light{background-color:#ebf0ff;color:#0037db}.tag:not(body).is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.tag:not(body).is-info.is-light{background-color:#f0f8ff;color:#004f94}.tag:not(body).is-success{background-color:#48c78e;color:#fff}.tag:not(body).is-success.is-light{background-color:#effaf5;color:#257953}.tag:not(body).is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.tag:not(body).is-warning.is-light{background-color:#fff9eb;color:#946b00}.tag:not(body).is-danger{background-color:#f14668;color:#fff}.tag:not(body).is-danger.is-light{background-color:#feecf0;color:#cc0f35}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-0.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-0.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-0.375em;margin-right:-0.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::before,.tag:not(body).is-delete::after{background-color:currentColor;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:hover,.tag:not(body).is-delete:focus{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:9999px}a.tag:hover{text-decoration:underline}.title,.subtitle{word-break:break-word}.title em,.title span,.subtitle em,.subtitle span{font-weight:inherit}.title sub,.subtitle sub{font-size:.75em}.title sup,.subtitle sup{font-size:.75em}.title .tag,.subtitle .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.number{align-items:center;background-color:#f5f5f5;border-radius:9999px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.select select,.textarea,.input{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.select select::-moz-placeholder,.textarea::-moz-placeholder,.input::-moz-placeholder{color:#757575}.select select::-webkit-input-placeholder,.textarea::-webkit-input-placeholder,.input::-webkit-input-placeholder{color:#757575}.select select:-moz-placeholder,.textarea:-moz-placeholder,.input:-moz-placeholder{color:#757575}.select select:-ms-input-placeholder,.textarea:-ms-input-placeholder,.input:-ms-input-placeholder{color:#757575}.select select:hover,.textarea:hover,.input:hover,.select select.is-hovered,.is-hovered.textarea,.is-hovered.input{border-color:#b5b5b5}.select select:focus,.textarea:focus,.input:focus,.select select.is-focused,.is-focused.textarea,.is-focused.input,.select select:active,.textarea:active,.input:active,.select select.is-active,.is-active.textarea,.is-active.input{border-color:#4876ff;box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder,[disabled].textarea::-moz-placeholder,[disabled].input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder{color:#707070}.select select[disabled]::-webkit-input-placeholder,[disabled].textarea::-webkit-input-placeholder,[disabled].input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder{color:#707070}.select select[disabled]:-moz-placeholder,[disabled].textarea:-moz-placeholder,[disabled].input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder{color:#707070}.select select[disabled]:-ms-input-placeholder,[disabled].textarea:-ms-input-placeholder,[disabled].input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder{color:#707070}.textarea,.input{box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);max-width:100%;width:100%}[readonly].textarea,[readonly].input{box-shadow:none}.is-white.textarea,.is-white.input{border-color:#fff}.is-white.textarea:focus,.is-white.input:focus,.is-white.is-focused.textarea,.is-white.is-focused.input,.is-white.textarea:active,.is-white.input:active,.is-white.is-active.textarea,.is-white.is-active.input{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.is-black.textarea,.is-black.input{border-color:#0a0a0a}.is-black.textarea:focus,.is-black.input:focus,.is-black.is-focused.textarea,.is-black.is-focused.input,.is-black.textarea:active,.is-black.input:active,.is-black.is-active.textarea,.is-black.is-active.input{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.textarea,.is-light.input{border-color:#d2f9d6}.is-light.textarea:focus,.is-light.input:focus,.is-light.is-focused.textarea,.is-light.is-focused.input,.is-light.textarea:active,.is-light.input:active,.is-light.is-active.textarea,.is-light.is-active.input{box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.is-dark.textarea,.is-dark.input{border-color:#459558}.is-dark.textarea:focus,.is-dark.input:focus,.is-dark.is-focused.textarea,.is-dark.is-focused.input,.is-dark.textarea:active,.is-dark.input:active,.is-dark.is-active.textarea,.is-dark.is-active.input{box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.is-primary.textarea,.is-primary.input{border-color:#55be6f}.is-primary.textarea:focus,.is-primary.input:focus,.is-primary.is-focused.textarea,.is-primary.is-focused.input,.is-primary.textarea:active,.is-primary.input:active,.is-primary.is-active.textarea,.is-primary.is-active.input{box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.is-link.textarea,.is-link.input{border-color:#4876ff}.is-link.textarea:focus,.is-link.input:focus,.is-link.is-focused.textarea,.is-link.is-focused.input,.is-link.textarea:active,.is-link.input:active,.is-link.is-active.textarea,.is-link.is-active.input{box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.is-info.textarea,.is-info.input{border-color:#f0f8ff}.is-info.textarea:focus,.is-info.input:focus,.is-info.is-focused.textarea,.is-info.is-focused.input,.is-info.textarea:active,.is-info.input:active,.is-info.is-active.textarea,.is-info.is-active.input{box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.is-success.textarea,.is-success.input{border-color:#48c78e}.is-success.textarea:focus,.is-success.input:focus,.is-success.is-focused.textarea,.is-success.is-focused.input,.is-success.textarea:active,.is-success.input:active,.is-success.is-active.textarea,.is-success.is-active.input{box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.is-warning.textarea,.is-warning.input{border-color:#ffd975}.is-warning.textarea:focus,.is-warning.input:focus,.is-warning.is-focused.textarea,.is-warning.is-focused.input,.is-warning.textarea:active,.is-warning.input:active,.is-warning.is-active.textarea,.is-warning.is-active.input{box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.is-danger.textarea,.is-danger.input{border-color:#f14668}.is-danger.textarea:focus,.is-danger.input:focus,.is-danger.is-focused.textarea,.is-danger.is-focused.input,.is-danger.textarea:active,.is-danger.input:active,.is-danger.is-active.textarea,.is-danger.is-active.input{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.is-small.textarea,.is-small.input{border-radius:2px;font-size:.75rem}.is-medium.textarea,.is-medium.input{font-size:1.25rem}.is-large.textarea,.is-large.input{font-size:1.5rem}.is-fullwidth.textarea,.is-fullwidth.input{display:block;width:100%}.is-inline.textarea,.is-inline.input{display:inline;width:auto}.input.is-rounded{border-radius:9999px;padding-left:calc(calc(0.75em - 1px) + .375em);padding-right:calc(calc(0.75em - 1px) + .375em)}.input.is-static{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.radio,.checkbox{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.radio input,.checkbox input{cursor:pointer}.radio:hover,.checkbox:hover{color:#363636}[disabled].radio,[disabled].checkbox,fieldset[disabled] .radio,fieldset[disabled] .checkbox,.radio input[disabled],.checkbox input[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#4876ff;right:1.125em;z-index:4}.select.is-rounded select{border-radius:9999px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}.select.is-white:not(:hover)::after{border-color:#fff}.select.is-white select{border-color:#fff}.select.is-white select:hover,.select.is-white select.is-hovered{border-color:#f2f2f2}.select.is-white select:focus,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select.is-active{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.select.is-black:not(:hover)::after{border-color:#0a0a0a}.select.is-black select{border-color:#0a0a0a}.select.is-black select:hover,.select.is-black select.is-hovered{border-color:#000}.select.is-black select:focus,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select.is-active{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover)::after{border-color:#d2f9d6}.select.is-light select{border-color:#d2f9d6}.select.is-light select:hover,.select.is-light select.is-hovered{border-color:#bcf6c2}.select.is-light select:focus,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select.is-active{box-shadow:0 0 0 .125em rgba(210,249,214,.25)}.select.is-dark:not(:hover)::after{border-color:#459558}.select.is-dark select{border-color:#459558}.select.is-dark select:hover,.select.is-dark select.is-hovered{border-color:#3d844e}.select.is-dark select:focus,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select.is-active{box-shadow:0 0 0 .125em rgba(69,149,88,.25)}.select.is-primary:not(:hover)::after{border-color:#55be6f}.select.is-primary select{border-color:#55be6f}.select.is-primary select:hover,.select.is-primary select.is-hovered{border-color:#45b461}.select.is-primary select:focus,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select.is-active{box-shadow:0 0 0 .125em rgba(85,190,111,.25)}.select.is-link:not(:hover)::after{border-color:#4876ff}.select.is-link select{border-color:#4876ff}.select.is-link select:hover,.select.is-link select.is-hovered{border-color:#2f63ff}.select.is-link select:focus,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select.is-active{box-shadow:0 0 0 .125em rgba(72,118,255,.25)}.select.is-info:not(:hover)::after{border-color:#f0f8ff}.select.is-info select{border-color:#f0f8ff}.select.is-info select:hover,.select.is-info select.is-hovered{border-color:#d7ecff}.select.is-info select:focus,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select.is-active{box-shadow:0 0 0 .125em rgba(240,248,255,.25)}.select.is-success:not(:hover)::after{border-color:#48c78e}.select.is-success select{border-color:#48c78e}.select.is-success select:hover,.select.is-success select.is-hovered{border-color:#3abb81}.select.is-success select:focus,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select.is-active{box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.select.is-warning:not(:hover)::after{border-color:#ffd975}.select.is-warning select{border-color:#ffd975}.select.is-warning select:hover,.select.is-warning select.is-hovered{border-color:#ffd25c}.select.is-warning select:focus,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select.is-active{box-shadow:0 0 0 .125em rgba(255,217,117,.25)}.select.is-danger:not(:hover)::after{border-color:#f14668}.select.is-danger select{border-color:#f14668}.select.is-danger select:hover,.select.is-danger select.is-hovered{border-color:#ef2e55}.select.is-danger select:focus,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select.is-active{box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled::after{border-color:#7a7a7a}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:.625em;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(255,255,255,.25);color:#0a0a0a}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:rgba(0,0,0,0);color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:rgba(0,0,0,0);color:#fff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#040404;border-color:rgba(0,0,0,0);color:#fff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#000;border-color:rgba(0,0,0,0);color:#fff}.file.is-light .file-cta{background-color:#d2f9d6;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#c7f8cc;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(210,249,214,.25);color:rgba(0,0,0,.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#bcf6c2;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-dark .file-cta{background-color:#459558;border-color:rgba(0,0,0,0);color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#418c53;border-color:rgba(0,0,0,0);color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(69,149,88,.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#3d844e;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary .file-cta{background-color:#55be6f;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#4cba67;border-color:rgba(0,0,0,0);color:#fff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(85,190,111,.25);color:#fff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#45b461;border-color:rgba(0,0,0,0);color:#fff}.file.is-link .file-cta{background-color:#4876ff;border-color:rgba(0,0,0,0);color:#fff}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#3b6cff;border-color:rgba(0,0,0,0);color:#fff}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(72,118,255,.25);color:#fff}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#2f63ff;border-color:rgba(0,0,0,0);color:#fff}.file.is-info .file-cta{background-color:#f0f8ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#e3f2ff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(240,248,255,.25);color:rgba(0,0,0,.7)}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#d7ecff;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-success .file-cta{background-color:#48c78e;border-color:rgba(0,0,0,0);color:#fff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#3ec487;border-color:rgba(0,0,0,0);color:#fff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(72,199,142,.25);color:#fff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#3abb81;border-color:rgba(0,0,0,0);color:#fff}.file.is-warning .file-cta{background-color:#ffd975;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#ffd568;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(255,217,117,.25);color:rgba(0,0,0,.7)}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#ffd25c;border-color:rgba(0,0,0,0);color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#f14668;border-color:rgba(0,0,0,0);color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#f03a5f;border-color:rgba(0,0,0,0);color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:rgba(0,0,0,0);box-shadow:0 0 .5em rgba(241,70,104,.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ef2e55;border-color:rgba(0,0,0,0);color:#fff}.file.is-small{font-size:.75rem}.file.is-normal{font-size:1rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#d2f9d6}.help.is-dark{color:#459558}.help.is-primary{color:#55be6f}.help.is-link{color:#4876ff}.help.is-info{color:#f0f8ff}.help.is-success{color:#48c78e}.help.is-warning{color:#ffd975}.help.is-danger{color:#f14668}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered{z-index:2}.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]).is-active{z-index:3}.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-0.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width: 769px),print{.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width: 768px){.field-label{margin-bottom:.5rem}}@media screen and (min-width: 769px),print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width: 769px),print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#4a4a4a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute !important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#4876ff;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#b5b5b5;content:"/"}.breadcrumb ul,.breadcrumb ol{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li::before{content:"→"}.breadcrumb.has-bullet-separator li+li::before{content:"•"}.breadcrumb.has-dot-separator li+li::before{content:"·"}.breadcrumb.has-succeeds-separator li+li::before{content:"≻"}.card{background-color:#fff;border-radius:.25rem;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);color:#4a4a4a;max-width:100%;position:relative}.card-footer:first-child,.card-content:first-child,.card-header:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-footer:last-child,.card-content:last-child,.card-header:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-header{background-color:rgba(0,0,0,0);align-items:stretch;box-shadow:0 .125em .25em rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem 1rem}.card-header-title.is-centered{justify-content:center}.card-header-icon{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0;align-items:center;cursor:pointer;display:flex;justify-content:center;padding:.75rem 1rem}.card-image{display:block;position:relative}.card-image:first-child img{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-image:last-child img{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-content{background-color:rgba(0,0,0,0);padding:1.5rem}.card-footer{background-color:rgba(0,0,0,0);border-top:1px solid #ededed;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ededed}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#4876ff;color:#fff}.dropdown-divider{background-color:#ededed;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile{display:flex}.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media screen and (min-width: 769px),print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .title,.level-item .subtitle{margin-bottom:0}@media screen and (max-width: 768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media screen and (min-width: 769px),print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width: 768px){.level-left+.level-right{margin-top:1.5rem}}@media screen and (min-width: 769px),print{.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media screen and (min-width: 769px),print{.level-right{display:flex}}.media{align-items:flex-start;display:flex;text-align:inherit}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:inherit}@media screen and (max-width: 768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#4876ff;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a}.message.is-light{background-color:#f6fef7}.message.is-light .message-header{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.message.is-light .message-body{border-color:#d2f9d6}.message.is-dark{background-color:#f8fcf9}.message.is-dark .message-header{background-color:#459558;color:#fff}.message.is-dark .message-body{border-color:#459558}.message.is-primary{background-color:#f0f9f2}.message.is-primary .message-header{background-color:#55be6f;color:#fff}.message.is-primary .message-body{border-color:#55be6f;color:#2f7a41}.message.is-link{background-color:#ebf0ff}.message.is-link .message-header{background-color:#4876ff;color:#fff}.message.is-link .message-body{border-color:#4876ff;color:#0037db}.message.is-info{background-color:#f0f8ff}.message.is-info .message-header{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.message.is-info .message-body{border-color:#f0f8ff;color:#004f94}.message.is-success{background-color:#effaf5}.message.is-success .message-header{background-color:#48c78e;color:#fff}.message.is-success .message-body{border-color:#48c78e;color:#257953}.message.is-warning{background-color:#fff9eb}.message.is-warning .message-header{background-color:#ffd975;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffd975;color:#946b00}.message.is-danger{background-color:#feecf0}.message.is-danger .message-header{background-color:#f14668;color:#fff}.message.is-danger .message-body{border-color:#f14668;color:#cc0f35}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:rgba(0,0,0,0)}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-content,.modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px){.modal-content,.modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-head,.modal-card-foot{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.2rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:2rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand>.navbar-item,.navbar.is-white .navbar-brand .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width: 840px){.navbar.is-white .navbar-start>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-end .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-start .navbar-link::after,.navbar.is-white .navbar-end .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand>.navbar-item,.navbar.is-black .navbar-brand .navbar-link{color:#fff}.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-black .navbar-start>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-end .navbar-link{color:#fff}.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-start .navbar-link::after,.navbar.is-black .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand>.navbar-item,.navbar.is-light .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-light .navbar-start>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-start .navbar-link::after,.navbar.is-light .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#d2f9d6;color:rgba(0,0,0,.7)}}.navbar.is-dark{background-color:#459558;color:#fff}.navbar.is-dark .navbar-brand>.navbar-item,.navbar.is-dark .navbar-brand .navbar-link{color:#fff}.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-dark .navbar-start>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-end .navbar-link{color:#fff}.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-start .navbar-link::after,.navbar.is-dark .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#459558;color:#fff}}.navbar.is-primary{background-color:#55be6f;color:#fff}.navbar.is-primary .navbar-brand>.navbar-item,.navbar.is-primary .navbar-brand .navbar-link{color:#fff}.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-primary .navbar-start>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-end .navbar-link{color:#fff}.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-start .navbar-link::after,.navbar.is-primary .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#55be6f;color:#fff}}.navbar.is-link{background-color:#4876ff;color:#fff}.navbar.is-link .navbar-brand>.navbar-item,.navbar.is-link .navbar-brand .navbar-link{color:#fff}.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-link .navbar-start>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-end .navbar-link{color:#fff}.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-start .navbar-link::after,.navbar.is-link .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#4876ff;color:#fff}}.navbar.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand>.navbar-item,.navbar.is-info .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-info .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-info .navbar-start>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-start .navbar-link::after,.navbar.is-info .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link{background-color:#d7ecff;color:rgba(0,0,0,.7)}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#f0f8ff;color:rgba(0,0,0,.7)}}.navbar.is-success{background-color:#48c78e;color:#fff}.navbar.is-success .navbar-brand>.navbar-item,.navbar.is-success .navbar-brand .navbar-link{color:#fff}.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-success .navbar-start>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-end .navbar-link{color:#fff}.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-start .navbar-link::after,.navbar.is-success .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#48c78e;color:#fff}}.navbar.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand>.navbar-item,.navbar.is-warning .navbar-brand .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width: 840px){.navbar.is-warning .navbar-start>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-end .navbar-link{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-start .navbar-link::after,.navbar.is-warning .navbar-end .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ffd25c;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffd975;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#f14668;color:#fff}.navbar.is-danger .navbar-brand>.navbar-item,.navbar.is-danger .navbar-brand .navbar-link{color:#fff}.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-danger .navbar-start>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-end .navbar-link{color:#fff}.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-start .navbar-link::after,.navbar.is-danger .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#f14668;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:2rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}html.has-navbar-fixed-top,body.has-navbar-fixed-top{padding-top:2rem}html.has-navbar-fixed-bottom,body.has-navbar-fixed-bottom{padding-bottom:2rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:2rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:rgba(0,0,0,0)}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:2rem;position:relative;width:2rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:nth-child(1){transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-0.25rem;margin-right:-0.25rem}a.navbar-item,.navbar-link{cursor:pointer}a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover,a.navbar-item.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,.navbar-link.is-active{background-color:#fafafa;color:#4876ff}.navbar-item{flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid rgba(0,0,0,0);min-height:2rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff}.navbar-item.is-tab.is-active{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff;border-bottom-style:solid;border-bottom-width:3px;color:#4876ff;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless)::after{border-color:#4876ff;margin-top:-0.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width: 839px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 2rem);overflow:auto}html.has-navbar-fixed-top-touch,body.has-navbar-fixed-top-touch{padding-top:2rem}html.has-navbar-fixed-bottom-touch,body.has-navbar-fixed-bottom-touch{padding-bottom:2rem}}@media screen and (min-width: 840px){.navbar,.navbar-menu,.navbar-start,.navbar-end{align-items:stretch;display:flex}.navbar{min-height:2rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-start,.navbar.is-spaced .navbar-end{align-items:center}.navbar.is-spaced a.navbar-item,.navbar.is-spaced .navbar-link{border-radius:4px}.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent .navbar-link.is-active{background-color:rgba(0,0,0,0) !important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:rgba(0,0,0,0) !important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{transform:rotate(135deg) translate(0.25em, -0.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar.is-spaced .navbar-dropdown,.navbar-dropdown.is-boxed{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.navbar>.container .navbar-brand,.container>.navbar .navbar-brand{margin-left:-0.75rem}.navbar>.container .navbar-menu,.container>.navbar .navbar-menu{margin-right:-0.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}html.has-navbar-fixed-top-desktop,body.has-navbar-fixed-top-desktop{padding-top:2rem}html.has-navbar-fixed-bottom-desktop,body.has-navbar-fixed-bottom-desktop{padding-bottom:2rem}html.has-spaced-navbar-fixed-top,body.has-spaced-navbar-fixed-top{padding-top:4rem}html.has-spaced-navbar-fixed-bottom,body.has-spaced-navbar-fixed-bottom{padding-bottom:4rem}a.navbar-item.is-active,.navbar-link.is-active{color:#0a0a0a}a.navbar-item.is-active:not(:focus):not(:hover),.navbar-link.is-active:not(:focus):not(:hover){background-color:rgba(0,0,0,0)}.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link,.navbar-item.has-dropdown.is-active .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 2rem)}.pagination{font-size:1rem;margin:-0.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-previous,.pagination.is-rounded .pagination-next{padding-left:1em;padding-right:1em;border-radius:9999px}.pagination.is-rounded .pagination-link{border-radius:9999px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{font-size:1em;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-previous,.pagination-next,.pagination-link{border-color:#dbdbdb;color:#363636;min-width:2.5em}.pagination-previous:hover,.pagination-next:hover,.pagination-link:hover{border-color:#b5b5b5;color:#363636}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus{border-color:#485fc7}.pagination-previous:active,.pagination-next:active,.pagination-link:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-previous,.pagination-next{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#4876ff;border-color:#4876ff;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}.pagination-list li{list-style:none}@media screen and (max-width: 768px){.pagination{flex-wrap:wrap}.pagination-previous,.pagination-next{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}@media screen and (min-width: 769px),print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{margin-bottom:0;margin-top:0}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between;margin-bottom:0;margin-top:0}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{border-radius:6px;box-shadow:0 .5em 1em -0.125em rgba(10,10,10,.1),0 0px 0 1px rgba(10,10,10,.02);font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel.is-white .panel-heading{background-color:#fff;color:#0a0a0a}.panel.is-white .panel-tabs a.is-active{border-bottom-color:#fff}.panel.is-white .panel-block.is-active .panel-icon{color:#fff}.panel.is-black .panel-heading{background-color:#0a0a0a;color:#fff}.panel.is-black .panel-tabs a.is-active{border-bottom-color:#0a0a0a}.panel.is-black .panel-block.is-active .panel-icon{color:#0a0a0a}.panel.is-light .panel-heading{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.panel.is-light .panel-tabs a.is-active{border-bottom-color:#d2f9d6}.panel.is-light .panel-block.is-active .panel-icon{color:#d2f9d6}.panel.is-dark .panel-heading{background-color:#459558;color:#fff}.panel.is-dark .panel-tabs a.is-active{border-bottom-color:#459558}.panel.is-dark .panel-block.is-active .panel-icon{color:#459558}.panel.is-primary .panel-heading{background-color:#55be6f;color:#fff}.panel.is-primary .panel-tabs a.is-active{border-bottom-color:#55be6f}.panel.is-primary .panel-block.is-active .panel-icon{color:#55be6f}.panel.is-link .panel-heading{background-color:#4876ff;color:#fff}.panel.is-link .panel-tabs a.is-active{border-bottom-color:#4876ff}.panel.is-link .panel-block.is-active .panel-icon{color:#4876ff}.panel.is-info .panel-heading{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.panel.is-info .panel-tabs a.is-active{border-bottom-color:#f0f8ff}.panel.is-info .panel-block.is-active .panel-icon{color:#f0f8ff}.panel.is-success .panel-heading{background-color:#48c78e;color:#fff}.panel.is-success .panel-tabs a.is-active{border-bottom-color:#48c78e}.panel.is-success .panel-block.is-active .panel-icon{color:#48c78e}.panel.is-warning .panel-heading{background-color:#ffd975;color:rgba(0,0,0,.7)}.panel.is-warning .panel-tabs a.is-active{border-bottom-color:#ffd975}.panel.is-warning .panel-block.is-active .panel-icon{color:#ffd975}.panel.is-danger .panel-heading{background-color:#f14668;color:#fff}.panel.is-danger .panel-tabs a.is-active{border-bottom-color:#f14668}.panel.is-danger .panel-block.is-active .panel-icon{color:#f14668}.panel-tabs:not(:last-child),.panel-block:not(:last-child){border-bottom:1px solid #ededed}.panel-heading{background-color:#ededed;border-radius:6px 6px 0 0;color:#363636;font-size:1.25em;font-weight:700;line-height:1.25;padding:.75em 1em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#4876ff}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#4876ff;color:#363636}.panel-block.is-active .panel-icon{color:#4876ff}.panel-block:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#4876ff;color:#4876ff}.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em;padding-right:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid rgba(0,0,0,0);border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:rgba(0,0,0,0) !important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#4876ff;border-color:#4876ff;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:9999px;border-top-left-radius:9999px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:9999px;border-top-right-radius:9999px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none;width:unset}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{flex:none;width:0%}.columns.is-mobile>.column.is-offset-0{margin-left:0%}.columns.is-mobile>.column.is-1{flex:none;width:8.33333337%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333337%}.columns.is-mobile>.column.is-2{flex:none;width:16.66666674%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66666674%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333337%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333337%}.columns.is-mobile>.column.is-5{flex:none;width:41.66666674%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66666674%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333337%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333337%}.columns.is-mobile>.column.is-8{flex:none;width:66.66666674%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66666674%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333337%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333337%}.columns.is-mobile>.column.is-11{flex:none;width:91.66666674%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66666674%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width: 768px){.column.is-narrow-mobile{flex:none;width:unset}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{flex:none;width:0%}.column.is-offset-0-mobile{margin-left:0%}.column.is-1-mobile{flex:none;width:8.33333337%}.column.is-offset-1-mobile{margin-left:8.33333337%}.column.is-2-mobile{flex:none;width:16.66666674%}.column.is-offset-2-mobile{margin-left:16.66666674%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333337%}.column.is-offset-4-mobile{margin-left:33.33333337%}.column.is-5-mobile{flex:none;width:41.66666674%}.column.is-offset-5-mobile{margin-left:41.66666674%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333337%}.column.is-offset-7-mobile{margin-left:58.33333337%}.column.is-8-mobile{flex:none;width:66.66666674%}.column.is-offset-8-mobile{margin-left:66.66666674%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333337%}.column.is-offset-10-mobile{margin-left:83.33333337%}.column.is-11-mobile{flex:none;width:91.66666674%}.column.is-offset-11-mobile{margin-left:91.66666674%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media screen and (min-width: 769px),print{.column.is-narrow,.column.is-narrow-tablet{flex:none;width:unset}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{flex:none;width:0%}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333337%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333337%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66666674%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66666674%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333337%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333337%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66666674%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66666674%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333337%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333337%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66666674%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66666674%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333337%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333337%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66666674%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66666674%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width: 1023px){.column.is-narrow-touch{flex:none;width:unset}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{flex:none;width:0%}.column.is-offset-0-touch{margin-left:0%}.column.is-1-touch{flex:none;width:8.33333337%}.column.is-offset-1-touch{margin-left:8.33333337%}.column.is-2-touch{flex:none;width:16.66666674%}.column.is-offset-2-touch{margin-left:16.66666674%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333337%}.column.is-offset-4-touch{margin-left:33.33333337%}.column.is-5-touch{flex:none;width:41.66666674%}.column.is-offset-5-touch{margin-left:41.66666674%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333337%}.column.is-offset-7-touch{margin-left:58.33333337%}.column.is-8-touch{flex:none;width:66.66666674%}.column.is-offset-8-touch{margin-left:66.66666674%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333337%}.column.is-offset-10-touch{margin-left:83.33333337%}.column.is-11-touch{flex:none;width:91.66666674%}.column.is-offset-11-touch{margin-left:91.66666674%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width: 1024px){.column.is-narrow-desktop{flex:none;width:unset}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{flex:none;width:0%}.column.is-offset-0-desktop{margin-left:0%}.column.is-1-desktop{flex:none;width:8.33333337%}.column.is-offset-1-desktop{margin-left:8.33333337%}.column.is-2-desktop{flex:none;width:16.66666674%}.column.is-offset-2-desktop{margin-left:16.66666674%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333337%}.column.is-offset-4-desktop{margin-left:33.33333337%}.column.is-5-desktop{flex:none;width:41.66666674%}.column.is-offset-5-desktop{margin-left:41.66666674%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333337%}.column.is-offset-7-desktop{margin-left:58.33333337%}.column.is-8-desktop{flex:none;width:66.66666674%}.column.is-offset-8-desktop{margin-left:66.66666674%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333337%}.column.is-offset-10-desktop{margin-left:83.33333337%}.column.is-11-desktop{flex:none;width:91.66666674%}.column.is-offset-11-desktop{margin-left:91.66666674%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width: 1216px){.column.is-narrow-widescreen{flex:none;width:unset}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{flex:none;width:0%}.column.is-offset-0-widescreen{margin-left:0%}.column.is-1-widescreen{flex:none;width:8.33333337%}.column.is-offset-1-widescreen{margin-left:8.33333337%}.column.is-2-widescreen{flex:none;width:16.66666674%}.column.is-offset-2-widescreen{margin-left:16.66666674%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333337%}.column.is-offset-4-widescreen{margin-left:33.33333337%}.column.is-5-widescreen{flex:none;width:41.66666674%}.column.is-offset-5-widescreen{margin-left:41.66666674%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333337%}.column.is-offset-7-widescreen{margin-left:58.33333337%}.column.is-8-widescreen{flex:none;width:66.66666674%}.column.is-offset-8-widescreen{margin-left:66.66666674%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333337%}.column.is-offset-10-widescreen{margin-left:83.33333337%}.column.is-11-widescreen{flex:none;width:91.66666674%}.column.is-offset-11-widescreen{margin-left:91.66666674%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width: 1408px){.column.is-narrow-fullhd{flex:none;width:unset}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{flex:none;width:0%}.column.is-offset-0-fullhd{margin-left:0%}.column.is-1-fullhd{flex:none;width:8.33333337%}.column.is-offset-1-fullhd{margin-left:8.33333337%}.column.is-2-fullhd{flex:none;width:16.66666674%}.column.is-offset-2-fullhd{margin-left:16.66666674%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333337%}.column.is-offset-4-fullhd{margin-left:33.33333337%}.column.is-5-fullhd{flex:none;width:41.66666674%}.column.is-offset-5-fullhd{margin-left:41.66666674%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333337%}.column.is-offset-7-fullhd{margin-left:58.33333337%}.column.is-8-fullhd{flex:none;width:66.66666674%}.column.is-offset-8-fullhd{margin-left:66.66666674%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333337%}.column.is-offset-10-fullhd{margin-left:83.33333337%}.column.is-11-fullhd{flex:none;width:91.66666674%}.column.is-offset-11-fullhd{margin-left:91.66666674%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem}.columns:last-child{margin-bottom:-0.75rem}.columns:not(:last-child){margin-bottom:calc(1.5rem - 0.75rem)}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0 !important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media screen and (min-width: 769px),print{.columns:not(.is-desktop){display:flex}}@media screen and (min-width: 1024px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap: 0.75rem;margin-left:calc(-1*var(--columnGap));margin-right:calc(-1*var(--columnGap))}.columns.is-variable>.column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap: 0rem}@media screen and (max-width: 768px){.columns.is-variable.is-0-mobile{--columnGap: 0rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-0-tablet{--columnGap: 0rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-0-tablet-only{--columnGap: 0rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-0-touch{--columnGap: 0rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-0-desktop{--columnGap: 0rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-0-desktop-only{--columnGap: 0rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-0-widescreen{--columnGap: 0rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-0-widescreen-only{--columnGap: 0rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-0-fullhd{--columnGap: 0rem}}.columns.is-variable.is-1{--columnGap: 0.25rem}@media screen and (max-width: 768px){.columns.is-variable.is-1-mobile{--columnGap: 0.25rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-1-tablet{--columnGap: 0.25rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-1-tablet-only{--columnGap: 0.25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-1-touch{--columnGap: 0.25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-1-desktop{--columnGap: 0.25rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-1-desktop-only{--columnGap: 0.25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-1-widescreen{--columnGap: 0.25rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-1-widescreen-only{--columnGap: 0.25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-1-fullhd{--columnGap: 0.25rem}}.columns.is-variable.is-2{--columnGap: 0.5rem}@media screen and (max-width: 768px){.columns.is-variable.is-2-mobile{--columnGap: 0.5rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-2-tablet{--columnGap: 0.5rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-2-tablet-only{--columnGap: 0.5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-2-touch{--columnGap: 0.5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-2-desktop{--columnGap: 0.5rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-2-desktop-only{--columnGap: 0.5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-2-widescreen{--columnGap: 0.5rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-2-widescreen-only{--columnGap: 0.5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-2-fullhd{--columnGap: 0.5rem}}.columns.is-variable.is-3{--columnGap: 0.75rem}@media screen and (max-width: 768px){.columns.is-variable.is-3-mobile{--columnGap: 0.75rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-3-tablet{--columnGap: 0.75rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-3-tablet-only{--columnGap: 0.75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-3-touch{--columnGap: 0.75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-3-desktop{--columnGap: 0.75rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-3-desktop-only{--columnGap: 0.75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-3-widescreen{--columnGap: 0.75rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-3-widescreen-only{--columnGap: 0.75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-3-fullhd{--columnGap: 0.75rem}}.columns.is-variable.is-4{--columnGap: 1rem}@media screen and (max-width: 768px){.columns.is-variable.is-4-mobile{--columnGap: 1rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-4-tablet{--columnGap: 1rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-4-tablet-only{--columnGap: 1rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-4-touch{--columnGap: 1rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-4-desktop{--columnGap: 1rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-4-desktop-only{--columnGap: 1rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-4-widescreen{--columnGap: 1rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-4-widescreen-only{--columnGap: 1rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-4-fullhd{--columnGap: 1rem}}.columns.is-variable.is-5{--columnGap: 1.25rem}@media screen and (max-width: 768px){.columns.is-variable.is-5-mobile{--columnGap: 1.25rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-5-tablet{--columnGap: 1.25rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-5-tablet-only{--columnGap: 1.25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-5-touch{--columnGap: 1.25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-5-desktop{--columnGap: 1.25rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-5-desktop-only{--columnGap: 1.25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-5-widescreen{--columnGap: 1.25rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-5-widescreen-only{--columnGap: 1.25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-5-fullhd{--columnGap: 1.25rem}}.columns.is-variable.is-6{--columnGap: 1.5rem}@media screen and (max-width: 768px){.columns.is-variable.is-6-mobile{--columnGap: 1.5rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-6-tablet{--columnGap: 1.5rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-6-tablet-only{--columnGap: 1.5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-6-touch{--columnGap: 1.5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-6-desktop{--columnGap: 1.5rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-6-desktop-only{--columnGap: 1.5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-6-widescreen{--columnGap: 1.5rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-6-widescreen-only{--columnGap: 1.5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-6-fullhd{--columnGap: 1.5rem}}.columns.is-variable.is-7{--columnGap: 1.75rem}@media screen and (max-width: 768px){.columns.is-variable.is-7-mobile{--columnGap: 1.75rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-7-tablet{--columnGap: 1.75rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-7-tablet-only{--columnGap: 1.75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-7-touch{--columnGap: 1.75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-7-desktop{--columnGap: 1.75rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-7-desktop-only{--columnGap: 1.75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-7-widescreen{--columnGap: 1.75rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-7-widescreen-only{--columnGap: 1.75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-7-fullhd{--columnGap: 1.75rem}}.columns.is-variable.is-8{--columnGap: 2rem}@media screen and (max-width: 768px){.columns.is-variable.is-8-mobile{--columnGap: 2rem}}@media screen and (min-width: 769px),print{.columns.is-variable.is-8-tablet{--columnGap: 2rem}}@media screen and (min-width: 769px)and (max-width: 1023px){.columns.is-variable.is-8-tablet-only{--columnGap: 2rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-8-touch{--columnGap: 2rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-8-desktop{--columnGap: 2rem}}@media screen and (min-width: 1024px)and (max-width: 1215px){.columns.is-variable.is-8-desktop-only{--columnGap: 2rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-8-widescreen{--columnGap: 2rem}}@media screen and (min-width: 1216px)and (max-width: 1407px){.columns.is-variable.is-8-widescreen-only{--columnGap: 2rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-8-fullhd{--columnGap: 2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:min-content}.tile.is-ancestor{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem}.tile.is-ancestor:last-child{margin-bottom:-0.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0 !important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem !important}@media screen and (min-width: 769px),print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333337%}.tile.is-2{flex:none;width:16.66666674%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333337%}.tile.is-5{flex:none;width:41.66666674%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333337%}.tile.is-8{flex:none;width:66.66666674%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333337%}.tile.is-11{flex:none;width:91.66666674%}.tile.is-12{flex:none;width:100%}}.has-text-white{color:#fff !important}a.has-text-white:hover,a.has-text-white:focus{color:#e6e6e6 !important}.has-background-white{background-color:#fff !important}.has-text-black{color:#0a0a0a !important}a.has-text-black:hover,a.has-text-black:focus{color:#000 !important}.has-background-black{background-color:#0a0a0a !important}.has-text-light{color:#d2f9d6 !important}a.has-text-light:hover,a.has-text-light:focus{color:#a5f3ad !important}.has-background-light{background-color:#d2f9d6 !important}.has-text-dark{color:#459558 !important}a.has-text-dark:hover,a.has-text-dark:focus{color:#357243 !important}.has-background-dark{background-color:#459558 !important}.has-text-primary{color:#55be6f !important}a.has-text-primary:hover,a.has-text-primary:focus{color:#3ea257 !important}.has-background-primary{background-color:#55be6f !important}.has-text-primary-light{color:#f0f9f2 !important}a.has-text-primary-light:hover,a.has-text-primary-light:focus{color:#cbebd3 !important}.has-background-primary-light{background-color:#f0f9f2 !important}.has-text-primary-dark{color:#2f7a41 !important}a.has-text-primary-dark:hover,a.has-text-primary-dark:focus{color:#3d9f55 !important}.has-background-primary-dark{background-color:#2f7a41 !important}.has-text-link{color:#4876ff !important}a.has-text-link:hover,a.has-text-link:focus{color:#1550ff !important}.has-background-link{background-color:#4876ff !important}.has-text-link-light{color:#ebf0ff !important}a.has-text-link-light:hover,a.has-text-link-light:focus{color:#b8caff !important}.has-background-link-light{background-color:#ebf0ff !important}.has-text-link-dark{color:#0037db !important}a.has-text-link-dark:hover,a.has-text-link-dark:focus{color:#0f4cff !important}.has-background-link-dark{background-color:#0037db !important}.has-text-info{color:#f0f8ff !important}a.has-text-info:hover,a.has-text-info:focus{color:#bde0ff !important}.has-background-info{background-color:#f0f8ff !important}.has-text-info-light{color:#f0f8ff !important}a.has-text-info-light:hover,a.has-text-info-light:focus{color:#bde0ff !important}.has-background-info-light{background-color:#f0f8ff !important}.has-text-info-dark{color:#004f94 !important}a.has-text-info-dark:hover,a.has-text-info-dark:focus{color:#006ac7 !important}.has-background-info-dark{background-color:#004f94 !important}.has-text-success{color:#48c78e !important}a.has-text-success:hover,a.has-text-success:focus{color:#34a873 !important}.has-background-success{background-color:#48c78e !important}.has-text-success-light{color:#effaf5 !important}a.has-text-success-light:hover,a.has-text-success-light:focus{color:#c8eedd !important}.has-background-success-light{background-color:#effaf5 !important}.has-text-success-dark{color:#257953 !important}a.has-text-success-dark:hover,a.has-text-success-dark:focus{color:#31a06e !important}.has-background-success-dark{background-color:#257953 !important}.has-text-warning{color:#ffd975 !important}a.has-text-warning:hover,a.has-text-warning:focus{color:#ffcb42 !important}.has-background-warning{background-color:#ffd975 !important}.has-text-warning-light{color:#fff9eb !important}a.has-text-warning-light:hover,a.has-text-warning-light:focus{color:#ffebb8 !important}.has-background-warning-light{background-color:#fff9eb !important}.has-text-warning-dark{color:#946b00 !important}a.has-text-warning-dark:hover,a.has-text-warning-dark:focus{color:#c79000 !important}.has-background-warning-dark{background-color:#946b00 !important}.has-text-danger{color:#f14668 !important}a.has-text-danger:hover,a.has-text-danger:focus{color:#ee1742 !important}.has-background-danger{background-color:#f14668 !important}.has-text-danger-light{color:#feecf0 !important}a.has-text-danger-light:hover,a.has-text-danger-light:focus{color:#fabdc9 !important}.has-background-danger-light{background-color:#feecf0 !important}.has-text-danger-dark{color:#cc0f35 !important}a.has-text-danger-dark:hover,a.has-text-danger-dark:focus{color:#ee2049 !important}.has-background-danger-dark{background-color:#cc0f35 !important}.has-text-black-bis{color:#121212 !important}.has-background-black-bis{background-color:#121212 !important}.has-text-black-ter{color:#242424 !important}.has-background-black-ter{background-color:#242424 !important}.has-text-grey-darker{color:#363636 !important}.has-background-grey-darker{background-color:#363636 !important}.has-text-grey-dark{color:#4a4a4a !important}.has-background-grey-dark{background-color:#4a4a4a !important}.has-text-grey{color:#7a7a7a !important}.has-background-grey{background-color:#7a7a7a !important}.has-text-grey-light{color:#b5b5b5 !important}.has-background-grey-light{background-color:#b5b5b5 !important}.has-text-grey-lighter{color:#dbdbdb !important}.has-background-grey-lighter{background-color:#dbdbdb !important}.has-text-white-ter{color:#f5f5f5 !important}.has-background-white-ter{background-color:#f5f5f5 !important}.has-text-white-bis{color:#fafafa !important}.has-background-white-bis{background-color:#fafafa !important}.is-flex-direction-row{flex-direction:row !important}.is-flex-direction-row-reverse{flex-direction:row-reverse !important}.is-flex-direction-column{flex-direction:column !important}.is-flex-direction-column-reverse{flex-direction:column-reverse !important}.is-flex-wrap-nowrap{flex-wrap:nowrap !important}.is-flex-wrap-wrap{flex-wrap:wrap !important}.is-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse !important}.is-justify-content-flex-start{justify-content:flex-start !important}.is-justify-content-flex-end{justify-content:flex-end !important}.is-justify-content-center{justify-content:center !important}.is-justify-content-space-between{justify-content:space-between !important}.is-justify-content-space-around{justify-content:space-around !important}.is-justify-content-space-evenly{justify-content:space-evenly !important}.is-justify-content-start{justify-content:start !important}.is-justify-content-end{justify-content:end !important}.is-justify-content-left{justify-content:left !important}.is-justify-content-right{justify-content:right !important}.is-align-content-flex-start{align-content:flex-start !important}.is-align-content-flex-end{align-content:flex-end !important}.is-align-content-center{align-content:center !important}.is-align-content-space-between{align-content:space-between !important}.is-align-content-space-around{align-content:space-around !important}.is-align-content-space-evenly{align-content:space-evenly !important}.is-align-content-stretch{align-content:stretch !important}.is-align-content-start{align-content:start !important}.is-align-content-end{align-content:end !important}.is-align-content-baseline{align-content:baseline !important}.is-align-items-stretch{align-items:stretch !important}.is-align-items-flex-start{align-items:flex-start !important}.is-align-items-flex-end{align-items:flex-end !important}.is-align-items-center{align-items:center !important}.is-align-items-baseline{align-items:baseline !important}.is-align-items-start{align-items:start !important}.is-align-items-end{align-items:end !important}.is-align-items-self-start{align-items:self-start !important}.is-align-items-self-end{align-items:self-end !important}.is-align-self-auto{align-self:auto !important}.is-align-self-flex-start{align-self:flex-start !important}.is-align-self-flex-end{align-self:flex-end !important}.is-align-self-center{align-self:center !important}.is-align-self-baseline{align-self:baseline !important}.is-align-self-stretch{align-self:stretch !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}.is-flex-shrink-0{flex-shrink:0 !important}.is-flex-shrink-1{flex-shrink:1 !important}.is-flex-shrink-2{flex-shrink:2 !important}.is-flex-shrink-3{flex-shrink:3 !important}.is-flex-shrink-4{flex-shrink:4 !important}.is-flex-shrink-5{flex-shrink:5 !important}.is-clearfix::after{clear:both;content:" ";display:table}.is-pulled-left{float:left !important}.is-pulled-right{float:right !important}.is-radiusless{border-radius:0 !important}.is-shadowless{box-shadow:none !important}.is-clickable{cursor:pointer !important;pointer-events:all !important}.is-clipped{overflow:hidden !important}.is-relative{position:relative !important}.is-marginless{margin:0 !important}.is-paddingless{padding:0 !important}.m-0{margin:0 !important}.mt-0{margin-top:0 !important}.mr-0{margin-right:0 !important}.mb-0{margin-bottom:0 !important}.ml-0{margin-left:0 !important}.mx-0{margin-left:0 !important;margin-right:0 !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.m-1{margin:.25rem !important}.mt-1{margin-top:.25rem !important}.mr-1{margin-right:.25rem !important}.mb-1{margin-bottom:.25rem !important}.ml-1{margin-left:.25rem !important}.mx-1{margin-left:.25rem !important;margin-right:.25rem !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.m-2{margin:.5rem !important}.mt-2{margin-top:.5rem !important}.mr-2{margin-right:.5rem !important}.mb-2{margin-bottom:.5rem !important}.ml-2{margin-left:.5rem !important}.mx-2{margin-left:.5rem !important;margin-right:.5rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.m-3{margin:.75rem !important}.mt-3{margin-top:.75rem !important}.mr-3{margin-right:.75rem !important}.mb-3{margin-bottom:.75rem !important}.ml-3{margin-left:.75rem !important}.mx-3{margin-left:.75rem !important;margin-right:.75rem !important}.my-3{margin-top:.75rem !important;margin-bottom:.75rem !important}.m-4{margin:1rem !important}.mt-4{margin-top:1rem !important}.mr-4{margin-right:1rem !important}.mb-4{margin-bottom:1rem !important}.ml-4{margin-left:1rem !important}.mx-4{margin-left:1rem !important;margin-right:1rem !important}.my-4{margin-top:1rem !important;margin-bottom:1rem !important}.m-5{margin:1.5rem !important}.mt-5{margin-top:1.5rem !important}.mr-5{margin-right:1.5rem !important}.mb-5{margin-bottom:1.5rem !important}.ml-5{margin-left:1.5rem !important}.mx-5{margin-left:1.5rem !important;margin-right:1.5rem !important}.my-5{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.m-6{margin:3rem !important}.mt-6{margin-top:3rem !important}.mr-6{margin-right:3rem !important}.mb-6{margin-bottom:3rem !important}.ml-6{margin-left:3rem !important}.mx-6{margin-left:3rem !important;margin-right:3rem !important}.my-6{margin-top:3rem !important;margin-bottom:3rem !important}.m-auto{margin:auto !important}.mt-auto{margin-top:auto !important}.mr-auto{margin-right:auto !important}.mb-auto{margin-bottom:auto !important}.ml-auto{margin-left:auto !important}.mx-auto{margin-left:auto !important;margin-right:auto !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.p-0{padding:0 !important}.pt-0{padding-top:0 !important}.pr-0{padding-right:0 !important}.pb-0{padding-bottom:0 !important}.pl-0{padding-left:0 !important}.px-0{padding-left:0 !important;padding-right:0 !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.p-1{padding:.25rem !important}.pt-1{padding-top:.25rem !important}.pr-1{padding-right:.25rem !important}.pb-1{padding-bottom:.25rem !important}.pl-1{padding-left:.25rem !important}.px-1{padding-left:.25rem !important;padding-right:.25rem !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.p-2{padding:.5rem !important}.pt-2{padding-top:.5rem !important}.pr-2{padding-right:.5rem !important}.pb-2{padding-bottom:.5rem !important}.pl-2{padding-left:.5rem !important}.px-2{padding-left:.5rem !important;padding-right:.5rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.p-3{padding:.75rem !important}.pt-3{padding-top:.75rem !important}.pr-3{padding-right:.75rem !important}.pb-3{padding-bottom:.75rem !important}.pl-3{padding-left:.75rem !important}.px-3{padding-left:.75rem !important;padding-right:.75rem !important}.py-3{padding-top:.75rem !important;padding-bottom:.75rem !important}.p-4{padding:1rem !important}.pt-4{padding-top:1rem !important}.pr-4{padding-right:1rem !important}.pb-4{padding-bottom:1rem !important}.pl-4{padding-left:1rem !important}.px-4{padding-left:1rem !important;padding-right:1rem !important}.py-4{padding-top:1rem !important;padding-bottom:1rem !important}.p-5{padding:1.5rem !important}.pt-5{padding-top:1.5rem !important}.pr-5{padding-right:1.5rem !important}.pb-5{padding-bottom:1.5rem !important}.pl-5{padding-left:1.5rem !important}.px-5{padding-left:1.5rem !important;padding-right:1.5rem !important}.py-5{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.p-6{padding:3rem !important}.pt-6{padding-top:3rem !important}.pr-6{padding-right:3rem !important}.pb-6{padding-bottom:3rem !important}.pl-6{padding-left:3rem !important}.px-6{padding-left:3rem !important;padding-right:3rem !important}.py-6{padding-top:3rem !important;padding-bottom:3rem !important}.p-auto{padding:auto !important}.pt-auto{padding-top:auto !important}.pr-auto{padding-right:auto !important}.pb-auto{padding-bottom:auto !important}.pl-auto{padding-left:auto !important}.px-auto{padding-left:auto !important;padding-right:auto !important}.py-auto{padding-top:auto !important;padding-bottom:auto !important}.is-size-1{font-size:3rem !important}.is-size-2{font-size:2.5rem !important}.is-size-3{font-size:2rem !important}.is-size-4{font-size:1.5rem !important}.is-size-5{font-size:1.25rem !important}.is-size-6{font-size:1rem !important}.is-size-7{font-size:.75rem !important}@media screen and (max-width: 768px){.is-size-1-mobile{font-size:3rem !important}.is-size-2-mobile{font-size:2.5rem !important}.is-size-3-mobile{font-size:2rem !important}.is-size-4-mobile{font-size:1.5rem !important}.is-size-5-mobile{font-size:1.25rem !important}.is-size-6-mobile{font-size:1rem !important}.is-size-7-mobile{font-size:.75rem !important}}@media screen and (min-width: 769px),print{.is-size-1-tablet{font-size:3rem !important}.is-size-2-tablet{font-size:2.5rem !important}.is-size-3-tablet{font-size:2rem !important}.is-size-4-tablet{font-size:1.5rem !important}.is-size-5-tablet{font-size:1.25rem !important}.is-size-6-tablet{font-size:1rem !important}.is-size-7-tablet{font-size:.75rem !important}}@media screen and (max-width: 1023px){.is-size-1-touch{font-size:3rem !important}.is-size-2-touch{font-size:2.5rem !important}.is-size-3-touch{font-size:2rem !important}.is-size-4-touch{font-size:1.5rem !important}.is-size-5-touch{font-size:1.25rem !important}.is-size-6-touch{font-size:1rem !important}.is-size-7-touch{font-size:.75rem !important}}@media screen and (min-width: 1024px){.is-size-1-desktop{font-size:3rem !important}.is-size-2-desktop{font-size:2.5rem !important}.is-size-3-desktop{font-size:2rem !important}.is-size-4-desktop{font-size:1.5rem !important}.is-size-5-desktop{font-size:1.25rem !important}.is-size-6-desktop{font-size:1rem !important}.is-size-7-desktop{font-size:.75rem !important}}@media screen and (min-width: 1216px){.is-size-1-widescreen{font-size:3rem !important}.is-size-2-widescreen{font-size:2.5rem !important}.is-size-3-widescreen{font-size:2rem !important}.is-size-4-widescreen{font-size:1.5rem !important}.is-size-5-widescreen{font-size:1.25rem !important}.is-size-6-widescreen{font-size:1rem !important}.is-size-7-widescreen{font-size:.75rem !important}}@media screen and (min-width: 1408px){.is-size-1-fullhd{font-size:3rem !important}.is-size-2-fullhd{font-size:2.5rem !important}.is-size-3-fullhd{font-size:2rem !important}.is-size-4-fullhd{font-size:1.5rem !important}.is-size-5-fullhd{font-size:1.25rem !important}.is-size-6-fullhd{font-size:1rem !important}.is-size-7-fullhd{font-size:.75rem !important}}.has-text-centered{text-align:center !important}.has-text-justified{text-align:justify !important}.has-text-left{text-align:left !important}.has-text-right{text-align:right !important}@media screen and (max-width: 768px){.has-text-centered-mobile{text-align:center !important}}@media screen and (min-width: 769px),print{.has-text-centered-tablet{text-align:center !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-centered-tablet-only{text-align:center !important}}@media screen and (max-width: 1023px){.has-text-centered-touch{text-align:center !important}}@media screen and (min-width: 1024px){.has-text-centered-desktop{text-align:center !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-centered-desktop-only{text-align:center !important}}@media screen and (min-width: 1216px){.has-text-centered-widescreen{text-align:center !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-centered-widescreen-only{text-align:center !important}}@media screen and (min-width: 1408px){.has-text-centered-fullhd{text-align:center !important}}@media screen and (max-width: 768px){.has-text-justified-mobile{text-align:justify !important}}@media screen and (min-width: 769px),print{.has-text-justified-tablet{text-align:justify !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-justified-tablet-only{text-align:justify !important}}@media screen and (max-width: 1023px){.has-text-justified-touch{text-align:justify !important}}@media screen and (min-width: 1024px){.has-text-justified-desktop{text-align:justify !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-justified-desktop-only{text-align:justify !important}}@media screen and (min-width: 1216px){.has-text-justified-widescreen{text-align:justify !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-justified-widescreen-only{text-align:justify !important}}@media screen and (min-width: 1408px){.has-text-justified-fullhd{text-align:justify !important}}@media screen and (max-width: 768px){.has-text-left-mobile{text-align:left !important}}@media screen and (min-width: 769px),print{.has-text-left-tablet{text-align:left !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-left-tablet-only{text-align:left !important}}@media screen and (max-width: 1023px){.has-text-left-touch{text-align:left !important}}@media screen and (min-width: 1024px){.has-text-left-desktop{text-align:left !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-left-desktop-only{text-align:left !important}}@media screen and (min-width: 1216px){.has-text-left-widescreen{text-align:left !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-left-widescreen-only{text-align:left !important}}@media screen and (min-width: 1408px){.has-text-left-fullhd{text-align:left !important}}@media screen and (max-width: 768px){.has-text-right-mobile{text-align:right !important}}@media screen and (min-width: 769px),print{.has-text-right-tablet{text-align:right !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.has-text-right-tablet-only{text-align:right !important}}@media screen and (max-width: 1023px){.has-text-right-touch{text-align:right !important}}@media screen and (min-width: 1024px){.has-text-right-desktop{text-align:right !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.has-text-right-desktop-only{text-align:right !important}}@media screen and (min-width: 1216px){.has-text-right-widescreen{text-align:right !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.has-text-right-widescreen-only{text-align:right !important}}@media screen and (min-width: 1408px){.has-text-right-fullhd{text-align:right !important}}.is-capitalized{text-transform:capitalize !important}.is-lowercase{text-transform:lowercase !important}.is-uppercase{text-transform:uppercase !important}.is-italic{font-style:italic !important}.is-underlined{text-decoration:underline !important}.has-text-weight-light{font-weight:300 !important}.has-text-weight-normal{font-weight:400 !important}.has-text-weight-medium{font-weight:500 !important}.has-text-weight-semibold{font-weight:600 !important}.has-text-weight-bold{font-weight:700 !important}.is-family-primary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-sans-serif{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-monospace{font-family:monospace !important}.is-family-code{font-family:monospace !important}.is-block{display:block !important}@media screen and (max-width: 768px){.is-block-mobile{display:block !important}}@media screen and (min-width: 769px),print{.is-block-tablet{display:block !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-block-tablet-only{display:block !important}}@media screen and (max-width: 1023px){.is-block-touch{display:block !important}}@media screen and (min-width: 1024px){.is-block-desktop{display:block !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-block-desktop-only{display:block !important}}@media screen and (min-width: 1216px){.is-block-widescreen{display:block !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-block-widescreen-only{display:block !important}}@media screen and (min-width: 1408px){.is-block-fullhd{display:block !important}}.is-flex{display:flex !important}@media screen and (max-width: 768px){.is-flex-mobile{display:flex !important}}@media screen and (min-width: 769px),print{.is-flex-tablet{display:flex !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-flex-tablet-only{display:flex !important}}@media screen and (max-width: 1023px){.is-flex-touch{display:flex !important}}@media screen and (min-width: 1024px){.is-flex-desktop{display:flex !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-flex-desktop-only{display:flex !important}}@media screen and (min-width: 1216px){.is-flex-widescreen{display:flex !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-flex-widescreen-only{display:flex !important}}@media screen and (min-width: 1408px){.is-flex-fullhd{display:flex !important}}.is-inline{display:inline !important}@media screen and (max-width: 768px){.is-inline-mobile{display:inline !important}}@media screen and (min-width: 769px),print{.is-inline-tablet{display:inline !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-tablet-only{display:inline !important}}@media screen and (max-width: 1023px){.is-inline-touch{display:inline !important}}@media screen and (min-width: 1024px){.is-inline-desktop{display:inline !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-desktop-only{display:inline !important}}@media screen and (min-width: 1216px){.is-inline-widescreen{display:inline !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-widescreen-only{display:inline !important}}@media screen and (min-width: 1408px){.is-inline-fullhd{display:inline !important}}.is-inline-block{display:inline-block !important}@media screen and (max-width: 768px){.is-inline-block-mobile{display:inline-block !important}}@media screen and (min-width: 769px),print{.is-inline-block-tablet{display:inline-block !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-block-tablet-only{display:inline-block !important}}@media screen and (max-width: 1023px){.is-inline-block-touch{display:inline-block !important}}@media screen and (min-width: 1024px){.is-inline-block-desktop{display:inline-block !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-block-desktop-only{display:inline-block !important}}@media screen and (min-width: 1216px){.is-inline-block-widescreen{display:inline-block !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-block-widescreen-only{display:inline-block !important}}@media screen and (min-width: 1408px){.is-inline-block-fullhd{display:inline-block !important}}.is-inline-flex{display:inline-flex !important}@media screen and (max-width: 768px){.is-inline-flex-mobile{display:inline-flex !important}}@media screen and (min-width: 769px),print{.is-inline-flex-tablet{display:inline-flex !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-inline-flex-tablet-only{display:inline-flex !important}}@media screen and (max-width: 1023px){.is-inline-flex-touch{display:inline-flex !important}}@media screen and (min-width: 1024px){.is-inline-flex-desktop{display:inline-flex !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-inline-flex-desktop-only{display:inline-flex !important}}@media screen and (min-width: 1216px){.is-inline-flex-widescreen{display:inline-flex !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-inline-flex-widescreen-only{display:inline-flex !important}}@media screen and (min-width: 1408px){.is-inline-flex-fullhd{display:inline-flex !important}}.is-hidden{display:none !important}.is-sr-only{border:none !important;clip:rect(0, 0, 0, 0) !important;height:.01em !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important;width:.01em !important}@media screen and (max-width: 768px){.is-hidden-mobile{display:none !important}}@media screen and (min-width: 769px),print{.is-hidden-tablet{display:none !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-hidden-tablet-only{display:none !important}}@media screen and (max-width: 1023px){.is-hidden-touch{display:none !important}}@media screen and (min-width: 1024px){.is-hidden-desktop{display:none !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-hidden-desktop-only{display:none !important}}@media screen and (min-width: 1216px){.is-hidden-widescreen{display:none !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-hidden-widescreen-only{display:none !important}}@media screen and (min-width: 1408px){.is-hidden-fullhd{display:none !important}}.is-invisible{visibility:hidden !important}@media screen and (max-width: 768px){.is-invisible-mobile{visibility:hidden !important}}@media screen and (min-width: 769px),print{.is-invisible-tablet{visibility:hidden !important}}@media screen and (min-width: 769px)and (max-width: 1023px){.is-invisible-tablet-only{visibility:hidden !important}}@media screen and (max-width: 1023px){.is-invisible-touch{visibility:hidden !important}}@media screen and (min-width: 1024px){.is-invisible-desktop{visibility:hidden !important}}@media screen and (min-width: 1024px)and (max-width: 1215px){.is-invisible-desktop-only{visibility:hidden !important}}@media screen and (min-width: 1216px){.is-invisible-widescreen{visibility:hidden !important}}@media screen and (min-width: 1216px)and (max-width: 1407px){.is-invisible-widescreen-only{visibility:hidden !important}}@media screen and (min-width: 1408px){.is-invisible-fullhd{visibility:hidden !important}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width: 1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white a.navbar-item:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white .navbar-link:hover,.hero.is-white .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{color:#fff !important;opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg, #e8e3e4 0%, hsl(0, 0%, 100%) 71%, white 100%)}@media screen and (max-width: 768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg, #e8e3e4 0%, hsl(0, 0%, 100%) 71%, white 100%)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:rgba(255,255,255,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,.7)}.hero.is-black a.navbar-item:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black .navbar-link:hover,.hero.is-black .navbar-link.is-active{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{color:#0a0a0a !important;opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg, black 0%, hsl(0, 0%, 4%) 71%, #181616 100%)}@media screen and (max-width: 768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg, black 0%, hsl(0, 0%, 4%) 71%, #181616 100%)}}.hero.is-light{background-color:#d2f9d6;color:rgba(0,0,0,.7)}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:rgba(0,0,0,.7)}.hero.is-light .subtitle{color:rgba(0,0,0,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-light .navbar-menu{background-color:#d2f9d6}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(0,0,0,.7)}.hero.is-light a.navbar-item:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light .navbar-link:hover,.hero.is-light .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,.7)}.hero.is-light .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{color:#d2f9d6 !important;opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#d2f9d6}.hero.is-light.is-bold{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}@media screen and (max-width: 768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}}.hero.is-dark{background-color:#459558;color:#fff}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#fff}.hero.is-dark .subtitle{color:rgba(255,255,255,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-dark .navbar-menu{background-color:#459558}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(255,255,255,.7)}.hero.is-dark a.navbar-item:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark .navbar-link.is-active{background-color:#3d844e;color:#fff}.hero.is-dark .tabs a{color:#fff;opacity:.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{color:#459558 !important;opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#fff}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#459558}.hero.is-dark.is-bold{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}@media screen and (max-width: 768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}}.hero.is-primary{background-color:#55be6f;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:rgba(255,255,255,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-primary .navbar-menu{background-color:#55be6f}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,.7)}.hero.is-primary a.navbar-item:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary .navbar-link.is-active{background-color:#45b461;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{color:#55be6f !important;opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#55be6f}.hero.is-primary.is-bold{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}@media screen and (max-width: 768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}}.hero.is-link{background-color:#4876ff;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:rgba(255,255,255,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-link .navbar-menu{background-color:#4876ff}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,.7)}.hero.is-link a.navbar-item:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link .navbar-link:hover,.hero.is-link .navbar-link.is-active{background-color:#2f63ff;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{color:#4876ff !important;opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#4876ff}.hero.is-link.is-bold{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}@media screen and (max-width: 768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}}.hero.is-info{background-color:#f0f8ff;color:rgba(0,0,0,.7)}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:rgba(0,0,0,.7)}.hero.is-info .subtitle{color:rgba(0,0,0,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-info .navbar-menu{background-color:#f0f8ff}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(0,0,0,.7)}.hero.is-info a.navbar-item:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info .navbar-link:hover,.hero.is-info .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,.7)}.hero.is-info .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{color:#f0f8ff !important;opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#f0f8ff}.hero.is-info.is-bold{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, white 100%)}@media screen and (max-width: 768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, white 100%)}}.hero.is-success{background-color:#48c78e;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:rgba(255,255,255,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-success .navbar-menu{background-color:#48c78e}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,.7)}.hero.is-success a.navbar-item:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success .navbar-link:hover,.hero.is-success .navbar-link.is-active{background-color:#3abb81;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{color:#48c78e !important;opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#48c78e}.hero.is-success.is-bold{background-image:linear-gradient(141deg, #29b35e 0%, hsl(153, 53%, 53%) 71%, #56d2af 100%)}@media screen and (max-width: 768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg, #29b35e 0%, hsl(153, 53%, 53%) 71%, #56d2af 100%)}}.hero.is-warning{background-color:#ffd975;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width: 1023px){.hero.is-warning .navbar-menu{background-color:#ffd975}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning a.navbar-item:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{color:#ffd975 !important;opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffd975}.hero.is-warning.is-bold{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}@media screen and (max-width: 768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}}.hero.is-danger{background-color:#f14668;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:rgba(255,255,255,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-danger .navbar-menu{background-color:#f14668}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,.7)}.hero.is-danger a.navbar-item:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger .navbar-link.is-active{background-color:#ef2e55;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{color:#f14668 !important;opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#f14668}.hero.is-danger.is-bold{background-image:linear-gradient(141deg, #fa0a62 0%, hsl(348, 86%, 61%) 71%, #f7595f 100%)}@media screen and (max-width: 768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg, #fa0a62 0%, hsl(348, 86%, 61%) 71%, #f7595f 100%)}}.hero.is-small .hero-body{padding:1.5rem}@media screen and (min-width: 769px),print{.hero.is-medium .hero-body{padding:9rem 4.5rem}}@media screen and (min-width: 769px),print{.hero.is-large .hero-body{padding:18rem 6rem}}.hero.is-halfheight .hero-body,.hero.is-fullheight .hero-body,.hero.is-fullheight-with-navbar .hero-body{align-items:center;display:flex}.hero.is-halfheight .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-fullheight-with-navbar .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%, -50%, 0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width: 768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width: 768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media screen and (min-width: 769px),print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-head,.hero-foot{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}@media screen and (min-width: 769px),print{.hero-body{padding:3rem 3rem}}.section{padding:3rem 1.5rem}@media screen and (min-width: 1024px){.section{padding:3rem 3rem}.section.is-medium{padding:9rem 4.5rem}.section.is-large{padding:18rem 6rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}:host{--primary: #55be6f;--info: #f0f8ff;--warning: #ffd975;--link: #4876ff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;text-rendering:optimizeLegibility;text-size-adjust:100%;font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5;box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}',""]);const a=s},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},563:function(e,t){"use strict";var i=this&&this.__await||function(e){return this instanceof i?(this.v=e,this):new i(e)},o=this&&this.__asyncGenerator||function(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=o.apply(e,t||[]),s=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){r[e]&&(n[e]=function(t){return new Promise((function(i,o){s.push([e,t,i,o])>1||l(e,t)}))})}function l(e,t){try{(o=r[e](t)).value instanceof i?Promise.resolve(o.value.v).then(c,d):h(s[0][2],o)}catch(e){h(s[0][3],e)}var o}function c(e){l("next",e)}function d(e){l("throw",e)}function h(e,t){e(t),s.shift(),s.length&&l(s[0][0],s[0][1])}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o(this,arguments,(function*(){const t=/\r?\n/,o=new TextDecoder;let n="",r=e.read();for(;;){const{done:s,value:a}=yield i(r);if(s)return n.length>0&&(yield yield i(JSON.parse(n))),yield i(void 0);n+=o.decode(a,{stream:!0});const l=n.split(t);n=l.pop();for(const e of l)yield yield i(JSON.parse(e));r=e.read()}}))}},112:function(module,__unused_webpack_exports,__webpack_require__){module=__webpack_require__.nmd(module),
/**!
 * FlexSearch.js v0.7.31 (Bundle)
 * Copyright 2018-2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
function _f(self){"use strict";try{module&&(self=module)}catch(e){}var t;function u(e){return void 0===e||e}function aa(e){const t=Array(e);for(let i=0;i<e;i++)t[i]=v();return t}function v(){return Object.create(null)}function ba(e,t){return t.length-e.length}function x(e){return"string"==typeof e}function C(e){return"object"==typeof e}function D(e){return"function"==typeof e}function ca(e,t){var i=da;if(e&&(t&&(e=E(e,t)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),i||""===i)){if(e=e.split(i),this.filter){t=this.filter,i=e.length;const o=[];for(let n=0,r=0;n<i;n++){const i=e[n];i&&!t[i]&&(o[r++]=i)}e=o}return e}return e}self._factory=_f;const da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,t){const i=Object.keys(e),o=i.length,n=[];let r="",s=0;for(let a,l,c=0;c<o;c++)a=i[c],(l=e[a])?(n[s++]=F(t?"(?!\\b)"+a+"(\\b|_)":a),n[s++]=l):r+=(r?"|":"")+a;return r&&(n[s++]=F(t?"(?!\\b)("+r+")(\\b|_)":"("+r+")"),n[s]=""),n}function E(e,t){for(let i=0,o=t.length;i<o&&(e=e.replace(t[i],t[i+1]));i+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let t="",i="";for(let o,n=0,r=e.length;n<r;n++)(o=e[n])!==i&&(t+=i=o);return t}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}const ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,t){e[t+"Async"]=function(){const e=this,i=arguments;var o=i[i.length-1];let n;return D(o)&&(n=o,delete i[i.length-1]),o=new Promise((function(o){setTimeout((function(){e.async=!0;const n=e[t].apply(e,i);e.async=!1,o(n)}))})),n?(o.then(n),this):o}}function ma(e,t,i,o){const n=e.length;let r,s,a=[],l=0;o&&(o=[]);for(let c=n-1;0<=c;c--){const d=e[c],h=d.length,u=v();let f=!r;for(let e=0;e<h;e++){const h=d[e],p=h.length;if(p)for(let e,d,m=0;m<p;m++)if(d=h[m],r){if(r[d]){if(!c)if(i)i--;else if(a[l++]=d,l===t)return a;(c||o)&&(u[d]=1),f=!0}if(o&&(e=(s[d]||0)+1,s[d]=e,e<n)){const t=o[e-2]||(o[e-2]=[]);t[t.length]=d}}else u[d]=1}if(o)r||(s=u);else if(!f)return[];r=u}if(o)for(let e,n,s=o.length-1;0<=s;s--){e=o[s],n=e.length;for(let o,s=0;s<n;s++)if(o=e[s],!r[o]){if(i)i--;else if(a[l++]=o,l===t)return a;r[o]=1}}return a}function na(e,t){const i=v(),o=v(),n=[];for(let t=0;t<e.length;t++)i[e[t]]=1;for(let e,r=0;r<t.length;r++){e=t[r];for(let t,r=0;r<e.length;r++)t=e[r],i[t]&&!o[t]&&(o[t]=1,n[n.length]=t)}return n}function J(e){this.l=!0!==e&&e,this.cache=v(),this.h=[]}function oa(e,t,i){C(e)&&(e=e.query);let o=this.cache.get(e);return o||(o=this.search(e,t,i),this.cache.set(e,o)),o}J.prototype.set=function(e,t){if(!this.cache[e]){var i=this.h.length;for(i===this.l?delete this.cache[this.h[i-1]]:i++,--i;0<i;i--)this.h[i]=this.h[i-1];this.h[0]=e}this.cache[e]=t},J.prototype.get=function(e){const t=this.cache[e];if(this.l&&t&&(e=this.h.indexOf(e))){const t=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=t}return t};const qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,t,i,o,n,r,s){setTimeout((function(){const a=e(i?i+"."+o:o,JSON.stringify(s));a&&a.then?a.then((function(){t.export(e,t,i,n,r+1)})):t.export(e,t,i,n,r+1)}))}function K(e,t){if(!(this instanceof K))return new K(e);var i;if(e){x(e)?e=qa[e]:(i=e.preset)&&(e=Object.assign({},i[i],e)),i=e.charset;var o=e.lang;x(i)&&(-1===i.indexOf(":")&&(i+=":default"),i=G[i]),x(o)&&(o=ka[o])}else e={};let n,r,s=e.context||{};if(this.encode=e.encode||i&&i.encode||ia,this.register=t||v(),this.D=n=e.resolution||9,this.G=t=i&&i.G||e.tokenize||"strict",this.depth="strict"===t&&s.depth,this.l=u(s.bidirectional),this.s=r=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=r?aa(n):v(),this.A=n=s.resolution||1,this.h=r?aa(n):v(),this.F=i&&i.F||e.rtl,this.H=(t=e.matcher||o&&o.H)&&fa(t,!1),this.J=(t=e.stemmer||o&&o.J)&&fa(t,!0),i=t=e.filter||o&&o.filter){i=t,o=v();for(let e=0,t=i.length;e<t;e++)o[i[e]]=1;i=o}this.filter=i,this.cache=(t=e.cache)&&new J(t)}function L(e,t,i,o,n){return i&&1<e?t+(o||0)<=e?i+(n||0):(e-1)/(t+(o||0))*(i+(n||0))+1|0:0}function M(e,t,i,o,n,r,s){let a=s?e.h:e.map;(!t[i]||s&&!t[i][s])&&(e.s&&(a=a[o]),s?((t=t[i]||(t[i]=v()))[s]=1,a=a[s]||(a[s]=v())):t[i]=1,a=a[i]||(a[i]=[]),e.s||(a=a[o]||(a[o]=[])),r&&a.includes(n)||(a[a.length]=n,e.m&&((e=e.register[n]||(e.register[n]=[]))[e.length]=a)))}function sa(e,t,i,o,n,r,s,a){let l=[],c=a?e.h:e.map;if(e.s||(c=ua(c,s,a,e.l)),c){let i=0;const d=Math.min(c.length,a?e.A:e.D);for(let t,h,u=0,f=0;u<d&&!((t=c[u])&&(e.s&&(t=ua(t,s,a,e.l)),n&&t&&r&&(h=t.length,h<=n?(n-=h,t=null):(t=t.slice(n),n=0)),t&&(l[i++]=t,r&&(f+=t.length,f>=o))));u++);if(i)return r?ta(l,o,0):void(t[t.length]=l)}return!i&&l}function ta(e,t,i){return e=1===e.length?e[0]:[].concat.apply([],e),i||e.length>t?e.slice(i,i+t):e}function ua(e,t,i,o){return i?e=(e=e[(o=o&&t>i)?t:i])&&e[o?i:t]:e=e[t],e}function N(e,t,i,o,n){let r=0;if(e.constructor===Array)if(n)-1!==(t=e.indexOf(t))?1<e.length&&(e.splice(t,1),r++):r++;else{n=Math.min(e.length,i);for(let s,a=0;a<n;a++)(s=e[a])&&(r=N(s,t,i,o,n),o||r||delete e[a])}else for(let s in e)(r=N(e[s],t,i,o,n))||delete e[s];return r}function va(e){e=e.data;var t=self._index;const i=e.args;var o=e.task;if("init"===o)o=e.options||{},e=e.factory,t=o.encode,o.cache=!1,t&&0===t.indexOf("function")&&(o.encode=Function("return "+t)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(o),delete self.FlexSearch):self._index=new K(o);else e=e.id,t=t[o].apply(t,i),postMessage("search"===o?{id:e,msg:t}:{id:e})}t=K.prototype,t.append=function(e,t){return this.add(e,t,!0)},t.add=function(e,t,i,o){if(t&&(e||0===e)){if(!o&&!i&&this.register[e])return this.update(e,t);if(o=(t=this.encode(t)).length){const c=v(),d=v(),h=this.depth,u=this.D;for(let f=0;f<o;f++){let p=t[this.F?o-1-f:f];var n=p.length;if(p&&n>=this.B&&(h||!d[p])){var r=L(u,o,f),s="";switch(this.G){case"full":if(2<n){for(r=0;r<n;r++)for(var a=n;a>r;a--)if(a-r>=this.B){var l=L(u,o,f,n,r);M(this,d,s=p.substring(r,a),l,e,i)}break}case"reverse":if(1<n){for(a=n-1;0<a;a--)(s=p[a]+s).length>=this.B&&M(this,d,s,L(u,o,f,n,a),e,i);s=""}case"forward":if(1<n){for(a=0;a<n;a++)(s+=p[a]).length>=this.B&&M(this,d,s,r,e,i);break}default:if(this.C&&(r=Math.min(r/this.C(t,p,f)|0,u-1)),M(this,d,p,r,e,i),h&&1<o&&f<o-1)for(n=v(),s=this.A,r=p,a=Math.min(h+1,o-f),n[r]=1,l=1;l<a;l++)if((p=t[this.F?o-1-f-l:f+l])&&p.length>=this.B&&!n[p]){n[p]=1;const t=this.l&&p>r;M(this,c,t?r:p,L(s+(o/2>s?0:1),o,f,a-1,l-1),e,i,t?p:r)}}}}this.m||(this.register[e]=1)}}return this},t.search=function(e,t,i){i||(!t&&C(e)?e=(i=e).query:C(t)&&(i=t));let o,n,r,s=[],a=0;if(i){e=i.query||e,t=i.limit,a=i.offset||0;var l=i.context;n=i.suggest}if(e&&(o=(e=this.encode(""+e)).length,1<o)){i=v();var c=[];for(let t,r=0,a=0;r<o;r++)if((t=e[r])&&t.length>=this.B&&!i[t]){if(!(this.s||n||this.map[t]))return s;c[a++]=t,i[t]=1}o=(e=c).length}if(!o)return s;t||(t=100),i=0,(l=this.depth&&1<o&&!1!==l)?(r=e[0],i=1):1<o&&e.sort(ba);for(let d,h;i<o;i++){if(h=e[i],l?(d=sa(this,s,n,t,a,2===o,h,r),n&&!1===d&&s.length||(r=h)):d=sa(this,s,n,t,a,1===o,h),d)return d;if(n&&i===o-1){if(!(c=s.length)){if(l){l=0,i=-1;continue}return s}if(1===c)return ta(s[0],t,a)}}return ma(s,t,a,n)},t.contain=function(e){return!!this.register[e]},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e,t){const i=this.register[e];if(i){if(this.m)for(let t,o=0;o<i.length;o++)t=i[o],t.splice(t.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(t||delete this.register[e],this.cache){t=this.cache;for(let i,o,n=0;n<t.h.length;n++)o=t.h[n],i=t.cache[o],i.includes(e)&&(t.h.splice(n--,1),delete t.cache[o])}}return this},t.searchCache=oa,t.export=function(e,t,i,o,n){let r,s;switch(n||(n=0)){case 0:if(r="reg",this.m){s=v();for(let e in this.register)s[e]=1}else s=this.register;break;case 1:r="cfg",s={doc:0,opt:this.s?1:0};break;case 2:r="map",s=this.map;break;case 3:r="ctx",s=this.h;break;default:return}return ra(e,t||this,i,r,o,n,s),!0},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"cfg":this.s=!!t.opt;break;case"reg":this.m=!1,this.register=t;break;case"map":this.map=t;break;case"ctx":this.h=t}},la(K.prototype);let wa=0;function O(e){if(!(this instanceof O))return new O(e);var t;e?D(t=e.encode)&&(e.encode=t.toString()):e={},(t=(self||window)._factory)&&(t=t.toString());const i="undefined"==typeof window&&self.exports,o=this;this.o=xa(t,i,e.worker),this.h=v(),this.o&&(i?this.o.on("message",(function(e){o.h[e.id](e.msg),delete o.h[e.id]})):this.o.onmessage=function(e){e=e.data,o.h[e.id](e.msg),delete o.h[e.id]},this.o.postMessage({task:"init",factory:t,options:e}))}function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){const t=this,i=[].slice.call(arguments);var o=i[i.length-1];let n;return D(o)&&(n=o,i.splice(i.length-1,1)),o=new Promise((function(o){setTimeout((function(){t.h[++wa]=o,t.o.postMessage({task:e,id:wa,args:i})}))})),n?(o.then(n),this):o}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var t,i=e.document||e.doc||e;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(t=i.key||i.id)&&S(t,this.A)||"id",this.m=u(e.fastupdate),this.C=(t=i.store)&&!0!==t&&[],this.store=t&&v(),this.I=(t=i.tag)&&S(t,this.A),this.l=t&&v(),this.cache=(t=e.cache)&&new J(t),e.cache=!1,this.o=e.worker,this.async=!1,t=v();let o=i.index||i.field||i;x(o)&&(o=[o]);for(let i,n,r=0;r<o.length;r++)i=o[r],x(i)||(n=i,i=i.field),n=C(n)?Object.assign({},e,n):e,this.o&&(t[i]=new O(n),t[i].o||(this.o=!1)),this.o||(t[i]=new K(n,this.register)),this.K[r]=S(i,this.A),this.h[r]=i;if(this.C)for(x(e=i.store)&&(e=[e]),i=0;i<e.length;i++)this.C[i]=S(e[i],this.A);this.index=t}function S(e,t){const i=e.split(":");let o=0;for(let n=0;n<i.length;n++)0<=(e=i[n]).indexOf("[]")&&(e=e.substring(0,e.length-2))&&(t[o]=!0),e&&(i[o++]=e);return o<i.length&&(i.length=o),1<o?i:i[0]}function T(e,t){if(x(t))e=e[t];else for(let i=0;e&&i<t.length;i++)e=e[t[i]];return e}function U(e,t,i,o,n){if(e=e[n],o===i.length-1)t[n]=e;else if(e)if(e.constructor===Array)for(t=t[n]=Array(e.length),n=0;n<e.length;n++)U(e,t,i,o,n);else t=t[n]||(t[n]=v()),n=i[++o],U(e,t,i,o,n)}function V(e,t,i,o,n,r,s,a){if(e=e[s])if(o===t.length-1){if(e.constructor===Array){if(i[o]){for(t=0;t<e.length;t++)n.add(r,e[t],!0,!0);return}e=e.join(" ")}n.add(r,e,a,!0)}else if(e.constructor===Array)for(s=0;s<e.length;s++)V(e,t,i,o,n,r,s,a);else s=t[++o],V(e,t,i,o,n,r,s,a)}function ya(e,t,i,o){let n=this.l[e],r=n&&n.length-i;if(r&&0<r)return(r>t||i)&&(n=n.slice(i,i+t)),o&&(n=za.call(this,n)),{tag:e,result:n}}function za(e){const t=Array(e.length);for(let i,o=0;o<e.length;o++)i=e[o],t[o]={id:i,doc:this.store[i]};return t}P("add"),P("append"),P("search"),P("update"),P("remove"),t=Q.prototype,t.add=function(e,t,i){if(C(e)&&(e=T(t=e,this.key)),t&&(e||0===e)){if(!i&&this.register[e])return this.update(e,t);for(let o,n,r=0;r<this.h.length;r++)n=this.h[r],o=this.K[r],x(o)&&(o=[o]),V(t,o,this.A,0,this.index[n],e,o[0],i);if(this.I){let o=T(t,this.I),n=v();x(o)&&(o=[o]);for(let t,r,s=0;s<o.length;s++)if(t=o[s],!n[t]&&(n[t]=1,r=this.l[t]||(this.l[t]=[]),!i||!r.includes(e))&&(r[r.length]=e,this.m)){const t=this.register[e]||(this.register[e]=[]);t[t.length]=r}}if(this.store&&(!i||!this.store[e])){let i;if(this.C){i=v();for(let e,o=0;o<this.C.length;o++)e=this.C[o],x(e)?i[e]=t[e]:U(t,i,e,0,e[0])}this.store[e]=i||t}}return this},t.append=function(e,t){return this.add(e,t,!0)},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var t=0;t<this.h.length&&(this.index[this.h[t]].remove(e,!this.o),!this.m);t++);if(this.I&&!this.m)for(let i in this.l){const o=(t=this.l[i]).indexOf(e);-1!==o&&(1<t.length?t.splice(o,1):delete this.l[i])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,t,i,o){i||(!t&&C(e)?(i=e,e=""):C(t)&&(i=t,t=0));let n,r,s,a,l,c,d=[],h=[],u=0;if(i)if(i.constructor===Array)s=i,i=null;else{if(e=i.query||e,s=(n=i.pluck)||i.index||i.field,a=i.tag,r=this.store&&i.enrich,l="and"===i.bool,t=i.limit||t||100,c=i.offset||0,a&&(x(a)&&(a=[a]),!e)){for(let e,i=0;i<a.length;i++)(e=ya.call(this,a[i],t,c,r))&&(d[d.length]=e,u++);return u?d:[]}x(s)&&(s=[s])}s||(s=this.h),l=l&&(1<s.length||a&&1<a.length);const f=!o&&(this.o||this.async)&&[];for(let n,r,p,m=0;m<s.length;m++){let b;if(r=s[m],x(r)||(b=r,r=b.field,e=b.query||e,t=b.limit||t),f)f[m]=this.index[r].searchAsync(e,t,b||i);else{if(n=o?o[m]:this.index[r].search(e,t,b||i),p=n&&n.length,a&&p){const e=[];let i=0;l&&(e[0]=[n]);for(let t,o,n=0;n<a.length;n++)t=a[n],(p=(o=this.l[t])&&o.length)&&(i++,e[e.length]=l?[o]:o);i&&(n=l?ma(e,t||100,c||0):na(n,e),p=n.length)}if(p)h[u]=r,d[u++]=n;else if(l)return[]}}if(f){const o=this;return new Promise((function(n){Promise.all(f).then((function(r){n(o.search(e,t,i,r))}))}))}if(!u)return[];if(n&&(!r||!this.store))return d[0];for(let e,t=0;t<h.length;t++){if(e=d[t],e.length&&r&&(e=za.call(this,e)),n)return e;d[t]={field:h[t],result:e}}return d},t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,t){return this.store[e]=t,this},t.searchCache=oa,t.export=function(e,t,i,o,n){if(n||(n=0),o||(o=0),o<this.h.length){const i=this.h[o],r=this.index[i];t=this,setTimeout((function(){r.export(e,t,n?i:"",o,n++)||(o++,n=1,t.export(e,t,i,o,n))}))}else{let t,r;switch(n){case 1:t="tag",r=this.l;break;case 2:t="store",r=this.store;break;default:return}ra(e,this,i,t,o,n,r)}},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"tag":this.l=t;break;case"reg":this.m=!1,this.register=t;for(let e,i=0;i<this.h.length;i++)e=this.index[this.h[i]],e.register=t,e.m=!1;break;case"store":this.store=t;break;default:const i=(e=e.split("."))[0];e=e[1],i&&e&&this.index[i].import(e,t)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};const Ca=[F("[àáâãäå]"),"a",F("[èéêë]"),"e",F("[ìíîï]"),"i",F("[òóôõöő]"),"o",F("[ùúûüű]"),"u",F("[ýŷÿ]"),"y",F("ñ"),"n",F("[çc]"),"k",F("ß"),"s",F(" & ")," and "];function Aa(e){var t=e=""+e;return t.normalize&&(t=t.normalize("NFD").replace(ea,"")),ca.call(this,t.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};const Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",ß:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){const t=[];if(e=Aa.call(this,e).join(" ")){const i=e.split(Fa),o=i.length;for(let n,r=0,s=0;r<o;r++)if((e=i[r])&&(!this.filter||!this.filter[e])){n=e[0];let i=Ga[n]||n,o=i;for(let t=1;t<e.length;t++){n=e[t];const r=Ga[n]||n;r&&r!==o&&(i+=r,o=r)}t[s++]=i}}return t}var Ia={encode:Ha,F:!1,G:""};const Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,t){return e&&(2<(e=Da.call(this,e).join(" ")).length&&(e=E(e,Ja)),t||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};const Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(1<(e=Ha.call(this,e,!0)).length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;const W=self;let Y;const Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,t){G[e]=t},registerLanguage:function(e,t){ka[e]=t}};(Y=W.define)&&Y.amd?Y([],(function(){return Z})):W.exports?W.exports=Z:W.FlexSearch=Z}(this)},431:e=>{"use strict";const t=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],n=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],r=(e,t,i)=>{let o=e;return"string"==typeof t||Array.isArray(t)?o=e.toLocaleString(t,i):!0!==t&&void 0===i||(o=e.toLocaleString(void 0,i)),o};e.exports=(e,s)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const a=(s=Object.assign({bits:!1,binary:!1},s)).bits?s.binary?n:o:s.binary?i:t;if(s.signed&&0===e)return` 0 ${a[0]}`;const l=e<0,c=l?"-":s.signed?"+":"";let d;if(l&&(e=-e),void 0!==s.minimumFractionDigits&&(d={minimumFractionDigits:s.minimumFractionDigits}),void 0!==s.maximumFractionDigits&&(d=Object.assign({maximumFractionDigits:s.maximumFractionDigits},d)),e<1){return c+r(e,s.locale,d)+" "+a[0]}const h=Math.min(Math.floor(s.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),a.length-1);e/=Math.pow(s.binary?1024:1e3,h),d||(e=e.toPrecision(3));return c+r(Number(e),s.locale,d)+" "+a[h]}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var i=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(i.exports,i,i.exports,__webpack_require__),i.loaded=!0,i.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var i in t)__webpack_require__.o(t,i)&&!__webpack_require__.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var __webpack_exports__={};(()=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Chooser:()=>Ei,Coll:()=>Ci,CollIndex:()=>Li,CollInfo:()=>zi,Embed:()=>Ro,FaIcon:()=>Ve,GDrive:()=>yo,IS_APP:()=>qe,Item:()=>Ci,ItemIndex:()=>Li,ItemInfo:()=>zi,LitElement:()=>me,Loader:()=>So,PageEntry:()=>Ao,Pages:()=>Co,Replay:()=>To,ReplayWebApp:()=>Ti,ReplayWebPage:()=>Ro,SWManager:()=>it,Sorter:()=>Po,Story:()=>wo,URLResources:()=>Do,VERSION:()=>je,WrModal:()=>Ge,apiPrefix:()=>Oe,clickOnSpacebarPress:()=>He,css:()=>h,dateFormatter:()=>Tt,dateTimeFormatter:()=>At,digestMessage:()=>gt,getDateFromTS:()=>wt,getPageDateTS:()=>yt,getReplayLink:()=>kt,getTS:()=>xt,html:()=>Q,parseURLSchemeHostPath:()=>$t,replayPrefix:()=>Ue,rwpIcon:()=>bt,rwpLogoAnimated:()=>xo,serviceWorkerActivated:()=>ot,sourceToId:()=>St,timeFormatter:()=>Pt,tsToDate:()=>vt,unsafeCSS:()=>d,unsafeSVG:()=>Te,updateFaviconLinks:()=>We,wrapCss:()=>Ne});var e={};__webpack_require__.r(e),__webpack_require__.d(e,{attentionMarkers:()=>Er,contentInitial:()=>$r,disable:()=>Ar,document:()=>Sr,flow:()=>_r,flowInitial:()=>zr,insideSpan:()=>Lr,string:()=>Cr,text:()=>Ir});function t(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}function i(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))}Object.create;function o(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function n(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e=o(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(i){t[i]=e[i]&&function(t){return new Promise((function(o,n){(function(e,t,i,o){Promise.resolve(o).then((function(t){e({value:t,done:i})}),t)})(o,n,(t=e[i](t)).done,t.value)}))}}}Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=globalThis,s=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class c{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(t,e))}return e}toString(){return this.cssText}}const d=e=>new c("string"==typeof e?e:e+"",void 0,a),h=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new c(i,e,a)},u=(e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=r.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},f=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return d(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:b,getOwnPropertyNames:g,getOwnPropertySymbols:v,getPrototypeOf:w}=Object,y=globalThis,x=y.trustedTypes,k=x?x.emptyScript:"",S=y.reactiveElementPolyfillSupport,$=(e,t)=>e,z={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!p(e,t),C={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&m(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...g(e),...v(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(f(e))}else void 0!==e&&t.push(f(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:z).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:z;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??_)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[$("elementProperties")]=new Map,I[$("finalized")]=new Map,S?.({ReactiveElement:I}),(y.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L=globalThis,E=L.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+P,F=`<${D}>`,M=document,R=()=>M.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,B=e=>U(e)||"function"==typeof e?.[Symbol.iterator],N="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,W=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,G=/"/g,K=/^(?:script|style|textarea|title)$/i,Y=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Q=Y(1),Z=Y(2),J=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),ee=new WeakMap,te=M.createTreeWalker(M,129);function ie(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const oe=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",s=q;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===q?"!--"===l[1]?s=j:void 0!==l[1]?s=H:void 0!==l[2]?(K.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=W):void 0!==l[3]&&(s=W):s===W?">"===l[0]?(s=n??q,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?W:'"'===l[3]?G:V):s===G||s===V?s=W:s===j||s===H?s=q:(s=W,n=void 0);const h=s===W&&e[t+1].startsWith("/>")?" ":"";r+=s===q?i+F:c>=0?(o.push(a),i.slice(0,c)+T+i.slice(c)+P+h):i+P+(-2===c?t:h)}return[ie(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class ne{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const s=e.length-1,a=this.parts,[l,c]=oe(e,t);if(this.el=ne.createElement(l,i),te.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=te.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(T)){const t=c[r++],i=o.getAttribute(e).split(P),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?ce:"?"===s[1]?de:"@"===s[1]?he:le}),o.removeAttribute(e)}else e.startsWith(P)&&(a.push({type:6,index:n}),o.removeAttribute(e));if(K.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],R()),te.nextNode(),a.push({type:2,index:++n});o.append(e[t],R())}}}else if(8===o.nodeType)if(o.data===D)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)a.push({type:7,index:n}),e+=P.length-1}n++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}}function re(e,t,i=e,o){if(t===J)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=O(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=re(e,n._$AS(e,t.values),n,o)),t}class se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??M).importNode(t,!0);te.currentNode=o;let n=te.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ae(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new ue(n,this,e)),this._$AV.push(t),a=i[++s]}r!==a?.index&&(n=te.nextNode(),r++)}return te.currentNode=M,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),O(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==X&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ne.createElement(ie(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new se(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ee.get(e.strings);return void 0===t&&ee.set(e.strings,t=new ne(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new ae(this.S(R()),this.S(R()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=re(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==J,r&&(this._$AH=e);else{const o=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=re(this,o[i+s],t,s),a===J&&(a=this._$AH[s]),r||=!O(a)||a!==this._$AH[s],a===X?e=X:e!==X&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ce extends le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class de extends le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class he extends le{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??X)===J)return;const i=this._$AH,o=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==X&&(i===X||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const fe={P:T,A:P,C:D,M:1,L:oe,R:se,D:B,V:re,I:ae,H:le,N:de,U:he,B:ce,F:ue},pe=L.litHtmlPolyfillSupport;pe?.(ne,ae),(L.litHtmlVersions??=[]).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class me extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new ae(t.insertBefore(R(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}me._$litElement$=!0,me.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:me});const be=globalThis.litElementPolyfillSupport;be?.({LitElement:me});(globalThis.litElementVersions??=[]).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ve={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:_},we=(e=ve,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function ye(e){return(t,i)=>"object"==typeof i?we(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function xe(e){return ye({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Se(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ke(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return ke(i,o,{get(){return r(this)}})}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e=e=>e??X,ze=1,_e=2,Ce=e=>(...t)=>({_$litDirective$:e,values:t});class Ie{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Le extends Ie{constructor(e){if(super(e),this.it=X,e.type!==_e)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===X||null==e)return this._t=void 0,this.it=e;if(e===J)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Le.directiveName="unsafeHTML",Le.resultType=1;const Ee=Ce(Le);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ae extends Le{}Ae.directiveName="unsafeSVG",Ae.resultType=2;const Te=Ce(Ae),Pe="important",De=" !"+Pe,Fe=Ce(class extends Ie{constructor(e){if(super(e),e.type!==ze||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(De);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?Pe:""):i[e]=o}}return J}});var Me,Re=__webpack_require__(989);const Oe="./w/api",Ue="./w",Be=d(Re.A);function Ne(e){return[Be,e]}const qe=window.IS_APP||(null===(Me=window.electron)||void 0===Me?void 0:Me.IS_APP)||window.matchMedia("(display-mode: standalone)").matches,je="2.3.4";function He(e){" "==e.key&&(e.preventDefault(),e.target.click())}function We(e){const t=document.querySelector("head"),i=document.querySelectorAll("link[rel*='icon']");for(const e of i)t.removeChild(e);for(const i of e.icons){const e=document.createElement("link");e.rel=i.rel,e.href=i.href,t.appendChild(e)}}class Ve extends me{constructor(){super(),this.size="1.1em",this.width=null,this.height=null}static get properties(){return{svg:{type:String},size:{type:String},width:{type:String},height:{type:String}}}static get styles(){return h`
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
    `}render(){if(!this.svg)return Q``;const e={};return this.size?(e.width=this.size,e.height=this.size):(this.width&&(e.width=this.width),this.height&&(e.height=this.height)),Q`<svg style="${Fe(e)}">
      <g>
        ${Te(this.svg)}
      </g>
    </svg>`}}class Ge extends me{constructor(){super(),this.title="",this.bgClass="",this.noBgClose=!1}static get properties(){return{title:{type:String},bgClass:{type:String},noBgClose:{type:Boolean}}}static get styles(){return Ne(h`
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
    `)}render(){return Q` <div class="modal is-active">
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
    </div>`}onClose(){this.dispatchEvent(new CustomEvent("modal-closed"))}}customElements.define("fa-icon",Ve),customElements.define("wr-modal",Ge);const Ke='<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24"><path d="M6.807 11.246h-.001a.25.25 0 0 1-.245-.294 5.55 5.55 0 0 1 3.082-3.959.124.124 0 0 1 .176.111.1.1 0 0 1-.011.05c-.426 1.035-.719 2.371-.81 3.856a.25.25 0 0 1-.249.236zm7.364-4.091a.13.13 0 0 1 .027-.138.13.13 0 0 1 .139-.025 5.54 5.54 0 0 1 3.081 3.96.252.252 0 0 1-.245.293l-1.942.001a.25.25 0 0 1-.249-.236c-.091-1.485-.384-2.821-.811-3.855m3.002 5.591c.074 0 .144.033.192.089a.25.25 0 0 1 .054.205A5.54 5.54 0 0 1 14.337 17a.13.13 0 0 1-.139-.025.13.13 0 0 1-.026-.138c.426-1.033.719-2.369.81-3.856a.25.25 0 0 1 .249-.235zm-7.364 4.091q.01.024.01.05a.126.126 0 0 1-.176.114 5.55 5.55 0 0 1-3.081-3.961.25.25 0 0 1 .054-.204.25.25 0 0 1 .191-.088c.495-.002 1.488-.002 1.942-.002a.25.25 0 0 1 .249.235c.091 1.487.384 2.823.811 3.856m.694-3.825a.25.25 0 0 1 .066-.187.25.25 0 0 1 .183-.078l2.477-.001a.25.25 0 0 1 .249.25v.016c-.107 1.583-.461 2.962-.997 3.872q-.166.297-.414.531a.126.126 0 0 1-.154 0 2.2 2.2 0 0 1-.414-.531c-.536-.91-.89-2.289-.996-3.872m2.975-2.032v.016a.25.25 0 0 1-.249.25h-2.477a.25.25 0 0 1-.25-.25l.001-.016c.106-1.583.46-2.961.996-3.872.127-.214.272-.408.414-.53a.126.126 0 0 1 .154 0c.142.122.288.316.414.53.536.911.89 2.289.997 3.872" style="fill:#0891b2"/><path d="M23.774 13.333c.09.05.14.149.128.25C23.124 19.459 18.091 24 12.005 24 5.891 24 .84 19.419.098 13.505l-.001-.028a.25.25 0 0 1 .248-.248.24.24 0 0 1 .125.035c.54.312 1.438.835 1.768 1.028a.25.25 0 0 0 .252-.001l1.777-1.044a.25.25 0 0 1 .373.172 7.53 7.53 0 0 0 7.365 6.081 7.53 7.53 0 0 0 7.351-6.007.25.25 0 0 1 .126-.171l2.042-1.103a.25.25 0 0 1 .24.001zM.226 10.667a.25.25 0 0 1-.128-.25C.876 4.541 5.909 0 11.995 0c6.114 0 11.165 4.581 11.907 10.495l.001.028a.25.25 0 0 1-.248.248.24.24 0 0 1-.125-.035 516 516 0 0 1-1.768-1.028.25.25 0 0 0-.252.001l-1.777 1.044a.25.25 0 0 1-.373-.172A7.53 7.53 0 0 0 11.995 4.5a7.53 7.53 0 0 0-7.351 6.007.25.25 0 0 1-.126.171l-2.042 1.103a.25.25 0 0 1-.241-.001z" style="fill:#4d7c0f"/></svg>\n',Ye='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>',Qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>';var Ze;function Je(e,t){void 0===t&&(t={});var i=t.registrationOptions;void 0===i&&(i={}),delete t.registrationOptions;var o=function(e){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];t&&t[e]&&t[e].apply(t,i)};"serviceWorker"in navigator&&Ze.then((function(){Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))?(!function(e,t,i){fetch(e).then((function(o){404===o.status?(t("error",new Error("Service worker not found at "+e)),tt()):-1===o.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+o.headers.get("content-type"))),tt()):et(e,t,i)})).catch((function(e){return Xe(t,e)}))}(e,o,i),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return Xe(o,e)}))):(et(e,o,i),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return Xe(o,e)})))}))}function Xe(e,t){navigator.onLine||e("offline"),e("error",t)}function et(e,t,i){navigator.serviceWorker.register(e,i).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var i=e.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return Xe(t,e)}))}function tt(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return Xe(emit,e)}))}"undefined"!=typeof window&&(Ze="undefined"!=typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}});class it{constructor({name:e="sw.js",scope:t="./",appName:i="ReplayWeb.page",requireSubdomainIframe:o=!1}={}){this.errorMsg=null,this.name=e,this.scope=t,this.appName=i,this.requireSubdomainIframe=o}setAppName(e){this.appName=e}register(){return i(this,void 0,void 0,(function*(){let e,t;const i=new Promise(((i,o)=>{e=i,t=o}));this.errorMsg=this.getSWErrorMsg(),this.errorMsg&&(console.error(this.errorMsg),t(this.errorMsg));const o=e=>{console.error("Error during service worker registration:",e),this.errorMsg=this.getCrossOriginIframeMsg(),this.errorMsg||(this.errorMsg=`${this.appName} could not be loaded due to the following error:\n${e.toString()}`),t(this.errorMsg)};return Je(this.scope+this.name,{registrationOptions:{scope:this.scope},registered(){console.log("Service worker is registered"),e()},error(e){o(e)}}),i}))}getCrossOriginIframeMsg(){return this.isCrossOriginIframe()?`      Sorry, Service Workers can not be used in cross-origin iframes.\n      This web archive embed is loaded from ${window.location.origin} but the top page is on a different origin.\n      The embed must be loaded from the same origin or a subdomain.`:null}isCrossOriginIframe(){if(window.parent===window)return!1;try{return""===window.top.location.href}catch(e){return!0}}getSWErrorMsg(){if(navigator.serviceWorker)return this.requireSubdomainIframe&&!this.isCrossOriginIframe()?`Sorry, due to security settings, this ${this.appName} embed only be viewed within a subdomain iframe.`:null;const e=this.getCrossOriginIframeMsg();return e||(window.isSecureContext?"MozAppearance"in document.documentElement.style?"Sorry, Service Workers are disabled in Firefox in Private Mode. Please try loading this page in regular mode instead.":`Sorry, ${this.appName} won't work in this browser as Service Workers are not supported in this window.\n  Please try a different browser.`:`\n      Sorry, the ${this.appName} system must be loaded from an HTTPS URL (or localhost), but was loaded from: ${window.location.host}.\n      Please try loading this page from an HTTPS URL`)}renderErrorReport(e=""){const t=this.errorMsg||e;return t?Q`
      <section class="is-fullwidth">
        <div class="has-text-centered">
          <fa-icon
            style="margin: 1em;flex-grow: 1;"
            id="wrlogo"
            size="2.5rem"
            .svg=${Ke}
            aria-hidden="true"
          ></fa-icon>
        </div>
        <div style="white-space: pre-wrap; text-align: center">${t}</div>
      </section>
    `:""}}function ot(){return i(this,void 0,void 0,(function*(){navigator.serviceWorker.controller||(yield new Promise((e=>{navigator.serviceWorker.addEventListener("controllerchange",(()=>{e()}))})))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:nt}=fe,rt=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),rt(e,t);return!0},st=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},at=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),dt(t)}};function lt(e){void 0!==this._$AN?(st(this),this._$AM=e,at(this)):this._$AM=e}function ct(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)rt(o[e],!1),st(o[e]);else null!=o&&(rt(o,!1),st(o));else rt(this,e)}const dt=e=>{e.type==_e&&(e._$AP??=ct,e._$AQ??=lt)};class ht extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),at(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rt(this,e),st(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=()=>new ft;class ft{}const pt=new WeakMap,mt=Ce(class extends ht{render(e){return X}update(e,[t]){const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),X}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let i=pt.get(t);void 0===i&&(i=new WeakMap,pt.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?pt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bt='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M9.014 8.5c-.048 1-.24 1.86-.497 2.47-.15.357-.304.582-.424.701a1 1 0 0 1-.07.062 1 1 0 0 1-.07-.062c-.12-.12-.273-.343-.424-.7-.257-.61-.448-1.472-.497-2.471zM10.018 8.5c-.052 1.183-.288 2.236-.638 2.999A3.76 3.76 0 0 0 11.75 8.5zM6.666 11.499A3.76 3.76 0 0 1 4.296 8.5h1.732c.053 1.183.288 2.236.638 2.999M7.032 7.5c.049-1 .24-1.86.497-2.47.15-.357.305-.581.424-.701a1 1 0 0 1 .07-.062q.026.018.07.062c.12.12.274.344.424.7.258.61.449 1.472.497 2.471zM6.028 7.5H4.295a3.76 3.76 0 0 1 2.371-2.999c-.35.763-.585 1.816-.638 2.999M9.38 4.501A3.76 3.76 0 0 1 11.75 7.5h-1.733c-.052-1.183-.288-2.236-.638-2.999"/><path fill="currentColor" d="M12.921 9.078A5.01 5.01 0 0 1 8.023 13a5.01 5.01 0 0 1-4.981-4.42l-1.538.92-1.48-.886C.337 12.745 3.798 16 8.023 16c4.104 0 7.489-3.073 7.965-7.038L14.542 8zM16.023 7.386C15.71 3.255 12.247 0 8.023 0 3.92 0 .533 3.073.057 7.038L1.504 8l1.621-1.078A5.01 5.01 0 0 1 8.023 3a5.01 5.01 0 0 1 4.981 4.42l1.538-.92z"/></svg>\n';function gt(e,t){return i(this,void 0,void 0,(function*(){const i=(new TextEncoder).encode(e),o=yield crypto.subtle.digest(t,i),n=Array.from(new Uint8Array(o)).map((e=>e.toString(16).padStart(2,"0"))).join("");return n}))}function vt(e){if(!e)return"";e.length<14&&(e+="00000101000000".substr(e.length));const t=e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8)+"T"+e.substring(8,10)+":"+e.substring(10,12)+":"+e.substring(12,14)+"-00:00";return new Date(t)}function wt(e){let t=null;t=new Date(e);return t&&t instanceof Date?xt(t.toISOString()):""}function yt(e){let t=null;try{t=new Date(e.ts||e.date)}catch(e){}const i=t&&t instanceof Date?xt(t.toISOString()):"";return{date:t,timestamp:i}}function xt(e){return e.replace(/[-:T]/g,"").slice(0,14)}function kt(e,t,i,o){const n=new URLSearchParams;return n.set("view",e),n.set("url",t),n.set("ts",i),o&&n.set("waczhash",o),"#"+n.toString()}function St(e){return i(this,void 0,void 0,(function*(){try{new URL(e)}catch(t){e=new URL(e,document.baseURI).href}const t="id-"+(yield gt(e,"SHA-256")).slice(0,12);return{url:e,item:t}}))}function $t(e){let t=e.indexOf("://"),i=0,o="",n="",r="";return t>=0?(o=e.slice(0,t),t+=3):(t++,e.startsWith("//")&&(t+=2)),i=e.indexOf("/",t),i>0?(n=e.slice(t,i),r=e.slice(i)):(n=e.slice(t),r=""),{scheme:o,host:n,path:r}}const zt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>',_t='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"/></svg>',Ct='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"/></svg>',It='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"/></svg>';var Lt=__webpack_require__(431),Et=__webpack_require__.n(Lt);const At=new Intl.DateTimeFormat([...navigator.languages],{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Tt=new Intl.DateTimeFormat([...navigator.languages],{month:"2-digit",day:"2-digit",year:"numeric"}),Pt=new Intl.DateTimeFormat([...navigator.languages],{hour:"2-digit",minute:"2-digit",second:"2-digit"});class Dt extends me{constructor(){super(...arguments),this.collInfo=null,this.ts=null,this.url=null,this.active=!1}get renderRoot(){return this}static get embedStyles(){return h`
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
    `}render(){var e,t,i,o;const{numValid:n=0,numInvalid:r=0,domain:s,certFingerprint:a,datapackageHash:l,publicKey:c,software:d}=null!==(t=null===(e=this.collInfo)||void 0===e?void 0:e.verify)&&void 0!==t?t:{},h=null===(i=this.collInfo)||void 0===i?void 0:i.sourceUrl,u=a?`https://crt.sh/?q=${a}`:"",f=this.ts?At.format(vt(this.ts)):"";return Q`
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
              .svg=${Ke}
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
            ${h?Q`
                  <a
                    href="${h}"
                    class="button is-primary mt-4"
                    @keyup="${He}"
                  >
                    <span class="icon is-small">
                      <fa-icon
                        size="1.0em"
                        aria-hidden="true"
                        .svg="${zt}"
                      ></fa-icon>
                    </span>
                    <span>Download Archive</span>
                  </a>
                  <hr class="dropdown-divider mt-4" />
                `:X}
            <h2 class="mt-4">Technical Information</h2>
            <div class="embed-info-drop-statscontainer mb-4">
              ${this.url?Q`
                    <h3>Original URL:</h3>
                    <p>
                      <a target="_blank" href="${this.url}">${this.url}</a>
                    </p>
                  `:X}
              <h3 class="mt-2">Archived On:</h3>
              <p>${f}</p>
              ${s?Q`
                    <h3 class="mt-2">Observed By:</h3>
                    <p>${s}</p>
                    ${u?Q` <p>
                          <a target="_blank" href="${u}"
                            >View Certificate</a
                          >
                        </p>`:""}
                  `:d?Q` <h3 class="mt-2">Created With:</h3>
                    <p>${d}</p>`:""}
              ${!s&&c?Q` <h3 class="mt-2">Observer Public Key:</h3>
                    <p class="show-key">${c}</p>`:""}
              <h3 class="mt-2">Validation:</h3>
              ${n>0||r>0?Q` <p>
                    ${n} hashes
                    verified${r?Q`, ${r} invalid`:""}
                  </p>`:Q` <p>Not Available</p> `}
              <h3 class="mt-2">Package Hash:</h3>
              <p class="show-hash">${l}</p>
              ${null!=(null===(o=this.collInfo)||void 0===o?void 0:o.size)?Q`
                    <h3 class="mt-2">Size</h3>
                    <p>${Et()(Number(this.collInfo.size||0))}</p>
                  `:X}
            </div>
            ${h?Q``:""}
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
    `}onEmbedDrop(e){e.stopPropagation(),this.active=!this.active}}t([ye({type:Object})],Dt.prototype,"collInfo",void 0),t([ye({type:String})],Dt.prototype,"ts",void 0),t([ye({type:String})],Dt.prototype,"url",void 0),t([ye({type:Boolean})],Dt.prototype,"active",void 0),customElements.define("rwp-embed-receipt",Dt);var Ft="undefined"!=typeof window?window:null,Mt=null===Ft,Rt=Mt?void 0:Ft.document,Ot="addEventListener",Ut="removeEventListener",Bt="getBoundingClientRect",Nt="_a",qt="_b",jt="_c",Ht="horizontal",Wt=function(){return!1},Vt=Mt?"calc":["","-webkit-","-moz-","-o-"].filter((function(e){var t=Rt.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length})).shift()+"calc",Gt=function(e){return"string"==typeof e||e instanceof String},Kt=function(e){if(Gt(e)){var t=Rt.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},Yt=function(e,t,i){var o=e[t];return void 0!==o?o:i},Qt=function(e,t,i,o){if(t){if("end"===o)return 0;if("center"===o)return e/2}else if(i){if("start"===o)return 0;if("center"===o)return e/2}return e},Zt=function(e,t){var i=Rt.createElement("div");return i.className="gutter gutter-"+t,i},Jt=function(e,t,i){var o={};return Gt(t)?o[e]=t:o[e]=Vt+"("+t+"% - "+i+"px)",o},Xt=function(e,t){var i;return(i={})[e]=t+"px",i};const ei=function(e,t){if(void 0===t&&(t={}),Mt)return{};var i,o,n,r,s,a,l=e;Array.from&&(l=Array.from(l));var c=Kt(l[0]).parentNode,d=getComputedStyle?getComputedStyle(c):null,h=d?d.flexDirection:null,u=Yt(t,"sizes")||l.map((function(){return 100/l.length})),f=Yt(t,"minSize",100),p=Array.isArray(f)?f:l.map((function(){return f})),m=Yt(t,"maxSize",1/0),b=Array.isArray(m)?m:l.map((function(){return m})),g=Yt(t,"expandToMin",!1),v=Yt(t,"gutterSize",10),w=Yt(t,"gutterAlign","center"),y=Yt(t,"snapOffset",30),x=Yt(t,"dragInterval",1),k=Yt(t,"direction",Ht),S=Yt(t,"cursor",k===Ht?"col-resize":"row-resize"),$=Yt(t,"gutter",Zt),z=Yt(t,"elementStyle",Jt),_=Yt(t,"gutterStyle",Xt);function C(e,t,o,n){var r=z(i,t,o,n);Object.keys(r).forEach((function(t){e.style[t]=r[t]}))}function I(){return a.map((function(e){return e.size}))}function L(e){return"touches"in e?e.touches[0][o]:e[o]}function E(e){var t=a[this.a],i=a[this.b],o=t.size+i.size;t.size=e/this.size*o,i.size=o-e/this.size*o,C(t.element,t.size,this[qt],t.i),C(i.element,i.size,this[jt],i.i)}function A(e){var i,o=a[this.a],n=a[this.b];this.dragging&&(i=L(e)-this.start+(this[qt]-this.dragOffset),x>1&&(i=Math.round(i/x)*x),i<=o.minSize+y+this[qt]?i=o.minSize+this[qt]:i>=this.size-(n.minSize+y+this[jt])&&(i=this.size-(n.minSize+this[jt])),i>=o.maxSize-y+this[qt]?i=o.maxSize+this[qt]:i<=this.size-(n.maxSize-y+this[jt])&&(i=this.size-(n.maxSize+this[jt])),E.call(this,i),Yt(t,"onDrag",Wt)(I()))}function T(){var e=a[this.a].element,t=a[this.b].element,o=e[Bt](),s=t[Bt]();this.size=o[i]+s[i]+this[qt]+this[jt],this.start=o[n],this.end=o[r]}function P(e){var t=function(e){if(!getComputedStyle)return null;var t=getComputedStyle(e);if(!t)return null;var i=e[s];return 0===i?null:i-=k===Ht?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)}(c);if(null===t)return e;if(p.reduce((function(e,t){return e+t}),0)>t)return e;var i=0,o=[],n=e.map((function(n,r){var s=t*n/100,a=Qt(v,0===r,r===e.length-1,w),l=p[r]+a;return s<l?(i+=l-s,o.push(0),l):(o.push(s-l),s)}));return 0===i?e:n.map((function(e,n){var r=e;if(i>0&&o[n]-i>0){var s=Math.min(i,o[n]-i);i-=s,r=e-s}return r/t*100}))}function D(){var e=this,i=a[e.a].element,o=a[e.b].element;e.dragging&&Yt(t,"onDragEnd",Wt)(I()),e.dragging=!1,Ft[Ut]("mouseup",e.stop),Ft[Ut]("touchend",e.stop),Ft[Ut]("touchcancel",e.stop),Ft[Ut]("mousemove",e.move),Ft[Ut]("touchmove",e.move),e.stop=null,e.move=null,i[Ut]("selectstart",Wt),i[Ut]("dragstart",Wt),o[Ut]("selectstart",Wt),o[Ut]("dragstart",Wt),i.style.userSelect="",i.style.webkitUserSelect="",i.style.MozUserSelect="",i.style.pointerEvents="",o.style.userSelect="",o.style.webkitUserSelect="",o.style.MozUserSelect="",o.style.pointerEvents="",e.gutter.style.cursor="",e.parent.style.cursor="",Rt.body.style.cursor=""}function F(e){if(!("button"in e)||0===e.button){var i=this,o=a[i.a].element,n=a[i.b].element;i.dragging||Yt(t,"onDragStart",Wt)(I()),e.preventDefault(),i.dragging=!0,i.move=A.bind(i),i.stop=D.bind(i),Ft[Ot]("mouseup",i.stop),Ft[Ot]("touchend",i.stop),Ft[Ot]("touchcancel",i.stop),Ft[Ot]("mousemove",i.move),Ft[Ot]("touchmove",i.move),o[Ot]("selectstart",Wt),o[Ot]("dragstart",Wt),n[Ot]("selectstart",Wt),n[Ot]("dragstart",Wt),o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.MozUserSelect="none",n.style.pointerEvents="none",i.gutter.style.cursor=S,i.parent.style.cursor=S,Rt.body.style.cursor=S,T.call(i),i.dragOffset=L(e)-i.end}}k===Ht?(i="width",o="clientX",n="left",r="right",s="clientWidth"):"vertical"===k&&(i="height",o="clientY",n="top",r="bottom",s="clientHeight"),u=P(u);var M=[];function R(e){var t=e.i===M.length,i=t?M[e.i-1]:M[e.i];T.call(i);var o=t?i.size-e.minSize-i[jt]:e.minSize+i[qt];E.call(i,o)}return a=l.map((function(e,t){var o,n={element:Kt(e),size:u[t],minSize:p[t],maxSize:b[t],i:t};if(t>0&&((o={a:t-1,b:t,dragging:!1,direction:k,parent:c})[qt]=Qt(v,t-1==0,!1,w),o[jt]=Qt(v,!1,t===l.length-1,w),"row-reverse"===h||"column-reverse"===h)){var r=o.a;o.a=o.b,o.b=r}if(t>0){var s=$(t,k,n.element);!function(e,t,o){var n=_(i,t,o);Object.keys(n).forEach((function(t){e.style[t]=n[t]}))}(s,v,t),o[Nt]=F.bind(o),s[Ot]("mousedown",o[Nt]),s[Ot]("touchstart",o[Nt]),c.insertBefore(s,n.element),o.gutter=s}return C(n.element,n.size,Qt(v,0===t,t===l.length-1,w),t),t>0&&M.push(o),n})),a.forEach((function(e){var t=e.element[Bt]()[i];t<e.minSize&&(g?R(e):e.minSize=t)})),{setSizes:function(e){var t=P(e);t.forEach((function(e,i){if(i>0){var o=M[i-1],n=a[o.a],r=a[o.b];n.size=t[i-1],r.size=e,C(n.element,n.size,o[qt],n.i),C(r.element,r.size,o[jt],r.i)}}))},getSizes:I,collapse:function(e){R(a[e])},destroy:function(e,t){M.forEach((function(o){if(!0!==t?o.parent.removeChild(o.gutter):(o.gutter[Ut]("mousedown",o[Nt]),o.gutter[Ut]("touchstart",o[Nt])),!0!==e){var n=z(i,o.a.size,o[qt]);Object.keys(n).forEach((function(e){a[o.a].element.style[e]="",a[o.b].element.style[e]=""}))}}))},parent:c,pairs:M}};var ti="";function ii(e){ti=e}var oi={name:"default",resolver:e=>function(e=""){if(!ti){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)ii(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let i="";t&&(i=t.getAttribute("src")),ii(i.split("/").slice(0,-1).join("/"))}}return ti.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},ni={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ri={name:"system",resolver:e=>e in ni?`data:image/svg+xml,${encodeURIComponent(ni[e])}`:""},si=[oi,ri],ai=[];function li(e){return si.find((t=>t.name===e))}var ci,di=Object.defineProperty,hi=Object.defineProperties,ui=Object.getOwnPropertyDescriptor,fi=Object.getOwnPropertyDescriptors,pi=Object.getOwnPropertySymbols,mi=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,gi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),vi=(e,t,i)=>t in e?di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,wi=(e,t)=>{for(var i in t||(t={}))mi.call(t,i)&&vi(e,i,t[i]);if(pi)for(var i of pi(t))bi.call(t,i)&&vi(e,i,t[i]);return e},yi=(e,t)=>hi(e,fi(t)),xi=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ui(t,i):t,s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&di(t,i,r),r},ki=function(e,t){this[0]=e,this[1]=t},Si=e=>{var t,i=e[gi("asyncIterator")],o=!1,n={};return null==i?(i=e[gi("iterator")](),t=e=>n[e]=t=>i[e](t)):(i=i.call(e),t=e=>n[e]=t=>{if(o){if(o=!1,"throw"===e)throw t;return t}return o=!0,{done:!1,value:new ki(new Promise((o=>{var n=i[e](t);if(!(n instanceof Object))throw TypeError("Object expected");o(n)})),1)}}),n[gi("iterator")]=()=>n,t("next"),"throw"in i?t("throw"):n.throw=e=>{throw e},"return"in i&&t("return"),n};!function(e,t){!function(e){si=si.filter((t=>t.name!==e))}(e),si.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),ai.forEach((t=>{t.library===e&&t.setIcon()}))}("system",{resolver:e=>"x-lg"===e?ri.resolver(e):""});let $i=ci=class extends me{static get styles(){return Ne(ci.compStyles)}static get compStyles(){return h`
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
    `}render(){return Q`${this.label?Q`<p class="minihead">${this.label}</p>`:X}
      <div class="col-content">
        <slot></slot>
        ${this.copy?Q` <sl-copy-button .value=${this.copy||""}>
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
            </sl-copy-button>`:X}
      </div>`}};t([ye({type:String})],$i.prototype,"copy",void 0),t([ye({type:String})],$i.prototype,"label",void 0),t([ye({type:String})],$i.prototype,"class",void 0),$i=ci=t([ge("wr-labeled-field")],$i);class zi extends me{constructor(){super(...arguments),this.item=null,this.detailed=!1,this.canDelete=!1}static get styles(){return Ne(zi.compStyles)}static get compStyles(){return h`
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
    `}renderSource(e=!0){const t=this.item;return Q`
      <wr-labeled-field
        label="Source"
        copy="${t.sourceUrl}"
        class="column is-4"
        >${t.sourceUrl&&(t.sourceUrl.startsWith("http://")||t.sourceUrl.startsWith("https://"))?Q` <a href="${t.sourceUrl}">${t.sourceUrl}</a> `:Q` ${t.sourceUrl}`}
        ${t.sourceUrl&&t.sourceUrl.startsWith("googledrive://")?Q` <i>(${t.filename})</i>`:X}
      </wr-labeled-field>
      ${e?Q`<wr-labeled-field
            label="Archived Item ID"
            .copy=${t.coll}
            class="column"
          >
            ${t.coll||"No ID"}
          </wr-labeled-field>`:X}
      <wr-labeled-field label="Date Loaded" class="column is-2">
        ${t.ctime?At.format(new Date(t.ctime)):X}
      </wr-labeled-field>
      <wr-labeled-field label="Total Size" class="column is-2">
        ${Et()(Number(t.totalSize||t.size||0))}
      </wr-labeled-field>
    `}renderSummaryView(){const e=this.item;return Q` <div class="columns">
      <div class="column col-title is-4">
        <span class="subtitle has-text-weight-bold">
          <a href="?source=${encodeURIComponent(e.sourceUrl)}"
            >${e.name||e.title||e.filename}</a
          >
        </span>
      </div>
      ${this.renderSource(!1)}
    </div>`}renderDetailed(){const e=this.item,{numValid:t=0,numInvalid:i=0,domain:o,certFingerprint:n,datapackageHash:r,publicKey:s,software:a}=this.item.verify||{},l=n?`https://crt.sh/?q=${n}`:"";return Q` <div class="columns">
      ${e.name||e.title?Q`<wr-labeled-field label="Title" class="column">
            ${e.name||e.title}
          </wr-labeled-field>`:X}
      <wr-labeled-field label="Filename" class="column">
        ${e.filename}
      </wr-labeled-field>
      ${e.resources?Q`<wr-labeled-field label="Files" class="column">
            <ol style="padding: revert">
              ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(e,t){if(void 0!==e){let i=0;for(const o of e)yield t(o,i++)}}(e.resources,(e=>Q`<li>
                    <a href="${e.path}">${e.name+"\n"}</a>
                  </li>`))}
            </ol>
          </wr-labeled-field>`:X}
      ${this.renderSource()}
      ${o?Q`
            <wr-labeled-field label="Observed By" class="column">
              <p>${o}</p>
              ${l?Q`<span
                    ><a target="_blank" href="${l}"
                      >&nbsp;View Certificate</a
                    ></span
                  >`:X}
            </wr-labeled-field>
          `:X}
      ${a?Q`
            <wr-labeled-field label="Created With" class="column">
              ${a||"Unknown"}
            </wr-labeled-field>
          `:X}

      <wr-labeled-field label="Validation" class="column">
        ${t>0||i>0?Q` <p>
              ${t} hashes
              verified${i?Q`, ${i} invalid`:X}
            </p>`:Q` Not Available`}
      </wr-labeled-field>

      <wr-labeled-field
        label="Package Hash"
        class="column"
        .copy=${r}
      >
        ${r||"Not Available"}
      </wr-labeled-field>

      <wr-labeled-field
        label="Observer Public Key"
        class="column"
        .copy=${s}
      >
        ${s||"Not Available"}
      </wr-labeled-field>

      <wr-labeled-field label="Loading Mode" class="column">
        ${e.onDemand?"Download On-Demand":"Fully Local"}
      </wr-labeled-field>
    </div>`}render(){return this.detailed?this.renderDetailed():this.renderSummaryView()}onCopy(e,t){return e.preventDefault(),e.stopPropagation(),t&&navigator.clipboard.writeText(t),!1}onPurge(e){const t={reload:e};this.dispatchEvent(new CustomEvent("item-purge",{detail:t}))}}t([ye({type:Object})],zi.prototype,"item",void 0),t([ye({type:Boolean})],zi.prototype,"detailed",void 0),t([ye({type:Boolean})],zi.prototype,"canDelete",void 0),customElements.define("wr-item-info",zi);const _i="search://";class Ci extends me{constructor(){super(),this.inited=!1,this.sourceUrl=null,this.downloadUrl=null,this.loadInfo=null,this.showSidebar=null,this.itemInfo=null,this.item="",this.hasStory=!1,this.isLoading=!1,this.tabData={},this.url="",this.ts="",this.isFullscreen=null,this.menuActive=!1,this.embed=null,this.embedDropdownActive=!1,this.editable=!1,this.browsable=!0,this.clearable=!0,this.isVisible=!0,this.favIconUrl="",this.appName="ReplayWeb.page",this.appVersion=je,this.autoUpdateInterval=10,this.swName=null,this.replayNotFoundError=!1,this.multiTs=[],this.splitter=null,this._replaceLoc=!1,this._locUpdateNeeded=!1,this._locationHash="",this._autoUpdater=null,this.archiveInfoDialog=ut(),this.tabNames=["pages","story","resources","info"],this.tabLabels={pages:"Pages",story:"Story",resources:"URLs"},this._lastUrlUpdate=null,this.showSidebar="1"===localStorage.getItem("pages:showSidebar")&&this.browsable}firstUpdated(){this.inited=!0,window.addEventListener("hashchange",(()=>this.onHashChange())),this.addEventListener("fullscreenchange",(()=>{this.isFullscreen=!!document.fullscreenElement})),this.embed&&this.loadInfo&&this.loadInfo.hideOffscreen&&(this.observer=new IntersectionObserver((e=>{this.isVisible=e[0].isIntersecting})),this.observer.observe(this))}runUpdateLoop(){var e;return i(this,void 0,void 0,(function*(){try{for(;this.editable&&this.autoUpdateInterval&&(!(null===(e=this.itemInfo)||void 0===e?void 0:e.pages)||this.itemInfo.pages.length<100);)yield new Promise((e=>setTimeout(e,1e3*this.autoUpdateInterval))),yield this.doUpdateInfo(!0)}finally{this._autoUpdater=null}}))}getMultiTimestamps(){return i(this,void 0,void 0,(function*(){if(!this.tabData.url)return;const e=yield fetch(Oe+"/c/"+this.item+"/ts/?url="+window.encodeURIComponent(this.tabData.url));if(200!==e.status)return void(this.multiTs=[]);const t=yield e.json();this.multiTs=t.timestamps}))}willUpdate(e){if(e.has("tabData")){const t={};Object.entries(this.tabData).forEach((([e,i])=>{i&&(t[e]=i)})),this.tabData=t;const i=e.get("tabData");this.tabData.url&&this.tabData.url!==(null==i?void 0:i.url)&&this.getMultiTimestamps()}}updated(e){var t;if(e.has("sourceUrl")&&this.doUpdateInfo(),e.has("editable")&&this.editable&&this.autoUpdateInterval&&!this._autoUpdater&&(this._autoUpdater=this.runUpdateLoop()),e.has("tabData")){if(!(null===(t=this.itemInfo)||void 0===t?void 0:t.coll))return;const i="#"+new URLSearchParams(this.tabData).toString();if(this.tabData.url||(this.url=_i+decodeURIComponent(this._paramsToString(this.tabData))),i!==this._locationHash){if(this._locationHash=i,this._replaceLoc||0===Object.keys(e.get("tabData")||{}).length){const e=new URL(window.location.href);e.hash=this._locationHash,window.history.replaceState({},"",e.href),this._replaceLoc=!1}else if(window.location.hash=this._locationHash,!this.showSidebar){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.focus()}if(this.embed&&window.parent!==window){const{url:e,ts:t,view:i,query:o,title:n}=this.tabData,r=this._lastUrlUpdate,s=this.replayNotFoundError;if(!r||r.url!==e||r.ts!==t||r.view!==i||r.query!==o||r.title!==n){const r={type:"urlchange",url:e,ts:t,view:i,query:o,title:n,replayNotFoundError:s};window.parent.postMessage(r,"*"),this._lastUrlUpdate=r}}}this._locUpdateNeeded=!1}e.has("showSidebar")&&(this.embed||localStorage.setItem("pages:showSidebar",this.showSidebar?"1":"0")),(e.has("tabData")||e.has("showSidebar"))&&this.configureSplitter()}configureSplitter(){if(this.tabData.url&&this.showSidebar){const e=this.renderRoot.querySelector("#contents"),t=this.renderRoot.querySelector("wr-coll-replay");if(e&&t&&!this.splitter){const i={sizes:[30,70],minSize:[300,300],gutterSize:4,onDragStart(){t.setDisablePointer(!0)},onDragEnd(){t.setDisablePointer(!1)}};this.splitter=ei([e,t],i)}}else if(this.splitter){try{this.splitter.destroy()}catch(e){}this.splitter=null}}doUpdateInfo(e=!1){var t,o,n,r;return i(this,void 0,void 0,(function*(){if(e&&this.tabData.url&&!this.showSidebar)return;let i=null===(t=this.loadInfo)||void 0===t?void 0:t.customColl;if(!i){i=(yield St(this.sourceUrl)).item}this.item=i;const s=Oe+"/c/"+i,a=Ue+"/"+i,l=yield fetch(s+"?all=1");if(200!=l.status)return void(this.itemInfo={});const c=yield l.json();if(this.itemInfo=Object.assign({apiPrefix:s,replayPrefix:a,coll:i},c),null===(n=null===(o=this.loadInfo)||void 0===o?void 0:o.extraConfig)||void 0===n?void 0:n.headers){const e=this.loadInfo.extraConfig.headers;yield fetch(`${s}/updateAuth`,{method:"POST",body:JSON.stringify({headers:e})})}const{title:d,name:h,filename:u,downloadUrl:f}=this.itemInfo;d||(this.itemInfo.title=h||u),this.downloadUrl=null===f?null:f||this.sourceUrl,"replayonly"!==this.embed&&"replay-with-info"!==this.embed||(this.showSidebar=!1),this.hasStory=Boolean(this.itemInfo.desc||(null===(r=this.itemInfo.lists)||void 0===r?void 0:r.length)),this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{collInfo:this.itemInfo,alreadyLoaded:!0}})),this.onHashChange()}))}onItemLoaded(e){this.doUpdateInfo(),this.loadInfo=null,e.detail.sourceUrl&&(this.sourceUrl=e.detail.sourceUrl),this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{sourceUrl:this.sourceUrl,collInfo:this.itemInfo}}))}onItemUpdate(e){this.editable&&(this.itemInfo=Object.assign(Object.assign({},this.itemInfo),e.detail))}onHashChange(){var e,t,i;const o=window.location.hash;if(o&&o!==this._locationHash&&(this.tabData=Object.fromEntries(new URLSearchParams(o.slice(1)).entries()),this._locationHash=o),(null===(e=this.itemInfo)||void 0===e?void 0:e.coll)&&(!this.tabData.view||!this.tabNames.includes(this.tabData.view))){const e=this.hasStory?"story":this.editable||(null===(t=this.itemInfo.pages)||void 0===t?void 0:t.length)?"pages":"resources";this.tabData=Object.assign(Object.assign({},this.tabData),{view:e})}if(this.tabData.url&&this.tabData.url.startsWith("page:")){const e=Number(this.tabData.url.slice(5));if((null===(i=this.itemInfo)||void 0===i?void 0:i.pages)&&!isNaN(e)&&e<this.itemInfo.pages.length){const t=this.itemInfo.pages[e];this.tabData.url=t.url,this.tabData.ts=yt(t).timestamp}}this.hasStory||"story"!==this.tabData.view||(this.tabData.view="pages"),this.tabData.url&&this.tabData.query&&this.browsable&&(this.showSidebar=!0)}onTabClick(e){e.preventDefault();const t=e.currentTarget.getAttribute("href");return this.tabData=Object.assign(Object.assign({},this.tabData),{view:t.slice(1)}),!1}onItemTabNav(e){if(e.detail.reload)return void this.onRefresh(null,!0);const t=e.target.id,{data:i,replaceLoc:o,replayNotFoundError:n}=e.detail;this.replayNotFoundError=n,(t===this.tabData.view||"replay"===t&&this.tabData.url||this.showSidebar&&this.tabData.url)&&this.updateTabData(i,o)}updateTabData(e,t=!1){this.tabData=Object.assign(Object.assign({},this.tabData),e),this.tabData.url&&(this.url=this.tabData.url||""),this.tabData.ts&&(this.ts=this.tabData.ts||""),this._replaceLoc=!this._locUpdateNeeded&&t,this._locUpdateNeeded=!0}static get styles(){return Ne(Ci.compStyles)}static get compStyles(){return h`
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

      @media screen and (max-width: ${qe?h`1163px`:h`1053px`}) {
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

      ${Dt.embedStyles}

      ${Ci.replayBarStyles}
    `}static get replayBarStyles(){return h`
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
        font-variant-numeric: tabular-nums;
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

      .timestamp-menu-item {
        font-variant-numeric: tabular-nums;
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
    `}render(){var e;if(!this.inited)return Q``;const t=!!this.tabData.url,i=t&&this.showSidebar;if(!t&&(null===(e=this.tabData)||void 0===e?void 0:e.view)){const e={title:this.tabLabels[this.tabData.view],replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}return this.itemInfo&&!this.itemInfo.coll?Q` <wr-loader
        .loadInfo="${this.loadInfo}"
        embed="${this.embed||""}"
        swName="${$e(null===this.swName?void 0:this.swName)}"
        .coll="${this.item}"
        sourceUrl="${this.sourceUrl||""}"
        @coll-loaded=${this.onItemLoaded}
      ></wr-loader>`:this.itemInfo?Q`
        ${this.renderLocationBar()} ${this.renderVerifyInfo()}
        <sl-dialog label="Archive Info" ${mt(this.archiveInfoDialog)}>
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
            ${i||!t?this.renderItemTabs(i):Q``}
          </div>

          ${t&&this.isVisible?Q`
                <wr-coll-replay
                  role="main"
                  tabindex="-1"
                  .collInfo="${this.itemInfo}"
                  sourceUrl="${this.sourceUrl||""}"
                  url="${this.tabData.url||""}"
                  ts="${this.tabData.ts||""}"
                  waczhash="${this.tabData.waczhash||""}"
                  @coll-tab-nav="${this.onItemTabNav}"
                  id="replay"
                  @replay-loading="${this.onReplayLoading}"
                  @replay-favicons="${this.onFavIcons}"
                >
                </wr-coll-replay>
              `:""}
        </div>
      `:Q``}renderTabHeader(e){return Q` <nav
      class="main tabs is-centered ${e?"sidebar":""}"
      aria-label="tabs"
    >
      <ul>
        ${e?Q` <li class="sidebar-nav left">
              <a
                role="button"
                href="#"
                @click="${this.onHideSidebar}"
                @keyup="${He}"
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
        ${this.hasStory?Q` <li
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

        ${e?Q` <li class="sidebar-nav right">
              <a
                role="button"
                href="#"
                @click="${this.onFullPageView}"
                @keyup="${He}"
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
    </nav>`}renderToolbarLeft(){const e=!!this.tabData.url;return Q` ${this.browsable?Q` <a
            href="#"
            role="button"
            class="button narrow is-borderless is-hidden-mobile ${e?"":"grey-disabled"}"
            @click="${this.onShowPages}"
            @keyup="${He}"
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
                .svg="${_t}"
              ></fa-icon>
            </span>
          </a>`:""}
      <a
        href="#"
        role="button"
        class="button narrow is-borderless"
        @click="${this.onGoBack}"
        @keyup="${He}"
        title="Back"
        aria-label="Back"
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
        class="button narrow is-borderless"
        @click="${this.onGoForward}"
        @keyup="${He}"
        title="Forward"
        aria-label="Forward"
      >
        <span class="icon is-small">
          <fa-icon
            size="1.0em"
            class="has-text-grey"
            aria-hidden="true"
            .svg="${Qe}"
          ></fa-icon>
        </span>
      </a>
      <a
        href="#"
        role="button"
        class="button narrow is-borderless ${this.isLoading?"is-loading":""}"
        id="refresh"
        @click="${this.onRefresh}"
        @keyup="${He}"
        title="Reload"
        aria-label="Reload"
      >
        <span class="icon is-small">
          ${this.isLoading?"":Q`
                <fa-icon
                  size="1.0em"
                  class="has-text-grey"
                  aria-hidden="true"
                  .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"/></svg>'}"
                ></fa-icon>
              `}
        </span>
      </a>`}renderLocationBar(){if("replayonly"===this.embed||"replay-with-info"==this.embed)return"";const e=!!this.tabData.url,t=e&&this.favIconUrl;return Q` <a
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
              ${t?Q` <span class="favicon icon is-small is-left">
                    <img src="${this.favIconUrl}" />
                  </span>`:Q``}
            </div>
          </form>
          ${this.renderToolbarRight()}
        </div>
      </nav>
      <p id="skip-replay-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderToolbarRight(){var e,t;const i=!!this.tabData.url,o=this.ts?At.format(vt(this.ts)):"";return Q` <div
      class="dropdown is-right ${this.menuActive?"is-active":""}"
      @click="${()=>this.menuActive=!1}"
    >
      <a
        href="#"
        role="button"
        class="button narrow is-borderless is-hidden-touch"
        id="fullscreen"
        @click="${this.onFullscreenToggle}"
        @keyup="${He}"
        title="${this.isFullscreen?"Exit Full Screen":"Full Screen"}"
        aria-label="${this.isFullscreen?"Exit Fullscreen":"Fullscreen"}"
      >
        <span class="icon is-small">
          <fa-icon
            size="1.0em"
            class="has-text-grey"
            aria-hidden="true"
            .svg="${this.isFullscreen?It:Ct}"
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
            @keyup="${He}"
          >
            <span class="icon is-small">
              <fa-icon
                size="1.0em"
                class="has-text-grey"
                aria-hidden="true"
                .svg="${this.isFullscreen?It:Ct}"
              ></fa-icon>
            </span>
            <span>Full Screen</span>
          </a>
          ${this.browsable?Q` <a
                href="#"
                role="button"
                class="dropdown-item is-hidden-tablet ${i?"":"grey-disabled"}"
                @click="${this.onShowPages}"
                @keyup="${He}"
              >
                <span class="icon is-small">
                  <fa-icon
                    size="1.0em"
                    class="has-text-grey"
                    aria-hidden="true"
                    .svg="${_t}"
                  ></fa-icon>
                </span>
                <span>Browse Contents</span>
              </a>`:""}
          ${this.clearable?Q` <hr class="dropdown-divider is-hidden-desktop" />
                <a
                  href="#"
                  role="button"
                  class="dropdown-item"
                  @click="${this.onPurgeCache}"
                  @keyup="${He}"
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
                </a>`:Q``}
          ${!this.editable&&(null===(e=this.downloadUrl)||void 0===e?void 0:e.startsWith("http://"))||(null===(t=this.downloadUrl)||void 0===t?void 0:t.startsWith("https://"))?Q` <hr class="dropdown-divider" />
                <a
                  href="${this.downloadUrl}"
                  role="button"
                  class="dropdown-item"
                  @keyup="${He}"
                >
                  <span class="icon is-small">
                    <fa-icon
                      size="1.0em"
                      class="has-text-grey"
                      aria-hidden="true"
                      .svg="${zt}"
                    ></fa-icon>
                  </span>
                  <span>Download Archive</span>
                </a>`:Q``}
          ${o?Q` <hr class="dropdown-divider is-hidden-desktop" />
                <div class="dropdown-item info is-hidden-tablet">
                  <span class="menu-head">Capture Date</span>${o}
                </div>`:""}
          ${this.editable||this.downloadUrl!==this.sourceUrl&&this.embed?"":Q` <a
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
              </a>`}
          <hr class="dropdown-divider" />
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
              .svg=${bt}
            ></fa-icon>
            <span>&nbsp;About ${this.appName}</span>
            <span class="menu-version">(${this.appVersion})</span>
          </a>
        </div>
      </div>
    </div>`}renderTimestamp(){var e;const t=[];null===(e=this.multiTs)||void 0===e||e.forEach((e=>{try{const i=wt(+e),o=i?At.format(vt(i)):"";t.push({date:i,label:o})}catch(e){}}));const i=this.ts?At.format(vt(this.ts)):"";return Q`<div id="datetime" class="control is-hidden-mobile">
      ${t.length>1?Q`
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
                ${t.map((({date:e,label:t})=>{const i=this.ts===e;return Q`<sl-menu-item
                    class="timestamp-menu-item"
                    value=${e}
                    aria-selected="${i}"
                  >
                    ${t}</sl-menu-item
                  >`}))}
              </sl-menu>
            </sl-dropdown>
          `:i}
    </div>`}renderVerifyInfo(){return"replay-with-info"!==this.embed?"":Q`<rwp-embed-receipt
      .collInfo=${this.itemInfo||{}}
      url=${this.url}
      ts=${this.ts}
    >
    </rwp-embed-receipt>`}dragStart(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!0)}dragEnd(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!1)}renderItemInfo(){return this.itemInfo?Q`<wr-item-info
      class="is-list"
      .item="${this.itemInfo}"
      ?detailed="${!0}"
      ?canDelete="${!this.embed}"
      @item-purge="${this.onPurgeCache}"
    ></wr-item-info>`:Q`<sl-alert open variant="warning">
        <fa-icon
          slot="icon"
          .svg=${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'}
          aria-hidden="true"
        ></fa-icon>
        <strong>Archive info is not available</strong><br />
        Please reload and try again.
      </sl-alert>`}renderItemTabs(e){const t=this.hasStory&&"story"===this.tabData.view,i="pages"===this.tabData.view,o="resources"===this.tabData.view;return Q`
      ${t?Q` <wr-coll-story
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
      ${o?Q` <wr-coll-resources
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
      ${i?Q` <wr-page-view
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
    `}skipMenu(e){var t;e.preventDefault(),null===(t=this.renderRoot.querySelector("#skip-replay-target"))||void 0===t||t.focus()}onKeyDown(e){"Esc"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.value=this.url)}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",(()=>{this.menuActive=!1}),{once:!0})}onFullscreenToggle(e){e.preventDefault(),this.menuActive=!1,this.isFullscreen?document.exitFullscreen():this.requestFullscreen()}onGoBack(e){e.preventDefault(),this.menuActive=!1,window.history.back()}onGoForward(e){e.preventDefault(),this.menuActive=!1,window.history.forward()}onShowPages(e){e.preventDefault(),this.showSidebar||document.documentElement.clientWidth>=769?this.showSidebar=!this.showSidebar:(this.showSidebar=!1,this.updateTabData({url:"",ts:""})),this.browsable||(this.showSidebar=!1)}onFullPageView(e){e.preventDefault(),this.updateTabData({url:"",ts:""})}onHideSidebar(e){e.preventDefault(),this.showSidebar=!1}onReplayLoading(e){return i(this,void 0,void 0,(function*(){this.embed&&window.parent!==window&&this.isLoading!==e.detail.loading&&window.parent.postMessage(Object.assign({type:"page-loading"},e.detail),"*"),this.isLoading=e.detail.loading}))}onFavIcons(e){return i(this,void 0,void 0,(function*(){this.embed&&window.parent!==window&&window.parent.postMessage(Object.assign({type:"favicons"},e.detail),"*");for(const t of e.detail.icons){const e=yield fetch(t.href);if(200===e.status){const i=e.headers.get("Content-Type");if(i&&!i.startsWith("text/"))return void(this.favIconUrl=t.href)}}this.favIconUrl=""}))}onPurgeCache(e){e.preventDefault();const t=!e.detail||void 0===e.detail.reload||e.detail.reload;this.deleteFully(t)}deleteFully(e=!1){return i(this,void 0,void 0,(function*(){const t=this.itemInfo.apiPrefix+(e?"?reload=1":""),i=yield fetch(t,{method:"DELETE"});200!==i.status&&console.warn("purge failed: "+i.status),e||this.embed?window.location.reload():window.location.search=""}))}onSubmit(e){e.preventDefault();const t=this.renderRoot.querySelector("input");return t.value?this.navigateTo(t.value):t.value=this.url,!1}onLostFocus(e){e.currentTarget.value||(e.currentTarget.value=this.url)}onTimestampDropdownBtnBlur(e){const t=e.currentTarget.closest("sl-dropdown"),i=e.relatedTarget;i&&(null==t?void 0:t.contains(i))||(null==t?void 0:t.open)&&t.hide()}onSelectTimestamp(e){const{item:t}=e.detail;this.updateTabData({ts:t.value})}navigateTo(e){let t;if(e.startsWith("http://")||e.startsWith("https://")){if(t={url:e},e===this.tabData.url){const e=this.renderRoot.querySelector("wr-coll-replay");return void(e&&e.refresh())}}else t=e.startsWith(_i)?this._stringToParams(e):{query:e,view:"pages"};this.updateTabData(t)}_stringToParams(e){const t=new URLSearchParams(e.slice(9)),i={url:"",ts:""};for(const e of["query","view","currList","currMime","urlSearchType"])t.has(e)&&(i[e]=t.get(e));return i}_paramsToString(e){const t=new URLSearchParams;for(const i of["query","view","currList","currMime","urlSearchType"])i in e&&t.set(i,String(e[i]));return t.toString()}onRefresh(e,t=!1){if(e&&e.preventDefault(),this.menuActive=!1,this.tabData.url){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.refresh()}else t||window.location.reload()}onAbout(){this.dispatchEvent(new CustomEvent("about-show"))}onShowInfoDialog(){var e;null===(e=this.archiveInfoDialog.value)||void 0===e||e.show()}onHideInfoDialog(){var e;null===(e=this.archiveInfoDialog.value)||void 0===e||e.hide()}}t([ye({type:Boolean})],Ci.prototype,"inited",void 0),t([ye({type:String})],Ci.prototype,"sourceUrl",void 0),t([ye({type:String})],Ci.prototype,"downloadUrl",void 0),t([ye({type:Object,attribute:!1})],Ci.prototype,"loadInfo",void 0),t([ye({type:Boolean})],Ci.prototype,"showSidebar",void 0),t([ye({type:Object,attribute:!1})],Ci.prototype,"itemInfo",void 0),t([ye({type:String})],Ci.prototype,"item",void 0),t([ye({type:Boolean})],Ci.prototype,"hasStory",void 0),t([ye({type:Boolean})],Ci.prototype,"isLoading",void 0),t([ye({type:Object,attribute:!1})],Ci.prototype,"tabData",void 0),t([ye({type:String})],Ci.prototype,"url",void 0),t([ye({type:String})],Ci.prototype,"ts",void 0),t([ye({type:Boolean})],Ci.prototype,"isFullscreen",void 0),t([ye({type:Boolean})],Ci.prototype,"menuActive",void 0),t([ye({type:String})],Ci.prototype,"embed",void 0),t([ye({type:Boolean})],Ci.prototype,"embedDropdownActive",void 0),t([ye({type:Boolean})],Ci.prototype,"editable",void 0),t([ye({type:Boolean})],Ci.prototype,"browsable",void 0),t([ye({type:Boolean})],Ci.prototype,"clearable",void 0),t([ye({type:Boolean})],Ci.prototype,"isVisible",void 0),t([ye({type:String})],Ci.prototype,"favIconUrl",void 0),t([ye({type:String})],Ci.prototype,"appName",void 0),t([ye({type:String})],Ci.prototype,"appVersion",void 0),t([ye({type:Number})],Ci.prototype,"autoUpdateInterval",void 0),t([ye({type:String})],Ci.prototype,"swName",void 0),t([ye({type:Boolean})],Ci.prototype,"replayNotFoundError",void 0),t([ye({type:Array})],Ci.prototype,"multiTs",void 0),customElements.define("wr-item",Ci);const Ii='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>';class Li extends me{get typeFilter(){return""}get indexParams(){return""}constructor(){super(),this.items=[],this.query="",this.filteredItems=[],this.sortedItems=[],this.hideHeader=!1,this.dateName="Date Loaded",this.headerName="Loaded Archives",this._deleting={},this.hideHeader="1"===localStorage.getItem("index:hideHeader")}get sortKeys(){return[{key:"title",name:"Title"},{key:"sourceUrl",name:"Source"},{key:"ctime",name:this.dateName},{key:"size",name:"Total Size"}]}firstUpdated(){this.loadItems()}updated(e){e.has("hideHeader")&&localStorage.setItem("index:hideHeader",this.hideHeader?"1":"0"),(e.has("items")||e.has("query"))&&this.filter()}filter(){if(this.query){this.filteredItems=[];for(const e of this.items)(e.sourceUrl.indexOf(this.query)>=0||e.filename&&e.filename.indexOf(this.query)>=0||Boolean(e.loadUrl&&e.loadUrl.indexOf(this.query)>=0)||e.title&&e.title.indexOf(this.query)>=0)&&this.filteredItems.push(e)}else this.filteredItems=this.items}loadItems(){return i(this,void 0,void 0,(function*(){const e=yield fetch(`${Oe}/coll-index?${this.indexParams}`);try{if(200!==e.status)throw new Error("Invalid API Response, Retry");const t=yield e.json();this.items=t.colls.map((e=>{var t;return e.title=null!==(t=e.title)&&void 0!==t?t:e.filename,e})),this._deleting={},this.sortedItems=[]}catch(e){setTimeout((()=>this.loadItems()),500)}}))}onDeleteItem(e){return i(this,void 0,void 0,(function*(){if(e.preventDefault(),e.stopPropagation(),!this.sortedItems)return;const t=Number(e.currentTarget.getAttribute("data-coll-index")),i=this.sortedItems[t];if(!i||this._deleting[i.sourceUrl])return;this._deleting[i.sourceUrl]=!0,this.requestUpdate();const o=yield fetch(`${Oe}/c/${i.id}`,{method:"DELETE"});if(200===o.status){const e=yield o.json();this.items=e.colls}return!1}))}static get styles(){return Ne(Li.compStyles)}static get compStyles(){return h`
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
    `}renderHeader(){return Q`<h2 class="panel-heading panel-color">
      <span>${this.headerName}</span>
    </h2>`}renderSearchHeader(){return""}render(){var e;const t=this.childElementCount>0;return Q`
      <header class="${this.hideHeader?"closed":""}">
        <slot name="header"></slot>
      </header>
      <section class="section no-top-padding">
        <div class="sort-header is-small">
          ${t?Q`
        <button @click=${()=>this.hideHeader=!this.hideHeader} class="collapse button is-small">
          <span class="icon"><fa-icon .svg=${this.hideHeader?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>'}></span>
          <span>${this.hideHeader?"Show ":"Hide"} <span class="is-sr-only">Header</span></span>
        </button>`:""}
        </div>
        <div class="panel">
          ${this.renderHeader()}
          ${this.items.length?Q`
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
                      <fa-icon .svg="${Ii}"></fa-icon>
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
                  ${null===(e=this.sortedItems)||void 0===e?void 0:e.map(((e,t)=>Q`
                      <div class="coll-block panel-block">
                        ${this.renderItemInfo(e)}
                        ${this._deleting[e.sourceUrl]?Q` <span
                              class="button delete-button is-loading is-static"
                            >
                              Deleting
                            </span>`:Q`
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
              `:Q`
                <div class="panel-block extra-padding">
                  ${null===this.sortedItems?Q`<i>Loading Archives...</i>`:this.renderEmpty()}
                </div>
              `}
        </div>
      </section>
    `}renderItemInfo(e){return Q`<wr-item-info .item=${e}></wr-item-info>`}renderEmpty(){return Q`
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
    `}}t([ye({type:Array})],Li.prototype,"items",void 0),t([ye({type:String})],Li.prototype,"query",void 0),t([ye({type:Array})],Li.prototype,"filteredItems",void 0),t([ye({type:Array})],Li.prototype,"sortedItems",void 0),t([ye({type:Boolean})],Li.prototype,"hideHeader",void 0),t([ye({type:String})],Li.prototype,"dateName",void 0),t([ye({type:String})],Li.prototype,"headerName",void 0),t([xe()],Li.prototype,"_deleting",void 0),customElements.define("wr-item-index",Li);let Ei=class extends me{constructor(){super(...arguments),this.fileDisplayName="",this.file=null,this.droppedFile=null,this.hasNativeFS=!!window.showOpenFilePicker&&!qe,this.showOpenFilePickerOptions={types:[{description:"WARC, WACZ, and HAR Files",accept:{"application/warc":[".warc",".gz"],"application/har":[".har"],"application/wacz":[".wacz"],"application/json":[".json"]}}]},this.newFullImport=!1,this.noHead=!1}updated(e){e.has("droppedFile")&&this.droppedFile&&this.onDropFile()}onDropFile(){const e=this.showOpenFilePickerOptions.types.map((e=>e.accept)).map(Object.values).flat(2).some((e=>{var t;return null===(t=this.droppedFile)||void 0===t?void 0:t.name.endsWith(e)}));if(e){if(null===this.droppedFile)return;this.setFile(this.droppedFile),this.dispatchEvent(new CustomEvent("did-drop-file",{bubbles:!0,composed:!0})),this.onStartLoad()}}onChooseFile(e){0!==e.currentTarget.files.length&&this.setFile(e.currentTarget.files[0])}setFile(e){var t;this.file=e,qe&&(null===(t=window.electron)||void 0===t?void 0:t.getPath)&&(this.file.path=window.electron.getPath(this.file)),this.fileDisplayName="file://"+(e.path||e.name)}onChooseNativeFile(){return i(this,void 0,void 0,(function*(){if(!this.hasNativeFS)return;const[e]=yield window.showOpenFilePicker(this.showOpenFilePickerOptions);this.fileHandle=e,this.file=yield e.getFile(),this.fileDisplayName="file://"+e.name}))}randomId(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}onStartLoad(e){e&&e.preventDefault();const t={sourceUrl:this.fileDisplayName,newFullImport:this.newFullImport};return this.file&&(t.isFile=!0,this.file.path?(t.loadUrl="file2://"+this.file.path,t.noCache=!0):this.fileHandle?(t.loadUrl=this.fileDisplayName,t.extra={fileHandle:this.fileHandle},t.noCache=!1):(t.loadUrl=URL.createObjectURL(this.file),t.blob=this.file,t.noCache=!1),t.size=this.file.size,t.name=this.fileDisplayName),this.dispatchEvent(new CustomEvent("load-start",{bubbles:!0,composed:!0,detail:t})),!1}onInput(e){this.fileDisplayName=e.currentTarget.value,this.file&&this.fileDisplayName&&this.fileDisplayName.startsWith("file://")&&(this.file=null,this.fileDisplayName="")}static get styles(){return Ne(h`
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
    `)}render(){return Q` <section
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
              ${this.hasNativeFS?"":Q` <input
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
                  pattern="((file|http|https|ipfs|s3)://.*.(warc|warc.gz|zip|wacz|har|json|cdx|cdxj)([?#].*)?)|(googledrive://.+)|(ssb://.+)"
                  .value="${this.fileDisplayName}"
                  @input="${this.onInput}"
                  autocomplete="off"
                  placeholder="${this.newFullImport?"Click 'Choose File' to select a local archive to import":"Enter a URL or click 'Choose File' to select a WARC, WACZ, CDX, or HAR file"}"
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
    </section>`}};var Ai;t([ye({type:String})],Ei.prototype,"fileDisplayName",void 0),t([ye({attribute:!1})],Ei.prototype,"file",void 0),t([ye({attribute:!1})],Ei.prototype,"droppedFile",void 0),t([ye({type:Boolean})],Ei.prototype,"hasNativeFS",void 0),t([ye({type:Object})],Ei.prototype,"showOpenFilePickerOptions",void 0),t([ye({type:Boolean})],Ei.prototype,"newFullImport",void 0),t([ye({type:Boolean})],Ei.prototype,"noHead",void 0),Ei=t([ge("wr-chooser")],Ei);let Ti=Ai=class extends me{constructor(e="sw.js"){super(),this.inited=!1,this.pageParams=new URLSearchParams,this.sourceUrl=null,this.navMenuShown=!1,this.showAbout=!1,this.showFileDropOverlay=!1,this.collTitle=null,this.loadInfo=null,this.embed=null,this.collPageUrl="",this.pageTitle="",this.pageReplay=!1,this.source=null,this.skipRuffle=!1,this.swErrorMsg=null,this.useRuffle=!1,this.droppedFile=null,this.maybeStartFileDrop=e=>{this.sourceUrl||(this.showFileDropOverlay=!0,e.preventDefault())},this.swName=e,this.swmanager=null,this.skipRuffle=!1,this.useRuffle=!1,this.safariKeyframes(),this.addEventListener("dragenter",(e=>{this.maybeStartFileDrop(e)})),this.addEventListener("dragover",(e=>{this.maybeStartFileDrop(e)})),this.addEventListener("dragleave",(()=>{this.showFileDropOverlay=!1})),this.addEventListener("dragend",(()=>{this.showFileDropOverlay=!1})),this.addEventListener("drop",(e=>{var t;this.droppedFile=(null===(t=e.dataTransfer)||void 0===t?void 0:t.files[0])||null,this.showFileDropOverlay=!1,e.preventDefault()}))}get appName(){return"ReplayWeb.page"}get homeUrl(){return window.location.pathname}static get styles(){return Ne(Ai.appStyles)}static get appStyles(){return h`
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
        flex: 1 1 auto;
        overflow: hidden;
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
    `}get mainLogo(){return Ke}renderNavBrand(){return Q` <fa-icon
      .svg="${'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 189 24"><clipPath id="a"><path d="M0-.001h188.88v23.04H0z"/></clipPath><g clip-path="url(#a)"><path d="M32.997 13.728v4.437h-3.014V4.874h5.934q2.04 0 3.089 1.01 1.067 1.011 1.067 2.808 0 1.516-.805 2.659a7.1 7.1 0 0 1-1.362 1.429l2.26 4.673v.712h-2.957l-2.354-4.437zm0-6.477v4.324h2.824q.536-.387.845-.973.374-.674.374-1.535 0-.88-.412-1.348-.392-.468-1.142-.468zm17.932 10.914h-8.218V4.874h8.218v2.658h-5.204v2.92h4.773v2.116h-4.773v2.939h5.204zm5.604-3.295v3.295H53.52V4.874h5.222q1.592 0 2.64.561a3.47 3.47 0 0 1 1.554 1.685q.524 1.104.524 2.752 0 1.61-.524 2.733a3.58 3.58 0 0 1-1.554 1.685q-1.048.58-2.64.58zm0-7.619v5.242h2.135q.86 0 1.31-.674.468-.675.468-1.947 0-.823-.206-1.404-.206-.6-.618-.899a1.47 1.47 0 0 0-.954-.318zm17.194 10.914h-7.9V4.874h3.014v10.558h4.886zm34.178 0h-2.303l-1.703-12.486v-.805h2.939l.971 7.612 2.117-5.516h1.217l2.085 5.411 1.004-7.507h2.902v.805l-1.685 12.486h-2.359l-2.527-6.122-.047-.15-.047.15zm19.699 0h-8.218V4.874h8.218v2.658H122.4v2.92h4.774v2.116H122.4v2.939h5.204zm9.03 0h-6.439V4.874h6.496q1.684 0 2.583.842.898.824.898 2.265a3.27 3.27 0 0 1-.767 2.134 4.5 4.5 0 0 1-1.039.939q.785.338 1.282.914.824.955.824 2.434 0 1.741-.973 2.752-.974 1.011-2.865 1.011m-3.425-11.026v3.444h3.035q.38-.346.615-.786.28-.524.281-1.123 0-.693-.356-1.105-.336-.43-.936-.43zm0 5.316v3.37h2.845q.673 0 1.011-.412.356-.43.356-1.236 0-.823-.356-1.273a1.15 1.15 0 0 0-.773-.449zm12.801 2.415v3.295h-3.014V4.874h5.223q1.591 0 2.639.561a3.47 3.47 0 0 1 1.554 1.685q.524 1.104.524 2.752 0 1.61-.524 2.733a3.58 3.58 0 0 1-1.554 1.685q-1.048.58-2.639.58zm0-7.619v5.242h2.134q.861 0 1.31-.674.468-.675.468-1.947 0-.823-.206-1.404-.206-.6-.617-.899a1.47 1.47 0 0 0-.955-.318zm41.707 10.914h-8.218V4.874h8.218v2.658h-5.204v2.92h4.774v2.116h-4.774v2.939h5.204zM78.842 15.862l-.733 2.303h-2.864v-.655l4.268-12.636h2.996l4.212 12.579v.712h-2.977l-.706-2.303zm3.6-1.947L80.98 9.146l-1.518 4.769zm8.283-.522L86.85 5.66v-.786h2.77l2.546 5.874 2.565-5.874h2.751v.805l-3.871 7.742.015 4.744h-2.901zm66.79 2.469-.733 2.303h-2.864v-.655l4.268-12.636h2.996l4.212 12.579v.712h-2.977l-.706-2.303zm3.6-1.947-1.462-4.769-1.518 4.769zm11.706 4.437q-1.985 0-3.332-.693-1.348-.71-2.041-2.227-.693-1.536-.692-3.95 0-2.284.73-3.782.749-1.516 2.19-2.265t3.557-.749q1.628 0 3.313.412l-.505 2.471a14 14 0 0 0-2.677-.262q-1.216 0-2.022.449-.786.432-1.198 1.367-.393.936-.393 2.434 0 1.535.318 2.489.318.956.973 1.404.656.43 1.704.431a9 9 0 0 0 1.142-.075v-3.07l-2.022-.487v-1.834h4.736v7.375a12 12 0 0 1-1.872.412q-.954.15-1.909.15" style="fill:#14122d"/><path d="M6.544 10.796a.239.239 0 0 1-.236-.283 5.32 5.32 0 0 1 2.959-3.801.12.12 0 0 1 .133.023.12.12 0 0 1 .025.133c-.409.992-.69 2.275-.777 3.702a.24.24 0 0 1-.239.225zm7.07-3.928a.12.12 0 0 1 .159-.157 5.32 5.32 0 0 1 2.958 3.803.24.24 0 0 1-.052.195.24.24 0 0 1-.183.085c-.475.002-1.429.002-1.865.002a.24.24 0 0 1-.239-.226c-.087-1.427-.368-2.71-.778-3.702m2.882 5.368a.238.238 0 0 1 .236.282 5.32 5.32 0 0 1-2.959 3.801.12.12 0 0 1-.133-.023.12.12 0 0 1-.025-.133c.409-.992.69-2.275.777-3.702a.24.24 0 0 1 .239-.225zm-7.07 3.927a.12.12 0 0 1-.159.157 5.32 5.32 0 0 1-2.958-3.803.24.24 0 0 1 .052-.195.24.24 0 0 1 .183-.085l1.865-.001c.127 0 .232.099.239.225.087 1.427.368 2.71.778 3.702m.666-3.672a.24.24 0 0 1 .239-.255h2.378a.24.24 0 0 1 .239.255c-.102 1.519-.442 2.843-.957 3.717a2.1 2.1 0 0 1-.397.509.12.12 0 0 1-.148 0 2.1 2.1 0 0 1-.397-.509c-.515-.874-.855-2.198-.957-3.717m2.856-1.951a.24.24 0 0 1-.239.255l-2.378.001a.24.24 0 0 1-.239-.256c.102-1.519.442-2.843.957-3.717.121-.206.261-.391.397-.509a.12.12 0 0 1 .148 0c.136.118.276.303.397.509.515.874.855 2.198.957 3.717" style="fill:#0891b2"/><path d="M22.833 12.799a.24.24 0 0 1 .122.241c-.746 5.64-5.578 9.999-11.421 9.999-5.869 0-10.718-4.397-11.43-10.074a.238.238 0 0 1 .357-.233c.518.3 1.38.803 1.697.987a.24.24 0 0 0 .242 0l1.706-1.003a.24.24 0 0 1 .358.165 7.204 7.204 0 0 0 7.07 5.838 7.21 7.21 0 0 0 7.057-5.767.24.24 0 0 1 .121-.164l1.961-1.059a.24.24 0 0 1 .23.001zM.226 10.239a.24.24 0 0 1-.122-.24c.746-5.641 5.578-10 11.421-10 5.869 0 10.718 4.398 11.43 10.075a.24.24 0 0 1-.107.226.24.24 0 0 1-.25.007c-.518-.3-1.38-.803-1.697-.988a.24.24 0 0 0-.242.001l-1.706 1.003a.24.24 0 0 1-.358-.165 7.205 7.205 0 0 0-7.07-5.839 7.21 7.21 0 0 0-7.057 5.767.24.24 0 0 1-.121.164l-1.961 1.06a.24.24 0 0 1-.231-.002z" style="fill:#4d7c0f"/></g></svg>\n'}"
      size=""
      width="9.5rem"
      height="1.25rem"
      aria-hidden="true"
    ></fa-icon>`}renderNavBar(){return Q` <a
        href="#skip-main-target"
        @click=${this.skipMenu}
        class="skip-link"
        >Skip main navigation</a
      >
      <nav class="navbar" aria-label="main">
        <div class="navbar-brand">
          ${this.embed?Q`
                <span class="navbar-item wr-logo-item">
                  <fa-icon
                    id="wrlogo"
                    size="1.0rem"
                    .svg=${this.mainLogo}
                    aria-hidden="true"
                  ></fa-icon>
                </span>
              `:Q`
                <a
                  href="${this.homeUrl}"
                  class="navbar-item wr-logo-item"
                  aria-label="ReplayWeb.page Home"
                >
                  ${this.renderNavBrand()}
                </a>
                ${this.collTitle?Q`
                      <a
                        href="${this.collPageUrl}"
                        class="no-wrap is-size-6 has-text-black"
                        >/&nbsp;&nbsp;<i>${this.collTitle}</i></a
                      >
                      <span class="no-wrap is-size-6"
                        >&nbsp;&nbsp;/&nbsp;
                        ${this.pageReplay?Q`<i>${this.pageTitle}</i>`:this.pageTitle}
                      </span>
                    `:""}
              `}
          <a
            href="#"
            role="button"
            id="menu-button"
            @click="${this.onNavMenu}"
            @keyup="${He}"
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
        ${this.sourceUrl?Q``:Q` <div
              class="navbar-menu ${this.navMenuShown?"is-active":""}"
            >
              <div class="navbar-start">
                ${qe?Q`
                      <a
                        role="button"
                        href="#"
                        class="navbar-item arrow-button"
                        title="Go Back"
                        @click="${()=>window.history.back()}"
                        @keyup="${He}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${Ye}"
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
                        @keyup="${He}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${Qe}"
                          aria-hidden="true"
                        ></fa-icon
                        ><span class="menu-only is-size-7"
                          >&nbsp;Go Forward</span
                        >
                      </a>
                    `:""}
              </div>
              ${this.embed?Q``:Q` <div class="navbar-end">${this.renderNavEnd()}</div>`}
            </div>`}
      </nav>
      <p id="skip-main-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderNavEnd(){return Q` <a href="/docs" target="_blank" class="navbar-item is-size-6">
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
      </a>`}renderColl(){return Q` <wr-item
      .loadInfo="${this.loadInfo}"
      sourceUrl="${this.sourceUrl||""}"
      embed="${$e(null===this.embed?void 0:this.embed)}"
      appName="${this.appName}"
      swName="${$e(this.swName)}"
      @replay-favicons=${this.onFavIcons}
      @update-title=${this.onTitle}
      @coll-loaded=${this.onCollLoaded}
      @coll-load-cancel=${this.onCollLoadCancel}
      @about-show=${()=>this.showAbout=!0}
    ></wr-item>`}renderHomeIndex(){return Q` <wr-item-index>
      ${qe?"":Q`
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
    </wr-item-index>`}render(){return this.inited?this.embed&&this.swErrorMsg?this.swErrorMsg:Q`
      ${this.embed&&"full"!==this.embed?"":this.renderNavBar()}
      ${this.sourceUrl?this.renderColl():this.renderHomeIndex()}
      ${this.showAbout?this.renderAbout():""}
      ${this.showFileDropOverlay?this.renderDropFileOverlay():""}
    `:Q``}firstUpdated(){this.initRoute();let e=this.swName;const t=new URLSearchParams;let i="";this.useRuffle&&t.set("injectScripts","ruffle/ruffle.js"),this.embed&&t.set("serveIndex","1"),i=t.toString(),i.length&&(e+="?"+i),this.swmanager=new it({name:e,appName:this.appName}),this.swmanager.register().catch((()=>{var e;return this.swErrorMsg=null===(e=this.swmanager)||void 0===e?void 0:e.renderErrorReport()})),window.addEventListener("popstate",(()=>{this.initRoute()}))}updated(e){e.has("sourceUrl")&&(this.collTitle=null)}onFavIcons(e){We(e.detail)}skipMenu(e){var t;e.preventDefault(),null===(t=this.renderRoot.querySelector("#skip-main-target"))||void 0===t||t.focus()}onNavMenu(e){e.preventDefault(),e.stopPropagation(),this.navMenuShown=!this.navMenuShown,this.navMenuShown&&(document.addEventListener("click",(e=>{var t;e.preventDefault(),this.navMenuShown=!1,null===(t=this.renderRoot.querySelector("#menu-button"))||void 0===t||t.focus()}),{once:!0}),document.addEventListener("keypress",(e=>{var t;"Escape"==e.key&&(e.preventDefault(),this.navMenuShown=!1,null===(t=this.renderRoot.querySelector("#menu-button"))||void 0===t||t.focus())}),{once:!0}))}initRoute(){this.inited=!0,this.pageParams=new URLSearchParams(window.location.search);const e=this.pageParams.get("state");if(e)try{const t=JSON.parse(e);if(t.ids instanceof Array&&t.userId&&"open"===t.action)return this.pageParams.set("source","googledrive://"+t.ids[0]),this.pageParams.delete("state"),void(window.location.search=this.pageParams.toString())}catch(e){console.log(e)}if(this.source){this.pageParams.set("source",this.source);const e=new URL(window.location.href);e.search=this.pageParams.toString(),window.history.replaceState({},document.title,e.href)}if(this.sourceUrl=this.pageParams.get("source")||"",this.embed=this.pageParams.get("embed")||"",this.embed?this.useRuffle="1"===this.pageParams.get("ruffle"):this.useRuffle=!this.skipRuffle,this.pageParams.has("terms")&&(this.showAbout=!0),this.pageParams.has("embed")&&(this.loadInfo||(this.loadInfo={})),this.pageParams.get("config"))try{this.loadInfo.extraConfig=JSON.parse(this.pageParams.get("config")||"")}catch(e){console.log("invalid config: "+e)}this.pageParams.get("baseUrlSourcePrefix")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrlSourcePrefix=this.pageParams.get("baseUrlSourcePrefix")),this.pageParams.get("basePageUrl")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrl=this.pageParams.get("basePageUrl")),this.pageParams.get("adblockUrl")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.adblockUrl=this.pageParams.get("adblockUrl")),this.pageParams.get("customColl")&&(this.loadInfo.customColl=this.pageParams.get("customColl")),"1"===this.pageParams.get("noWebWorker")&&(this.loadInfo.noWebWorker=!0),"1"===this.pageParams.get("noCache")&&(this.loadInfo.noCache=!0),"1"===this.pageParams.get("hideOffscreen")&&(this.loadInfo.hideOffscreen=!0),"eager"===this.pageParams.get("loading")&&(this.loadInfo.loadEager=!0),this.pageParams.get("swName")&&(this.swName=this.pageParams.get("swName")||void 0),qe&&this.sourceUrl.startsWith("file://")&&(this.loadInfo={sourceUrl:this.sourceUrl,loadUrl:this.sourceUrl.replace("file://","file2://")})}onStartLoad(e){this.pageParams.set("source",e.detail.sourceUrl);const t=new URL(window.location.href);t.search=this.pageParams.toString(),this.collPageUrl=t.toString(),e.detail.isFile?(window.history.pushState({},"",this.collPageUrl),this.sourceUrl=e.detail.sourceUrl,this.loadInfo=e.detail):window.location.search=this.pageParams.toString()}onCollLoaded(e){this.loadInfo=null,e.detail.collInfo&&(this.collTitle=e.detail.collInfo.name||e.detail.collInfo.title),e.detail.alreadyLoaded||e.detail.sourceUrl!==this.sourceUrl&&(this.pageParams.set("source",e.detail.sourceUrl),window.location.search=this.pageParams.toString())}onCollLoadCancel(){this.sourceUrl=null,this.loadInfo=null,window.history.pushState({},"",new URL(window.location.href).origin)}onTitle(e){e.detail.title&&(this.pageTitle=e.detail.title,this.pageReplay=e.detail.replayTitle,document.title=(e.detail.replayTitle?"Archive of ":"")+this.pageTitle+" | "+this.appName)}safariKeyframes(){const e=document.createElement("style");document.head.appendChild(e),e.appendChild(document.createTextNode("\n    @keyframes spinAround {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(359deg);\n      }\n    }\n    "))}renderAbout(){return Q`
      <div class="modal is-active">
        <div class="modal-background" @click="${this.onAboutClose}"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">About ReplayWeb.page ${qe?"App":""}</p>
              <button class="delete" aria-label="close" @click="${this.onAboutClose}"></button>
            </header>
            <section class="modal-card-body">
              <div class="container">
                <div class="content">
                  <div style="display: flex">
                    <div class="has-text-centered" style="width: 220px">
                      <fa-icon
                        size="3rem"
                        .svg=${Ke}
                        aria-label="ReplayWeb.page Logo"
                        role="img"
                      ></fa-icon>
                      <div style="font-size: smaller; margin-bottom: 1em">${qe?"App":""} v${je}</div>
                    </div>

                    ${qe?Q`
                            <p>
                              ReplayWeb.page App is a standalone app for Mac,
                              Windows and Linux that loads web archive files
                              provided by the user and renders them for replay.
                            </p>
                          `:Q` <p>
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
      </div>`}onAboutClose(){this.showAbout=!1}renderDropFileOverlay(){return Q`
      <div class="drop-file-overlay">Drop to load web archive</div>
    `}};function Pi(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t([ye({type:Boolean})],Ti.prototype,"inited",void 0),t([ye({type:Object})],Ti.prototype,"pageParams",void 0),t([ye({type:String})],Ti.prototype,"sourceUrl",void 0),t([ye({type:Boolean})],Ti.prototype,"navMenuShown",void 0),t([ye({type:Boolean})],Ti.prototype,"showAbout",void 0),t([ye({type:Boolean})],Ti.prototype,"showFileDropOverlay",void 0),t([ye({type:String})],Ti.prototype,"collTitle",void 0),t([ye({type:Object})],Ti.prototype,"loadInfo",void 0),t([ye({type:String})],Ti.prototype,"embed",void 0),t([ye({type:String})],Ti.prototype,"collPageUrl",void 0),t([ye({type:String})],Ti.prototype,"pageTitle",void 0),t([ye({type:Boolean})],Ti.prototype,"pageReplay",void 0),t([ye({type:String})],Ti.prototype,"source",void 0),t([ye({type:Boolean})],Ti.prototype,"skipRuffle",void 0),t([ye({type:String})],Ti.prototype,"swErrorMsg",void 0),Ti=Ai=t([ge("replay-app-main")],Ti);let Di={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Fi=/[&<>"']/,Mi=/[&<>"']/g,Ri=/[<>"']|&(?!#?\w+;)/,Oi=/[<>"']|&(?!#?\w+;)/g,Ui={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bi=e=>Ui[e];function Ni(e,t){if(t){if(Fi.test(e))return e.replace(Mi,Bi)}else if(Ri.test(e))return e.replace(Oi,Bi);return e}const qi=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function ji(e){return e.replace(qi,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Hi=/(^|[^\[])\^/g;function Wi(e,t){e=e.source||e,t=t||"";const i={replace:(t,o)=>(o=(o=o.source||o).replace(Hi,"$1"),e=e.replace(t,o),i),getRegex:()=>new RegExp(e,t)};return i}const Vi=/[^\w:]/g,Gi=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ki(e,t,i){if(e){let e;try{e=decodeURIComponent(ji(i)).replace(Vi,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Gi.test(i)&&(i=function(e,t){Yi[" "+e]||(Qi.test(e)?Yi[" "+e]=e+"/":Yi[" "+e]=io(e,"/",!0));e=Yi[" "+e];const i=-1===e.indexOf(":");return"//"===t.substring(0,2)?i?t:e.replace(Zi,"$1")+t:"/"===t.charAt(0)?i?t:e.replace(Ji,"$1")+t:e+t}(t,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(e){return null}return i}const Yi={},Qi=/^[^:]+:\/*[^/]*$/,Zi=/^([^:]+:)[\s\S]*$/,Ji=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Xi={exec:function(){}};function eo(e){let t,i,o=1;for(;o<arguments.length;o++)for(i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}function to(e,t){const i=e.replace(/\|/g,((e,t,i)=>{let o=!1,n=t;for(;--n>=0&&"\\"===i[n];)o=!o;return o?"|":" |"})),o=i.split(/ \|/);let n=0;if(o[0].trim()||o.shift(),o[o.length-1].trim()||o.pop(),o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;n<o.length;n++)o[n]=o[n].trim().replace(/\\\|/g,"|");return o}function io(e,t,i){const o=e.length;if(0===o)return"";let n=0;for(;n<o;){const r=e.charAt(o-n-1);if(r!==t||i){if(r===t||!i)break;n++}else n++}return e.substr(0,o-n)}function oo(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function no(e,t){if(t<1)return"";let i="";for(;t>1;)1&t&&(i+=e),t>>=1,e+=e;return i+e}function ro(e,t,i,o){const n=t.href,r=t.title?Ni(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){o.state.inLink=!0;const e={type:"link",raw:i,href:n,title:r,text:s,tokens:o.inlineTokens(s,[])};return o.state.inLink=!1,e}return{type:"image",raw:i,href:n,title:r,text:Ni(s)}}class so{constructor(e){this.options=e||Di}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:io(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],i=function(e,t){const i=e.match(/^(\s+)(?:```)/);if(null===i)return t;const o=i[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[i]=t;return i.length>=o.length?e.slice(o.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=io(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const i={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,o,n,r,s,a,l,c,d,h,u,f,p=t[1].trim();const m=p.length>1,b={type:"list",raw:"",ordered:m,start:m?+p.slice(0,-1):"",loose:!1,items:[]};p=m?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=m?p:"[*+-]");const g=new RegExp(`^( {0,3}${p})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(f=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(i=t[0],e=e.substring(i.length),c=t[2].split("\n",1)[0],d=e.split("\n",1)[0],this.options.pedantic?(r=2,u=c.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,u=c.slice(r),r+=t[1].length),a=!1,!c&&/^ *$/.test(d)&&(i+=d+"\n",e=e.substring(d.length+1),f=!0),!f){const t=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(h=e.split("\n",1)[0],c=h,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=r||!c.trim())u+="\n"+c.slice(r);else{if(a)break;u+="\n"+c}a||c.trim()||(a=!0),i+=h+"\n",e=e.substring(h.length+1)}}b.loose||(l?b.loose=!0:/\n *\n *$/.test(i)&&(l=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(u),o&&(n="[ ] "!==o[0],u=u.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:i,task:!!o,checked:n,loose:!1,text:u}),b.raw+=i}b.items[b.items.length-1].raw=i.trimRight(),b.items[b.items.length-1].text=u.trimRight(),b.raw=b.raw.trimRight();const v=b.items.length;for(s=0;s<v;s++){this.lexer.state.top=!1,b.items[s].tokens=this.lexer.blockTokens(b.items[s].text,[]);const e=b.items[s].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let i=0;for(const e of t)if("\n"===e&&(i+=1),i>1)return!0;return!1}));!b.loose&&e.length&&t&&(b.loose=!0,b.items[s].loose=!0)}return b}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):Ni(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:to(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,o,n,r,s=e.align.length;for(i=0;i<s;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(s=e.rows.length,i=0;i<s;i++)e.rows[i]=to(e.rows[i],e.header.length).map((e=>({text:e})));for(s=e.header.length,o=0;o<s;o++)e.header[o].tokens=[],this.lexer.inlineTokens(e.header[o].text,e.header[o].tokens);for(s=e.rows.length,o=0;o<s;o++)for(r=e.rows[o],n=0;n<r.length;n++)r[n].tokens=[],this.lexer.inlineTokens(r[n].text,r[n].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Ni(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Ni(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=io(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const i=e.length;let o=0,n=0;for(;n<i;n++)if("\\"===e[n])n++;else if(e[n]===t[0])o++;else if(e[n]===t[1]&&(o--,o<0))return n;return-1}(t[2],"()");if(e>-1){const i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);e&&(i=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),ro(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:o?o.replace(this.rules.inline._escapes,"$1"):o},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=(i[2]||i[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return ro(i,e,i[0],this.lexer)}}emStrong(e,t,i=""){let o=this.rules.inline.emStrong.lDelim.exec(e);if(!o)return;if(o[3]&&i.match(/[\p{L}\p{N}]/u))return;const n=o[1]||o[2]||"";if(!n||n&&(""===i||this.rules.inline.punctuation.exec(i))){const i=o[0].length-1;let n,r,s=i,a=0;const l="*"===o[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+i);null!=(o=l.exec(t));){if(n=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!n)continue;if(r=n.length,o[3]||o[4]){s+=r;continue}if((o[5]||o[6])&&i%3&&!((i+r)%3)){a+=r;continue}if(s-=r,s>0)continue;if(r=Math.min(r,r+s+a),Math.min(i,r)%2){const t=e.slice(1,i+o.index+r);return{type:"em",raw:e.slice(0,i+o.index+r+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,i+o.index+r-1);return{type:"strong",raw:e.slice(0,i+o.index+r+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),o=/^ /.test(e)&&/ $/.test(e);return i&&o&&(e=e.substring(1,e.length-1)),e=Ni(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let e,o;return"@"===i[2]?(e=Ni(this.options.mangle?t(i[1]):i[1]),o="mailto:"+e):(e=Ni(i[1]),o=e),{type:"link",raw:i[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let e,o;if("@"===i[2])e=Ni(this.options.mangle?t(i[0]):i[0]),o="mailto:"+e;else{let t;do{t=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(t!==i[0]);e=Ni(i[0]),o="www."===i[1]?"http://"+e:e}return{type:"link",raw:i[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Ni(i[0]):i[0]:Ni(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:e}}}}const ao={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Xi,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};ao.def=Wi(ao.def).replace("label",ao._label).replace("title",ao._title).getRegex(),ao.bullet=/(?:[*+-]|\d{1,9}[.)])/,ao.listItemStart=Wi(/^( *)(bull) */).replace("bull",ao.bullet).getRegex(),ao.list=Wi(ao.list).replace(/bull/g,ao.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+ao.def.source+")").getRegex(),ao._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ao._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,ao.html=Wi(ao.html,"i").replace("comment",ao._comment).replace("tag",ao._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ao.paragraph=Wi(ao._paragraph).replace("hr",ao.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao._tag).getRegex(),ao.blockquote=Wi(ao.blockquote).replace("paragraph",ao.paragraph).getRegex(),ao.normal=eo({},ao),ao.gfm=eo({},ao.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),ao.gfm.table=Wi(ao.gfm.table).replace("hr",ao.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao._tag).getRegex(),ao.gfm.paragraph=Wi(ao._paragraph).replace("hr",ao.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",ao.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao._tag).getRegex(),ao.pedantic=eo({},ao.normal,{html:Wi("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",ao._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Xi,paragraph:Wi(ao.normal._paragraph).replace("hr",ao.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",ao.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const lo={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Xi,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Xi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function co(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ho(e){let t,i,o="";const n=e.length;for(t=0;t<n;t++)i=e.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),o+="&#"+i+";";return o}lo._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",lo.punctuation=Wi(lo.punctuation).replace(/punctuation/g,lo._punctuation).getRegex(),lo.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,lo.escapedEmSt=/\\\*|\\_/g,lo._comment=Wi(ao._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),lo.emStrong.lDelim=Wi(lo.emStrong.lDelim).replace(/punct/g,lo._punctuation).getRegex(),lo.emStrong.rDelimAst=Wi(lo.emStrong.rDelimAst,"g").replace(/punct/g,lo._punctuation).getRegex(),lo.emStrong.rDelimUnd=Wi(lo.emStrong.rDelimUnd,"g").replace(/punct/g,lo._punctuation).getRegex(),lo._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,lo._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,lo._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,lo.autolink=Wi(lo.autolink).replace("scheme",lo._scheme).replace("email",lo._email).getRegex(),lo._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,lo.tag=Wi(lo.tag).replace("comment",lo._comment).replace("attribute",lo._attribute).getRegex(),lo._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,lo._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,lo._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,lo.link=Wi(lo.link).replace("label",lo._label).replace("href",lo._href).replace("title",lo._title).getRegex(),lo.reflink=Wi(lo.reflink).replace("label",lo._label).replace("ref",ao._label).getRegex(),lo.nolink=Wi(lo.nolink).replace("ref",ao._label).getRegex(),lo.reflinkSearch=Wi(lo.reflinkSearch,"g").replace("reflink",lo.reflink).replace("nolink",lo.nolink).getRegex(),lo.normal=eo({},lo),lo.pedantic=eo({},lo.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Wi(/^!?\[(label)\]\((.*?)\)/).replace("label",lo._label).getRegex(),reflink:Wi(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",lo._label).getRegex()}),lo.gfm=eo({},lo.normal,{escape:Wi(lo.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),lo.gfm.url=Wi(lo.gfm.url,"i").replace("email",lo.gfm._extended_email).getRegex(),lo.breaks=eo({},lo.gfm,{br:Wi(lo.br).replace("{2,}","*").getRegex(),text:Wi(lo.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class uo{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Di,this.options.tokenizer=this.options.tokenizer||new so,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ao.normal,inline:lo.normal};this.options.pedantic?(t.block=ao.pedantic,t.inline=lo.pedantic):this.options.gfm&&(t.block=ao.gfm,this.options.breaks?t.inline=lo.breaks:t.inline=lo.gfm),this.tokenizer.rules=t}static get rules(){return{block:ao,inline:lo}}static lex(e,t){return new uo(t).lex(e)}static lexInline(e,t){return new uo(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let i,o,n,r;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o=>!!(i=o.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),1===i.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(i);else if(i=this.tokenizer.code(e))e=e.substring(i.raw.length),o=t[t.length-1],!o||"paragraph"!==o.type&&"text"!==o.type?t.push(i):(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.list(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.def(e))e=e.substring(i.raw.length),o=t[t.length-1],!o||"paragraph"!==o.type&&"text"!==o.type?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(o.raw+="\n"+i.raw,o.text+="\n"+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else{if(n=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const i=e.slice(1);let o;this.options.extensions.startBlock.forEach((function(e){o=e.call({lexer:this},i),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(n)))o=t[t.length-1],r&&"paragraph"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(i),r=n.length!==e.length,e=e.substring(i.raw.length);else if(i=this.tokenizer.text(e))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let i,o,n,r,s,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,r.index)+"["+no("a",r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,r.index)+"["+no("a",r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,r.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(a=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((o=>!!(i=o.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),o=t[t.length-1],o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,l,a))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.autolink(e,ho))e=e.substring(i.raw.length),t.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(e,ho))){if(n=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const i=e.slice(1);let o;this.options.extensions.startInline.forEach((function(e){o=e.call({lexer:this},i),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(n,co))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),s=!0,o=t[t.length-1],o&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}}class fo{constructor(e){this.options=e||Di}code(e,t,i){const o=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,o);null!=t&&t!==e&&(i=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",o?'<pre><code class="'+this.options.langPrefix+Ni(o,!0)+'">'+(i?e:Ni(e,!0))+"</code></pre>\n":"<pre><code>"+(i?e:Ni(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,i,o){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+o.slug(i)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,i){const o=t?"ol":"ul";return"<"+o+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+o+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(null===(e=Ki(this.options.sanitize,this.options.baseUrl,e)))return i;let o='<a href="'+Ni(e)+'"';return t&&(o+=' title="'+t+'"'),o+=">"+i+"</a>",o}image(e,t,i){if(null===(e=Ki(this.options.sanitize,this.options.baseUrl,e)))return i;let o='<img src="'+e+'" alt="'+i+'"';return t&&(o+=' title="'+t+'"'),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class po{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class mo{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,o=0;if(this.seen.hasOwnProperty(i)){o=this.seen[e];do{o++,i=e+"-"+o}while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=o,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class bo{constructor(e){this.options=e||Di,this.options.renderer=this.options.renderer||new fo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new po,this.slugger=new mo}static parse(e,t){return new bo(t).parse(e)}static parseInline(e,t){return new bo(t).parseInline(e)}parse(e,t=!0){let i,o,n,r,s,a,l,c,d,h,u,f,p,m,b,g,v,w,y,x="";const k=e.length;for(i=0;i<k;i++)if(h=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(y=this.options.extensions.renderers[h.type].call({parser:this},h),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))x+=y||"";else switch(h.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(h.tokens),h.depth,ji(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(c="",l="",r=h.header.length,o=0;o<r;o++)l+=this.renderer.tablecell(this.parseInline(h.header[o].tokens),{header:!0,align:h.align[o]});for(c+=this.renderer.tablerow(l),d="",r=h.rows.length,o=0;o<r;o++){for(a=h.rows[o],l="",s=a.length,n=0;n<s;n++)l+=this.renderer.tablecell(this.parseInline(a[n].tokens),{header:!1,align:h.align[n]});d+=this.renderer.tablerow(l)}x+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(h.tokens),x+=this.renderer.blockquote(d);continue;case"list":for(u=h.ordered,f=h.start,p=h.loose,r=h.items.length,d="",o=0;o<r;o++)b=h.items[o],g=b.checked,v=b.task,m="",b.task&&(w=this.renderer.checkbox(g),p?b.tokens.length>0&&"paragraph"===b.tokens[0].type?(b.tokens[0].text=w+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=w+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:w}):m+=w),m+=this.parse(b.tokens,p),d+=this.renderer.listitem(m,v,g);x+=this.renderer.list(d,u,f);continue;case"html":x+=this.renderer.html(h.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(d=h.tokens?this.parseInline(h.tokens):h.text;i+1<k&&"text"===e[i+1].type;)h=e[++i],d+="\n"+(h.tokens?this.parseInline(h.tokens):h.text);x+=t?this.renderer.paragraph(d):d;continue;default:{const e='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return x}parseInline(e,t){t=t||this.renderer;let i,o,n,r="";const s=e.length;for(i=0;i<s;i++)if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(n=this.options.extensions.renderers[o.type].call({parser:this},o),!1!==n||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))r+=n||"";else switch(o.type){case"escape":case"text":r+=t.text(o.text);break;case"html":r+=t.html(o.text);break;case"link":r+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break;case"image":r+=t.image(o.href,o.title,o.text);break;case"strong":r+=t.strong(this.parseInline(o.tokens,t));break;case"em":r+=t.em(this.parseInline(o.tokens,t));break;case"codespan":r+=t.codespan(o.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(o.tokens,t));break;default:{const e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return r}}function go(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(i=t,t=null),oo(t=eo({},go.defaults,t||{})),i){const o=t.highlight;let n;try{n=uo.lex(e,t)}catch(e){return i(e)}const r=function(e){let r;if(!e)try{t.walkTokens&&go.walkTokens(n,t.walkTokens),r=bo.parse(n,t)}catch(t){e=t}return t.highlight=o,e?i(e):i(null,r)};if(!o||o.length<3)return r();if(delete t.highlight,!n.length)return r();let s=0;return go.walkTokens(n,(function(e){"code"===e.type&&(s++,setTimeout((()=>{o(e.text,e.lang,(function(t,i){if(t)return r(t);null!=i&&i!==e.text&&(e.text=i,e.escaped=!0),s--,0===s&&r()}))}),0))})),void(0===s&&r())}try{const i=uo.lex(e,t);return t.walkTokens&&go.walkTokens(i,t.walkTokens),bo.parse(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Ni(e.message+"",!0)+"</pre>";throw e}}go.options=go.setOptions=function(e){var t;return eo(go.defaults,e),t=go.defaults,Di=t,go},go.getDefaults=Pi,go.defaults=Di,go.use=function(...e){const t=eo({},...e),i=go.defaults.extensions||{renderers:{},childTokens:{}};let o;e.forEach((e=>{if(e.extensions&&(o=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=i.renderers?i.renderers[e.name]:null;i.renderers[e.name]=t?function(...i){let o=e.renderer.apply(this,i);return!1===o&&(o=t.apply(this,i)),o}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");i[e.level]?i[e.level].unshift(e.tokenizer):i[e.level]=[e.tokenizer],e.start&&("block"===e.level?i.startBlock?i.startBlock.push(e.start):i.startBlock=[e.start]:"inline"===e.level&&(i.startInline?i.startInline.push(e.start):i.startInline=[e.start]))}e.childTokens&&(i.childTokens[e.name]=e.childTokens)}))),e.renderer){const i=go.defaults.renderer||new fo;for(const t in e.renderer){const o=i[t];i[t]=(...n)=>{let r=e.renderer[t].apply(i,n);return!1===r&&(r=o.apply(i,n)),r}}t.renderer=i}if(e.tokenizer){const i=go.defaults.tokenizer||new so;for(const t in e.tokenizer){const o=i[t];i[t]=(...n)=>{let r=e.tokenizer[t].apply(i,n);return!1===r&&(r=o.apply(i,n)),r}}t.tokenizer=i}if(e.walkTokens){const i=go.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),i&&i.call(this,t)}}o&&(t.extensions=i),go.setOptions(t)}))},go.walkTokens=function(e,t){for(const i of e)switch(t.call(go,i),i.type){case"table":for(const e of i.header)go.walkTokens(e.tokens,t);for(const e of i.rows)for(const i of e)go.walkTokens(i.tokens,t);break;case"list":go.walkTokens(i.items,t);break;default:go.defaults.extensions&&go.defaults.extensions.childTokens&&go.defaults.extensions.childTokens[i.type]?go.defaults.extensions.childTokens[i.type].forEach((function(e){go.walkTokens(i[e],t)})):i.tokens&&go.walkTokens(i.tokens,t)}},go.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");oo(t=eo({},go.defaults,t||{}));try{const i=uo.lexInline(e,t);return t.walkTokens&&go.walkTokens(i,t.walkTokens),bo.parseInline(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+Ni(e.message+"",!0)+"</pre>";throw e}},go.Parser=bo,go.parser=bo.parse,go.Renderer=fo,go.TextRenderer=po,go.Lexer=uo,go.lexer=uo.lex,go.Tokenizer=so,go.Slugger=mo,go.parse=go;go.options,go.setOptions,go.use,go.walkTokens,go.parseInline,bo.parse,uo.lex;var vo;let wo=vo=class extends me{constructor(){super(...arguments),this.collInfo=null,this.curatedPageMap={},this.currList=0,this.active=!1,this.isSidebar=!1,this.splitDirection=!1,this.lastST=0,this.clickTime=0,this.splitter=null}recalcSplitter(e){this.splitDirection=this.isSidebar||e<769?"vertical":"horizontal"}firstUpdated(){this.recalcSplitter(document.documentElement.clientWidth),this.obs=new ResizeObserver((e=>{this.recalcSplitter(e[0].contentRect.width)})),this.obs.observe(this)}updated(e){e.has("collInfo")&&this.doLoadCurated(),(e.has("collInfo")||e.has("isSidebar"))&&this.recalcSplitter(document.documentElement.clientWidth),e.has("splitDirection")&&this.configureSplitter(),e.has("currList")&&this.active&&this.sendChangeEvent({currList:this.currList})}configureSplitter(){const e=this.renderRoot.querySelector(".sidebar"),t=this.renderRoot.querySelector(".main-content");if(this.splitter){try{this.splitter.destroy()}catch(e){}this.splitter=null}if(e&&t&&!this.splitter){const i={sizes:[20,80],gutterSize:4,direction:this.splitDirection};this.splitter=ei([e,t],i)}}doLoadCurated(){return i(this,void 0,void 0,(function*(){if(null==this.collInfo)return;this.curatedPageMap={};const e={};for(const t of this.collInfo.pages)e[t.id]=t;for(const e of this.collInfo.curatedPages){this.curatedPageMap[e.list]||(this.curatedPageMap[e.list]=[]);const t=e,i=t.url,o=t.ts,n=t.title||t.url,r=e.desc;this.curatedPageMap[e.list].push({url:i,ts:o,title:n,desc:r})}this.scrollToList()}))}static get styles(){return Ne(h`
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

      ${vo.sidebarStyles(d(":host(.sidebar)"))}

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
        ${vo.sidebarStyles()}
      }

      .gutter.gutter-vertical:hover {
        cursor: row-resize;
      }

      .gutter.gutter-horizontal:hover {
        cursor: col-resize;
      }
    `)}static sidebarStyles(e=h``){return h`
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
    `}render(){var e,t;const i=this.currList;return Q`
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
                  ${null===(t=this.collInfo)||void 0===t?void 0:t.lists.map((e=>Q` <li>
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

            ${this.collInfo.desc?Ee(go(this.collInfo.desc)):""}
          </section>
          ${this.renderLists()}
        </div>
      </div>
    `}renderLists(){var e,t;return Q` ${null===(t=null===(e=this.collInfo)||void 0===e?void 0:e.lists)||void 0===t?void 0:t.map((e=>Q`
        <article id="list-${e.id}">
          <div class="content">
            <hr />
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
            <ol>
              ${this.curatedPageMap[e.id]?this.curatedPageMap[e.id].map((e=>this.renderCPage(e))):Q``}
            </ol>
          </div>
        </article>
      `))}`}renderCPage(e){const t=new Date(e.ts),i=xt(t.toISOString());return Q` <li>
      <div class="content">
        <a
          @click="${this.onReplay}"
          data-url="${e.url}"
          data-ts="${i}"
          href="${kt("story",e.url,i)}"
        >
          <p class="is-size-6 has-text-weight-bold has-text-link">${e.title}</p>
          <p class="has-text-dark">${e.url}</p>
        </a>
        <p>${At.format(t)}</p>
        <p>${e.desc}</p>
      </div>
      <hr />
    </li>`}onReplay(e){e.preventDefault();const t={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.sendChangeEvent(t),!1}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}onClickScroll(e){return e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list")),this.scrollToList(),!1}scrollToList(){var e,t,i;this.currList>(null!==(i=null===(t=null===(e=this.collInfo)||void 0===e?void 0:e.lists)||void 0===t?void 0:t.length)&&void 0!==i?i:0)&&(this.currList=0);const o={behavior:"smooth",block:"nearest",inline:"nearest"};this.clickTime=(new Date).getTime();const n=this.renderRoot.getElementById("list-"+this.currList);n&&n.scrollIntoView(o)}onScroll(e){const t=e.currentTarget,i=this.renderRoot.getElementById("list-"+this.currList);if(!i)return;let o=i;const n=t.offsetTop,r=t.scrollTop;if(r>this.lastST)for(;o.nextElementSibling&&o.nextElementSibling.getBoundingClientRect().top<n;)o=o.nextElementSibling;else for(;o.previousElementSibling&&o.previousElementSibling.getBoundingClientRect().bottom>=n;)o=o.previousElementSibling;if(this.lastST=r,o&&o!=i&&o.id.startsWith("list-")&&(this.currList=Number(o.id.slice(5))),(new Date).getTime()-this.clickTime<1e3)return;const s=this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);if(s){const e={behavior:"smooth",block:"nearest",inline:"nearest"};s.scrollIntoView(e)}}};t([ye({type:Object})],wo.prototype,"collInfo",void 0),t([ye({type:Object})],wo.prototype,"curatedPageMap",void 0),t([ye({type:Number})],wo.prototype,"currList",void 0),t([ye({type:Boolean})],wo.prototype,"active",void 0),t([ye({type:Boolean})],wo.prototype,"isSidebar",void 0),t([ye({type:Boolean})],wo.prototype,"splitDirection",void 0),wo=vo=t([ge("wr-coll-story")],wo);class yo extends me{constructor(){super(),this.state="trypublic",this.sourceUrl="",this.scriptLoaded=!1,this.error=!1}static get properties(){return{state:{type:String},sourceUrl:{type:String},error:{type:Boolean},reauth:{type:Boolean}}}updated(e){e.has("sourceUrl")&&(this.error=!1,this.state="trypublic",this.tryPublicAccess().then((e=>{e||(this.state="tryauto",this.requestUpdate())})))}tryPublicAccess(){return i(this,void 0,void 0,(function*(){try{const e=this.sourceUrl,t=`https://helper-proxy.webrecorder.workers.dev/g/${e.slice(14)}`;let i=null;try{i=yield fetch(t)}catch(e){return!1}const o=yield i.json();if(!o.url||!o.name||!o.size)return!1;if(o.size>15e6)return!1;const n=o.url;try{const e=new AbortController,t=e.signal;if(i=yield fetch(n,{signal:t}),e.abort(),200!=i.status)return!1}catch(e){return!1}const r=o.name,s={publicUrl:n},a=Number(o.size);return this.dispatchEvent(new CustomEvent("load-ready",{detail:{name:r,extra:s,size:a,sourceUrl:e}})),!0}catch(e){return!1}}))}onLoad(){this.scriptLoaded=!0,this.gauth("none",(e=>{e.error?"implicitonly"!==this.state&&(this.state="trymanual"):this.authed(e)}))}onClickAuth(){this.gauth("select_account",(e=>{e.error||this.authed(e)}))}authed(e){return i(this,void 0,void 0,(function*(){const t=this.sourceUrl,i=`https://www.googleapis.com/drive/v3/files/${t.slice(14)}`,o={Authorization:`Bearer ${e.access_token}`},n=yield fetch(i+"?fields=name,size&supportsAllDrives=true",{headers:o});if(404===n.status||403==n.status)return"implicitonly"!==this.state&&(this.state="trymanual"),void(this.error=!0);this.error=!1;const r=yield n.json(),s=r.name,a=Number(r.size);this.dispatchEvent(new CustomEvent("load-ready",{detail:{sourceUrl:t,headers:o,size:a,name:s}}))}))}static get styles(){return Ne(h``)}render(){return Q` ${this.script()}
    ${"trymanual"!==this.state?Q` <p>Connecting to Google Drive...</p> `:Q`
          ${this.error?Q`
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
        `}`}script(){if("trypublic"===this.state||this.scriptLoaded)return Q``;const e=document.createElement("script");return e.onload=()=>this.onLoad(),e.src="https://apis.google.com/js/platform.js",e}gauth(e,t){self.gapi.load("auth2",(()=>{self.gapi.auth2.authorize({client_id:"160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.file",response_type:"token",prompt:e},t)}))}}customElements.define("wr-gdrive",yo);const xo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>\n@keyframes a0_t { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }\n</style><path d="M6.807 11.246h-0.001c-0.074 0-0.144-0.033-0.191-0.09c-0.047-0.057-0.067-0.131-0.054-0.204c.338-1.735 1.483-3.206 3.082-3.959c.038-0.018 .083-0.015 .118 .008c.036 .022 .057 .061 .058 .103c.001 .017-0.003 .035-0.011 .05c-0.426 1.035-0.719 2.371-0.81 3.856c-0.007 .132-0.117 .236-0.249 .236Zm7.364-4.091c-0.019-0.047-0.008-0.101 .027-0.138c.037-0.035 .092-0.045 .139-0.025c1.6 .753 2.745 2.224 3.081 3.96c.012 .072-0.008 .146-0.055 .203c-0.047 .056-0.117 .089-0.19 .09l-1.942 .001c-0.132 0-0.242-0.104-0.249-0.236c-0.091-1.485-0.384-2.821-0.811-3.855m3.002 5.591c.074 0 .144 .033 .192 .089c.047 .057 .067 .132 .054 .205c-0.336 1.736-1.481 3.208-3.082 3.96c-0.047 .02-0.102 .01-0.139-0.025c-0.035-0.037-0.045-0.091-0.026-0.138c.426-1.033 .719-2.369 .81-3.856c.008-0.132 .117-0.235 .249-0.235Zm-7.364 4.091c.007 .016 .01 .033 .01 .05c-0.001 .042-0.022 .081-0.057 .104c-0.036 .023-0.08 .027-0.119 .01c-1.599-0.754-2.744-2.225-3.081-3.961c-0.013-0.073 .007-0.147 .054-0.204c.048-0.056 .117-0.088 .191-0.088c.495-0.002 1.488-0.002 1.942-0.002c.132 0 .241 .103 .249 .235c.091 1.487 .384 2.823 .811 3.856m.694-3.825c-0.005-0.069 .019-0.136 .066-0.187c.048-0.05 .114-0.078 .183-0.078l2.477-0.001c.138 .001 .249 .112 .249 .25v.016c-0.107 1.583-0.461 2.962-0.997 3.872c-0.111 .198-0.249 .375-0.414 .531c-0.045 .035-0.109 .035-0.154 0c-0.164-0.155-0.304-0.334-0.414-0.531c-0.536-0.91-0.89-2.289-0.996-3.872m2.975-2.032v.016c0 .138-0.111 .249-0.249 .25h-2.477c-0.138 0-0.25-0.112-0.25-0.25l.001-0.016c.106-1.583 .46-2.961 .996-3.872c.127-0.214 .272-0.408 .414-0.53c.045-0.035 .109-0.035 .154 0c.142 .122 .288 .316 .414 .53c.536 .911 .89 2.289 .997 3.872" fill="#0891b2"/><path d="M23.774 13.333c.09 .05 .14 .149 .128 .25c-0.778 5.876-5.811 10.417-11.897 10.417c-6.114 0-11.165-4.581-11.907-10.495l-0.001-0.028c.001-0.137 .111-0.247 .248-0.248c.044 0 .087 .012 .125 .035c.54 .312 1.438 .835 1.768 1.028c.078 .045 .174 .045 .252-0.001l1.777-1.044c.071-0.042 .157-0.046 .231-0.012c.075 .035 .128 .103 .142 .184c.691 3.524 3.774 6.069 7.365 6.081c3.563-0.011 6.63-2.518 7.351-6.007c.014-0.073 .061-0.136 .126-0.171l2.042-1.103c.075-0.041 .165-0.04 .24 .001Zm-23.548-2.666c-0.09-0.049-0.141-0.148-0.128-0.25c.778-5.876 5.811-10.417 11.897-10.417c6.114 0 11.165 4.581 11.907 10.495l.001 .028c-0.001 .137-0.111 .247-0.248 .248c-0.044 0-0.087-0.012-0.125-0.035c-0.59-0.341-1.179-0.684-1.768-1.028c-0.078-0.045-0.174-0.045-0.252 .001l-1.777 1.044c-0.071 .042-0.157 .046-0.231 .012c-0.075-0.035-0.128-0.103-0.142-0.184c-0.691-3.524-3.774-6.069-7.365-6.081c-3.563 .011-6.63 2.518-7.351 6.007c-0.014 .073-0.061 .136-0.126 .171l-2.042 1.103c-0.075 .041-0.166 .041-0.241-0.001Z" fill="#4d7c0f" style="animation: 3s linear infinite both a0_t;transform-origin:center;"/></svg>\n',ko=["errored","googledrive","permission_needed"];class So extends me{constructor(){super(...arguments),this.loadInfo=null,this.state="waiting",this.progress=0,this.percent=0,this.currentSize=0,this.totalSize=0,this.total=0,this.coll="",this.tryFileHandle=!!window.showOpenFilePicker,this.errorAllowRetry=!1,this.pingInterval=0,this.fileHandle=null,this.noWebWorker=!1}firstUpdated(){this.initMessages()}initMessages(){if(this.noWebWorker=Boolean(this.loadInfo&&this.loadInfo.noWebWorker),this.noWebWorker){if(!navigator.serviceWorker)return;this.worker=navigator.serviceWorker}else this.worker=new Worker(this.swName);this.worker.addEventListener("message",(e=>{var t;switch(e.data.msg_type){case"collProgress":if(e.data.name===this.coll){if(this.percent=e.data.percent,e.data.error)if(this.error=e.data.error,this.state="errored",this.errorAllowRetry=!0,this.fileHandle=e.data.fileHandle,"missing_local_file"===this.error)this.tryFileHandle=!1;else if("permission_needed"===this.error&&e.data.fileHandle){this.state="permission_needed";break}e.data.currentSize&&e.data.totalSize&&(this.currentSize=e.data.currentSize,this.totalSize=e.data.totalSize),this.extraMsg=e.data.extraMsg}break;case"collAdded":e.data.name===this.coll&&(this.total||(this.total=100),this.progress=this.total,this.percent=100,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:e.data})),this.noWebWorker?this.pingInterval&&clearInterval(this.pingInterval):null===(t=this.worker)||void 0===t||t.terminate(),this.worker=null)}}))}doLoad(){var e,t;return i(this,void 0,void 0,(function*(){let i,o,n=this.sourceUrl,r=null;if(this.percent=this.currentSize=this.totalSize=0,null===(e=this.loadInfo)||void 0===e?void 0:e.swError)return this.state="errored",this.error=this.loadInfo.swError,void(this.errorAllowRetry=!1);try{const{scheme:e,host:i,path:o}=$t(n);switch(e){case"googledrive":this.state="googledrive",r=null!==(t=yield this.googledriveInit())&&void 0!==t?t:null;break;case"s3":r={sourceUrl:n,loadUrl:`https://${i}.s3.amazonaws.com${o}`,name:this.sourceUrl};break;case"file":if(!this.loadInfo&&!this.tryFileHandle)return this.state="errored",this.error="File URLs can not be entered directly or shared.\nYou can select a file to upload from the main page by clicking the 'Choose File...' button.",void(this.errorAllowRetry=!1);r=this.loadInfo;break;case"proxy":n="proxy:"+n.slice(8)}}catch(e){console.log(e)}r||(r={sourceUrl:n}),this.state="started",this.loadInfo&&(r.newFullImport=this.loadInfo.newFullImport,r.loadEager=this.loadInfo.loadEager,r.noCache=this.loadInfo.noCache,this.loadInfo.extraConfig&&(o=this.loadInfo.extraConfig),n.startsWith("proxy:")&&(null==o?void 0:o.recording)&&(i="recordingproxy"));const s={msg_type:"addColl",name:this.coll,extraConfig:o,type:i,skipExisting:!0,file:r};yield ot(),this.worker&&(this.noWebWorker?(navigator.serviceWorker.controller.postMessage(s),this.pingInterval=setInterval((()=>{navigator.serviceWorker.controller.postMessage({msg_type:"ping"})}),15e3)):this.worker.postMessage(s))}))}googledriveInit(){return this._gdWait=new Promise((e=>this._gdResolve=e)),this._gdWait}onLoadReady(e){this._gdResolve&&this._gdResolve(e.detail)}onCancel(){var e;return i(this,void 0,void 0,(function*(){if(!this.worker)return;const t={msg_type:"cancelLoad",name:this.coll};if(!this.noWebWorker)return this.worker.postMessage(t),yield this.updateComplete,void this.dispatchEvent(new CustomEvent("coll-load-cancel",{bubbles:!0,composed:!0}));(null===(e=navigator.serviceWorker)||void 0===e?void 0:e.controller)&&(navigator.serviceWorker.controller.postMessage(t),this.pingInterval&&clearInterval(this.pingInterval))}))}updated(e){(Boolean(this.sourceUrl&&e.has("sourceUrl"))||e.has("tryFileHandle"))&&this.doLoad()}static get styles(){return Ne(h`
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
    `)}render(){return Q`
      <section class="container">
        <div class="is-justify-content-center is-flex">
          <fa-icon
            size="5rem"
            style="margin-bottom: 1rem;"
            .svg=${ko.includes(this.state)?Ke:xo}
            aria-label="ReplayWeb.page Logo"
            role="img"
          ></fa-icon>
        </div>
        ${this.embed?"":Q` <div class="level">
              <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
            </div>`}
        <div class="level">
          <div class="level-item has-text-centered">
            ${this.renderContent()}
          </div>
        </div>
      </section>
    `}renderContent(){switch(this.state){case"googledrive":return Q`<wr-gdrive
          .sourceUrl=${this.sourceUrl}
          @load-ready=${this.onLoadReady}
        ></wr-gdrive>`;case"started":return Q` <div class="progress-div">
          ${this.currentSize?this.renderProgressBar():X}
          ${this.embed?"":Q` <button @click="${this.onCancel}" class="button is-danger">
                Cancel
              </button>`}
        </div>`;case"errored":return Q` <div class="has-text-left">
          <div class="error has-text-danger">${this.error}</div>
          <div>
            ${this.errorAllowRetry?Q` <a
                  class="button is-warning"
                  @click=${()=>window.parent.location.reload()}
                  >Try Again</a
                >`:""}
            ${this.embed?Q``:Q` <a href="/" class="button is-warning">Back</a>`}
          </div>
        </div>`;case"permission_needed":return Q` <div class="has-text-left">
          <div class="">
            Permission is needed to reload the archive file. (Click
            <i>Cancel</i> to cancel loading this archive.)
          </div>
          <button @click="${this.onAskPermission}" class="button is-primary">
            Show Permission
          </button>
          <a href="/" class="button is-danger">Cancel</a>
        </div>`;default:return Q``}}renderProgressBar(){const e=this.currentSize&&this.totalSize?Math.max(this.percent,this.currentSize/this.totalSize*100):this.percent,t=e?Math.max(e,1):void 0;return Q`
      <progress
        id="progress"
        class="progress is-primary is-large"
        value=${$e(t)}
        max="100"
      ></progress>
      ${t?Q`
            <label class="progress-label" for="progress"
              >${t}%</label
            >
          `:X}
      ${this.currentSize&&this.totalSize?Q` <div class="loaded-prog">
            Loaded
            <b>${Et()(this.currentSize)}</b>
            of

            <b>${Et()(this.totalSize)}</b>

            ${this.extraMsg&&Q` <p class="extra-msg">(${this.extraMsg})</p> `}
          </div>`:Q``}
    `}onAskPermission(){var e;return i(this,void 0,void 0,(function*(){"granted"===(yield null===(e=this.fileHandle)||void 0===e?void 0:e.requestPermission({mode:"read"}))&&this.doLoad()}))}}t([ye({type:String})],So.prototype,"sourceUrl",void 0),t([ye({type:Object})],So.prototype,"loadInfo",void 0),t([ye({type:String})],So.prototype,"state",void 0),t([ye({type:Number})],So.prototype,"progress",void 0),t([ye({type:Number})],So.prototype,"percent",void 0),t([ye({type:Number})],So.prototype,"currentSize",void 0),t([ye({type:Number})],So.prototype,"totalSize",void 0),t([ye({type:String})],So.prototype,"error",void 0),t([ye({type:Number})],So.prototype,"total",void 0),t([ye({type:String})],So.prototype,"status",void 0),t([ye({type:String})],So.prototype,"coll",void 0),t([ye({type:String})],So.prototype,"embed",void 0),t([ye({type:Boolean})],So.prototype,"tryFileHandle",void 0),t([ye({type:Boolean})],So.prototype,"errorAllowRetry",void 0),t([ye({type:String})],So.prototype,"extraMsg",void 0),t([ye({type:String})],So.prototype,"swName",void 0),customElements.define("wr-loader",So);var $o=__webpack_require__(563),zo=__webpack_require__.n($o),_o=__webpack_require__(112);class Co extends me{constructor(){super(...arguments),this.filteredPages=[],this.sortedPages=[],this.query="",this.flex=null,this.textPages=null,this.newQuery=null,this.loading=!1,this.updatingSearch=!1,this.showAllPages=!1,this.hasExtraPages=!1,this.currList=0,this.active=!1,this.editable=!1,this.changeNeeded=!1,this.selectedPages=new Set,this.menuActive=!1,this.sortKey="date",this.sortDesc=!0,this.isSidebar=!1,this.url="",this.ts="",this.editing=!1,this.toDeletePages=null,this.toDeletePage=null,this.collInfo=null,this.allSelected=!1,this.defaultKey="",this.dynamicPagesQuery=!1,this.totalPages=0,this.dynamicPageCount=1,this.skipScrollMore=!1}static get sortKeys(){return[{key:"",name:"Best Match"},{key:"title",name:"Title"},{key:"date",name:"Date"}]}_timedUpdate(){null!==this.newQuery&&(this.query=this.newQuery,this.newQuery=null,this.filter())}updated(e){return i(this,void 0,void 0,(function*(){if(e.has("collInfo")?this.updateTextSearch():(e.has("query")||e.has("currList")||e.has("showAllPages"))&&this.filter(),e.has("active")&&this.active&&this.changeNeeded&&this.filter(),e.has("query")){this.query?(this.sortKey="",this.sortDesc=!1):(this.sortKey="date",this.sortDesc=!0);const e=this.renderRoot.querySelector("wr-sorter");e&&(e.sortKey=this.sortKey,e.sortDesc=this.sortDesc)}if(e.has("sortedPages")&&this.isSidebar){const e=this.renderRoot.querySelector(".current");if(e){const t={behavior:"smooth",block:"nearest",inline:"nearest"};setTimeout((()=>e.scrollIntoView(t)),100)}}}))}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout((()=>this._timedUpdate()),250)}filter(){return i(this,void 0,void 0,(function*(){if(this.loading)return;if(this.active||(this.changeNeeded=!0),this.loading=!0,this.flex&&this.query&&this.textPages){const e=yield this.flex.searchAsync(this.query,25);this.filteredPages=e.map((e=>this.textPages[e]))}else this.showAllPages&&this.hasExtraPages?this.filteredPages=[...this.textPages]:this.dynamicPagesQuery||(this.filteredPages=[...this.collInfo.pages]);if(this.totalPages=this.filteredPages.length,this.dynamicPagesQuery){if(this.query)this.hasExtraPages=!1;else{const e=this.collInfo.pages.filter((e=>e.isSeed));this.filteredPages=this.showAllPages||!e.length?[...this.collInfo.pages]:e,this.hasExtraPages=e.length<this.collInfo.pages.length}this.dynamicPageCount=1,yield this.addDynamicPages()}0!==this.currList&&(yield this.filterCurated());for(const e of this.filteredPages){const{timestamp:t,date:i}=yt(e);if(null==i)throw new Error("Page date is null");e.timestamp=t,e.date=i}this.loading=!1,this.changeNeeded=!1;const e={query:this.query,currList:this.currList};this.sendChangeEvent(e)}))}addDynamicPages(){return i(this,void 0,void 0,(function*(){const e=new URLSearchParams;this.query&&e.set("search",this.query),e.set("page",this.dynamicPageCount+""),e.set("pageSize","25");const t=yield fetch(`${this.collInfo.apiPrefix}/pages?${e.toString()}`),i=yield t.json();if(!i.pages)return;i.pages.length||(this.skipScrollMore=!0);const o=new Set;this.filteredPages.forEach((e=>o.add(e.id)));const n=[];for(const{id:e,url:t,title:r,mime:s,status:a,ts:l,favIconUrl:c,waczhash:d,isSeed:h}of i.pages){if(o.has(e))continue;if(!this.showAllPages&&this.hasExtraPages&&!this.query&&!h)continue;let i;i="string"==typeof l?new Date(l).getTime():l;const u={id:e,url:t,title:r,mime:s,status:a,ts:i,favIconUrl:c,waczhash:d};n.push(u)}n.length&&(this.filteredPages=[...this.filteredPages,...n]),this.totalPages=this.filteredPages.length}))}filterCurated(){return i(this,void 0,void 0,(function*(){const e=yield fetch(`${this.collInfo.apiPrefix}/curated/${this.currList}`),t=(yield e.json()).curated;this.filteredPages=t}))}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}addPages(e){var t;const i=new _o.Index;return this.flex=i,this.textPages=e,this.dynamicPagesQuery||(this.hasExtraPages=Boolean(this.textPages&&(null===(t=this.collInfo)||void 0===t?void 0:t.pages)&&this.textPages.length>this.collInfo.pages.length)),this.collInfo&&(this.dynamicPagesQuery=this.collInfo.canQueryPages||!1),Promise.all(e.map(((e,t)=>{let o=e.url;return e.title&&(o+=" "+e.title),e.text&&(o+=" "+e.text),i.addAsync(t,o)})))}updateTextSearch(){var e,t,o,r;return i(this,void 0,void 0,(function*(){if(this.updatingSearch)return;this.updatingSearch=!0;let i=0;try{const c=yield caches.open("cache:"+this.collInfo.coll),d=`${this.collInfo.apiPrefix}/textIndex`;let h=yield c.match(d);h&&Number(h.headers.get("Content-Length"))||(h=yield fetch(d),200===h.status&&Number(h.headers.get("Content-Length"))&&c.put(d,h.clone()));const u=[];try{for(var s,a=!0,l=n(zo()(h.body.getReader()));s=yield l.next(),!(e=s.done);a=!0){r=s.value,a=!1;const e=r;e.url&&(e.id=++i,u.push(e))}}catch(e){t={error:e}}finally{try{a||e||!(o=l.return)||(yield o.call(l))}finally{if(t)throw t.error}}yield this.addPages(u)}catch(e){console.warn(e)}finally{0===i&&(yield this.addPages(this.collInfo.pages)),this.updatingSearch=!1}yield this.filter()}))}static get styles(){return Ne(h`
      :host {
        width: 100%;
        flex: 1 1 auto;
        overflow: hidden;
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

      .index-bar-label {
        text-transform: uppercase;
        font-size: var(--sl-font-size-x-small);
        font-weight: var(--sl-font-weight-semibold);
        color: var(--sl-color-neutral-500);
        margin-bottom: var(--sl-spacing-2x-small);
        line-height: 1;
      }

      .index-bar-title {
        font-size: var(--sl-font-size-large);
        font-weight: var(--sl-font-weight-semibold);
        margin-bottom: var(--sl-spacing-large);
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
        ${Co.sidebarStyles()}
      }

      ${Co.sidebarStyles(d`:host(.sidebar)`)}

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
        margin-bottom: var(--sl-spacing-x-small);
        line-height: var(--sl-line-height-normal);
        flex: 1 1 auto;
        overflow: auto;
        border-bottom: 1px solid var(--sl-panel-border-color);
      }
    `)}static sidebarStyles(e=h``){return h`
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
    `}onSelectList(e){e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list"))}onSelectListDrop(e){e.preventDefault(),this.currList=Number(e.currentTarget.value)}render(){const e=this.currList;return Q`
      <div
        class="is-sr-only"
        role="heading"
        aria-level="${this.isSidebar?"2":"1"}"
      >
        Pages in ${this.collInfo.title}
      </div>
      <div class="search-bar notification is-marginless">
        ${this.isSidebar?Q`<h3 class="is-sr-only">Search and Filter Pages</h3>`:""}
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
              ><fa-icon .svg="${Ii}" aria-hidden="true"></fa-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="main columns">
        <div
          class="column index-bar is-one-fifth ${this.isSidebar?"is-hidden-mobile":""}"
        >
          ${this.editable&&this.editing?Q`
                <form @submit="${this.onUpdateTitle}">
                  <input
                    id="titleEdit"
                    class="input"
                    value="${$e(this.collInfo.title)}"
                    @blur="${this.onUpdateTitle}"
                  />
                </form>
              `:Q` <div
                  class="index-bar-label ${this.collInfo.description?"is-hidden-mobile":"is-sr-only"}"
                >
                  Collection Name
                </div>
                <div
                  class="index-bar-title"
                  @dblclick="${()=>this.editing=!0}"
                >
                  ${this.collInfo.name||this.collInfo.title}
                </div>
                ${this.collInfo.description?Q` <div class="index-bar-label  is-hidden-mobile">
                        About This Collection
                      </div>
                      <div
                        class="index-bar-description  is-hidden-mobile"
                        @dblclick="${()=>this.editing=!0}"
                      >
                        <wr-coll-description
                          value=${this.collInfo.description}
                        ></wr-coll-description>
                      </div>`:Q``}`}
          ${this.editable?Q`<fa-icon class="editIcon" .svg="${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --\x3e<path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>'}"></fa-icon>`:Q``}
          ${this.hasExtraPages?Q` <span class="check-select">
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
          ${this.editable?Q` <div class="index-bar-actions">
                ${this.renderDownloadMenu()}
              </div>`:""}
          ${this.collInfo.lists.length?Q`
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
                    ${this.collInfo.lists.map((t=>Q` <li>
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
    `}renderDownloadMenu(){return Q` <div class="dropdown ${this.menuActive?"is-active":""}">
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
            @keyup="${He}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WACZ (Web Archive Collection Zip)
          </a>
          <a
            role="button"
            href="#"
            @click="${e=>this.onDownload(e,"warc")}"
            @keyup="${He}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WARC 1.1 Only
          </a>
          <a
            role="button"
            href="#"
            @click="${e=>this.onDownload(e,"warc1.0")}"
            @keyup="${He}"
            class="dropdown-item"
          >
            Download ${0===this.selectedPages.size?"All":"Selected"} as
            WARC 1.0 Only
          </a>
        </div>
      </div>
    </div>`}renderPageHeader(){return Q`
      ${!this.isSidebar&&this.editable&&this.filteredPages.length?Q` <div class="check-select">
            <label class="checkbox">
              <input
                @change=${this.onSelectAll}
                type="checkbox"
                .checked="${this.allSelected}"
              />
            </label>
          </div>`:Q``}

      <div class="header columns is-hidden-mobile">
        ${this.query?Q` <a
              role="button"
              href="#"
              @click="${this.onSort}"
              @keyup="${He}"
              data-key=""
              class="column is-1 ${""===this.sortKey?this.sortDesc?"desc":"asc":""}"
              >Match</a
            >`:""}

        <a
          role="button"
          href="#"
          @click="${this.onSort}"
          @keyup="${He}"
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
          @keyup="${He}"
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
          .sortKeys="${Co.sortKeys}"
          .data="${this.filteredPages}"
          .pageResults="${this.dynamicPagesQuery?this.totalPages:100}"
          @sort-changed="${this.onSortChanged}"
          class="${this.filteredPages.length?"":"is-hidden"}"
        >
        </wr-sorter>
      </div>
    `}renderDeleteModal(){return this.toDeletePages?Q` <wr-modal
      bgClass="has-background-grey-lighter"
      @modal-closed="${()=>this.toDeletePages=this.toDeletePage=null}"
      title="Confirm Delete"
    >
      ${this.toDeletePage?Q` <p>
            Are you sure you want to delete the page
            <b>${this.toDeletePage.title}</b>? (Size:
            <b>${Et()(this.toDeletePage.size)}</b>)
          </p>`:Q`
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
    </wr-modal>`:Q``}isCurrPage(e){if(this.isSidebar&&e.url===this.url){let t=e.timestamp;return!t&&e.date?t=xt(e.date):"string"==typeof e.ts&&(t=xt(e.ts)),t===this.ts}return!1}renderPages(){return Q`
      <div class="page-header has-text-weight-bold">
        ${this.renderPageHeader()}
      </div>
      <ul class="scroller" @scroll="${this.onScroll}">
        ${this.sortedPages.length?Q` ${this.sortedPages.map(((e,t)=>{const i=this.selectedPages.has(e.id);return Q` <li class="page-entry ${i?"selected":""}">
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
              </li>`}))}`:Q`<p class="mobile-header">${this.getNoResultsMessage()}</p>`}
      </ul>
    `}onUpdateTitle(e){if(e.preventDefault(),this.editing=!1,!this.editable)return;const t=this.renderRoot.querySelector("#titleEdit");if(!(null==t?void 0:t.value.trim()))return;const i=t.value,o=JSON.stringify({title:i});fetch(`${this.collInfo.apiPrefix}/metadata`,{method:"POST",body:o}).then((e=>{200===e.status&&this.dispatchEvent(new CustomEvent("coll-update",{detail:{title:i}}))}))}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",(()=>{this.menuActive=!1}),{once:!0})}onSort(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-key")||"";t===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=t)}onSortChanged(e){this.sortedPages=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc,this.updateComplete.then((()=>this.skipScrollMore=!1))}onSelectToggle(e){const{page:t,selected:i}=e.detail;i?this.selectedPages.add(t):this.selectedPages.delete(t),this.allSelected=this.selectedPages.size===this.sortedPages.length,this.requestUpdate()}onSelectAll(e){this.allSelected=e.currentTarget.checked,this.allSelected?this.sortedPages.forEach((e=>{this.selectedPages.add(e.id)})):this.selectedPages.clear(),this.requestUpdate()}onDownload(e,t){return i(this,void 0,void 0,(function*(){e.preventDefault();const i=this.selectedPages.size>0,o=new URLSearchParams;o.set("pages",i?Array.from(this.selectedPages.keys()).join(","):"all"),o.set("format",t),this.collInfo.filename&&o.set("filename",this.collInfo.filename),window.location.href=`${this.collInfo.apiPrefix}/dl?`+o.toString()}))}onDeleteConfirm(e){const t=e.currentTarget.page;this.selectedPages.has(t.id)?(this.toDeletePages=this.selectedPages,this.toDeletePage=null):(this.toDeletePages=[t.id],this.toDeletePage=t)}onDeletePages(){return i(this,void 0,void 0,(function*(){const e={};for(const t of this.toDeletePages){const i=this.renderRoot.querySelector(`wr-page-entry[pid="${t}"]`);i&&(i.deleting=!0,e[t]=i)}for(const t of this.toDeletePages){const i=yield fetch(`${this.collInfo.apiPrefix}/page/${t}`,{method:"DELETE"}),o=yield i.json();if(o.error){console.warn(o.error);continue}const n=e[t];if(!n)continue;const r=this.collInfo.pages.indexOf(n);r<0||this.collInfo.pages.splice(r,1)}this.toDeletePages=null,this.toDeletePage=null,this.updateTextSearch(),this.requestUpdate()}))}formatResults(){const e=this.totalPages;return e===this.sortedPages.length?`${e} Page${1!==e?"s":""}`:`${this.sortedPages.length} of ${e} Pages Shown`}getNoResultsMessage(){var e;return(null===(e=this.collInfo)||void 0===e?void 0:e.pages.length)?this.updatingSearch?"Initializing Search...":this.loading?"Searching...":this.query?Q`<span class="fix-text-wrapping"
        >No matching pages found. Try changing the search query, or
        <a href="#view=resources">browse by URL</a>.</span
      >`:"No Pages Found":Q`<span class="fix-text-wrapping"
        >No Pages are defined in this archive. The archive may be empty.
        <a href="#view=resources">Try browsing by URL</a>.</span
      >`}onScroll(e){return i(this,void 0,void 0,(function*(){const t=e.currentTarget;if(t.scrollHeight-t.scrollTop-t.clientHeight<40&&!this.skipScrollMore){this.skipScrollMore=!0,this.dynamicPagesQuery&&(this.dynamicPageCount+=1,yield this.addDynamicPages());const e=this.renderRoot.querySelector("wr-sorter");e&&e.getMore(25)}}))}}t([ye({type:Array})],Co.prototype,"filteredPages",void 0),t([ye({type:Array})],Co.prototype,"sortedPages",void 0),t([ye({type:String})],Co.prototype,"query",void 0),t([ye({attribute:!1})],Co.prototype,"flex",void 0),t([ye({attribute:!1})],Co.prototype,"textPages",void 0),t([ye()],Co.prototype,"newQuery",void 0),t([ye({type:Boolean})],Co.prototype,"loading",void 0),t([ye({type:Boolean})],Co.prototype,"updatingSearch",void 0),t([ye({type:Boolean})],Co.prototype,"showAllPages",void 0),t([ye({type:Boolean})],Co.prototype,"hasExtraPages",void 0),t([ye({type:Number})],Co.prototype,"currList",void 0),t([ye({type:Boolean})],Co.prototype,"active",void 0),t([ye({type:Boolean})],Co.prototype,"editable",void 0),t([ye({type:Boolean})],Co.prototype,"changeNeeded",void 0),t([ye({attribute:!1})],Co.prototype,"selectedPages",void 0),t([ye({type:Boolean})],Co.prototype,"menuActive",void 0),t([ye({type:String})],Co.prototype,"sortKey",void 0),t([ye({type:Boolean})],Co.prototype,"sortDesc",void 0),t([ye({type:Boolean})],Co.prototype,"isSidebar",void 0),t([ye({type:String})],Co.prototype,"url",void 0),t([ye({type:String})],Co.prototype,"ts",void 0),t([ye({type:Boolean})],Co.prototype,"editing",void 0),t([ye({type:Array})],Co.prototype,"toDeletePages",void 0),t([ye({type:Object})],Co.prototype,"toDeletePage",void 0),t([ye({type:Object})],Co.prototype,"collInfo",void 0),t([ye({type:Boolean})],Co.prototype,"allSelected",void 0),t([ye({type:String})],Co.prototype,"defaultKey",void 0),t([ye({type:Boolean})],Co.prototype,"dynamicPagesQuery",void 0),t([ye({type:Number})],Co.prototype,"totalPages",void 0),t([ye({type:Number})],Co.prototype,"dynamicPageCount",void 0),t([ye({type:Boolean})],Co.prototype,"skipScrollMore",void 0),customElements.define("wr-page-view",Co);const Io=new RegExp(`[${["-","[","]","/","{","}","(",")","*","+","?",".","\\","^","$","|"].join("\\")}]`,"g"),Lo=e=>e.replace(Io,"\\$&");class Eo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["keywords","delimiter"]}get keywords(){var e;return null!==(e=this.getAttribute("keywords"))&&void 0!==e?e:""}set keywords(e){this.setAttribute("keywords",e)}get delimiter(){var e;return null!==(e=this.getAttribute("delimiter"))&&void 0!==e?e:""}set delimiter(e){this.setAttribute("delimiter",e)}attributeChangedCallback(e,t,i){"keywords"!==e&&"delimiter"!==e||i!==t&&this._render()}connectedCallback(){this._render(),this.__observer=new MutationObserver((()=>{this._render()})),this.__observer.observe(this,{childList:!0,characterData:!0,subtree:!0})}disconnectedCallback(){this.__observer&&(this.__observer.disconnect(),this.__observer=void 0)}_render(){if(!this.shadowRoot)return;const e=this.textContent||"",t=this.getAttribute("keywords"),i=this.getAttribute("delimiter")||/\s+/;if(!t)return void(this.shadowRoot.textContent=e);const o=e.toLowerCase(),n=t.toLowerCase().split(i).sort(((e,t)=>t.length-e.length)),r=new RegExp(`${n.map(Lo).join("|")}`,"gi"),s=e.split(r),a=document.createElement("div");let l=0;for(const t of s)if(a.appendChild(document.createTextNode(t)),l+=t.length,l<o.length){const t=o.substring(l),i=n.find((e=>t.startsWith(e)));if(i){const t=document.createElement("mark");t.textContent=e.substr(l,i.length),a.appendChild(t),l+=i.length}}this.shadowRoot.innerHTML=`\n      <style>\n        mark {\n          color: var(--keyword-mark-color);\n          background: var(--keyword-mark-background, yellow);\n        }\n      </style>\n      ${a.innerHTML}\n    `}}customElements.define("keyword-mark",Eo);class Ao extends me{constructor(){super(...arguments),this.query="",this.textSnippet="",this.page=null,this.replayPrefix="",this.deleting=!1,this.selected=!1,this.editable=!1,this.index=0,this.isCurrent=!1,this.isSidebar=!1,this.thumbnailValid=!0,this.iconValid=!0}static get styles(){return Ne(h`
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
        ${Ao.sidebarStyles()}
      }

      ${Ao.sidebarStyles(d`:host(.sidebar)`)}

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

      .col-date {
        font-variant-numeric: tabular-nums;
      }
    `)}static sidebarStyles(e=h``){return h`
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
    `}updated(e){(e.has("page")||e.has("query"))&&(this.updateSnippet(),this.deleting=!1)}render(){const e=this.page,{date:t}=yt(e),i="number"==typeof e.size,o=this.editable&&!this.isSidebar;return Q`
      ${o?Q` <div class="check-select">
            <label class="checkbox">
              <input
                @change=${this.onSendSelToggle}
                type="checkbox"
                .checked="${this.selected}"
              />
            </label>
          </div>`:""}

      <div class="columns">
        ${this.index?Q`
              <div class="column col-index is-1 is-size-7">${this.index}.</div>
            `:""}
        <div class="column col-date is-2">
          <div>${t?Tt.format(t):""}</div>
          <div>${t?Pt.format(t):""}</div>
        </div>
        <div class="column">
          <div class="media">
            <figure class="media-left">${this.renderPageIcon()}</figure>
            <div class="media-content ${this.isCurrent?"current":""}">
              <div role="heading" aria-level="${this.isSidebar?"4":"3"}">
                <a
                  @dblclick="${this.onReload}"
                  @click="${this.onReplay}"
                  href="${kt("pages",this.page.url,this.page.timestamp,this.page.waczhash)}"
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
                    ${t?At.format(t):""}
                  </p>
                </a>
                ${this.textSnippet?Q` <div class="text">
                      <keyword-mark keywords="${this.query}"
                        >${this.textSnippet}</keyword-mark
                      >
                    </div>`:Q``}
              </div>
              ${i?Q` <div class="media-right" style="margin-right: 2em">
                    ${Et()(e.size)}
                  </div>`:""}
            </div>
          </div>
        </div>

        ${o?Q` ${this.deleting?Q`
                  <button
                    class="button is-loading delete-button is-static"
                  ></button>
                `:Q` <button
                  @click="${this.onSendDeletePage}"
                  class="delete delete-button"
                ></button>`}`:""}
      </div>
    `}getReplayPrefix(){const e=this.page.waczhash?`:${this.page.waczhash}/`:"",t=this.page.timestamp||"";return this.replayPrefix+"/"+e+t+"id_"}renderPageIcon(){return this.thumbnailValid?Q`<img
      class="thumbnail"
      @error=${()=>this.thumbnailValid=!1}
      src=${`${this.getReplayPrefix()}/urn:thumbnail:${this.page.url}`}
      loading="lazy"
    />`:this.renderFavicon()}renderFavicon(){if(this.iconValid&&this.page.favIconUrl)return Q`<img
      class="favicon"
      @error=${()=>this.iconValid=!1}
      src=${`${this.getReplayPrefix()}/${this.page.favIconUrl}`}
      loading="lazy"
    />`}updateSnippet(){const e=this.textSnippet;if(!this.query||!this.page.text)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);let t=this.page.text,i=this.query,o=t.indexOf(this.query);if(o<0){const n=t.toLowerCase(),r=i.toLowerCase();if(o=n.indexOf(r),o<0)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);t=n,i=r}let n=o;o=Math.max(o-100,0),n=Math.min(n+200,t.length),0===o&&n===t.length?this.textSnippet=t:this.textSnippet="..."+t.slice(o,n)+"...",this.requestUpdate("textSnippet",e)}onReplay(e,t=!1){e.preventDefault();const i={url:this.page.url,ts:this.page.timestamp,waczhash:this.page.waczhash};return this.sendChangeEvent(i,t),!1}onReload(e){return this.onReplay(e,!0)}sendChangeEvent(e,t){this.dispatchEvent(new CustomEvent("coll-tab-nav",{bubbles:!0,composed:!0,detail:{data:e,reload:t}}))}onSendDeletePage(){const e=this.page;this.dispatchEvent(new CustomEvent("delete-page",{detail:{page:e}}))}onSendSelToggle(e){const t=this.page.id,i=e.currentTarget.checked;this.dispatchEvent(new CustomEvent("sel-page",{detail:{page:t,selected:i}}))}}t([ye({type:String})],Ao.prototype,"query",void 0),t([ye({type:String})],Ao.prototype,"textSnippet",void 0),t([ye({type:Object})],Ao.prototype,"page",void 0),t([ye({type:String})],Ao.prototype,"replayPrefix",void 0),t([ye({type:Boolean})],Ao.prototype,"deleting",void 0),t([ye({type:Boolean})],Ao.prototype,"selected",void 0),t([ye({type:Boolean})],Ao.prototype,"editable",void 0),t([ye({type:Number})],Ao.prototype,"index",void 0),t([ye({type:Boolean})],Ao.prototype,"isCurrent",void 0),t([ye({type:Boolean})],Ao.prototype,"isSidebar",void 0),t([xe()],Ao.prototype,"thumbnailValid",void 0),t([xe()],Ao.prototype,"iconValid",void 0),customElements.define("wr-page-entry",Ao);class To extends me{constructor(){super(...arguments),this.collInfo=null,this.sourceUrl=null,this.url="",this.ts="",this.waczhash="",this.replayUrl="",this.replayTS="",this.actualTS="",this.title="",this.iframeUrl=null,this.showAuth=!1,this.replayNotFoundError=!1,this.authFileHandle=null,this.reauthWait=null,this._loadPoll=null}firstUpdated(){window.addEventListener("message",(e=>this.onReplayMessage(e))),navigator.serviceWorker.addEventListener("message",(e=>this.handleSWMessage(e)))}handleSWMessage(e){return i(this,void 0,void 0,(function*(){if("authneeded"===e.data.type&&this.collInfo&&e.data.coll===this.collInfo.coll){if(e.data.fileHandle){this.authFileHandle=e.data.fileHandle;try{if("granted"===(yield this.authFileHandle.requestPermission({mode:"read"})))return this.showAuth=!1,this.reauthWait=null,void this.refresh()}catch(e){console.warn(e)}}else this.authFileHandle=null;this.reauthWait?yield this.reauthWait:this.showAuth=!0}else e.data.type&&window.parent.postMessage(e.data)}))}doSetIframeUrl(){this.iframeUrl=this.url&&this.collInfo?`${this.collInfo.replayPrefix}/${this.waczhash?`:${this.waczhash}/`:""}${this.ts||""}mp_/${this.url}`:""}updated(e){if((e.has("sourceUrl")||e.has("collInfo"))&&(this.reauthWait=null),!this.url||this.replayUrl==this.url&&this.replayTS==this.ts||!e.has("url")&&!e.has("ts")||(this.replayUrl=this.url,this.replayTS=this.ts,this.showAuth=!1,this.reauthWait=null,this.doSetIframeUrl()),this.iframeUrl&&e.has("iframeUrl")){this.waitForLoad();const e={title:"Archived Page",replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}if(this.replayUrl&&e.has("replayUrl")||this.replayTS&&e.has("replayTS")){const e={url:this.replayUrl,ts:this.replayTS};this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:!0,data:e,replayNotFoundError:this.replayNotFoundError}}))}if(this.title&&(e.has("title")||e.has("actualTS"))){const e={title:this.title,url:this.replayUrl,ts:this.actualTS,replayTitle:!0};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:e}))}}setDisablePointer(e){const t=this.renderRoot.querySelector("iframe");t&&(t.style.pointerEvents=e?"none":"all")}onReplayMessage(e){const t=this.renderRoot.querySelector("iframe");if(t&&e.source===t.contentWindow)if("load"===e.data.wb_type||"replace-url"===e.data.wb_type||"archive-not-found"===e.data.wb_type){if(this.replayTS=e.data.is_live?"":e.data.ts,this.actualTS=e.data.ts,this.replayUrl=e.data.url,this.title=e.data.title||this.title,this.replayNotFoundError="archive-not-found"===e.data.wb_type,this.clearLoading(t.contentWindow),e.data.icons){const t=e.data.icons;this.dispatchEvent(new CustomEvent("replay-favicons",{bubbles:!0,composed:!0,detail:{icons:t}}))}}else if("title"===e.data.wb_type)this.title=e.data.title;else{const t=Object.assign({type:e.data.wb_type},e.data);delete t.wb_type,window.parent.postMessage(t)}}onReAuthed(e){this.reauthWait=(()=>i(this,void 0,void 0,(function*(){if(this.authFileHandle){if("granted"!==(yield this.authFileHandle.requestPermission({mode:"read"})))return void(this.reauthWait=null);this.authFileHandle=null}else{const t=e.detail.headers;yield fetch(`${this.collInfo.apiPrefix}/updateAuth`,{method:"POST",body:JSON.stringify({headers:t})})}this.showAuth&&(this.showAuth=!1,this.reauthWait=null),this.refresh()})))()}waitForLoad(){this.setLoading(),this._loadPoll=window.setInterval((()=>{const e=this.renderRoot.querySelector("iframe");(null==e?void 0:e.contentDocument)&&e.contentWindow&&("complete"!==e.contentDocument.readyState||e.contentWindow._WBWombat)||this.clearLoading(null==e?void 0:e.contentWindow)}),5e3)}clearLoading(e){if(this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!1}})),this._loadPoll&&(window.clearInterval(this._loadPoll),this._loadPoll=null),e)try{e.addEventListener("beforeunload",(()=>{this.setLoading()}))}catch(e){}}setLoading(){this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!0}}))}refresh(){var e;const t=this.renderRoot.querySelector("iframe");if(!t)return;const i=this.iframeUrl;this.doSetIframeUrl(),i!==this.iframeUrl&&this.url!==this.replayUrl||(this.waitForLoad(),null===(e=t.contentWindow)||void 0===e||e.location.reload())}static get styles(){return Ne(h`
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
    `)}render(){const e=`Replay of ${this.title?`${this.title}:`:""} ${this.url}`;return Q` <h1 id="replay-heading" class="is-sr-only">${e}</h1>

      ${this.iframeUrl?Q`
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

              ${this.showAuth?Q`
                    <div class="iframe-main modal-bg">
                      <div class="panel intro-panel">
                        <p class="panel-heading">
                          <fa-icon
                            id="wrlogo"
                            size="1.5rem"
                            .svg=${Ke}
                            aria-hidden="true"
                          ></fa-icon>
                          Authorization Needed
                        </p>
                        <div class="panel-block">
                          ${this.authFileHandle?Q`
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
                              `:Q` <wr-gdrive
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
          `:Q` <div class="panel intro-panel">
            <p class="panel-heading">Replay Web Page</p>
            <div class="panel-block">
              <p>Enter a URL above to replay it from the web archive!</p>
              <p>
                (Or, check out <a href="#view=pages">Pages</a> or
                <a href="#view=resources">URLs</a> to explore the contents of
                this archive.)
              </p>
            </div>
          </div>`}`}}t([ye({type:Object})],To.prototype,"collInfo",void 0),t([ye({type:String})],To.prototype,"sourceUrl",void 0),t([ye({type:String})],To.prototype,"url",void 0),t([ye({type:String})],To.prototype,"ts",void 0),t([ye({type:String})],To.prototype,"waczhash",void 0),t([ye({type:String})],To.prototype,"replayUrl",void 0),t([ye({type:String})],To.prototype,"replayTS",void 0),t([ye({type:String})],To.prototype,"actualTS",void 0),t([ye({type:String})],To.prototype,"title",void 0),t([ye({type:String})],To.prototype,"iframeUrl",void 0),t([ye({type:Boolean})],To.prototype,"showAuth",void 0),t([ye({type:Boolean})],To.prototype,"replayNotFoundError",void 0),t([ye({type:Object})],To.prototype,"authFileHandle",void 0),customElements.define("wr-coll-replay",To);let Po=class extends me{constructor(){super(...arguments),this.sortedData=[],this.data=[],this.pageResults=0,this.numResults=0,this.sortKey=null,this.sortDesc=null}firstUpdated(){if(this.id){const e=localStorage.getItem(`${this.id}:sortKey`);null!==e&&(this.sortKey=e);const t=localStorage.getItem(`${this.id}:sortDesc`);null!==t&&(this.sortDesc="1"===t)}}updated(e){const t=e.has("sortKey"),i=e.has("sortDesc"),o=e.has("data");t&&null!==this.sortKey&&localStorage.setItem(`${this.id}:sortKey`,this.sortKey),i&&null!==this.sortDesc&&localStorage.setItem(`${this.id}:sortDesc`,this.sortDesc?"1":"0"),(t||i||o)&&this.sortData()}sortData(){this.sortedData=[...this.data],this.numResults=this.pageResults,""===this.sortKey?this.sortDesc&&this.sortedData.reverse():this.sortedData.sort(((e,t)=>e[this.sortKey]===t[this.sortKey]?0:this.sortDesc==e[this.sortKey]<t[this.sortKey]?1:-1)),this.sendSortChanged()}sendSortChanged(){const e={sortKey:this.sortKey,sortDesc:this.sortDesc,sortedData:this.numResults?this.sortedData.slice(0,this.numResults):this.sortedData};this.dispatchEvent(new CustomEvent("sort-changed",{detail:e}))}getMore(e=100){this.pageResults&&this.numResults>=this.sortedData.length||(this.numResults+=e,this.sendSortChanged())}static get styles(){return Ne(h`
      :host {
        min-width: 100px;
        box-sizing: border-box !important;
      }
      button.button.is-small {
        border-radius: 4px;
      }
    `)}render(){var e;return Q`
    <div class="select is-small">
      <select id="sort-select" @change=${e=>this.sortKey=e.currentTarget.value}>

      ${null===(e=this.sortKeys)||void 0===e?void 0:e.map((e=>Q`
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
    </button>`}};t([ye({attribute:!1})],Po.prototype,"sortedData",void 0),t([ye({attribute:!1})],Po.prototype,"data",void 0),t([ye({type:String})],Po.prototype,"id",void 0),t([ye({type:Number})],Po.prototype,"pageResults",void 0),t([ye({attribute:!1})],Po.prototype,"numResults",void 0),t([ye({type:String})],Po.prototype,"sortKey",void 0),t([ye({type:Boolean})],Po.prototype,"sortDesc",void 0),t([ye({attribute:!1})],Po.prototype,"sortKeys",void 0),Po=t([ge("wr-sorter")],Po);class Do extends me{static get filters(){return[{name:"HTML",filter:"text/html,text/xhtml"},{name:"Images",filter:"image/"},{name:"Audio/Video",filter:"audio/,video/"},{name:"PDF",filter:"application/pdf"},{name:"Javascript",filter:"application/javascript,application/x-javascript"},{name:"CSS",filter:"text/css"},{name:"Fonts",filter:"font/,application/font-woff"},{name:"Plain Text",filter:"text/plain"},{name:"JSON",filter:"application/json"},{name:"DASH/HLS",filter:"application/dash+xml,application/x-mpegURL,application/vnd.apple.mpegurl"},{name:"All URLs",filter:""}]}static get sortKeys(){return[{key:"url",name:"URL"},{key:"ts",name:"Date"},{key:"mime",name:"Media Type"},{key:"status",name:"Status"}]}constructor(){super(),this.collInfo=null,this.isSidebar=!1,this.currMime="",this.query="",this.urlSearchType="",this.filteredResults=[],this.sortedResults=[],this.results=[],this.newQuery=null,this.tryMore=!1,this.loading=!1,this.sortKey="url",this.sortDesc=!1}static get properties(){return{collInfo:{type:Object},isSidebar:{type:Boolean},currMime:{type:String},query:{type:String},urlSearchType:{type:String},filteredResults:{type:Array},sortedResults:{type:Array},loading:{type:Boolean},sortKey:{type:String},sortDesc:{type:Boolean}}}firstUpdated(){""===this.urlSearchType&&(this.urlSearchType="prefix")}_timedUpdate(){null!==this.newQuery&&(this.query=this.newQuery,this.newQuery=null)}updated(e){if(e.has("query")||e.has("urlSearchType")||e.has("currMime")){this.doLoadResources();const t={query:this.query,urlSearchType:this.urlSearchType,currMime:this.currMime},i=!e.has("currMime")&&!e.has("urlSearchType");this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:i,data:t}}))}(e.has("sortKey")||e.has("sortDesc"))&&this.filter()}doLoadResources(e=!1){return i(this,void 0,void 0,(function*(){if(e&&(!this.tryMore||!this.results.length))return;if(this.loading)return;this.loading=!0;const t="contains"!==this.urlSearchType?this.query:"",i=t&&"prefix"===this.urlSearchType?1:0,o=this.currMime,n=new URLSearchParams({mime:o,url:t,prefix:String(i),count:String(100)});if(e){const e=this.results[this.results.length-1];n.set("fromMime",e.mime),n.set("fromUrl",e.url),n.set("fromStatus",e.status),n.set("fromTs",String(new Date(e.date).getTime()))}const r=yield fetch(`${this.collInfo.apiPrefix}/urls?${n.toString()}`),s=yield r.json();this.results=e?this.results.concat(s.urls):s.urls,this.tryMore=s.urls.length>=100,this.filter(),this.loading=!1}))}onChangeTypeSearch(e){this.currMime=e.currentTarget.value}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout((()=>this._timedUpdate()),250)}onClickUrlType(e){this.urlSearchType=e.currentTarget.value}filter(){const e=[],t="contains"===this.urlSearchType?this.query:"";for(const i of this.results)(!t||i.url.indexOf(t)>=0)&&e.push(i);this.filteredResults=e}onScroll(e){const t=e.currentTarget,i=t.scrollHeight-t.scrollTop-t.clientHeight;this.tryMore&&i<40&&this.doLoadResources(!0)}static get styles(){return Ne(h`
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
    `)}render(){return Q`
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
                ${Do.filters.map((e=>Q`
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
                  ><fa-icon .svg="${Ii}"></fa-icon
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
          .sortKeys="${Do.sortKeys}"
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
                @keyup="${He}"
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
                @keyup="${He}"
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
                @keyup="${He}"
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
                @keyup="${He}"
                data-key="status"
                class="${"status"===this.sortKey?this.sortDesc?"desc":"asc":""}"
                >Status</a
              >
            </th>
          </tr>
        </thead>

        <tbody class="main-scroll" @scroll="${this.onScroll}">
          ${this.sortedResults.length?this.sortedResults.map((e=>Q`
                  <tr class="columns result">
                    <td class="column col-url is-6">
                      <p class="minihead is-hidden-tablet">URL</p>
                      <a
                        @click="${this.onReplay}"
                        data-url="${e.url}"
                        data-ts="${e.ts}"
                        href="${kt("resources",e.url,e.ts)}"
                      >
                        <keyword-mark keywords="${this.query}"
                          >${e.url}</keyword-mark
                        >
                      </a>
                    </td>
                    <td class="column col-ts is-2">
                      <p class="minihead is-hidden-tablet">Date</p>
                      ${At.format(new Date(e.date))}
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
                `)):Q`<tr class="section">
                <td colspan="4"><i>No Results Found.</i></td>
              </tr>`}
        </tbody>
      </table>
    `}onSort(e){e.preventDefault();const t=e.currentTarget.getAttribute("data-key");t===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=t)}onSortChanged(e){this.sortedResults=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc}onReplay(e){e.preventDefault();const t={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:t}})),!1}}customElements.define("wr-coll-resources",Do);const Fo=document.currentScript&&document.currentScript.src;let Mo="";class Ro extends me{constructor(){super(...arguments),this.url="",this.ts="",this.query="",this.view="replay",this.embed=null,this.replaybase="./replay/",this.swName="sw.js",this.coll="",this.config="",this.inited=!1,this.paramString=null,this.deepLink=!1,this.updateFavicons=!1,this.sandbox=!1,this.noSandbox=null,this.noWebWorker=!1,this.noCache=!1,this.useAdblock=!1,this.adblockRulesUrl="./adblock/adblock.gz",this.newWindowBase="",this.loading="",this.useRuffle=!1,this.replayfile=Mo,this.mainElementName="replay-app-main",this.appName="ReplayWeb.page",this.customConfig=null,this.reloadCount=0}static setDefaultReplayFile(e){Mo=e}doRegister(){return i(this,void 0,void 0,(function*(){const e=new URL(this.replaybase,window.location.href);if(this.isCrossOrigin=e.origin!==window.location.origin,this.isCrossOrigin)return void(this.inited=!0);const t=this.swName+"?serveIndex=1",i=this.appName,o=this.replaybase,n=this.requireSubdomainIframe;this.swmanager=new it({name:t,scope:o,requireSubdomainIframe:n,appName:i});try{yield this.swmanager.register(),this.inited=!0}catch(e){this.errorMessage=this.swmanager.renderErrorReport()}}))}fullReload(){var e;return i(this,void 0,void 0,(function*(){if(!(null===(e=this.iframe)||void 0===e?void 0:e.contentWindow))return!1;const t=Oe+"/c/"+this.coll+"?reload=1";return 200===(yield this.iframe.contentWindow.fetch(t,{method:"DELETE"})).status&&(this.iframe.contentWindow.location.reload(),!0)}))}handleMessage(e){if(this.iframe&&e.source===this.iframe.contentWindow)switch(e.data.type){case"urlchange":this.deepLink&&this.handleUrlChangeMessage(e.data),this.dispatchEvent(new CustomEvent("rwp-url-change",{detail:e.data}));break;case"page-loading":this.dispatchEvent(new CustomEvent("rwp-page-loading",{detail:e.data}));break;case"favicons":this.updateFavicons&&We(e.data)}}handleUrlChangeMessage(e){const{url:t,ts:i,view:o,query:n,title:r}=e;r&&(this.title=r);const s={};t&&(s.url=t),i&&(s.ts=i),n&&(s.query=n),o&&!t&&(s.view=o);const a=new URLSearchParams(s),l=new URL(window.location.href);l.hash="#"+a.toString(),window.history.replaceState({},"",l)}firstUpdated(){this.noSandbox&&console.warn("The noSandbox flag is deprecated. ReplayWeb.page does not add a sandbox by default. To enable sandboxing, use 'sandbox' flag instead. This may result in PDFs not loading and pages opening in new windows, but may be more secure in some situations"),this.doRegister(),window.addEventListener("message",(e=>this.handleMessage(e))),this.deepLink&&(this.updateFromHash(),window.addEventListener("hashchange",(()=>this.updateFromHash()))),this.loadBrowserDefaults()}loadBrowserDefaults(){var e;void 0!==window.GestureEvent&&void 0===window.SharedWorker&&(this.noWebWorker=!0),(null===(e=navigator.storage)||void 0===e?void 0:e.estimate)||(this.noCache=!0)}updateFromHash(){const e=new URLSearchParams(window.location.hash.slice(1));e.has("url")&&(this.url=e.get("url")),e.has("ts")&&(this.ts=e.get("ts")),e.has("query")&&(this.query=e.get("query")),e.has("view")&&(this.view=e.get("view"))}mergeConfigs(){if(!this.customConfig)return this.config;if(this.config){const e=Object.assign(Object.assign({},this.customConfig),JSON.parse(this.config));return JSON.stringify(e)}return JSON.stringify(this.customConfig)}updated(e){if(e.has("url")||e.has("ts")||e.has("query")||e.has("view")||e.has("source")||e.has("src")){this.embed=this.embed||"default",this.src&&(this.source=this.src);const e=new URL(this.source,document.baseURI),t=this.mergeConfigs(),i={source:e,customColl:this.coll,config:t,basePageUrl:window.location.href.split("#")[0],baseUrlSourcePrefix:this.newWindowBase,embed:this.embed};this.deepLink||i.baseUrlSourcePrefix||(i.baseUrlSourcePrefix="https://replayweb.page/"),this.noWebWorker&&(i.noWebWorker="1"),this.noCache&&(i.noCache="1"),this.hideOffscreen&&(i.hideOffscreen="1"),"eager"===this.loading&&(i.loading="eager"),"sw.js"!==this.swName&&(i.swName=this.swName),this.useRuffle&&(i.ruffle="1"),this.useAdblock&&this.adblockRulesUrl&&(i.adblockUrl=this.adblockRulesUrl),this.paramString=new URLSearchParams(i).toString();const o={url:this.url,ts:this.ts,query:this.query};this.url||(o.view=this.view),this.hashString=new URLSearchParams(o).toString()}}static get styles(){return Ne(h`
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
    `)}render(){return Q`
      ${this.paramString&&this.hashString&&this.inited?Q`
            <iframe
              sandbox="${$e(this.sandbox?"allow-downloads allow-modals allow-orientation-lock allow-pointer-lock         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts         allow-same-origin allow-forms":void 0)}"
              @load="${this.onLoad}"
              src="${this.replaybase}${this.replayfile}?${this.paramString}#${this.hashString}"
              allow="autoplay *; fullscreen"
              title="Replay of ${this.title?`${this.title}:`:""} ${this.url}"
            ></iframe>
          `:Q``}
      ${this.errorMessage}
    `}onLoad(e){if(this.isCrossOrigin)return;const t=e.target.contentWindow,i=e.target.contentDocument;if(t.navigator.serviceWorker&&!t.navigator.serviceWorker.controller&&this.reloadCount<=2)return this.reloadCount++,void setTimeout((()=>t.location.reload()),100);if(this.reloadCount=0,t.customElements.get(this.mainElementName))return;const o=i.createElement("script");o.src=Fo,i.head.appendChild(o)}}t([ye({type:String})],Ro.prototype,"url",void 0),t([ye({type:String})],Ro.prototype,"ts",void 0),t([ye({type:String})],Ro.prototype,"query",void 0),t([ye({type:String})],Ro.prototype,"source",void 0),t([ye({type:String})],Ro.prototype,"src",void 0),t([ye({type:String})],Ro.prototype,"view",void 0),t([ye({type:String})],Ro.prototype,"embed",void 0),t([ye({type:String})],Ro.prototype,"replaybase",void 0),t([ye({type:String})],Ro.prototype,"swName",void 0),t([ye({type:String})],Ro.prototype,"title",void 0),t([ye({type:String})],Ro.prototype,"coll",void 0),t([ye({type:String})],Ro.prototype,"config",void 0),t([ye({type:Boolean})],Ro.prototype,"inited",void 0),t([ye({type:String})],Ro.prototype,"paramString",void 0),t([ye({type:String})],Ro.prototype,"hashString",void 0),t([ye({type:Boolean})],Ro.prototype,"deepLink",void 0),t([ye({type:Boolean})],Ro.prototype,"updateFavicons",void 0),t([ye({type:Boolean})],Ro.prototype,"sandbox",void 0),t([ye({type:Boolean})],Ro.prototype,"noSandbox",void 0),t([ye({type:Boolean})],Ro.prototype,"noWebWorker",void 0),t([ye({type:Boolean})],Ro.prototype,"noCache",void 0),t([ye({type:Boolean})],Ro.prototype,"hideOffscreen",void 0),t([ye({type:Boolean})],Ro.prototype,"useAdblock",void 0),t([ye({type:String})],Ro.prototype,"adblockRulesUrl",void 0),t([ye({type:String})],Ro.prototype,"newWindowBase",void 0),t([ye({type:String})],Ro.prototype,"errorMessage",void 0),t([ye({type:Boolean})],Ro.prototype,"requireSubdomainIframe",void 0),t([ye({type:String})],Ro.prototype,"loading",void 0),t([ye({type:Boolean})],Ro.prototype,"useRuffle",void 0),t([Se("iframe")],Ro.prototype,"iframe",void 0),function(){i(this,void 0,void 0,(function*(){customElements.define("replay-web-page",Ro)}))}();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oo=Symbol.for(""),Uo=e=>{if(e?.r===Oo)return e?._$litStatic$},Bo=(e,...t)=>({_$litStatic$:t.reduce(((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1]),e[0]),r:Oo}),No=new Map,qo=e=>(t,...i)=>{const o=i.length;let n,r;const s=[],a=[];let l,c=0,d=!1;for(;c<o;){for(l=t[c];c<o&&void 0!==(r=i[c],n=Uo(r));)l+=n+t[++c],d=!0;c!==o&&a.push(r),s.push(l),c++}if(c===o&&s.push(t[o]),d){const e=s.join("$$lit$$");void 0===(t=No.get(e))&&(s.raw=s,No.set(e,t=s)),i=a}return e(t,...i)},jo=qo(Q),Ho=(qo(Z),document.createElement("i"));function Wo(e){const t="&"+e+";";Ho.innerHTML=t;const i=Ho.textContent;return(59!==i.charCodeAt(i.length-1)||"semi"===e)&&(i!==t&&i)}function Vo(e,t,i,o){const n=e.length;let r,s=0;if(t=t<0?-t>n?0:n+t:t>n?n:t,i=i>0?i:0,o.length<1e4)r=Array.from(o),r.unshift(t,i),e.splice(...r);else for(i&&e.splice(t,i);s<o.length;)r=o.slice(s,s+1e4),r.unshift(t,0),e.splice(...r),s+=1e4,t+=1e4}function Go(e,t){return e.length>0?(Vo(e,e.length,0,t),e):t}const Ko={}.hasOwnProperty;function Yo(e,t){let i;for(i in t){const o=(Ko.call(e,i)?e[i]:void 0)||(e[i]={}),n=t[i];let r;if(n)for(r in n){Ko.call(o,r)||(o[r]=[]);const e=n[r];Qo(o[r],Array.isArray(e)?e:e?[e]:[])}}}function Qo(e,t){let i=-1;const o=[];for(;++i<t.length;)("after"===t[i].add?e:o).push(t[i]);Vo(e,0,0,o)}function Zo(e,t){let i;for(i in t){const o=(Ko.call(e,i)?e[i]:void 0)||(e[i]={}),n=t[i];let r;if(n)for(r in n)o[r]=n[r]}}const Jo={'"':"quot","&":"amp","<":"lt",">":"gt"};function Xo(e){return e.replace(/["&<>]/g,(function(e){return"&"+Jo[e]+";"}))}function en(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const tn=pn(/[A-Za-z]/),on=pn(/[\dA-Za-z]/),nn=pn(/[#-'*+\--9=?A-Z^-~]/);function rn(e){return null!==e&&(e<32||127===e)}const sn=pn(/\d/),an=pn(/[\dA-Fa-f]/),ln=pn(/[!-/:-@[-`{-~]/);function cn(e){return null!==e&&e<-2}function dn(e){return null!==e&&(e<0||32===e)}function hn(e){return-2===e||-1===e||32===e}const un=pn(/\p{P}|\p{S}/u),fn=pn(/\s/);function pn(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function mn(e,t){const i=Xo(function(e){const t=[];let i=-1,o=0,n=0;for(;++i<e.length;){const r=e.charCodeAt(i);let s="";if(37===r&&on(e.charCodeAt(i+1))&&on(e.charCodeAt(i+2)))n=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(s=String.fromCharCode(r));else if(r>55295&&r<57344){const t=e.charCodeAt(i+1);r<56320&&t>56319&&t<57344?(s=String.fromCharCode(r,t),n=1):s="�"}else s=String.fromCharCode(r);s&&(t.push(e.slice(o,i),encodeURIComponent(s)),o=i+n+1,s=""),n&&(i+=n,n=0)}return t.join("")+e.slice(o)}(e||""));if(!t)return i;const o=i.indexOf(":"),n=i.indexOf("?"),r=i.indexOf("#"),s=i.indexOf("/");return o<0||s>-1&&o>s||n>-1&&o>n||r>-1&&o>r||t.test(i.slice(0,o))?i:""}const bn={}.hasOwnProperty,gn=/^(https?|ircs?|mailto|xmpp)$/i,vn=/^https?$/i;function wn(e){const t=e||{};let i=!0;const o={},n=[[]],r=[],s=[],a=function(e){const t={};let i=-1;for(;++i<e.length;)Zo(t,e[i]);return t}([{enter:{blockQuote:function(){s.push(!1),w(),b("<blockquote>")},codeFenced:function(){w(),b("<pre><code"),u("fencesCount",0)},codeFencedFenceInfo:p,codeFencedFenceMeta:p,codeIndented:function(){w(),b("<pre><code>")},codeText:function(){u("inCodeText",!0),b("<code>")},content:function(){u("slurpAllLineEndings",!0)},definition:function(){p(),r.push({})},definitionDestinationString:function(){p(),u("ignoreEncode",!0)},definitionLabelString:p,definitionTitleString:p,emphasis:function(){b("<em>")},htmlFlow:function(){w(),I()},htmlText:I,image:function(){r.push({image:!0}),i=void 0},label:p,link:function(){r.push({})},listItemMarker:function(){f("expectFirstItem")?b(">"):k();w(),b("<li>"),u("expectFirstItem"),u("lastWasTag")},listItemValue:function(e){if(f("expectFirstItem")){const t=Number.parseInt(this.sliceSerialize(e),10);1!==t&&b(' start="'+y(String(t))+'"')}},listOrdered:function(e){s.push(!e._loose),w(),b("<ol"),u("expectFirstItem",!0)},listUnordered:function(e){s.push(!e._loose),w(),b("<ul"),u("expectFirstItem",!0)},paragraph:function(){s[s.length-1]||(w(),b("<p>"));u("slurpAllLineEndings")},reference:p,resource:function(){p(),r[r.length-1].destination=""},resourceDestinationString:function(){p(),u("ignoreEncode",!0)},resourceTitleString:p,setextHeading:function(){p(),u("slurpAllLineEndings")},strong:function(){b("<strong>")}},exit:{atxHeading:function(){b("</h"+f("headingRank")+">"),u("headingRank")},atxHeadingSequence:function(e){if(f("headingRank"))return;u("headingRank",this.sliceSerialize(e).length),w(),b("<h"+f("headingRank")+">")},autolinkEmail:function(e){const t=this.sliceSerialize(e);b('<a href="'+mn("mailto:"+t)+'">'),g(y(t)),b("</a>")},autolinkProtocol:function(e){const i=this.sliceSerialize(e);b('<a href="'+mn(i,t.allowDangerousProtocol?void 0:gn)+'">'),g(y(i)),b("</a>")},blockQuote:function(){s.pop(),w(),b("</blockquote>"),u("slurpAllLineEndings")},characterEscapeValue:z,characterReferenceMarkerHexadecimal:L,characterReferenceMarkerNumeric:L,characterReferenceValue:function(e){const t=this.sliceSerialize(e);g(y(f("characterReferenceType")?function(e,t){const i=Number.parseInt(e,t);return i<9||11===i||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||!(65535&~i)||65534==(65535&i)||i>1114111?"�":String.fromCodePoint(i)}(t,"characterReferenceMarkerNumeric"===f("characterReferenceType")?10:16):Wo(t))),u("characterReferenceType")},codeFenced:S,codeFencedFence:function(){const e=f("fencesCount")||0;e||(b(">"),u("slurpOneLineEnding",!0));u("fencesCount",e+1)},codeFencedFenceInfo:function(){b(' class="language-'+m()+'"')},codeFencedFenceMeta:x,codeFlowValue:function(e){g(y(this.sliceSerialize(e))),u("flowCodeSeenData",!0)},codeIndented:S,codeText:function(){u("inCodeText"),b("</code>")},codeTextData:z,data:z,definition:function(){const e=en(r[r.length-1].labelId);m(),bn.call(o,e)||(o[e]=r[r.length-1]);r.pop()},definitionDestinationString:function(){r[r.length-1].destination=m(),u("ignoreEncode")},definitionLabelString:function(e){m(),r[r.length-1].labelId=this.sliceSerialize(e)},definitionTitleString:function(){r[r.length-1].title=m()},emphasis:function(){b("</em>")},hardBreakEscape:_,hardBreakTrailing:_,htmlFlow:C,htmlFlowData:z,htmlText:C,htmlTextData:z,image:$,label:function(){r[r.length-1].label=m()},labelText:function(e){r[r.length-1].labelId=this.sliceSerialize(e)},lineEnding:function(e){if(f("slurpAllLineEndings"))return;if(f("slurpOneLineEnding"))return void u("slurpOneLineEnding");if(f("inCodeText"))return void g(" ");g(y(this.sliceSerialize(e)))},link:$,listOrdered:function(){k(),s.pop(),v(),b("</ol>")},listUnordered:function(){k(),s.pop(),v(),b("</ul>")},paragraph:function(){s[s.length-1]?u("slurpAllLineEndings",!0):b("</p>")},reference:x,referenceString:function(e){r[r.length-1].referenceId=this.sliceSerialize(e)},resource:x,resourceDestinationString:function(){r[r.length-1].destination=m(),u("ignoreEncode")},resourceTitleString:function(){r[r.length-1].title=m()},setextHeading:function(){const e=m();w(),b("<h"+f("headingRank")+">"),g(e),b("</h"+f("headingRank")+">"),u("slurpAllLineEndings"),u("headingRank")},setextHeadingLineSequence:function(e){u("headingRank",61===this.sliceSerialize(e).charCodeAt(0)?1:2)},setextHeadingText:function(){u("slurpAllLineEndings",!0)},strong:function(){b("</strong>")},thematicBreak:function(){w(),b("<hr />")}}},...t.htmlExtensions||[]]),l={definitions:o,tightStack:s},c={buffer:p,encode:y,getData:f,lineEndingIfNeeded:w,options:t,raw:g,resume:m,setData:u,tag:b};let d=t.defaultLineEnding;return function(e){let t=-1,i=0;const o=[];let r=[],s=[];for(;++t<e.length;)d||"lineEnding"!==e[t][1].type&&"lineEndingBlank"!==e[t][1].type||(d=e[t][2].sliceSerialize(e[t][1])),"listOrdered"!==e[t][1].type&&"listUnordered"!==e[t][1].type||("enter"===e[t][0]?o.push(t):h(e.slice(o.pop(),t))),"definition"===e[t][1].type&&("enter"===e[t][0]?(s=Go(s,e.slice(i,t)),i=t):(r=Go(r,e.slice(i,t+1)),i=t+1));r=Go(r,s),r=Go(r,e.slice(i)),t=-1;const l=r;a.enter.null&&a.enter.null.call(c);for(;++t<e.length;){const e=a[l[t][0]],i=l[t][1].type,o=e[i];bn.call(e,i)&&o&&o.call({sliceSerialize:l[t][2].sliceSerialize,...c},l[t][1])}a.exit.null&&a.exit.null.call(c);return n[0].join("")};function h(e){const t=e.length;let i,o=0,n=0,r=!1;for(;++o<t;){const t=e[o];if(t[1]._container)i=void 0,"enter"===t[0]?n++:n--;else switch(t[1].type){case"listItemPrefix":"exit"===t[0]&&(i=!0);break;case"linePrefix":break;case"lineEndingBlank":"enter"!==t[0]||n||(i?i=void 0:r=!0);break;default:i=void 0}}e[0][1]._loose=r}function u(e,t){l[e]=t}function f(e){return l[e]}function p(){n.push([])}function m(){return n.pop().join("")}function b(e){i&&(u("lastWasTag",!0),n[n.length-1].push(e))}function g(e){u("lastWasTag"),n[n.length-1].push(e)}function v(){g(d||"\n")}function w(){const e=n[n.length-1],t=e[e.length-1],i=t?t.charCodeAt(t.length-1):null;10!==i&&13!==i&&null!==i&&v()}function y(e){return f("ignoreEncode")?e:Xo(e)}function x(){m()}function k(){f("lastWasTag")&&!f("slurpAllLineEndings")&&w(),b("</li>"),u("slurpAllLineEndings")}function S(){const e=f("fencesCount");void 0!==e&&e<2&&l.tightStack.length>0&&!f("lastWasTag")&&v(),f("flowCodeSeenData")&&w(),b("</code></pre>"),void 0!==e&&e<2&&w(),u("flowCodeSeenData"),u("fencesCount"),u("slurpOneLineEnding")}function $(){let e=r.length-1;const n=r[e],s=n.referenceId||n.labelId,a=void 0===n.destination?o[en(s)]:n;for(i=!0;e--;)if(r[e].image){i=void 0;break}n.image?(b('<img src="'+mn(a.destination,t.allowDangerousProtocol?void 0:vn)+'" alt="'),g(n.label),b('"')):b('<a href="'+mn(a.destination,t.allowDangerousProtocol?void 0:gn)+'"'),b(a.title?' title="'+a.title+'"':""),n.image?b(" />"):(b(">"),g(n.label),b("</a>")),r.pop()}function z(e){g(y(this.sliceSerialize(e)))}function _(){b("<br />")}function C(){u("ignoreEncode")}function I(){t.allowDangerousHtml&&u("ignoreEncode",!0)}function L(e){u("characterReferenceType",e.type)}}function yn(e,t,i,o){const n=o?o-1:Number.POSITIVE_INFINITY;let r=0;return function(o){if(hn(o))return e.enter(i),s(o);return t(o)};function s(o){return hn(o)&&r++<n?(e.consume(o),s):(e.exit(i),t(o))}}const xn={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(i){if(null===i)return void e.consume(i);return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),yn(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),o(t)}));let i;return t;function o(t){const o=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=o),i=o,n(t)}function n(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):cn(t)?(e.consume(t),e.exit("chunkText"),o):(e.consume(t),n)}}};const kn={tokenize:function(e){const t=this,i=[];let o,n,r,s=0;return a;function a(o){if(s<i.length){const n=i[s];return t.containerState=n[1],e.attempt(n[0].continuation,l,c)(o)}return c(o)}function l(e){if(s++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&v();const i=t.events.length;let n,r=i;for(;r--;)if("exit"===t.events[r][0]&&"chunkFlow"===t.events[r][1].type){n=t.events[r][1].end;break}g(s);let a=i;for(;a<t.events.length;)t.events[a][1].end={...n},a++;return Vo(t.events,r+1,0,t.events.slice(i)),t.events.length=a,c(e)}return a(e)}function c(n){if(s===i.length){if(!o)return u(n);if(o.currentConstruct&&o.currentConstruct.concrete)return p(n);t.interrupt=Boolean(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Sn,d,h)(n)}function d(e){return o&&v(),g(s),u(e)}function h(e){return t.parser.lazy[t.now().line]=s!==i.length,r=t.now().offset,p(e)}function u(i){return t.containerState={},e.attempt(Sn,f,p)(i)}function f(e){return s++,i.push([t.currentConstruct,t.containerState]),u(e)}function p(i){return null===i?(o&&v(),g(0),void e.consume(i)):(o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:n}),m(i))}function m(i){return null===i?(b(e.exit("chunkFlow"),!0),g(0),void e.consume(i)):cn(i)?(e.consume(i),b(e.exit("chunkFlow")),s=0,t.interrupt=void 0,a):(e.consume(i),m)}function b(e,i){const a=t.sliceStream(e);if(i&&a.push(null),e.previous=n,n&&(n.next=e),n=e,o.defineSkip(e.start),o.write(a),t.parser.lazy[e.start.line]){let e=o.events.length;for(;e--;)if(o.events[e][1].start.offset<r&&(!o.events[e][1].end||o.events[e][1].end.offset>r))return;const i=t.events.length;let n,a,l=i;for(;l--;)if("exit"===t.events[l][0]&&"chunkFlow"===t.events[l][1].type){if(n){a=t.events[l][1].end;break}n=!0}for(g(s),e=i;e<t.events.length;)t.events[e][1].end={...a},e++;Vo(t.events,l+1,0,t.events.slice(i)),t.events.length=e}}function g(o){let n=i.length;for(;n-- >o;){const o=i[n];t.containerState=o[1],o[0].exit.call(t,e)}i.length=o}function v(){o.write([null]),n=void 0,o=void 0,t.containerState._closeFlow=void 0}}},Sn={tokenize:function(e,t,i){return yn(e,e.attempt(this.parser.constructs.document,t,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const $n={partial:!0,tokenize:function(e,t,i){return function(t){return hn(t)?yn(e,o,"linePrefix")(t):o(t)};function o(e){return null===e||cn(e)?t(e):i(e)}}};class zn{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const i=null==t?Number.POSITIVE_INFINITY:t;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,t,i){const o=t||0;this.setCursor(Math.trunc(e));const n=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return i&&_n(this.left,i),n.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),_n(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),_n(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);_n(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);_n(this.left,t.reverse())}}}function _n(e,t){let i=0;if(t.length<1e4)e.push(...t);else for(;i<t.length;)e.push(...t.slice(i,i+1e4)),i+=1e4}function Cn(e){const t={};let i,o,n,r,s,a,l,c=-1;const d=new zn(e);for(;++c<d.length;){for(;c in t;)c=t[c];if(i=d.get(c),c&&"chunkFlow"===i[1].type&&"listItemPrefix"===d.get(c-1)[1].type&&(a=i[1]._tokenizer.events,n=0,n<a.length&&"lineEndingBlank"===a[n][1].type&&(n+=2),n<a.length&&"content"===a[n][1].type))for(;++n<a.length&&"content"!==a[n][1].type;)"chunkText"===a[n][1].type&&(a[n][1]._isInFirstContentOfListItem=!0,n++);if("enter"===i[0])i[1].contentType&&(Object.assign(t,In(d,c)),c=t[c],l=!0);else if(i[1]._container){for(n=c,o=void 0;n--&&(r=d.get(n),"lineEnding"===r[1].type||"lineEndingBlank"===r[1].type);)"enter"===r[0]&&(o&&(d.get(o)[1].type="lineEndingBlank"),r[1].type="lineEnding",o=n);o&&(i[1].end={...d.get(o)[1].start},s=d.slice(o,c),s.unshift(i),d.splice(o,c-o+1,s))}}return Vo(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!l}function In(e,t){const i=e.get(t)[1],o=e.get(t)[2];let n=t-1;const r=[],s=i._tokenizer||o.parser[i.contentType](i.start),a=s.events,l=[],c={};let d,h,u=-1,f=i,p=0,m=0;const b=[m];for(;f;){for(;e.get(++n)[1]!==f;);r.push(n),f._tokenizer||(d=o.sliceStream(f),f.next||d.push(null),h&&s.defineSkip(f.start),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),h=f,f=f.next}for(f=i;++u<a.length;)"exit"===a[u][0]&&"enter"===a[u-1][0]&&a[u][1].type===a[u-1][1].type&&a[u][1].start.line!==a[u][1].end.line&&(m=u+1,b.push(m),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(s.events=[],f?(f._tokenizer=void 0,f.previous=void 0):b.pop(),u=b.length;u--;){const t=a.slice(b[u],b[u+1]),i=r.pop();l.push([i,i+t.length-1]),e.splice(i,2,t)}for(l.reverse(),u=-1;++u<l.length;)c[p+l[u][0]]=p+l[u][1],p+=l[u][1]-l[u][0]-1;return c}const Ln={resolve:function(e){return Cn(e),e},tokenize:function(e,t){let i;return function(t){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),o(t)};function o(t){return null===t?n(t):cn(t)?e.check(En,r,n)(t):(e.consume(t),o)}function n(i){return e.exit("chunkContent"),e.exit("content"),t(i)}function r(t){return e.consume(t),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,o}}},En={partial:!0,tokenize:function(e,t,i){const o=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),yn(e,n,"linePrefix")};function n(n){if(null===n||cn(n))return i(n);const r=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&r&&"linePrefix"===r[1].type&&r[2].sliceSerialize(r[1],!0).length>=4?t(n):e.interrupt(o.parser.constructs.flow,i,t)(n)}}};const An={tokenize:function(e){const t=this,i=e.attempt($n,(function(o){if(null===o)return void e.consume(o);return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,i}),e.attempt(this.parser.constructs.flowInitial,o,yn(e,e.attempt(this.parser.constructs.flow,o,e.attempt(Ln,o)),"linePrefix")));return i;function o(o){if(null!==o)return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,i;e.consume(o)}}};const Tn={resolveAll:Mn()},Pn=Fn("string"),Dn=Fn("text");function Fn(e){return{resolveAll:Mn("text"===e?Rn:void 0),tokenize:function(t){const i=this,o=this.parser.constructs[e],n=t.attempt(o,r,s);return r;function r(e){return l(e)?n(e):s(e)}function s(e){if(null!==e)return t.enter("data"),t.consume(e),a;t.consume(e)}function a(e){return l(e)?(t.exit("data"),n(e)):(t.consume(e),a)}function l(e){if(null===e)return!0;const t=o[e];let n=-1;if(t)for(;++n<t.length;){const e=t[n];if(!e.previous||e.previous.call(i,i.previous))return!0}return!1}}}}function Mn(e){return function(t,i){let o,n=-1;for(;++n<=t.length;)void 0===o?t[n]&&"data"===t[n][1].type&&(o=n,n++):t[n]&&"data"===t[n][1].type||(n!==o+2&&(t[o][1].end=t[n-1][1].end,t.splice(o+2,n-o-2),n=o+2),o=void 0);return e?e(t,i):t}}function Rn(e,t){let i=0;for(;++i<=e.length;)if((i===e.length||"lineEnding"===e[i][1].type)&&"data"===e[i-1][1].type){const o=e[i-1][1],n=t.sliceStream(o);let r,s=n.length,a=-1,l=0;for(;s--;){const e=n[s];if("string"==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)l++,a--;if(a)break;a=-1}else if(-2===e)r=!0,l++;else if(-1!==e){s++;break}}if(l){const n={type:i===e.length||r||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:o.start._bufferIndex+a,_index:o.start._index+s,line:o.end.line,column:o.end.column-l,offset:o.end.offset-l},end:{...o.end}};o.end={...n.start},o.start.offset===o.end.offset?Object.assign(o,n):(e.splice(i,0,["enter",n,t],["exit",n,t]),i+=2)}i++}return e}const On={name:"thematicBreak",tokenize:function(e,t,i){let o,n=0;return function(t){return e.enter("thematicBreak"),function(e){return o=e,r(e)}(t)};function r(r){return r===o?(e.enter("thematicBreakSequence"),s(r)):n>=3&&(null===r||cn(r))?(e.exit("thematicBreak"),t(r)):i(r)}function s(t){return t===o?(e.consume(t),n++,s):(e.exit("thematicBreakSequence"),hn(t)?yn(e,r,"whitespace")(t):r(t))}}};const Un={continuation:{tokenize:function(e,t,i){const o=this;return o.containerState._closeFlow=void 0,e.check($n,(function(i){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,yn(e,t,"listItemIndent",o.containerState.size+1)(i)}),(function(i){if(o.containerState.furtherBlankLines||!hn(i))return o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,n(i);return o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,e.attempt(Nn,t,n)(i)}));function n(n){return o.containerState._closeFlow=!0,o.interrupt=void 0,yn(e,e.attempt(Un,t,i),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,t,i){const o=this,n=o.events[o.events.length-1];let r=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,s=0;return function(t){const n=o.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===n?!o.containerState.marker||t===o.containerState.marker:sn(t)){if(o.containerState.type||(o.containerState.type=n,e.enter(n,{_container:!0})),"listUnordered"===n)return e.enter("listItemPrefix"),42===t||45===t?e.check(On,i,l)(t):l(t);if(!o.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(t)}return i(t)};function a(t){return sn(t)&&++s<10?(e.consume(t),a):(!o.interrupt||s<2)&&(o.containerState.marker?t===o.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),l(t)):i(t)}function l(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||t,e.check($n,o.interrupt?i:c,e.attempt(Bn,h,d))}function c(e){return o.containerState.initialBlankLine=!0,r++,h(e)}function d(t){return hn(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),h):i(t)}function h(i){return o.containerState.size=r+o.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(i)}}},Bn={partial:!0,tokenize:function(e,t,i){const o=this;return yn(e,(function(e){const n=o.events[o.events.length-1];return!hn(e)&&n&&"listItemPrefixWhitespace"===n[1].type?t(e):i(e)}),"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},Nn={partial:!0,tokenize:function(e,t,i){const o=this;return yn(e,(function(e){const n=o.events[o.events.length-1];return n&&"listItemIndent"===n[1].type&&n[2].sliceSerialize(n[1],!0).length===o.containerState.size?t(e):i(e)}),"listItemIndent",o.containerState.size+1)}};const qn={continuation:{tokenize:function(e,t,i){const o=this;return function(t){if(hn(t))return yn(e,n,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return n(t)};function n(o){return e.attempt(qn,t,i)(o)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,t,i){const o=this;return function(t){if(62===t){const i=o.containerState;return i.open||(e.enter("blockQuote",{_container:!0}),i.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),n}return i(t)};function n(i){return hn(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}};function jn(e,t,i,o,n,r,s,a,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return function(t){if(60===t)return e.enter(o),e.enter(n),e.enter(r),e.consume(t),e.exit(r),h;if(null===t||32===t||41===t||rn(t))return i(t);return e.enter(o),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),p(t)};function h(i){return 62===i?(e.enter(r),e.consume(i),e.exit(r),e.exit(n),e.exit(o),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),u(i))}function u(t){return 62===t?(e.exit("chunkString"),e.exit(a),h(t)):null===t||60===t||cn(t)?i(t):(e.consume(t),92===t?f:u)}function f(t){return 60===t||62===t||92===t?(e.consume(t),u):u(t)}function p(n){return d||null!==n&&41!==n&&!dn(n)?d<c&&40===n?(e.consume(n),d++,p):41===n?(e.consume(n),d--,p):null===n||32===n||40===n||rn(n)?i(n):(e.consume(n),92===n?m:p):(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(o),t(n))}function m(t){return 40===t||41===t||92===t?(e.consume(t),p):p(t)}}function Hn(e,t,i,o,n,r){const s=this;let a,l=0;return function(t){return e.enter(o),e.enter(n),e.consume(t),e.exit(n),e.enter(r),c};function c(h){return l>999||null===h||91===h||93===h&&!a||94===h&&!l&&"_hiddenFootnoteSupport"in s.parser.constructs?i(h):93===h?(e.exit(r),e.enter(n),e.consume(h),e.exit(n),e.exit(o),t):cn(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(t){return null===t||91===t||93===t||cn(t)||l++>999?(e.exit("chunkString"),c(t)):(e.consume(t),a||(a=!hn(t)),92===t?h:d)}function h(t){return 91===t||92===t||93===t?(e.consume(t),l++,d):d(t)}}function Wn(e,t,i,o,n,r){let s;return function(t){if(34===t||39===t||40===t)return e.enter(o),e.enter(n),e.consume(t),e.exit(n),s=40===t?41:t,a;return i(t)};function a(i){return i===s?(e.enter(n),e.consume(i),e.exit(n),e.exit(o),t):(e.enter(r),l(i))}function l(t){return t===s?(e.exit(r),a(s)):null===t?i(t):cn(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),yn(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===s||null===t||cn(t)?(e.exit("chunkString"),l(t)):(e.consume(t),92===t?d:c)}function d(t){return t===s||92===t?(e.consume(t),c):c(t)}}function Vn(e,t){let i;return function o(n){if(cn(n))return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),i=!0,o;if(hn(n))return yn(e,o,i?"linePrefix":"lineSuffix")(n);return t(n)}}const Gn={name:"definition",tokenize:function(e,t,i){const o=this;let n;return function(t){return e.enter("definition"),function(t){return Hn.call(o,e,r,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function r(t){return n=en(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),s):i(t)}function s(t){return dn(t)?Vn(e,a)(t):a(t)}function a(t){return jn(e,l,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function l(t){return e.attempt(Kn,c,c)(t)}function c(t){return hn(t)?yn(e,d,"whitespace")(t):d(t)}function d(r){return null===r||cn(r)?(e.exit("definition"),o.parser.defined.push(n),t(r)):i(r)}}},Kn={partial:!0,tokenize:function(e,t,i){return function(t){return dn(t)?Vn(e,o)(t):i(t)};function o(t){return Wn(e,n,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function n(t){return hn(t)?yn(e,r,"whitespace")(t):r(t)}function r(e){return null===e||cn(e)?t(e):i(e)}}};const Yn={name:"codeIndented",tokenize:function(e,t,i){const o=this;return function(t){return e.enter("codeIndented"),yn(e,n,"linePrefix",5)(t)};function n(e){const t=o.events[o.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?r(e):i(e)}function r(t){return null===t?a(t):cn(t)?e.attempt(Qn,r,a)(t):(e.enter("codeFlowValue"),s(t))}function s(t){return null===t||cn(t)?(e.exit("codeFlowValue"),r(t)):(e.consume(t),s)}function a(i){return e.exit("codeIndented"),t(i)}}},Qn={partial:!0,tokenize:function(e,t,i){const o=this;return n;function n(t){return o.parser.lazy[o.now().line]?i(t):cn(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),n):yn(e,r,"linePrefix",5)(t)}function r(e){const r=o.events[o.events.length-1];return r&&"linePrefix"===r[1].type&&r[2].sliceSerialize(r[1],!0).length>=4?t(e):cn(e)?n(e):i(e)}}};const Zn={name:"headingAtx",resolve:function(e,t){let i,o,n=e.length-2,r=3;"whitespace"===e[r][1].type&&(r+=2);n-2>r&&"whitespace"===e[n][1].type&&(n-=2);"atxHeadingSequence"===e[n][1].type&&(r===n-1||n-4>r&&"whitespace"===e[n-2][1].type)&&(n-=r+1===n?2:4);n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Vo(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]]));return e},tokenize:function(e,t,i){let o=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),n(t)}(t)};function n(t){return 35===t&&o++<6?(e.consume(t),n):null===t||dn(t)?(e.exit("atxHeadingSequence"),r(t)):i(t)}function r(i){return 35===i?(e.enter("atxHeadingSequence"),s(i)):null===i||cn(i)?(e.exit("atxHeading"),t(i)):hn(i)?yn(e,r,"whitespace")(i):(e.enter("atxHeadingText"),a(i))}function s(t){return 35===t?(e.consume(t),s):(e.exit("atxHeadingSequence"),r(t))}function a(t){return null===t||35===t||dn(t)?(e.exit("atxHeadingText"),r(t)):(e.consume(t),a)}}};const Jn={name:"setextUnderline",resolveTo:function(e,t){let i,o,n,r=e.length;for(;r--;)if("enter"===e[r][0]){if("content"===e[r][1].type){i=r;break}"paragraph"===e[r][1].type&&(o=r)}else"content"===e[r][1].type&&e.splice(r,1),n||"definition"!==e[r][1].type||(n=r);const s={type:"setextHeading",start:{...e[o][1].start},end:{...e[e.length-1][1].end}};e[o][1].type="setextHeadingText",n?(e.splice(o,0,["enter",s,t]),e.splice(n+1,0,["exit",e[i][1],t]),e[i][1].end={...e[n][1].end}):e[i][1]=s;return e.push(["exit",s,t]),e},tokenize:function(e,t,i){const o=this;let n;return function(t){let s,a=o.events.length;for(;a--;)if("lineEnding"!==o.events[a][1].type&&"linePrefix"!==o.events[a][1].type&&"content"!==o.events[a][1].type){s="paragraph"===o.events[a][1].type;break}if(!o.parser.lazy[o.now().line]&&(o.interrupt||s))return e.enter("setextHeadingLine"),n=t,function(t){return e.enter("setextHeadingLineSequence"),r(t)}(t);return i(t)};function r(t){return t===n?(e.consume(t),r):(e.exit("setextHeadingLineSequence"),hn(t)?yn(e,s,"lineSuffix")(t):s(t))}function s(o){return null===o||cn(o)?(e.exit("setextHeadingLine"),t(o)):i(o)}}};const Xn=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],er=["pre","script","style","textarea"],tr={concrete:!0,name:"htmlFlow",resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},tokenize:function(e,t,i){const o=this;let n,r,s,a,l;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(a){return 33===a?(e.consume(a),d):47===a?(e.consume(a),r=!0,f):63===a?(e.consume(a),n=3,o.interrupt?t:D):tn(a)?(e.consume(a),s=String.fromCharCode(a),p):i(a)}function d(r){return 45===r?(e.consume(r),n=2,h):91===r?(e.consume(r),n=5,a=0,u):tn(r)?(e.consume(r),n=4,o.interrupt?t:D):i(r)}function h(n){return 45===n?(e.consume(n),o.interrupt?t:D):i(n)}function u(n){const r="CDATA[";return n===r.charCodeAt(a++)?(e.consume(n),6===a?o.interrupt?t:_:u):i(n)}function f(t){return tn(t)?(e.consume(t),s=String.fromCharCode(t),p):i(t)}function p(a){if(null===a||47===a||62===a||dn(a)){const l=47===a,c=s.toLowerCase();return l||r||!er.includes(c)?Xn.includes(s.toLowerCase())?(n=6,l?(e.consume(a),m):o.interrupt?t(a):_(a)):(n=7,o.interrupt&&!o.parser.lazy[o.now().line]?i(a):r?b(a):g(a)):(n=1,o.interrupt?t(a):_(a))}return 45===a||on(a)?(e.consume(a),s+=String.fromCharCode(a),p):i(a)}function m(n){return 62===n?(e.consume(n),o.interrupt?t:_):i(n)}function b(t){return hn(t)?(e.consume(t),b):$(t)}function g(t){return 47===t?(e.consume(t),$):58===t||95===t||tn(t)?(e.consume(t),v):hn(t)?(e.consume(t),g):$(t)}function v(t){return 45===t||46===t||58===t||95===t||on(t)?(e.consume(t),v):w(t)}function w(t){return 61===t?(e.consume(t),y):hn(t)?(e.consume(t),w):g(t)}function y(t){return null===t||60===t||61===t||62===t||96===t?i(t):34===t||39===t?(e.consume(t),l=t,x):hn(t)?(e.consume(t),y):k(t)}function x(t){return t===l?(e.consume(t),l=null,S):null===t||cn(t)?i(t):(e.consume(t),x)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||dn(t)?w(t):(e.consume(t),k)}function S(e){return 47===e||62===e||hn(e)?g(e):i(e)}function $(t){return 62===t?(e.consume(t),z):i(t)}function z(t){return null===t||cn(t)?_(t):hn(t)?(e.consume(t),z):i(t)}function _(t){return 45===t&&2===n?(e.consume(t),E):60===t&&1===n?(e.consume(t),A):62===t&&4===n?(e.consume(t),F):63===t&&3===n?(e.consume(t),D):93===t&&5===n?(e.consume(t),P):!cn(t)||6!==n&&7!==n?null===t||cn(t)?(e.exit("htmlFlowData"),C(t)):(e.consume(t),_):(e.exit("htmlFlowData"),e.check(ir,M,C)(t))}function C(t){return e.check(or,I,M)(t)}function I(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),L}function L(t){return null===t||cn(t)?C(t):(e.enter("htmlFlowData"),_(t))}function E(t){return 45===t?(e.consume(t),D):_(t)}function A(t){return 47===t?(e.consume(t),s="",T):_(t)}function T(t){if(62===t){const i=s.toLowerCase();return er.includes(i)?(e.consume(t),F):_(t)}return tn(t)&&s.length<8?(e.consume(t),s+=String.fromCharCode(t),T):_(t)}function P(t){return 93===t?(e.consume(t),D):_(t)}function D(t){return 62===t?(e.consume(t),F):45===t&&2===n?(e.consume(t),D):_(t)}function F(t){return null===t||cn(t)?(e.exit("htmlFlowData"),M(t)):(e.consume(t),F)}function M(i){return e.exit("htmlFlow"),t(i)}}},ir={partial:!0,tokenize:function(e,t,i){return function(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt($n,t,i)}}},or={partial:!0,tokenize:function(e,t,i){const o=this;return function(t){if(cn(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),n;return i(t)};function n(e){return o.parser.lazy[o.now().line]?i(e):t(e)}}};const nr={partial:!0,tokenize:function(e,t,i){const o=this;return function(t){if(null===t)return i(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),n};function n(e){return o.parser.lazy[o.now().line]?i(e):t(e)}}},rr={concrete:!0,name:"codeFenced",tokenize:function(e,t,i){const o=this,n={partial:!0,tokenize:function(e,t,i){let n=0;return s;function s(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l}function l(t){return e.enter("codeFencedFence"),hn(t)?yn(e,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===r?(e.enter("codeFencedFenceSequence"),d(t)):i(t)}function d(t){return t===r?(n++,e.consume(t),d):n>=a?(e.exit("codeFencedFenceSequence"),hn(t)?yn(e,h,"whitespace")(t):h(t)):i(t)}function h(o){return null===o||cn(o)?(e.exit("codeFencedFence"),t(o)):i(o)}}};let r,s=0,a=0;return function(t){return function(t){const i=o.events[o.events.length-1];return s=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,r=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),l(t)}(t)};function l(t){return t===r?(a++,e.consume(t),l):a<3?i(t):(e.exit("codeFencedFenceSequence"),hn(t)?yn(e,c,"whitespace")(t):c(t))}function c(i){return null===i||cn(i)?(e.exit("codeFencedFence"),o.interrupt?t(i):e.check(nr,f,v)(i)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(i))}function d(t){return null===t||cn(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):hn(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),yn(e,h,"whitespace")(t)):96===t&&t===r?i(t):(e.consume(t),d)}function h(t){return null===t||cn(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),u(t))}function u(t){return null===t||cn(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===r?i(t):(e.consume(t),u)}function f(t){return e.attempt(n,v,p)(t)}function p(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return s>0&&hn(t)?yn(e,b,"linePrefix",s+1)(t):b(t)}function b(t){return null===t||cn(t)?e.check(nr,f,v)(t):(e.enter("codeFlowValue"),g(t))}function g(t){return null===t||cn(t)?(e.exit("codeFlowValue"),b(t)):(e.consume(t),g)}function v(i){return e.exit("codeFenced"),t(i)}}};const sr={name:"characterReference",tokenize:function(e,t,i){const o=this;let n,r,s=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),a};function a(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),n=31,r=on,c(t))}function l(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),n=6,r=an,c):(e.enter("characterReferenceValue"),n=7,r=sn,c(t))}function c(a){if(59===a&&s){const n=e.exit("characterReferenceValue");return r!==on||Wo(o.sliceSerialize(n))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):i(a)}return r(a)&&s++<n?(e.consume(a),c):i(a)}}};const ar={name:"characterEscape",tokenize:function(e,t,i){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),o};function o(o){return ln(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):i(o)}}};const lr={name:"lineEnding",tokenize:function(e,t){return function(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),yn(e,t,"linePrefix")}}};function cr(e,t,i){const o=[];let n=-1;for(;++n<e.length;){const r=e[n].resolveAll;r&&!o.includes(r)&&(t=r(t,i),o.push(r))}return t}const dr={name:"labelEnd",resolveAll:function(e){let t=-1;const i=[];for(;++t<e.length;){const o=e[t][1];if(i.push(e[t]),"labelImage"===o.type||"labelLink"===o.type||"labelEnd"===o.type){const e="labelImage"===o.type?4:2;o.type="data",t+=e}}e.length!==i.length&&Vo(e,0,e.length,i);return e},resolveTo:function(e,t){let i,o,n,r,s=e.length,a=0;for(;s--;)if(i=e[s][1],o){if("link"===i.type||"labelLink"===i.type&&i._inactive)break;"enter"===e[s][0]&&"labelLink"===i.type&&(i._inactive=!0)}else if(n){if("enter"===e[s][0]&&("labelImage"===i.type||"labelLink"===i.type)&&!i._balanced&&(o=s,"labelLink"!==i.type)){a=2;break}}else"labelEnd"===i.type&&(n=s);const l={type:"labelLink"===e[o][1].type?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[n][1].end}},d={type:"labelText",start:{...e[o+a+2][1].end},end:{...e[n-2][1].start}};return r=[["enter",l,t],["enter",c,t]],r=Go(r,e.slice(o+1,o+a+3)),r=Go(r,[["enter",d,t]]),r=Go(r,cr(t.parser.constructs.insideSpan.null,e.slice(o+a+4,n-3),t)),r=Go(r,[["exit",d,t],e[n-2],e[n-1],["exit",c,t]]),r=Go(r,e.slice(n+1)),r=Go(r,[["exit",l,t]]),Vo(e,o,e.length,r),e},tokenize:function(e,t,i){const o=this;let n,r,s=o.events.length;for(;s--;)if(("labelImage"===o.events[s][1].type||"labelLink"===o.events[s][1].type)&&!o.events[s][1]._balanced){n=o.events[s][1];break}return function(t){if(!n)return i(t);if(n._inactive)return d(t);return r=o.parser.defined.includes(en(o.sliceSerialize({start:n.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a};function a(t){return 40===t?e.attempt(hr,c,r?c:d)(t):91===t?e.attempt(ur,c,r?l:d)(t):r?c(t):d(t)}function l(t){return e.attempt(fr,c,d)(t)}function c(e){return t(e)}function d(e){return n._balanced=!0,i(e)}}},hr={tokenize:function(e,t,i){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),o};function o(t){return dn(t)?Vn(e,n)(t):n(t)}function n(t){return 41===t?c(t):jn(e,r,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function r(t){return dn(t)?Vn(e,a)(t):c(t)}function s(e){return i(e)}function a(t){return 34===t||39===t||40===t?Wn(e,l,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function l(t){return dn(t)?Vn(e,c)(t):c(t)}function c(o){return 41===o?(e.enter("resourceMarker"),e.consume(o),e.exit("resourceMarker"),e.exit("resource"),t):i(o)}}},ur={tokenize:function(e,t,i){const o=this;return function(t){return Hn.call(o,e,n,r,"reference","referenceMarker","referenceString")(t)};function n(e){return o.parser.defined.includes(en(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?t(e):i(e)}function r(e){return i(e)}}},fr={tokenize:function(e,t,i){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),o};function o(o){return 93===o?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):i(o)}}};const pr={name:"labelStartImage",resolveAll:dr.resolveAll,tokenize:function(e,t,i){const o=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),n};function n(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),r):i(t)}function r(e){return 94===e&&"_hiddenFootnoteSupport"in o.parser.constructs?i(e):t(e)}}};function mr(e){return null===e||dn(e)||fn(e)?1:un(e)?2:void 0}const br={name:"attention",resolveAll:function(e,t){let i,o,n,r,s,a,l,c,d=-1;for(;++d<e.length;)if("enter"===e[d][0]&&"attentionSequence"===e[d][1].type&&e[d][1]._close)for(i=d;i--;)if("exit"===e[i][0]&&"attentionSequence"===e[i][1].type&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[d][1]).charCodeAt(0)){if((e[i][1]._close||e[d][1]._open)&&(e[d][1].end.offset-e[d][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[d][1].end.offset-e[d][1].start.offset)%3))continue;a=e[i][1].end.offset-e[i][1].start.offset>1&&e[d][1].end.offset-e[d][1].start.offset>1?2:1;const h={...e[i][1].end},u={...e[d][1].start};gr(h,-a),gr(u,a),r={type:a>1?"strongSequence":"emphasisSequence",start:h,end:{...e[i][1].end}},s={type:a>1?"strongSequence":"emphasisSequence",start:{...e[d][1].start},end:u},n={type:a>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[d][1].start}},o={type:a>1?"strong":"emphasis",start:{...r.start},end:{...s.end}},e[i][1].end={...r.start},e[d][1].start={...s.end},l=[],e[i][1].end.offset-e[i][1].start.offset&&(l=Go(l,[["enter",e[i][1],t],["exit",e[i][1],t]])),l=Go(l,[["enter",o,t],["enter",r,t],["exit",r,t],["enter",n,t]]),l=Go(l,cr(t.parser.constructs.insideSpan.null,e.slice(i+1,d),t)),l=Go(l,[["exit",n,t],["enter",s,t],["exit",s,t],["exit",o,t]]),e[d][1].end.offset-e[d][1].start.offset?(c=2,l=Go(l,[["enter",e[d][1],t],["exit",e[d][1],t]])):c=0,Vo(e,i-1,d-i+3,l),d=i+l.length-c-2;break}d=-1;for(;++d<e.length;)"attentionSequence"===e[d][1].type&&(e[d][1].type="data");return e},tokenize:function(e,t){const i=this.parser.constructs.attentionMarkers.null,o=this.previous,n=mr(o);let r;return function(t){return r=t,e.enter("attentionSequence"),s(t)};function s(a){if(a===r)return e.consume(a),s;const l=e.exit("attentionSequence"),c=mr(a),d=!c||2===c&&n||i.includes(a),h=!n||2===n&&c||i.includes(o);return l._open=Boolean(42===r?d:d&&(n||!h)),l._close=Boolean(42===r?h:h&&(c||!d)),t(a)}}};function gr(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const vr={name:"autolink",tokenize:function(e,t,i){let o=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),n};function n(t){return tn(t)?(e.consume(t),r):64===t?i(t):l(t)}function r(e){return 43===e||45===e||46===e||on(e)?(o=1,s(e)):l(e)}function s(t){return 58===t?(e.consume(t),o=0,a):(43===t||45===t||46===t||on(t))&&o++<32?(e.consume(t),s):(o=0,l(t))}function a(o){return 62===o?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(o),e.exit("autolinkMarker"),e.exit("autolink"),t):null===o||32===o||60===o||rn(o)?i(o):(e.consume(o),a)}function l(t){return 64===t?(e.consume(t),c):nn(t)?(e.consume(t),l):i(t)}function c(e){return on(e)?d(e):i(e)}function d(i){return 46===i?(e.consume(i),o=0,c):62===i?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):h(i)}function h(t){if((45===t||on(t))&&o++<63){const i=45===t?h:d;return e.consume(t),i}return i(t)}}};const wr={name:"htmlText",tokenize:function(e,t,i){const o=this;let n,r,s;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),a};function a(t){return 33===t?(e.consume(t),l):47===t?(e.consume(t),y):63===t?(e.consume(t),v):tn(t)?(e.consume(t),S):i(t)}function l(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),r=0,f):tn(t)?(e.consume(t),g):i(t)}function c(t){return 45===t?(e.consume(t),u):i(t)}function d(t){return null===t?i(t):45===t?(e.consume(t),h):cn(t)?(s=d,T(t)):(e.consume(t),d)}function h(t){return 45===t?(e.consume(t),u):d(t)}function u(e){return 62===e?A(e):45===e?h(e):d(e)}function f(t){const o="CDATA[";return t===o.charCodeAt(r++)?(e.consume(t),6===r?p:f):i(t)}function p(t){return null===t?i(t):93===t?(e.consume(t),m):cn(t)?(s=p,T(t)):(e.consume(t),p)}function m(t){return 93===t?(e.consume(t),b):p(t)}function b(t){return 62===t?A(t):93===t?(e.consume(t),b):p(t)}function g(t){return null===t||62===t?A(t):cn(t)?(s=g,T(t)):(e.consume(t),g)}function v(t){return null===t?i(t):63===t?(e.consume(t),w):cn(t)?(s=v,T(t)):(e.consume(t),v)}function w(e){return 62===e?A(e):v(e)}function y(t){return tn(t)?(e.consume(t),x):i(t)}function x(t){return 45===t||on(t)?(e.consume(t),x):k(t)}function k(t){return cn(t)?(s=k,T(t)):hn(t)?(e.consume(t),k):A(t)}function S(t){return 45===t||on(t)?(e.consume(t),S):47===t||62===t||dn(t)?$(t):i(t)}function $(t){return 47===t?(e.consume(t),A):58===t||95===t||tn(t)?(e.consume(t),z):cn(t)?(s=$,T(t)):hn(t)?(e.consume(t),$):A(t)}function z(t){return 45===t||46===t||58===t||95===t||on(t)?(e.consume(t),z):_(t)}function _(t){return 61===t?(e.consume(t),C):cn(t)?(s=_,T(t)):hn(t)?(e.consume(t),_):$(t)}function C(t){return null===t||60===t||61===t||62===t||96===t?i(t):34===t||39===t?(e.consume(t),n=t,I):cn(t)?(s=C,T(t)):hn(t)?(e.consume(t),C):(e.consume(t),L)}function I(t){return t===n?(e.consume(t),n=void 0,E):null===t?i(t):cn(t)?(s=I,T(t)):(e.consume(t),I)}function L(t){return null===t||34===t||39===t||60===t||61===t||96===t?i(t):47===t||62===t||dn(t)?$(t):(e.consume(t),L)}function E(e){return 47===e||62===e||dn(e)?$(e):i(e)}function A(o){return 62===o?(e.consume(o),e.exit("htmlTextData"),e.exit("htmlText"),t):i(o)}function T(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),P}function P(t){return hn(t)?yn(e,D,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):D(t)}function D(t){return e.enter("htmlTextData"),s(t)}}};const yr={name:"labelStartLink",resolveAll:dr.resolveAll,tokenize:function(e,t,i){const o=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),n};function n(e){return 94===e&&"_hiddenFootnoteSupport"in o.parser.constructs?i(e):t(e)}}};const xr={name:"hardBreakEscape",tokenize:function(e,t,i){return function(t){return e.enter("hardBreakEscape"),e.consume(t),o};function o(o){return cn(o)?(e.exit("hardBreakEscape"),t(o)):i(o)}}};const kr={name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let t,i,o=e.length-4,n=3;if(!("lineEnding"!==e[n][1].type&&"space"!==e[n][1].type||"lineEnding"!==e[o][1].type&&"space"!==e[o][1].type))for(t=n;++t<o;)if("codeTextData"===e[t][1].type){e[n][1].type="codeTextPadding",e[o][1].type="codeTextPadding",n+=2,o-=2;break}t=n-1,o++;for(;++t<=o;)void 0===i?t!==o&&"lineEnding"!==e[t][1].type&&(i=t):t!==o&&"lineEnding"!==e[t][1].type||(e[i][1].type="codeTextData",t!==i+2&&(e[i][1].end=e[t-1][1].end,e.splice(i+2,t-i-2),o-=t-i-2,t=i+2),i=void 0);return e},tokenize:function(e,t,i){let o,n,r=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),s(t)};function s(t){return 96===t?(e.consume(t),r++,s):(e.exit("codeTextSequence"),a(t))}function a(t){return null===t?i(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),a):96===t?(n=e.enter("codeTextSequence"),o=0,c(t)):cn(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),a):(e.enter("codeTextData"),l(t))}function l(t){return null===t||32===t||96===t||cn(t)?(e.exit("codeTextData"),a(t)):(e.consume(t),l)}function c(i){return 96===i?(e.consume(i),o++,c):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(i)):(n.type="codeTextData",l(i))}}};const Sr={42:Un,43:Un,45:Un,48:Un,49:Un,50:Un,51:Un,52:Un,53:Un,54:Un,55:Un,56:Un,57:Un,62:qn},$r={91:Gn},zr={[-2]:Yn,[-1]:Yn,32:Yn},_r={35:Zn,42:On,45:[Jn,On],60:tr,61:Jn,95:On,96:rr,126:rr},Cr={38:sr,92:ar},Ir={[-5]:lr,[-4]:lr,[-3]:lr,33:pr,38:sr,42:br,60:[vr,wr],91:yr,92:[xr,ar],93:dr,95:br,96:kr},Lr={null:[br,Tn]},Er={null:[42,95]},Ar={null:[]};function Tr(e,t,i){let o={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const n={},r=[];let s=[],a=[],l=!0;const c={attempt:v((function(e,t){w(e,t.from)})),check:v(g),consume:function(e){cn(e)?(o.line++,o.column=1,o.offset+=-3===e?2:1,y()):-1!==e&&(o.column++,o.offset++);o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===s[o._index].length&&(o._bufferIndex=-1,o._index++));d.previous=e,l=!0},enter:function(e,t){const i=t||{};return i.type=e,i.start=p(),d.events.push(["enter",i,d]),a.push(i),i},exit:function(e){const t=a.pop();return t.end=p(),d.events.push(["exit",t,d]),t},interrupt:v(g,{interrupt:!0})},d={code:null,containerState:{},defineSkip:function(e){n[e.line]=e.column,y()},events:[],now:p,parser:e,previous:null,sliceSerialize:function(e,t){return function(e,t){let i=-1;const o=[];let n;for(;++i<e.length;){const r=e[i];let s;if("string"==typeof r)s=r;else switch(r){case-5:s="\r";break;case-4:s="\n";break;case-3:s="\r\n";break;case-2:s=t?" ":"\t";break;case-1:if(!t&&n)continue;s=" ";break;default:s=String.fromCharCode(r)}n=-2===r,o.push(s)}return o.join("")}(f(e),t)},sliceStream:f,write:function(e){if(s=Go(s,e),m(),null!==s[s.length-1])return[];return w(t,0),d.events=cr(r,d.events,d),d.events}};let h,u=t.tokenize.call(d,c);return t.resolveAll&&r.push(t),d;function f(e){return function(e,t){const i=t.start._index,o=t.start._bufferIndex,n=t.end._index,r=t.end._bufferIndex;let s;if(i===n)s=[e[i].slice(o,r)];else{if(s=e.slice(i,n),o>-1){const e=s[0];"string"==typeof e?s[0]=e.slice(o):s.shift()}r>0&&s.push(e[n].slice(0,r))}return s}(s,e)}function p(){const{_bufferIndex:e,_index:t,line:i,column:n,offset:r}=o;return{_bufferIndex:e,_index:t,line:i,column:n,offset:r}}function m(){let e;for(;o._index<s.length;){const t=s[o._index];if("string"==typeof t)for(e=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===e&&o._bufferIndex<t.length;)b(t.charCodeAt(o._bufferIndex));else b(t)}}function b(e){l=void 0,h=e,u=u(e)}function g(e,t){t.restore()}function v(e,t){return function(i,n,r){let s,h,u,f;return Array.isArray(i)?m(i):"tokenize"in i?m([i]):function(e){return t;function t(t){const i=null!==t&&e[t],o=null!==t&&e.null;return m([...Array.isArray(i)?i:i?[i]:[],...Array.isArray(o)?o:o?[o]:[]])(t)}}(i);function m(e){return s=e,h=0,0===e.length?r:b(e[h])}function b(e){return function(i){f=function(){const e=p(),t=d.previous,i=d.currentConstruct,n=d.events.length,r=Array.from(a);return{from:n,restore:s};function s(){o=e,d.previous=t,d.currentConstruct=i,d.events.length=n,a=r,y()}}(),u=e,e.partial||(d.currentConstruct=e);if(e.name&&d.parser.constructs.disable.null.includes(e.name))return v(i);return e.tokenize.call(t?Object.assign(Object.create(d),t):d,c,g,v)(i)}}function g(t){return l=!0,e(u,f),n}function v(e){return l=!0,f.restore(),++h<s.length?b(s[h]):r}}}function w(e,t){e.resolveAll&&!r.includes(e)&&r.push(e),e.resolve&&Vo(d.events,t,d.events.length-t,e.resolve(d.events.slice(t),d)),e.resolveTo&&(d.events=e.resolveTo(d.events,d))}function y(){o.line in n&&o.column<2&&(o.column=n[o.line],o.offset+=n[o.line]-1)}}function Pr(t){const i={constructs:function(e){const t={};let i=-1;for(;++i<e.length;)Yo(t,e[i]);return t}([e,...(t||{}).extensions||[]]),content:o(xn),defined:[],document:o(kn),flow:o(An),lazy:{},string:o(Pn),text:o(Dn)};return i;function o(e){return function(t){return Tr(i,e,t)}}}const Dr=/[\0\t\n\r]/g;function Fr(e,t,i){return"string"!=typeof t&&(i=t,t=void 0),wn(i)(function(e){for(;!Cn(e););return e}(Pr(i).document().write(function(){let e,t=1,i="",o=!0;return function(n,r,s){const a=[];let l,c,d,h,u;for(n=i+("string"==typeof n?n.toString():new TextDecoder(r||void 0).decode(n)),d=0,i="",o&&(65279===n.charCodeAt(0)&&d++,o=void 0);d<n.length;){if(Dr.lastIndex=d,l=Dr.exec(n),h=l&&void 0!==l.index?l.index:n.length,u=n.charCodeAt(h),!l){i=n.slice(d);break}if(10===u&&d===h&&e)a.push(-3),e=void 0;else switch(e&&(a.push(-5),e=void 0),d<h&&(a.push(n.slice(d,h)),t+=h-d),u){case 0:a.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),a.push(-2);t++<c;)a.push(-1);break;case 10:a.push(-4),t=1;break;default:e=!0,t=1}d=h+1}return s&&(e&&a.push(-5),i&&a.push(i),a.push(null)),a}}()(e,t,!0))))}function Mr(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:function(e,i,o){const n=this.previous,r=this.events;let s=0;return function(t){if(126===n&&"characterEscape"!==r[r.length-1][1].type)return o(t);return e.enter("strikethroughSequenceTemporary"),a(t)};function a(r){const l=mr(n);if(126===r)return s>1?o(r):(e.consume(r),s++,a);if(s<2&&!t)return o(r);const c=e.exit("strikethroughSequenceTemporary"),d=mr(r);return c._open=!d||2===d&&Boolean(l),c._close=!l||2===l&&Boolean(d),i(r)}},resolveAll:function(e,t){let i=-1;for(;++i<e.length;)if("enter"===e[i][0]&&"strikethroughSequenceTemporary"===e[i][1].type&&e[i][1]._close){let o=i;for(;o--;)if("exit"===e[o][0]&&"strikethroughSequenceTemporary"===e[o][1].type&&e[o][1]._open&&e[i][1].end.offset-e[i][1].start.offset==e[o][1].end.offset-e[o][1].start.offset){e[i][1].type="strikethroughSequence",e[o][1].type="strikethroughSequence";const n={type:"strikethrough",start:Object.assign({},e[o][1].start),end:Object.assign({},e[i][1].end)},r={type:"strikethroughText",start:Object.assign({},e[o][1].end),end:Object.assign({},e[i][1].start)},s=[["enter",n,t],["enter",e[o][1],t],["exit",e[o][1],t],["enter",r,t]],a=t.parser.constructs.insideSpan.null;a&&Vo(s,s.length,0,cr(a,e.slice(o+1,i),t)),Vo(s,s.length,0,[["exit",r,t],["enter",e[i][1],t],["exit",e[i][1],t],["exit",n,t]]),Vo(e,o-1,i-o+3,s),i=o+s.length-2;break}}i=-1;for(;++i<e.length;)"strikethroughSequenceTemporary"===e[i][1].type&&(e[i][1].type="data");return e}};return null==t&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}}}let Rr=class extends me{constructor(){super(...arguments),this.value=""}render(){return jo`${(e=>({_$litStatic$:e,r:Oo}))(Fr(this.value,{extensions:[Mr()],htmlExtensions:[{enter:{strikethrough(){this.tag("<del>")}},exit:{strikethrough(){this.tag("</del>")}}}]}))}`}};Rr.styles=[h`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1rem;
      }

      a {
        color: var(--link);
      }

      a:hover,
      a:active {
        text-decoration: none;
      }

      img {
        max-width: 100%;
      }

      p {
        line-height: inherit;
      }

      p:first-child {
        margin-top: 0;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `],t([ye({type:String})],Rr.prototype,"value",void 0),Rr=t([ge("wr-coll-description")],Rr);var Or=h`
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
`,Ur=h`
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
`;function Br(e,t){const i=wi({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),n.call(this,e)}}}var Nr=h`
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
`,qr=class extends me{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,wi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version),n&&r&&n===r||console.warn(`Attempted to register <${e}>${n}, but <${e}>${r} has already been registered.`)}};qr.version="2.15.1",qr.dependencies={},xi([ye()],qr.prototype,"dir",2),xi([ye()],qr.prototype,"lang",2);var jr,Hr=Symbol(),Wr=Symbol(),Vr=new Map,Gr=class extends qr{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(null==t?void 0:t.spriteSheet){this.svg=Q`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof t.mutator&&t.mutator(i),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return 410===o.status?Hr:Wr}catch(e){return Wr}try{const e=document.createElement("div");e.innerHTML=await o.text();const t=e.firstElementChild;if("svg"!==(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase()))return Hr;jr||(jr=new DOMParser);const n=jr.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):Hr}catch(e){return Hr}}connectedCallback(){var e;super.connectedCallback(),e=this,ai.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,ai=ai.filter((t=>t!==e))}getIconSource(){const e=li(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?li(this.library):void 0;if(!t)return void(this.svg=null);let n=Vr.get(t);if(n||(n=this.resolveIcon(t,o),Vr.set(t,n)),!this.initialRender)return;const r=await n;if(r===Wr&&Vr.delete(t),t===this.getIconSource().url)if(((e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t)(r))this.svg=r;else switch(r){case Wr:case Hr:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};Gr.styles=[Nr,Ur],xi([xe()],Gr.prototype,"svg",2),xi([ye({reflect:!0})],Gr.prototype,"name",2),xi([ye()],Gr.prototype,"src",2),xi([ye()],Gr.prototype,"label",2),xi([ye({reflect:!0})],Gr.prototype,"library",2),xi([Br("label")],Gr.prototype,"handleLabelChange",1),xi([Br(["name","src","library"])],Gr.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kr=Ce(class extends Ie{constructor(e){if(super(e),e.type!==ze||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return J}});var Yr=class extends qr{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Bo`a`:Bo`button`;return jo`
      <${t}
        part="base"
        class=${Kr({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};Yr.styles=[Nr,Or],Yr.dependencies={"sl-icon":Gr},xi([Se(".icon-button")],Yr.prototype,"button",2),xi([xe()],Yr.prototype,"hasFocus",2),xi([ye()],Yr.prototype,"name",2),xi([ye()],Yr.prototype,"library",2),xi([ye()],Yr.prototype,"src",2),xi([ye()],Yr.prototype,"href",2),xi([ye()],Yr.prototype,"target",2),xi([ye()],Yr.prototype,"download",2),xi([ye()],Yr.prototype,"label",2),xi([ye({type:Boolean,reflect:!0})],Yr.prototype,"disabled",2);var Qr=new Map,Zr=new WeakMap;function Jr(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Xr(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function es(e,t){Qr.set(e,Jr(t))}function ts(e,t,i){const o=Zr.get(e);if(null==o?void 0:o[t])return Xr(o[t],i.dir);const n=Qr.get(t);return n?Xr(n,i.dir):{keyframes:[],options:{duration:0}}}function is(e,t){return new Promise((i=>{e.addEventListener(t,(function o(n){n.target===e&&(e.removeEventListener(t,o),i())}))}))}function os(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,yi(wi({},i),{duration:rs()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}))}function ns(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function rs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ss(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}const as=new Set,ls=new MutationObserver(ps),cs=new Map;let ds,hs=document.documentElement.dir||"ltr",us=document.documentElement.lang||navigator.language;function fs(...e){e.map((e=>{const t=e.$code.toLowerCase();cs.has(t)?cs.set(t,Object.assign(Object.assign({},cs.get(t)),e)):cs.set(t,e),ds||(ds=e)})),ps()}function ps(){hs=document.documentElement.dir||"ltr",us=document.documentElement.lang||navigator.language,[...as.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}ls.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class ms{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){as.add(this.host)}hostDisconnected(){as.delete(this.host)}dir(){return`${this.host.dir||hs}`.toLowerCase()}lang(){return`${this.host.lang||us}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:n,region:r,primary:cs.get(`${n}-${r}`),secondary:cs.get(n)}}exists(e,t){var i;const{primary:o,secondary:n}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&ds&&ds[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(o&&o[e])n=o[e];else{if(!ds||!ds[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=ds[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var bs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};fs(bs);var gs=bs,vs=class extends ms{};fs(gs);var ws=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var ys=h`
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
`,xs=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ks=class extends qr{constructor(){super(...arguments),this.hasSlotController=new ws(this,"icon","suffix"),this.localize=new vs(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ss(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=ts(this,"alert.show",{dir:this.localize.dir()});await os(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ss(this.base);const{keyframes:e,options:t}=ts(this,"alert.hide",{dir:this.localize.dir()});await os(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,is(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,is(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===xs.parentElement&&document.body.append(xs),xs.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{xs.removeChild(this),e(),null===xs.querySelector("sl-alert")&&xs.remove()}),{once:!0})}))}render(){return Q`
      <div
        part="base"
        class=${Kr({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
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

        ${this.closable?Q`
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
    `}};ks.styles=[Nr,ys],ks.dependencies={"sl-icon-button":Yr},xi([Se('[part~="base"]')],ks.prototype,"base",2),xi([ye({type:Boolean,reflect:!0})],ks.prototype,"open",2),xi([ye({type:Boolean,reflect:!0})],ks.prototype,"closable",2),xi([ye({reflect:!0})],ks.prototype,"variant",2),xi([ye({type:Number})],ks.prototype,"duration",2),xi([Br("open",{waitUntilFirstUpdate:!0})],ks.prototype,"handleOpenChange",1),xi([Br("duration")],ks.prototype,"handleDurationChange",1),es("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),es("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ks.define("sl-alert");var Ss=h`
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
`,$s=class extends qr{constructor(){super(...arguments),this.localize=new vs(this)}render(){return Q`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};$s.styles=[Nr,Ss];var zs=new WeakMap,_s=new WeakMap,Cs=new WeakMap,Is=new WeakSet,Ls=new WeakMap,Es=class{constructor(e,t){this.handleFormData=e=>{const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!n&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach((t=>{e.formData.append(i,t.toString())})):e.formData.append(i,o.toString()))},this.handleFormSubmit=e=>{var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=zs.get(this.form))||t.forEach((e=>{this.setUserInteracted(e,!0)}))),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ls.set(this.host,[])},this.handleInteraction=e=>{const t=Ls.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=wi({form:e=>{const t=e.form;if(t){const i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ls.set(this.host,[]),this.options.assumeInteractionOn.forEach((e=>{this.host.addEventListener(e,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Ls.delete(this.host),this.options.assumeInteractionOn.forEach((e=>{this.host.removeEventListener(e,this.handleInteraction)}))}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,zs.has(this.form)?zs.get(this.form).add(this.host):zs.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_s.has(this.form)||(_s.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Cs.has(this.form)||(Cs.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=zs.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_s.has(this.form)&&(this.form.reportValidity=_s.get(this.form),_s.delete(this.form)),Cs.has(this.form)&&(this.form.checkValidity=Cs.get(this.form),Cs.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Is.add(e):Is.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))}))),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=Boolean(Is.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},As=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ts=(Object.freeze(yi(wi({},As),{valid:!1,valueMissing:!0})),Object.freeze(yi(wi({},As),{valid:!1,customError:!0})),h`
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
`),Ps=class extends qr{constructor(){super(...arguments),this.formControlController=new Es(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ws(this,"[default]","prefix","suffix"),this.localize=new vs(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:As}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Bo`a`:Bo`button`;return jo`
      <${t}
        part="base"
        class=${Kr({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Ps.styles=[Nr,Ts],Ps.dependencies={"sl-icon":Gr,"sl-spinner":$s},xi([Se(".button")],Ps.prototype,"button",2),xi([xe()],Ps.prototype,"hasFocus",2),xi([xe()],Ps.prototype,"invalid",2),xi([ye()],Ps.prototype,"title",2),xi([ye({reflect:!0})],Ps.prototype,"variant",2),xi([ye({reflect:!0})],Ps.prototype,"size",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"caret",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"disabled",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"loading",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"outline",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"pill",2),xi([ye({type:Boolean,reflect:!0})],Ps.prototype,"circle",2),xi([ye()],Ps.prototype,"type",2),xi([ye()],Ps.prototype,"name",2),xi([ye()],Ps.prototype,"value",2),xi([ye()],Ps.prototype,"href",2),xi([ye()],Ps.prototype,"target",2),xi([ye()],Ps.prototype,"rel",2),xi([ye()],Ps.prototype,"download",2),xi([ye()],Ps.prototype,"form",2),xi([ye({attribute:"formaction"})],Ps.prototype,"formAction",2),xi([ye({attribute:"formenctype"})],Ps.prototype,"formEnctype",2),xi([ye({attribute:"formmethod"})],Ps.prototype,"formMethod",2),xi([ye({attribute:"formnovalidate",type:Boolean})],Ps.prototype,"formNoValidate",2),xi([ye({attribute:"formtarget"})],Ps.prototype,"formTarget",2),xi([Br("disabled",{waitUntilFirstUpdate:!0})],Ps.prototype,"handleDisabledChange",1);Ps.define("sl-button");var Ds=h`
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
`,Fs=h`
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
`;const Ms=Math.min,Rs=Math.max,Os=Math.round,Us=Math.floor,Bs=e=>({x:e,y:e}),Ns={left:"right",right:"left",bottom:"top",top:"bottom"},qs={start:"end",end:"start"};function js(e,t,i){return Rs(e,Ms(t,i))}function Hs(e,t){return"function"==typeof e?e(t):e}function Ws(e){return e.split("-")[0]}function Vs(e){return e.split("-")[1]}function Gs(e){return"x"===e?"y":"x"}function Ks(e){return"y"===e?"height":"width"}function Ys(e){return["top","bottom"].includes(Ws(e))?"y":"x"}function Qs(e){return Gs(Ys(e))}function Zs(e){return e.replace(/start|end/g,(e=>qs[e]))}function Js(e){return e.replace(/left|right|bottom|top/g,(e=>Ns[e]))}function Xs(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function ea(e){const{x:t,y:i,width:o,height:n}=e;return{width:o,height:n,top:i,left:t,right:t+o,bottom:i+n,x:t,y:i}}function ta(e,t,i){let{reference:o,floating:n}=e;const r=Ys(t),s=Qs(t),a=Ks(s),l=Ws(t),c="y"===r,d=o.x+o.width/2-n.width/2,h=o.y+o.height/2-n.height/2,u=o[a]/2-n[a]/2;let f;switch(l){case"top":f={x:d,y:o.y-n.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:h};break;case"left":f={x:o.x-n.width,y:h};break;default:f={x:o.x,y:o.y}}switch(Vs(t)){case"start":f[s]-=u*(i&&c?-1:1);break;case"end":f[s]+=u*(i&&c?-1:1)}return f}async function ia(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:f=0}=Hs(t,e),p=Xs(f),m=a[u?"floating"===h?"reference":"floating":h],b=ea(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g="floating"===h?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),w=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},y=ea(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:v,strategy:l}):g);return{top:(b.top-y.top+p.top)/w.y,bottom:(y.bottom-b.bottom+p.bottom)/w.y,left:(b.left-y.left+p.left)/w.x,right:(y.right-b.right+p.right)/w.x}}function oa(e){return sa(e)?(e.nodeName||"").toLowerCase():"#document"}function na(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ra(e){var t;return null==(t=(sa(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function sa(e){return e instanceof Node||e instanceof na(e).Node}function aa(e){return e instanceof Element||e instanceof na(e).Element}function la(e){return e instanceof HTMLElement||e instanceof na(e).HTMLElement}function ca(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof na(e).ShadowRoot)}function da(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=ma(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function ha(e){return["table","td","th"].includes(oa(e))}function ua(e){const t=fa(),i=ma(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function fa(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function pa(e){return["html","body","#document"].includes(oa(e))}function ma(e){return na(e).getComputedStyle(e)}function ba(e){return aa(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ga(e){if("html"===oa(e))return e;const t=e.assignedSlot||e.parentNode||ca(e)&&e.host||ra(e);return ca(t)?t.host:t}function va(e){const t=ga(e);return pa(t)?e.ownerDocument?e.ownerDocument.body:e.body:la(t)&&da(t)?t:va(t)}function wa(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=va(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),s=na(n);return r?t.concat(s,s.visualViewport||[],da(n)?n:[],s.frameElement&&i?wa(s.frameElement):[]):t.concat(n,wa(n,[],i))}function ya(e){const t=ma(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=la(e),r=n?e.offsetWidth:i,s=n?e.offsetHeight:o,a=Os(i)!==r||Os(o)!==s;return a&&(i=r,o=s),{width:i,height:o,$:a}}function xa(e){return aa(e)?e:e.contextElement}function ka(e){const t=xa(e);if(!la(t))return Bs(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=ya(t);let s=(r?Os(i.width):i.width)/o,a=(r?Os(i.height):i.height)/n;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const Sa=Bs(0);function $a(e){const t=na(e);return fa()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Sa}function za(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=xa(e);let s=Bs(1);t&&(o?aa(o)&&(s=ka(o)):s=ka(e));const a=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==na(e))&&t}(r,i,o)?$a(r):Bs(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,d=n.width/s.x,h=n.height/s.y;if(r){const e=na(r),t=o&&aa(o)?na(o):o;let i=e,n=i.frameElement;for(;n&&o&&t!==i;){const e=ka(n),t=n.getBoundingClientRect(),o=ma(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,s=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;l*=e.x,c*=e.y,d*=e.x,h*=e.y,l+=r,c+=s,i=na(n),n=i.frameElement}}return ea({width:d,height:h,x:l,y:c})}const _a=[":popover-open",":modal"];function Ca(e){return _a.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Ia(e){return za(ra(e)).left+ba(e).scrollLeft}function La(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=na(e),o=ra(e),n=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const e=fa();(!e||e&&"fixed"===t)&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:s,x:a,y:l}}(e,i);else if("document"===t)o=function(e){const t=ra(e),i=ba(e),o=e.ownerDocument.body,n=Rs(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=Rs(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Ia(e);const a=-i.scrollTop;return"rtl"===ma(o).direction&&(s+=Rs(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:a}}(ra(e));else if(aa(t))o=function(e,t){const i=za(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=la(e)?ka(e):Bs(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=$a(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return ea(o)}function Ea(e,t){const i=ga(e);return!(i===t||!aa(i)||pa(i))&&("fixed"===ma(i).position||Ea(i,t))}function Aa(e,t,i){const o=la(t),n=ra(t),r="fixed"===i,s=za(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=Bs(0);if(o||!o&&!r)if(("body"!==oa(t)||da(n))&&(a=ba(t)),o){const e=za(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else n&&(l.x=Ia(n));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Ta(e){return"static"===ma(e).position}function Pa(e,t){return la(e)&&"fixed"!==ma(e).position?t?t(e):e.offsetParent:null}function Da(e,t){const i=na(e);if(Ca(e))return i;if(!la(e)){let t=ga(e);for(;t&&!pa(t);){if(aa(t)&&!Ta(t))return t;t=ga(t)}return i}let o=Pa(e,t);for(;o&&ha(o)&&Ta(o);)o=Pa(o,t);return o&&pa(o)&&Ta(o)&&!ua(o)?i:o||function(e){let t=ga(e);for(;la(t)&&!pa(t);){if(ua(t))return t;t=ga(t)}return null}(e)||i}const Fa={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:n}=e;const r="fixed"===n,s=ra(o),a=!!t&&Ca(t.floating);if(o===s||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=Bs(1);const d=Bs(0),h=la(o);if((h||!h&&!r)&&(("body"!==oa(o)||da(s))&&(l=ba(o)),la(o))){const e=za(o);c=ka(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x,y:i.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:ra,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?Ca(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=wa(e,[],!1).filter((e=>aa(e)&&"body"!==oa(e))),n=null;const r="fixed"===ma(e).position;let s=r?ga(e):e;for(;aa(s)&&!pa(s);){const t=ma(s),i=ua(s);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||da(s)&&!i&&Ea(e,s))?o=o.filter((e=>e!==s)):n=t,s=ga(s)}return t.set(e,o),o}(t,this._c):[].concat(i),o],s=r[0],a=r.reduce(((e,i)=>{const o=La(t,i,n);return e.top=Rs(o.top,e.top),e.right=Ms(o.right,e.right),e.bottom=Ms(o.bottom,e.bottom),e.left=Rs(o.left,e.left),e}),La(t,s,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:Da,getElementRects:async function(e){const t=this.getOffsetParent||Da,i=this.getDimensions,o=await i(e.floating);return{reference:Aa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=ya(e);return{width:t,height:i}},getScale:ka,isElement:aa,isRTL:function(e){return"rtl"===ma(e).direction}};function Ma(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=xa(e),d=n||r?[...c?wa(c):[],...wa(t)]:[];d.forEach((e=>{n&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const h=c&&a?function(e,t){let i,o=null;const n=ra(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),r();const{left:c,top:d,width:h,height:u}=e.getBoundingClientRect();if(a||t(),!h||!u)return;const f={rootMargin:-Us(d)+"px "+-Us(n.clientWidth-(c+h))+"px "+-Us(n.clientHeight-(d+u))+"px "+-Us(c)+"px",threshold:Rs(0,Ms(1,l))||1};let p=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return s();t?s(!1,t):i=setTimeout((()=>{s(!1,1e-7)}),1e3)}p=!1}try{o=new IntersectionObserver(m,{...f,root:n.ownerDocument})}catch(e){o=new IntersectionObserver(m,f)}o.observe(e)}(!0),r}(c,i):null;let u,f=-1,p=null;s&&(p=new ResizeObserver((e=>{let[o]=e;o&&o.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),i()})),c&&!l&&p.observe(c),p.observe(t));let m=l?za(e):null;return l&&function t(){const o=za(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||i();m=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;d.forEach((e=>{n&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==h||h(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(u)}}const Ra=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:n,y:r,placement:s,middlewareData:a}=t,l=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),s=Ws(i),a=Vs(i),l="y"===Ys(i),c=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,h=Hs(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:p}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return a&&"number"==typeof p&&(f="end"===a?-1*p:p),l?{x:f*d,y:u*c}:{x:u*c,y:f*d}}(t,e);return s===(null==(i=a.offset)?void 0:i.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}}},Oa=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:n}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...l}=Hs(e,t),c={x:i,y:o},d=await ia(t,l),h=Ys(Ws(n)),u=Gs(h);let f=c[u],p=c[h];if(r){const e="y"===u?"bottom":"right";f=js(f+d["y"===u?"top":"left"],f,f-d[e])}if(s){const e="y"===h?"bottom":"right";p=js(p+d["y"===h?"top":"left"],p,p-d[e])}const m=a.fn({...t,[u]:f,[h]:p});return{...m,data:{x:m.x-i,y:m.y-o}}}}},Ua=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...b}=Hs(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const g=Ws(n),v=Ws(a)===a,w=await(null==l.isRTL?void 0:l.isRTL(c.floating)),y=u||(v||!m?[Js(a)]:function(e){const t=Js(e);return[Zs(e),t,Zs(t)]}(a));u||"none"===p||y.push(...function(e,t,i,o){const n=Vs(e);let r=function(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:s;default:return[]}}(Ws(e),"start"===i,o);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(Zs)))),r}(a,m,p,w));const x=[a,...y],k=await ia(t,b),S=[];let $=(null==(o=r.flip)?void 0:o.overflows)||[];if(d&&S.push(k[g]),h){const e=function(e,t,i){void 0===i&&(i=!1);const o=Vs(e),n=Qs(e),r=Ks(n);let s="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Js(s)),[s,Js(s)]}(n,s,w);S.push(k[e[0]],k[e[1]])}if($=[...$,{placement:n,overflows:S}],!S.every((e=>e<=0))){var z,_;const e=((null==(z=r.flip)?void 0:z.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:$},reset:{placement:t}};let i=null==(_=$.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:_.placement;if(!i)switch(f){case"bestFit":{var C;const e=null==(C=$.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:C[0];e&&(i=e);break}case"initialPlacement":i=a}if(n!==i)return{reset:{placement:i}}}return{}}}},Ba=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:n,elements:r}=t,{apply:s=(()=>{}),...a}=Hs(e,t),l=await ia(t,a),c=Ws(i),d=Vs(i),h="y"===Ys(i),{width:u,height:f}=o.floating;let p,m;"top"===c||"bottom"===c?(p=c,m=d===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(m=c,p="end"===d?"top":"bottom");const b=f-l.top-l.bottom,g=u-l.left-l.right,v=Ms(f-l[p],b),w=Ms(u-l[m],g),y=!t.middlewareData.shift;let x=v,k=w;if(h?k=d||y?Ms(w,g):g:x=d||y?Ms(v,b):b,y&&!d){const e=Rs(l.left,0),t=Rs(l.right,0),i=Rs(l.top,0),o=Rs(l.bottom,0);h?k=u-2*(0!==e||0!==t?e+t:Rs(l.left,l.right)):x=f-2*(0!==i||0!==o?i+o:Rs(l.top,l.bottom))}await s({...t,availableWidth:k,availableHeight:x});const S=await n.getDimensions(r.floating);return u!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}},Na=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=Hs(e,t)||{};if(null==c)return{};const h=Xs(d),u={x:i,y:o},f=Qs(n),p=Ks(f),m=await s.getDimensions(c),b="y"===f,g=b?"top":"left",v=b?"bottom":"right",w=b?"clientHeight":"clientWidth",y=r.reference[p]+r.reference[f]-u[f]-r.floating[p],x=u[f]-r.reference[f],k=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let S=k?k[w]:0;S&&await(null==s.isElement?void 0:s.isElement(k))||(S=a.floating[w]||r.floating[p]);const $=y/2-x/2,z=S/2-m[p]/2-1,_=Ms(h[g],z),C=Ms(h[v],z),I=_,L=S-m[p]-C,E=S/2-m[p]/2+$,A=js(I,E,L),T=!l.arrow&&null!=Vs(n)&&E!==A&&r.reference[p]/2-(E<I?_:C)-m[p]/2<0,P=T?E<I?E-I:E-L:0;return{[f]:u[f]+P,data:{[f]:A,centerOffset:E-A-P,...T&&{alignmentOffset:P}},reset:T}}}),qa=(e,t,i)=>{const o=new Map,n={platform:Fa,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:s}=i,a=r.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:h}=ta(c,o,l),u=o,f={},p=0;for(let i=0;i<a.length;i++){const{name:r,fn:m}=a[i],{x:b,y:g,data:v,reset:w}=await m({x:d,y:h,initialPlacement:o,placement:u,strategy:n,middlewareData:f,rects:c,platform:s,elements:{reference:e,floating:t}});d=null!=b?b:d,h=null!=g?g:h,f={...f,[r]:{...f[r],...v}},w&&p<=50&&(p++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(c=!0===w.rects?await s.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:d,y:h}=ta(c,u,l))),i=-1)}return{x:d,y:h,placement:u,strategy:n,middlewareData:f}})(e,t,{...n,platform:r})};function ja(e){return Wa(e)}function Ha(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Wa(e){for(let t=e;t;t=Ha(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Ha(e);t;t=Ha(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Va=class extends qr{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,n=0,r=0,s=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,n=e.right,r=e.bottom,s=t.left,a=t.top,l=t.right,c=t.top):(i=t.left,o=t.bottom,n=t.right,r=t.bottom,s=e.left,a=e.top,l=e.right,c=e.top):e.left<t.left?(i=e.right,o=e.top,n=t.left,r=t.top,s=e.right,a=e.bottom,l=t.left,c=t.bottom):(i=t.right,o=t.top,n=e.left,r=e.top,s=t.right,a=t.bottom,l=e.left,c=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ma(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ra({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ba({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ua({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Oa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ba({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Na({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Fa.getOffsetParent(e,ja):Fa.getOffsetParent;qa(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:yi(wi({},Fa),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const n="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",s="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=n?i:"",l=n?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=n?"":i,l=n?i:"",a="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:a,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Kr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Kr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Va.styles=[Nr,Fs],xi([Se(".popup")],Va.prototype,"popup",2),xi([Se(".popup__arrow")],Va.prototype,"arrowEl",2),xi([ye()],Va.prototype,"anchor",2),xi([ye({type:Boolean,reflect:!0})],Va.prototype,"active",2),xi([ye({reflect:!0})],Va.prototype,"placement",2),xi([ye({reflect:!0})],Va.prototype,"strategy",2),xi([ye({type:Number})],Va.prototype,"distance",2),xi([ye({type:Number})],Va.prototype,"skidding",2),xi([ye({type:Boolean})],Va.prototype,"arrow",2),xi([ye({attribute:"arrow-placement"})],Va.prototype,"arrowPlacement",2),xi([ye({attribute:"arrow-padding",type:Number})],Va.prototype,"arrowPadding",2),xi([ye({type:Boolean})],Va.prototype,"flip",2),xi([ye({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Va.prototype,"flipFallbackPlacements",2),xi([ye({attribute:"flip-fallback-strategy"})],Va.prototype,"flipFallbackStrategy",2),xi([ye({type:Object})],Va.prototype,"flipBoundary",2),xi([ye({attribute:"flip-padding",type:Number})],Va.prototype,"flipPadding",2),xi([ye({type:Boolean})],Va.prototype,"shift",2),xi([ye({type:Object})],Va.prototype,"shiftBoundary",2),xi([ye({attribute:"shift-padding",type:Number})],Va.prototype,"shiftPadding",2),xi([ye({attribute:"auto-size"})],Va.prototype,"autoSize",2),xi([ye()],Va.prototype,"sync",2),xi([ye({type:Object})],Va.prototype,"autoSizeBoundary",2),xi([ye({attribute:"auto-size-padding",type:Number})],Va.prototype,"autoSizePadding",2),xi([ye({attribute:"hover-bridge",type:Boolean})],Va.prototype,"hoverBridge",2);var Ga=class extends qr{constructor(){super(),this.localize=new vs(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=ns(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=ns(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ss(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=ts(this,"tooltip.show",{dir:this.localize.dir()});await os(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ss(this.body);const{keyframes:e,options:i}=ts(this,"tooltip.hide",{dir:this.localize.dir()});await os(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,is(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,is(this,"sl-after-hide")}render(){return Q`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Kr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ga.styles=[Nr,Ds],Ga.dependencies={"sl-popup":Va},xi([Se("slot:not([name])")],Ga.prototype,"defaultSlot",2),xi([Se(".tooltip__body")],Ga.prototype,"body",2),xi([Se("sl-popup")],Ga.prototype,"popup",2),xi([ye()],Ga.prototype,"content",2),xi([ye()],Ga.prototype,"placement",2),xi([ye({type:Boolean,reflect:!0})],Ga.prototype,"disabled",2),xi([ye({type:Number})],Ga.prototype,"distance",2),xi([ye({type:Boolean,reflect:!0})],Ga.prototype,"open",2),xi([ye({type:Number})],Ga.prototype,"skidding",2),xi([ye()],Ga.prototype,"trigger",2),xi([ye({type:Boolean})],Ga.prototype,"hoist",2),xi([Br("open",{waitUntilFirstUpdate:!0})],Ga.prototype,"handleOpenChange",1),xi([Br(["content","distance","hoist","placement","skidding"])],Ga.prototype,"handleOptionsChange",1),xi([Br("disabled")],Ga.prototype,"handleDisabledChange",1),es("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),es("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Ka=h`
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
`,Ya=class extends qr{constructor(){super(...arguments),this.localize=new vs(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let n=this.from,r="";i?[n,r]=this.from.trim().split("."):o&&([n,r]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(n):null;s?e=o?s.getAttribute(r)||"":i?s[r]||"":s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(e)try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch(e){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),n="success"===e?this.successIcon:this.errorIcon,r=ts(this,"copy.in",{dir:"ltr"}),s=ts(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===e?i:o,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,n.hidden=!1,await n.animate(r.keyframes,r.options).finished,setTimeout((async()=>{await n.animate(s.keyframes,s.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1}),this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return Q`
      <sl-tooltip
        class=${Kr({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
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
    `}};Ya.styles=[Nr,Ka],Ya.dependencies={"sl-icon":Gr,"sl-tooltip":Ga},xi([Se('slot[name="copy-icon"]')],Ya.prototype,"copyIcon",2),xi([Se('slot[name="success-icon"]')],Ya.prototype,"successIcon",2),xi([Se('slot[name="error-icon"]')],Ya.prototype,"errorIcon",2),xi([Se("sl-tooltip")],Ya.prototype,"tooltip",2),xi([xe()],Ya.prototype,"isCopying",2),xi([xe()],Ya.prototype,"status",2),xi([ye()],Ya.prototype,"value",2),xi([ye()],Ya.prototype,"from",2),xi([ye({type:Boolean,reflect:!0})],Ya.prototype,"disabled",2),xi([ye({attribute:"copy-label"})],Ya.prototype,"copyLabel",2),xi([ye({attribute:"success-label"})],Ya.prototype,"successLabel",2),xi([ye({attribute:"error-label"})],Ya.prototype,"errorLabel",2),xi([ye({attribute:"feedback-duration",type:Number})],Ya.prototype,"feedbackDuration",2),xi([ye({attribute:"tooltip-placement"})],Ya.prototype,"tooltipPlacement",2),xi([ye({type:Boolean})],Ya.prototype,"hoist",2),es("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),es("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Ya.define("sl-copy-button");var Qa=new WeakMap;function Za(e){let t=Qa.get(e);return t||(t=window.getComputedStyle(e,null),Qa.set(e,t)),t}function Ja(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(e.hasAttribute("disabled"))return!1;if(e.closest("[inert]"))return!1;if("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))return!1;if(!function(e){if("function"==typeof e.checkVisibility)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Za(e);return"hidden"!==t.visibility&&"none"!==t.display}(e))return!1;if(("audio"===t||"video"===t)&&e.hasAttribute("controls"))return!0;if(e.hasAttribute("tabindex"))return!0;if(e.hasAttribute("contenteditable")&&"false"!==e.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)||function(e){const t=Za(e),{overflowY:i,overflowX:o}=t;return"scroll"===i||"scroll"===o||"auto"===i&&"auto"===o&&(e.scrollHeight>e.clientHeight&&"auto"===i||!(!(e.scrollWidth>e.clientWidth)||"auto"!==o))}(e)}function Xa(e){const t=new WeakMap,i=[];return function o(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]"))return;if(t.has(n))return;t.set(n,!0),!i.includes(n)&&Ja(n)&&i.push(n),n instanceof HTMLSlotElement&&function(e,t){var i;return(null==(i=e.getRootNode({composed:!0}))?void 0:i.host)!==t}(n,e)&&n.assignedElements({flatten:!0}).forEach((e=>{o(e)})),null!==n.shadowRoot&&"open"===n.shadowRoot.mode&&o(n.shadowRoot)}for(const e of n.children)o(e)}(e),i.sort(((e,t)=>{const i=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-i}))}function*el(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*Si(el(e.shadowRoot.activeElement))))}var tl=[],il=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;const i=[...el()].pop();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Xa(this.element);let n=o.findIndex((e=>e===i));this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const i=o[n];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;e.preventDefault(),this.currentFocus=i,null==(t=this.currentFocus)||t.focus({preventScroll:!1});const s=[...el()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){tl.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){tl=tl.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return tl[tl.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Xa(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],o="forward"===this.tabDirection?t:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};var ol=new Set;function nl(e){if(ol.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}()+function(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}();let t=getComputedStyle(document.documentElement).scrollbarGutter;t&&"auto"!==t||(t="stable"),e<=0&&(t="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function rl(e){ol.delete(e),0===ol.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var sl=h`
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
`,al=class extends qr{constructor(){super(...arguments),this.hasSlotController=new ws(this,"footer"),this.localize=new vs(this),this.modal=new il(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),nl(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),rl(this),null==(e=this.closeWatcher)||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=ts(this,"dialog.denyClose",{dir:this.localize.dir()});os(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),nl(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ss(this.dialog),ss(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=ts(this,"dialog.show",{dir:this.localize.dir()}),i=ts(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([os(this.panel,t.keyframes,t.options),os(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ss(this.dialog),ss(this.overlay)]);const e=ts(this,"dialog.hide",{dir:this.localize.dir()}),t=ts(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([os(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),os(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,rl(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout((()=>i.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,is(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,is(this,"sl-after-hide")}render(){return Q`
      <div
        part="base"
        class=${Kr({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":Q`
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
    `}};al.styles=[Nr,sl],al.dependencies={"sl-icon-button":Yr},xi([Se(".dialog")],al.prototype,"dialog",2),xi([Se(".dialog__panel")],al.prototype,"panel",2),xi([Se(".dialog__overlay")],al.prototype,"overlay",2),xi([ye({type:Boolean,reflect:!0})],al.prototype,"open",2),xi([ye({reflect:!0})],al.prototype,"label",2),xi([ye({attribute:"no-header",type:Boolean,reflect:!0})],al.prototype,"noHeader",2),xi([Br("open",{waitUntilFirstUpdate:!0})],al.prototype,"handleOpenChange",1),es("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),es("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),es("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),es("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),es("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});al.define("sl-dialog");var ll=h`
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
`,cl=class extends qr{constructor(){super(...arguments),this.localize=new vs(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open&&!this.closeWatcher)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,i;const o=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(i=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:i.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],n=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(n),n.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>function(e){var t,i;const o=Xa(e);return{start:null!=(t=o[0])?t:null,end:null!=(i=o[o.length-1])?i:null}}(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,is(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,is(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ss(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ts(this,"dropdown.show",{dir:this.localize.dir()});await os(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ss(this);const{keyframes:e,options:t}=ts(this,"dropdown.hide",{dir:this.localize.dir()});await os(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Q`
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
        class=${Kr({dropdown:!0,"dropdown--open":this.open})}
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
    `}};cl.styles=[Nr,ll],cl.dependencies={"sl-popup":Va},xi([Se(".dropdown")],cl.prototype,"popup",2),xi([Se(".dropdown__trigger")],cl.prototype,"trigger",2),xi([Se(".dropdown__panel")],cl.prototype,"panel",2),xi([ye({type:Boolean,reflect:!0})],cl.prototype,"open",2),xi([ye({reflect:!0})],cl.prototype,"placement",2),xi([ye({type:Boolean,reflect:!0})],cl.prototype,"disabled",2),xi([ye({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],cl.prototype,"stayOpenOnSelect",2),xi([ye({attribute:!1})],cl.prototype,"containingElement",2),xi([ye({type:Number})],cl.prototype,"distance",2),xi([ye({type:Number})],cl.prototype,"skidding",2),xi([ye({type:Boolean})],cl.prototype,"hoist",2),xi([ye({reflect:!0})],cl.prototype,"sync",2),xi([Br("open",{waitUntilFirstUpdate:!0})],cl.prototype,"handleOpenChange",1),es("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),es("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});cl.define("sl-dropdown");var dl=h`
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
`,hl=class extends qr{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath().find((e=>{var i;return t.includes((null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,"role"))||"")}));if(!i)return;const o=i;"checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if("Enter"===e.key||" "===e.key){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),null==t||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),"ArrowDown"===e.key?o++:"ArrowUp"===e.key?o--:"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return Q`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};hl.styles=[Nr,dl],xi([Se("slot")],hl.prototype,"defaultSlot",2);hl.define("sl-menu");var ul=h`
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
`,fl=class{constructor(e,t,i){this.popupRef=ut(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e)}},this.handleClick=e=>{var t;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&("sl-menu-item"===e.target.tagName||(null==(t=e.target.role)?void 0:t.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),t=null==e?void 0:e.assignedElements({flatten:!0}).filter((e=>"sl-menu"===e.localName))[0],i="rtl"===this.localize.dir();if(!t)return;const{left:o,top:n,width:r,height:s}=t.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+s}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const e of t.assignedElements())if(i=e.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let e=1;e!==i.length;++e)i[e].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{i[0]instanceof HTMLElement&&i[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!(null==(e=this.host.parentElement)?void 0:e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce(((e,i)=>{var o;const n=null!=(o=t.get(i))?o:new CSSUnitValue(0,"px");return e-(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const e="ltr"===this.localize.dir();return this.isConnected?Q`
      <sl-popup
        ${mt(this.popupRef)}
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
    `:Q` <slot name="submenu" hidden></slot> `}},pl=class extends qr{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new vs(this),this.hasSlotController=new ws(this,"submenu"),this.submenuController=new fl(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)})),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e="rtl"===this.localize.dir(),t=this.submenuController.isExpanded();return Q`
      <div
        id="anchor"
        part="base"
        class=${Kr({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?Q` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};pl.styles=[Nr,ul],pl.dependencies={"sl-icon":Gr,"sl-popup":Va,"sl-spinner":$s},xi([Se("slot:not([name])")],pl.prototype,"defaultSlot",2),xi([Se(".menu-item")],pl.prototype,"menuItem",2),xi([ye()],pl.prototype,"type",2),xi([ye({type:Boolean,reflect:!0})],pl.prototype,"checked",2),xi([ye()],pl.prototype,"value",2),xi([ye({type:Boolean,reflect:!0})],pl.prototype,"loading",2),xi([ye({type:Boolean,reflect:!0})],pl.prototype,"disabled",2),xi([Br("checked")],pl.prototype,"handleCheckedChange",1),xi([Br("disabled")],pl.prototype,"handleDisabledChange",1),xi([Br("type")],pl.prototype,"handleTypeChange",1);pl.define("sl-menu-item")})();var __webpack_export_target__=self;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();