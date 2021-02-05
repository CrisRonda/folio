import styled from "styled-components";
import { Box } from "./box";

import { compose, lineHeight } from "styled-system";

const composedHelpers = compose(lineHeight);

export const Typography = styled(Box)`
  ${composedHelpers}
`;

Typography.defaultProps = {
  fontWeight: 1,
  lineHeight: 3,
};
