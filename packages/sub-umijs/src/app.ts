export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: false,
    menu: {
      locale: false,
    },
    layout: 'side',
  };
};
