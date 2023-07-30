// material-ui
import { Grid, Box, IconButton, Typography, CardHeader, TextField, Button, Link, Divider, Avatar } from '@mui/material';
import { ClearRounded } from '@mui/icons-material';
import { IconCircleCheck, IconAlertCircle, IconAlertOctagon } from '@tabler/icons';
import { Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router';

// ==============================|| REQUEST REFUNDING PAGE ||============================== //

const RefundingRequest = ({ onClose, ticket }) => {
    const theme = useTheme();
    const [refundingReason, setRefundingReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmitButtonClick = () => {
        const inputRef = document.getElementById('refunding-reason');
        if (inputRef) {
            setRefundingReason(inputRef.value);
            const isRefundSuccessful = false; // Replace this with a condition that correspods with the actual response from the backend

            setIsSubmitted(true);
            setIsSuccess(isRefundSuccessful);

            // Clear the refunding reason after submission
            setRefundingReason('');
        }
    };
    return (
        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
                <Card variant="outlined">
                    <CardHeader
                        sx={{
                            padding: '6px 24px'
                        }}
                        titleTypographyProps={{ fontSize: theme.typography.h1 }}
                        title={'Ticket Info'}
                        action={
                            <IconButton aria-label="close" onClick={onClose}>
                                <ClearRounded />
                            </IconButton>
                        }
                    ></CardHeader>
                    <Divider />
                    <CardContent sx={{ padding: '12px 24px', paddingBottom: '0px !important' }}>
                        {isSubmitted ? (
                            <Grid sx={{ padding: '12px 24px', paddingBottom: '0px !important' }}>
                                {isSuccess ? (
                                    <Grid container display="flex" justifyContent="center">
                                        <Grid display="flex" alignItems="center" flexDirection="column" mt={2} mb={12}>
                                            <Box
                                                style={{
                                                    width: '6em',
                                                    height: '6em',
                                                    borderRadius: '3em',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                backgroundColor="#C8F5CA"
                                            >
                                                <IconCircleCheck fill="#25BB00" color="#C8F5CA" size={70} />
                                            </Box>
                                            <Typography m={2} fontSize={theme.typography.h3}>
                                                Submitted Succesfully
                                            </Typography>
                                            <Typography>The organizer will reach out to you</Typography>
                                            <Typography> to make the refunding</Typography>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Grid container display="flex" justifyContent="center">
                                        <Grid display="flex" alignItems="center" flexDirection="column" mt={2} mb={4}>
                                            <Box
                                                style={{
                                                    width: '6em',
                                                    height: '6em',
                                                    borderRadius: '3em',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                backgroundColor="#FFEEEE"
                                            >
                                                <IconAlertCircle fill="#FF6464" color="#FFEEEE" size={70} />
                                            </Box>
                                            <Typography m={2} fontSize={theme.typography.h3}>
                                                Unable to submit refunding request
                                            </Typography>
                                            <Typography>Retry after a minute. If the issue</Typography>
                                            <Typography> persist contact us</Typography>
                                            <Link
                                                onClick={() => {
                                                    navigate('/faq');
                                                }}
                                                m={2}
                                                color={theme.palette.warning.dark}
                                                fontWeight={theme.typography.fontWeightMedium}
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Contact Us
                                            </Link>
                                            {/* contact us link here */}
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        ) : (
                            <Grid>
                                <Grid display={'flex'} justifyContent={'space-between'} sx={{ mb: 1.5 }}>
                                    <Typography>Event Name</Typography>
                                    <Typography fontWeight={theme.typography.fontWeightBold}>{ticket.event_name}</Typography>
                                </Grid>
                                <Grid display={'flex'} justifyContent={'space-between'} sx={{ mb: 1.5 }}>
                                    <Typography>Ticket Type</Typography>
                                    <Typography fontWeight={theme.typography.fontWeightBold}>{ticket.tickettype}</Typography>
                                </Grid>
                                <Grid display={'flex'} justifyContent={'space-between'} sx={{ mb: 2.5 }}>
                                    <Typography>Total</Typography>
                                    <Typography fontWeight={theme.typography.fontWeightBold}>{ticket.price + ' ETB'}</Typography>
                                </Grid>
                                <Grid sx={{ mb: 1.5 }}>
                                    <Typography
                                        fontSize={theme.typography.h4}
                                        fontWeight={theme.typography.fontWeightBold}
                                        sx={{ mb: 1.5 }}
                                    >
                                        Refunding Reason
                                    </Typography>
                                    <TextField
                                        variant="filled"
                                        id="refunding-reason"
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderBottom: 'none',
                                                '&:before': {
                                                    borderBottom: 'none'
                                                },
                                                '&:after': {
                                                    borderBottom: 'none'
                                                }
                                            }
                                        }}
                                        fullWidth
                                        multiline
                                        minRows={5}
                                        size="small"
                                        placeholder="write here"
                                    ></TextField>
                                </Grid>
                                <Grid sx={{ mb: 1.5 }}>
                                    <Box
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '5px',
                                            backgroundColor: theme.palette.warning.dark,
                                            color: 'black',
                                            '&:hover': { backgroundColor: theme.palette.warning.main }
                                        }}
                                        onClick={handleSubmitButtonClick}
                                    >
                                        <Typography variant="h4">Submit</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        )}
                        <Grid mb={0.5}>
                            <Typography display={'flex'} justifyContent={'center'} fontSize={theme.typography.subtitle1}>
                                <Link>Refunding Terms </Link> | Terms of Agreement
                                {/* link here should be linked to the corresponding page */}
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default RefundingRequest;
