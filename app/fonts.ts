import localFont from 'next/font/local';

const googleSansBold = localFont({
  src: '../public/fonts/google_sans/GoogleSans-Bold.ttf',
  variable: '--font-google-sans-bold',
});
const googleSansMedium = localFont({
  src: '../public/fonts/google_sans/GoogleSans-Medium.ttf',
  variable: '--font-google-sans-medium',
});
const googleSansRegular = localFont({
  src: '../public/fonts/google_sans/GoogleSans-Regular.ttf',
  variable: '--font-google-sans-regular',
});
const googleSansItalic = localFont({
  src: '../public/fonts/google_sans/GoogleSans-Italic.ttf',
  variable: '--font-google-sans-italic',
});
const jakartaSans = localFont({
  src:
    '../public/fonts/jakarta_sans/PlusJakartaSans-VariableFont.ttf',
  variable: '--font-jakarta-sans-variable',
});
const outfitSans = localFont({
  src: '../public/fonts/outfit_sans/Outfit-VariableFont.ttf',
  variable: '--font-outfit-sans-variable',
});
const robotoMono = localFont({
  src: '../public/fonts/roboto_mono/RobotoMono-VariableFont.ttf',
  variable: '--font-roboto-mono-variable',
});
const jetbrainsMono = localFont({
  src: '../public/fonts/jetbrains_mono/JetBrainsMono-VariableFont.ttf',
  variable: '--font-jetbrains-mono-variable',
});

export {
  googleSansBold,
  googleSansMedium,
  googleSansRegular,
  googleSansItalic,
  jakartaSans,
  outfitSans,
  robotoMono,
  jetbrainsMono
};
