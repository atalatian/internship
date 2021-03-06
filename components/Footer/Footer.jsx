import {Stack, Typography} from "@mui/material";
import CellWifiIcon from '@mui/icons-material/CellWifi';
import DownloadIcon from '@mui/icons-material/Download';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const items = [
  {id: `i1`, text: `Stable Connection`, icon: <CellWifiIcon sx={{ color: `#c0d223` }}/>},
  {id: `i2`, text: `Download`, icon: <DownloadIcon/>},
  {id: `i3`, text: `Online Support`, icon: <SupportAgentIcon/>},
]

const Footer = () => {
  return(
    <Stack direction={`row`} sx={{ backgroundColor: `#113264` }}>
      {
        items.map(item =>
          <Stack key={item.id} direction={`row`} alignItems={`center`}
                 sx={{
                   color: `#ffffff`,
                   p: 1,
                   margin: `${(item.id === 'i2' ? `auto !important` : ``)}`,
                   marginRight: `${(item.id === 'i2' ? `0 !important` : ``)}`,
                 }}>
            {item.icon}
            <Typography sx={{ ml: 1, color: `${ item.id === 'i1' ? '#c0d223': '#ffffff' }`, }} variant={`body2`}>
              {item.text}
            </Typography>
          </Stack>
        )
      }
    </Stack>
  );
}

export default Footer;