import Callout from "@/components/Callout";

export function useMDXComponents(components: any) {
  return {
    h1: (props: any) => <h1 {...props} />,
    h2: (props: any) => <h2 {...props} />,
    p: (props: any) => <p {...props} />,
    Callout,
    ...components,
  };
}