import React, {useEffect, type ReactNode} from 'react';

export default function Root({children}: {children: ReactNode}) {
  useEffect(() => {
    void import('katex/contrib/copy-tex');
  }, []);

  return <>{children}</>;
}
