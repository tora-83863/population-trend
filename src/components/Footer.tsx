import * as React from 'react';

import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: "center" }}>
      <Typography variant="caption">
        このサービスは、政府統計総合窓口(e-Stat)のAPI機能を使用していますが、サービスの内容は国によって保証されたものではありません。
      </Typography>
      <br />
      <Typography variant="caption">
        <a href="https://developer.yahoo.co.jp/sitemap/">
          Web Services by Yahoo! JAPAN
        </a>
      </Typography>
    </Box>
  );
}
