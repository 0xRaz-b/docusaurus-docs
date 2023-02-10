import { Grid, Typography, Divider } from '@mui/material';
import { ConnectKitButton } from 'connectkit';
import { useChainId } from 'wagmi';

import MainContainer from './components/MainContainer';
import TapOFTOverview from './components/TapOFTOverview';
import TOLPPositions from './components/TOLPPositions';
import TOLP from './components/TOLP';
import TOB from './components/TOB';

export function App() {
    return (
        <>
            <Grid container justifyContent="center" direction={'column'}>
                <Grid item container justifyContent="flex-end">
                    <div style={{ marginRight: 24 }}>
                        <ConnectKitButton showAvatar />
                    </div>
                </Grid>
                <Grid item xs>
                    <MainContainer>
                        <Divider style={{ height: 2, margin: '10px 0px 10px 0px' }} color="white" />
                        <TapOFTOverview />
                        <Divider style={{ height: 2, margin: '10px 0px 10px 0px' }} color="white" />
                        <Typography variant="h4">tOLP</Typography>
                        <TOLP />
                        <Divider style={{ height: 2, margin: '10px 0px 10px 0px' }} color="white" />
                        <TOB />
                    </MainContainer>
                </Grid>
            </Grid>
        </>
    );
}
