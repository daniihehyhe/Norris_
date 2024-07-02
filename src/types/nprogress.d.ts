declare module 'nprogress' {
    interface NProgressOptions {
      minimum?: number;
      easing?: string;
      positionUsing?: string;
      speed?: number;
      trickle?: boolean;
      trickleSpeed?: number;
      showSpinner?: boolean;
      barSelector?: string;
      spinnerSelector?: string;
      parent?: string;
      template?: string;
    }
  
    interface NProgress {
      configure(options: NProgressOptions): NProgress;
      start(): NProgress;
      done(force?: boolean): NProgress;
      inc(amount?: number): NProgress;
      remove(): void;
      status: number | null;
      set(number: number): NProgress;
      isStarted(): boolean;
    }
  
    const nprogress: NProgress;
    export default nprogress;
  }
  