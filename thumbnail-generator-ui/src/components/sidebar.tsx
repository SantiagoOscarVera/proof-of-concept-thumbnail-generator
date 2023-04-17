import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';

type SidebarProps = {
  children: ReactNode;
  onDownload: () => Promise<void>;
  onClear: () => void;
  onLinks: () => void;
};

const Sidebar = ({ children, onDownload, onClear, onLinks }: SidebarProps) => {

  return (
    <Box maxWidth="200px" sx={{ border: 1 }} style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <Box className="box2" p={1} display="flex" flexDirection="column" height="100%" >
        <Box className="box2"  >
          {children}
          <Box title="" textAlign="center" >
            <Typography variant="h5" style={{ marginBottom: '15px', textDecoration: 'underline' }}>Generá tu miniatura</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="stretch" justifyContent="flex-end" margin="auto">
          <Button
            size="small"
            variant="outlined"
            style={{ backgroundColor: "#eceff1", marginBottom: "5%", fontSize: "12px" }}
            startIcon={< AutoAwesomeSharpIcon />}
            onClick={onClear}>
            Limpiar imagen
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{ marginBottom: "5%", fontSize: "12px" }}
            startIcon={< OpenInNewSharpIcon />}
            onClick={onLinks}>
            Generar vistas previas
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#065fd4", marginBottom: "5%", fontSize: "12px" }}
            startIcon={<CloudDownloadIcon />}
            onClick={onDownload}
          >
            Descargar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
