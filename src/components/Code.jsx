
import { useContext } from "react";

// components
import Editor from "./Editor";

import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        language="HTML"
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="CSS"
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="JavaScript"
        heading="JavaScript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};
export default Code;
