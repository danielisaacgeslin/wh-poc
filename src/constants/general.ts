export const AVATAR_SIZE = 50;
export const AVATAR_TXT_COLOR = '000000';
export const AVATAR_BG_COLOR = 'fefd33';
export const AVATAR_FONT = 'lobster';
export const AVATAR_TXT_SIZE = 25;
export const getAvatarWidthFromText = (text: string) => text.length * Math.ceil(AVATAR_TXT_SIZE / 2);
export const getAvatarUrl = (text: string, width: number = AVATAR_SIZE) =>
  `https://fakeimg.pl/${width}x${AVATAR_SIZE}/${AVATAR_BG_COLOR}/${AVATAR_TXT_COLOR}?text=${text}&font=${AVATAR_FONT}&font_size=${AVATAR_TXT_SIZE}`;
