const Connections = {
    //------------------------development endpoints--------------------
    // api: 'http://localhost:8000/api/',

    //------------------------testing endpoints------------------------
    api: 'https://test.placetobeethiopia.com/service/api/',

    //------------------------production endpoints--------------------
    // api: 'https://backend.placetobeethiopia.com/api/',

    assets: 'images/',
    signUp: 'signup',
    signIn: 'signin',
    googleSignUp: 'continue-with-google',
    googleSignIn: 'signin-with-google',
    profile: 'profile/',
    changeprofile: 'changeprofile/',
    webprofile: 'webprofile/',
    userInfo: 'user-info/',
    deleteAccount: 'delete-user/',
    MetaData: 'meta-info/',
    updateUserInfo: 'update/',
    ChangePassword: 'changepassword',
    forgotpassword: 'forgotpassword',
    resetpassword: 'resetpassword',
    refresh_token: 'refresh-token',

    //event related api's
    events: 'events',
    eventDetails: 'single-event/',
    moreEventDetails: 'event-more-detail',
    relatedEvents: 'related-events',
    AddEvent: 'add-event',
    TodayEvents: 'today-events',
    WeekEvents: 'week-events',
    UpcomingEvents: 'upcoming-events',
    categoryFilter: 'search-category/',
    search: 'search-event',
    YourEvents: 'your-events/',

    follow: 'follow',
    followers: 'followers/',
    following: 'following/',
    upload: 'uploadimage.php',

    //business api end points
    organizer: 'organizer',
    singleBusiness: 'singleBusiness',

    //notification end points
    notification: 'notification',
    getNotification: 'fetchNotifications/',
    notified: 'notified-users',
    newNotifications: 'newNotifications',

    OrganizerFollowCounter: 'organizer-followers/',
    organizerEvents: 'organizer-event/',
    organizerUpcomings: 'organizer-upcoming-event/',
    createfeedback: 'create-feedback',
    forgotPassword: 'forgotPassword',
    status: 'status',
    Images: 'Images',
    appInfo: 'appinfo',

    // second version connnections
    AddTicket: 'create-ticket',
    myTickets: 'mytickets/',
    Soldout: 'soldout/',
    EventPoster: 'events-poster',
    UpdateTicket: 'update-ticket/',
    updateEvent: 'update-event/',
    Cancelled: 'cancel-event/',
    eventTicket: 'eventticket/',
    detailTicket: 'event-detail-ticket/',
    Payment: 'payment',
    mpesa: 'mpesa',
    Event: 'single-event/', // a file to retrive single event by its event ID
    createReservation: 'create-reservation',
    AvailableTickets: 'tickets',
    FeaturedEvent: 'featured-event',
    boughtTickets: 'soldticket/',
    singleTicket: 'single-ticket/',

    //refunding related api's
    requestRrefunding: 'refunding-request',

    //rating end points
    addRating: 'add-ratings',
    getRating: 'get-ratings/',
    updateRating: 'update-ratings/',

    //ads endpoints
    fetchAds: 'display-ads',

    //viewed ads end points
    adViewed: 'consumed-create',

    //tickets endpoints
    requestRefunding: 'ticket-refunds',
    refundingInfo: 'ticket-refunds/'
};
export default Connections;
