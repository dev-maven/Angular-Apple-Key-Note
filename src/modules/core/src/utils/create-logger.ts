const root: any = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this;

export function pebCreateLogger(namespace: string): (...a: unknown[]) => unknown[] {
  const acceptableNss = [
    ...namespace
      .split(':')
      .map((el, i, all) =>
        [...all.slice(0, i), '*'].join(':'),
      ),
    namespace,
  ];

  if (root.PEB_DEBUG
    && root.PEB_DEBUG.split(',').find(
      eNs => acceptableNss.includes(eNs),
    )
  ) {
    return (...input) => {
      // tslint:disable-next-line:no-console
      console.log(
        `%c ${namespace} `, 'background: #3078a8; color: white',
        ...input,
      );

      return [...input];
    };
  }

  return (...input) => [...input];
}
