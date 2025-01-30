interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: <T>(
    pattern: string,
    options?: {
      eager?: boolean;
      as?: string;
      import?: string;
    }
  ) => Record<string, () => Promise<T>>;
}