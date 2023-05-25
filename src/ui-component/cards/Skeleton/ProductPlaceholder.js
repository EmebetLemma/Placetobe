// material-ui
import { CardContent, Grid, Skeleton, Stack } from '@mui/material';

// project import
import MainCard from '../MainCard';

// ===========================|| SKELETON TOTAL GROWTH BAR CHART ||=========================== //

const ProductPlaceholder = () => (
    <MainCard content={false} boxShadow>
        <Skeleton variant="rectangular" height={220} />
        <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Skeleton variant="rounded" height={26} />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="rounded" height={20} width={330} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{ pt: '8px !important' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="rounded" height={20} width={330} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{ pt: '8px !important' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="rounded" height={20} width={330} />
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={{ pt: '8px !important' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="rounded" height={20} width={330} />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center">
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="circular" height={28} width={30} />
                        <Skeleton variant="circular" height={28} width={30} />
                    </Stack>
                </Grid>
            </Grid>
        </CardContent>
    </MainCard>
);

export default ProductPlaceholder;
