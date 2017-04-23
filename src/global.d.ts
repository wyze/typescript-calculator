// For Webpack's Hot Module Replacement (HMR)
declare let module: {
  hot: {
    accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
    accept(dependency: string, callback: () => void): void;
    accept(errHandler?: (err: any) => void): void;
    decline(dependencies: string[]): void;
    decline(dependency: string): void;
    decline(): void;

    dispose(callback: (data: any) => void): void;
    addDisposeHandler(callback: (data: any) => void): void;

    removeDisposeHandler(callback: (data: any) => void): void;
  }
}

// For Node's require
declare let require: {
  (path: string): any;
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare let process: {
  env: {
    NODE_ENV: string;
  };
};

declare module 'preact-redux' {
  export const Provider: any;
  export const connect: any;
}

declare module 'uuid' {
  export const v4: () => string;
}

declare module 'redux-logger' {
  export const createLogger: ( obj: object ) => any;
}

declare module 'preact-render-to-string' {
  export const render: (
    vnode: JSX.Element,
    context?: object | null,
    options?: {
      shallow?: boolean,
      xml?: boolean,
      pretty?: string | boolean,
    },
    inner?: any,
    isSvgMode?: boolean
  ) => string;
}
