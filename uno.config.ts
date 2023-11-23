import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['400', '500', '600', '700', '800'],
          },
        ],
      },
    }),
    presetIcons(),
    presetUno(),
    presetAttributify(),
  ],
})
