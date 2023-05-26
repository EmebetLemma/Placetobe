import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    linearProgressClasses
} from '@mui/material';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { IconApps } from '@tabler/icons';

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.primary.main
    }
}));

const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.warning.light,
    marginBottom: '22px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '157px',
        height: '157px',
        background: theme.palette.warning.dark,
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
    const theme = useTheme();

    return (
        <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
            <Grid item>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" sx={{ color: theme.palette.primary[800] }}>
                            Progress
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="inherit">{`${Math.round(value)}%`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <BorderLinearProgress variant="determinate" value={value} {...others} />
            </Grid>
        </Grid>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
    const theme = useTheme();

    return (
        <CardStyle>
            <CardContent sx={{ p: 2 }}>
                <List
                    sx={{ p: 0, m: 0 }}
                    component="a"
                    href="https://play.google.com/store/apps/details?id=com.afromina.placetobe&hl=en&gl=US"
                    target="_blank"
                    className="text-decoration-none"
                >
                    <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                        <ListItemAvatar sx={{ mt: 0 }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    color: theme.palette.warning.dark,
                                    border: 'none',
                                    borderColor: theme.palette.warning.dark,
                                    background: '#fff',
                                    marginRight: '12px'
                                }}
                            >
                                <IconApps fontSize="inherit" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mt: 0 }}
                            primary={
                                <>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ color: theme.palette.grey[900] }}
                                        component="a"
                                        href="https://play.google.com/store/apps/details?id=com.afromina.placetobe&hl=en&gl=US"
                                        target="_blank"
                                        className="text-decoration-none"
                                    >
                                        Download Our App
                                    </Typography>
                                </>
                            }
                            secondary={
                                <Typography
                                    variant="caption"
                                    component="a"
                                    href="https://play.google.com/store/apps/details?id=com.afromina.placetobe&hl=en&gl=US"
                                    target="_blank"
                                    className="text-decoration-none"
                                >
                                    From Google Play Store
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </CardStyle>
    );
};

export default MenuCard;
