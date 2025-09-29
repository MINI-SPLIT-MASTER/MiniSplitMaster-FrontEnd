
import { APIClient } from './api_helper'

import * as url from './url_helper'

const api = new APIClient()
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = sessionStorage.getItem('user')
  if (user) return JSON.parse(user)

  return null
}

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}
/* 
// Register Method
export const postFakeRegister = data => api.create(url.POST_FAKE_REGISTER, data)

// Login Method
export const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data)

// Auth Me Method
export const getAuthMe = () => {
  return api.get(url.GET_AUTH_ME)
}

// Refresh Token Method
export const postFakeRefreshToken = data => api.create(url.POST_FAKE_REFRESH_TOKEN, data)

// Dashboards Method
export const getBookingByMonth = data => api.get(url.DASHBOARD_BOOKING_BY_MONTH, data)

export const getConversionByMonth = data => api.get(url.DASHBOARD_CONVERSION_BY_MONTH, data)

export const getFunnelByMonth = data => api.get(url.DASHBOARD_FUNNEL_BY_MONTH, data)

export const getOpportunityByMonth = data => api.get(url.DASHBOARD_OPPORTUNITY_BY_MONTH, data)

export const getSalesByYear = data => api.get(url.DASHBOARD_SALES_BY_YEAR, data)

export const getSummaryByMonth = data => api.get(url.DASHBOARD_SUMMARY_BY_MONTH, data)

export const getCampaignPriceByMonth = data => api.get(url.DASHBOARD_CAMPAIGN_PRICE_BY_MONTH, data)

export const getCampaignTemperatureTicket = data =>
  api.get(url.DASHBOARD_CAMPAIGN_TEMPERATURE_BY_MONTH, data)

export const getCampaignFunnelByMonth = data =>
  api.get(url.DASHBOARD_CAMPAIGN_FUNNEL_BY_MONTH, data)

export const getCampaignCategoryTicketByMonth = data =>
  api.get(url.DASHBOARD_CAMPAIGN_CATEGORY_TICKET_BY_MONTH, data)

export const getTicketConfiguration = () => api.get(url.GET_TICKETS_CONFIGURATION, null)

export const getCampaignChannelLeadByMonth = data =>
  api.get(url.DASHBOARD_CAMPAIGN_CHANNEL_LEAD_BY_MONTH, data)

export const getCampaignChannelByMonth = data =>
  api.get(url.DASHBOARD_CAMPAIGN_CHANNEL_BY_MONTH, data)

export const getCampaignTemperaturePriceByMonth = data =>
  api.get(url.DASHBOARD_CAMPAIGN_TEMPERATURE_PRICE_BY_MONTH, data)

export const getDemandByMonth = data => api.get(url.DASHBOARD_DEMAND_BY_MONTH, data)

export const getDemandBrandByMonth = data => api.get(url.DASHBOARD_DEMAND_BRAND_BY_MONTH, data)

export const getChannelByMonth = data => api.get(url.DASHBOARD_CHANNEL_BY_MONTH, data)

export const getModelByMonth = data => api.get(url.DASHBOARD_MODEL_BY_MONTH, data)

export const getTicketCategoryByMonth = data =>
  api.get(url.DASHBOARD_TICKET_CATEGORY_BY_MONTH, data)

export const getBrandByMonth = data => api.get(url.DASHBOARD_BRAND_BY_MONTH, data)

export const getBrandTicketByMonth = data => api.get(url.DASHBOARD_BRAND_TICKET_BY_MONTH, data)

export const getPlatformByMonth = data => api.get(url.DASHBOARD_PLATFORM_BY_MONTH, data)

export const getTicketSummaryByMonth = data => api.get(url.DASHBOARD_TICKET_SUMMARY_BY_MONTH, data)

export const getTicketTimelineByMonth = data =>
  api.get(url.DASHBOARD_TICKET_TIMELINE_BY_MONTH, data)

export const getTicketTimelineNewByMonth = data =>
  api.get(url.DASHBOARD_TICKET_TIMELINE_NEW_BY_MONTH, data)

export const getTicketContactableByMonth = data =>
  api.get(url.DASHBOARD_TICKET_CONTACTABLE_BY_MONTH, data)

export const getTicketOpenCloseByMonth = data =>
  api.get(url.DASHBOARD_TICKET_OPEN_CLOSE_BY_MONTH, data)

export const getTicketStatusByMonth = data => api.get(url.DASHBOARD_TICKET_STATUS_BY_MONTH, data)

export const getTicketClosedReasonByMonth = data =>
  api.get(url.DASHBOARD_TICKET_CLOSED_REASON_BY_MONTH, data)

export const getTicketFinancialByMonth = data =>
  api.get(url.DASHBOARD_TICKET_FINANCIAL_BY_MONTH, data)

export const getTicketFunnelByMonth = data => api.get(url.DASHBOARD_TICKET_FUNNEL_BY_MONTH, data)

export const getTicketChannelTemperatureByMonth = data =>
  api.get(url.DASHBOARD_TICKET_CHANNEL_TEMPERATURE_BY_MONTH, data)

export const getTicketLog = data => api.get(url.GET_TICKET_LOGS, data)

export const addTicketLog = data => api.create(url.POST_TICKET_LOGS, data)

export const getBrandTypeLeadByMonth = data =>
  api.get(url.DASHBOARD_TICKET_BRAND_TYPE_LEAD_BY_MONTH, data)

export const getModelByTicketByMonth = data => api.get(url.DASHBOARD_TICKET_MODEL_BY_MONTH, data)

export const getLeadSummaryByMonth = data => api.get(url.DASHBOARD_LEAD_SUMMARY_BY_MONTH, data)

export const getLeadTypeByMonth = data => api.get(url.DASHBOARD_LEAD_TYPE_BY_MONTH, data)

export const getLeadTimelineByMonth = data => api.get(url.DASHBOARD_LEAD_TIMELINE_BY_MONTH, data)

export const getLeadCampaignByMonth = data => api.get(url.DASHBOARD_LEAD_CAMPAIGN_BY_MONTH, data)

export const getLeadboardByPeriod = data => api.get(url.DASHBOARD_LEAD_BOARD_BY_PERIOD, data)

export const getLeadSuggestResume = data => api.get(url.DASHBOARD_LEAD_SUGGEST_RESUME, data)

export const getBrandVsLeadByMonth = data => api.get(url.DASHBOARD_BRAND_VS_LEAD_BY_MONTH, data)

export const getUserTicketStatusByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_TICKET_STATUS_BY_MONTH.replace(':id', id), data)

export const getUserFunnelByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_FUNNEL_BY_MONTH.replace(':id', id), data)

export const getUserBrandByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_BRAND_BY_MONTH.replace(':id', id), data)

export const getUserTypeByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_TYPE_BY_MONTH.replace(':id', id), data)

export const getUserContactableByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_CONTACTABLE_BY_MONTH.replace(':id', id), data)

export const getUserTaskByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_TASK_BY_MONTH.replace(':id', id), data)

export const getUserResumeByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_RESUME_BY_MONTH.replace(':id', id), data)

export const getUserReasonByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_REASON_BY_MONTH.replace(':id', id), data)

export const getUserFunnelBrandByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_FUNNEL_BRAND_BY_MONTH.replace(':id', id), data)

export const getUserFunnelCategoryByMonth = ({ id, ...data }) =>
  api.get(url.DASHBOARD_USER_FUNNEL_CATEGORY_BY_MONTH.replace(':id', id), data)

export const getUsersDashboard = data => api.get(url.GET_USERS_DASHBOARD, data)

export const getFlowsByMonth = data => api.get(url.DASHBOARD_FLOWS_BY_MONTH, data)
export const getFlowSummaryByMonth = data => api.get(url.DASHBOARD_FLOW_SUMMARY_BY_MONTH, data)
export const getFlowTimelineByMonth = data => api.get(url.DASHBOARD_FLOW_TIMELINE_BY_MONTH, data)

export const getTicketSoldTimelineByMonth = data => api.get(url.DASHBOARD_TICKET_SOLD_TIMELINE, data)
export const getTicketSoldContactableByMonth = data => api.get(url.DASHBOARD_TICKET_SOLD_CONTACTABLE, data)
export const getTicketSoldAppointmentByMonth = data => api.get(url.DASHBOARD_TICKET_SOLD_APPOINTMENT, data)
export const getTicketSoldModelByMonth = data => api.get(url.DASHBOARD_TICKET_SOLD_MODEL, data)
export const getTicketSoldCampaignByMonth = data => api.get(url.DASHBOARD_TICKET_SOLD_CAMPAIGN, data)

// Ticket Method
export const getTickets = () => api.get(url.GET_TICKETS, null)

export const createTicket = data => api.create(url.POST_TICKET, data)

export const updateTickets = ({ id, ...data }) => api.put(url.PUT_TICKET + id, data)

export const getTicketsAgents = () => api.get(url.GET_TICKETS_AGENTS, null)

export const getTicketsAlerts = () => api.get(url.GET_TICKETS_ALERTS, null)

export const getTicketsAssignment = () => api.get(url.GET_TICKETS_ASSIGNMENT, null)

export const getTicketsStatus = data => api.get(url.GET_TICKETS_STATUS, data)

export const getTicketTypes = data => api.get(url.GET_TICKET_TYPES, data)

export const getTicketsProducts = data => api.get(url.GET_TICKETS_PRODUCTS, data)

export const getProductsCategories = data => api.get(url.GET_PRODUCT_CATEGORY, data)

export const getTicketsCampaign = () => api.get(url.GET_TICKETS_CAMPAIGN, null)

export const filterTickets = data => api.get(url.GET_TICKETS, data)

export const getTicketById = id => api.get(`${url.GET_TICKET_BY_ID}/${id}`, null)

export const getTicketsProductsBrands = () => api.get(url.GET_TICKETS_PRODUCT_BRAND, null)

export const getTicketsProductsModels = data => api.get(url.GET_TICKETS_PRODUCT_MODEL, data)

export const getTicketsProductsYear = data => api.get(url.GET_TICKETS_PRODUCT_YEAR, data)

export const getTicketsFunnels = () => api.get(url.GET_TICKETS_FUNNELS, null)

export const getTicketsProductsTransmission = data =>
  api.get(url.GET_TICKETS_PRODUCT_TRANSMISSION, data)

export const getTicketClosedReasons = () => api.get(url.GET_TICKET_CLOSED_REASONS, null)

export const getServices = data => api.get(url.GET_SERVICES, data)

export const getServicesDetail = data => api.get(url.GET_SERVICES_DETAIL, data)

export const getTicketsServices = () => api.get(url.GET_TICKETS_SERVICES, null)
export const getTicketTemperatures = () => api.get(url.GET_TICKET_TEMPERATURE, null)

export const exportTicketsByDate = data => api.create(url.POST_TICKET_EXPORT, data)

// Ticket Chat

export const getTicketChat = id =>
  api.get(`${url.GET_TICKET_CONVERSATION.replace(':id', id)}`, null)

export const puttUpdateTicket = ({ ticket_id, ...data }) =>
  api.put(url.PUT_UPDATE_TICKET + ticket_id, data)

export const postUpdateTicketStatus = ({ ticket_id, ...data }) =>
  api.update(url.PUT_UPDATE_TICKET + ticket_id + '/status', data)

// Whatsapp Method

export const getBroadcastList = data => api.get(url.GET_BROADCAST_LIST, data)

export const getCostSendBroadcast = data => api.get(url.GET_COST_SEND_BROADCAST, data)

export const getBroadcastListSummary = data => api.get(url.GET_BROADCAST_SUMMARY, data)

export const getNumbers = data => api.get(url.GET_NUMBER_BOT, data)

export const getScheduledBroadcastSummary = data =>
  api.get(url.GET_SCHEDULED_BROADCAST_SUMMARY, data)

export const getBroadcastDetailItems = ({ id, ...data }) =>
  api.get(url.GET_BROADCAST_DETAIL_ITEMS.replace(':id', id), data)

export const createBroadcastCSV = id =>
  api.create(url.CREATE_BROADCAST_CSV.replace(':id', id), null)

export const getBroadcastDetailItemsSummary = ({ id, ...data }) =>
  api.get(url.GET_SCHEDULED_BROADCAST_ITEMS_SUMMARY.replace(':id', id), data)

export const postCreateBroadcast = data => api.create(url.POST_CREATE_BROADCAST, data)

export const uploadTemplateBroadcast = data => api.create(url.UPLOAD_TEMPLATE_BROADCAST, data)

// Sales Method

export const getSalesMan = () => api.get(url.GET_SALESMAN, null)

// Notes Method

export const getNotes = data => api.get(url.GET_NOTES, data)

export const getNoteById = id => api.get(`${url.GET_NOTE_BY_ID}/${id}`, null)

export const postCreateNote = data => api.create(url.POST_CREATE_NOTE, data)

export const putUpdateNote = data => {
  const { note_id, ...rest } = data
  return api.put(`${url.PUT_UPDATE_NOTE}/${note_id}`, rest)
}

export const deleteRemoveNote = data =>
  api.delete(`${url.DELETE_UPDATE_NOTE}/${data.note_id}`, null)

// postForgetPwd
export const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data)

// Edit profile
export const postJwtProfile = data => api.create(url.POST_EDIT_JWT_PROFILE, data)

export const postFakeProfile = data => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data)

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch(err => {
    var message

    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = 'Sorry! the page you are looking for could not be found'
          break
        case 500:
          message = 'Sorry! something went wrong, please contact our support team'
          break
        case 401:
          message = 'Invalid credentials'
          break
        default:
          message = err[1]
          break
      }
    }
    throw message
  })
}

// Login Method
export const postJwtLogin = data => api.create(url.POST_FAKE_JWT_LOGIN, data)

// postForgetPwd
export const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data)

// postSocialLogin
export const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data)

// API Key ----------------------
// get Api Key
export const getAPIKey = () => api.get(url.GET_API_KEY, null)

// add API Key
export const addNewAPIKey = apikey => api.create(url.ADD_NEW_API_KEY, apikey)

// update API Key
export const updateAPIKey = apikey => api.update(url.UPDATE_API_KEY, apikey)

// delete API Key
export const deleteAPIKey = apikey => api.delete(url.DELETE_API_KEY, { headers: { apikey } })

// Contact -----------------------
// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS, null)
export const getContact = () => api.get(url.GET_USER_BY_ID, null)
export const getUserById = id => api.get(`${url.GET_USER_BY_ID.replace(':id', id)}`, null)

// filter Contacts
export const filterContacts = data => api.get(url.GET_CONTACTS, data)

// add Contacts
export const addNewContact = contact => api.create(url.ADD_NEW_CONTACT, contact)

// update Contacts
export const updateContact = ({ id, ...contact }) =>
  api.put(url.UPDATE_CONTACT.replace(':id', id), contact)
// update contact avatar
export const updateContactAvatar = ({ id, data }) =>
  api.create(url.UPDATE_CONTACT_AVATAR.replace(':id', id), data)

// delete Contacts
export const deleteContact = contact => api.delete(url.DELETE_CONTACT, { headers: { contact } })

// get Filters
export const getFilters = () => api.get(url.GET_FILTERS, null)

// Campaigns -----------------------
// filter Campaigns
export const filterCampaigns = data => api.get(url.GET_CAMPAIGNS, data)
// get Campaigns Channels for filters
export const getCampaignsChannels = () => api.get(url.GET_CAMPAIGNS_CHANNELS, null)
// get Campaign by ID
export const getCampaignByID = id => api.get(`${url.GET_CAMPAIGN_BY_ID}/${id}`)
// update Campaign
export const updateCampaign = ({ id, ...data }) => api.put(`${url.UPDATE_CAMPAIGN}/${id}`, data)
// Add Campaign
export const addNewCampaign = data => api.create(url.POST_CAMPAIGNS, data)
// Get Origin Ads
export const getOriginAds = data => api.get(url.GET_ORIGIN_ADS, data)

// List management -----------------------
export const getCampaignListProperties = () => api.get(url.GET_PROPERTIES, null)
export const getCampaignListConditions = data => api.get(url.GET_CONDITIONS, data)
export const getCampaignListContacts = () => api.get(url.FILTER_CONTACT, null)
export const getCampaignListStatus = () => api.get(url.FILTER_STATUS, null)
export const getCampaignListTicketType = () => api.get(url.FILTER_TICKET_TYPE, null)
export const getCampaignListProductCategory = () => api.get(url.FILTER_PRODUCT_CATEGORY, null)
export const getCampaignListProductBrand = () => api.get(url.FILTER_PRODUCT_BRAND, null)
export const getCampaignListFilterCampaign = () => api.get(url.FILTER_CAMPAIGN, null)
export const createList = data => api.create(url.CREATE_LIST, data)
export const updateList = ({ listId, ...data }) =>
  api.put(url.UPDATE_LIST.replace(':id', listId), data)
export const getLists = data => api.get(url.GET_LISTS, data)
export const getCountListFilteredCount = data => api.create(url.GET_COUNT, data)
export const getListDetails = ({ listId, ...data }) =>
  api.get(url.GET_LIST.replace(':id', listId), data)
export const downloadListById = ({ listId, ...data }) =>
  api.create(url.LIST_DOWNLOAD.replace(':id', listId), data)
export const deleteList = ({ listId }) => api.delete(url.DELETE_LIST.replace(':id', listId), null)
export const getActivityFeedByTicketId = ({ ticketId }) =>
  api.get(url.GET_ACTIVITY_FEED.replace(':id', ticketId), null)

// Leads ----------------------------------------------------------------------

// get Leads
export const getLeads = data => api.get(url.GET_LEADS, data)
// get Lead by ID
export const getLeadByID = id => api.get(`${url.GET_LEAD_BY_ID}/${id}`)
// update Lead
export const updateLead = ({ id, ...data }) => api.put(`${url.UPDATE_LEAD}/${id}`, data)
//get tickets by lead
export const getTicketsByLead = ({ leadId, ...data }) => {
  return api.get(`${url.GET_TICKET_BY_LEAD.replace(':id', leadId)}`, data)
}
export const uploadCsvLeads = data => api.create(url.UPLOAD_CSV, data)

// Products -----------------------
// get Products
export const getProducts = data => api.get(url.GET_PRODUCTS, data)
// post Products (CSV)
export const postProducts = data => api.create(url.POST_PRODUCTS, data)

export const getProductsByID = id => api.get(`${url.GET_PRODUCT_BY_ID}/${id}`)
export const updateProduct = ({ productId, ...data }) =>
  api.put(url.UPDATE_PRODUCT.replace(':id', productId), data)

// Logs -----------------------------------------------------------------------------

// get Logs
export const getLogs = data => api.get(url.GET_LOG, data)

export const getLeadLogs = data => api.get(url.GET_LEAD_LOG, data)

//todo ---------------------------
// get ToDo
export const getToDoList = data => api.get(url.GET_TODO_LIST, data)
export const createToDo = data => api.create(url.ADD_TODO, data)
export const updateToDo = ({ todoId, ...data }) =>
  api.put(url.UPDATE_TODO.replace(':id', todoId), data)
export const getTicketsInToDo = data => api.get(url.GET_TICKETS_IN_TODO, data)

// // add ToDo
// export const addToDo = toDo => api.create(url.ADD_TODO_LIST, toDo)

// // update ToDo
// export const updateToDo = toDo => api.update(url.UPDATE_TODO_LIST, toDo)

// // delete ToDo
// export const deleteToDo = id => api.delete(url.DELETE_TODO, { headers: { id } })

//todo Insights
export const getTodoInsights = () => api.get(url.GET_INSIGHTS, null)
export const addToDoInsights = data => api.create(url.ADD_INSIGHTS, data)

// todo project
export const getTodoProjects = () => api.get(url.GET_PROJECT, null)
export const addToDoProjects = data => api.create(url.ADD_PROJECT, data)

// Email
//get Mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS, null)

// delete Mail
export const deleteMail = forId => api.delete(url.DELETE_MAIL, { headers: { forId } })

// unread Mail
export const unreadMail = forId => api.delete(url.UNREAD_MAIL, { headers: { forId } })

// star Mail
export const staredMail = forId => api.delete(url.STARED_MAIL, { headers: { forId } })

// label Mail
export const labelMail = forId => api.delete(url.LABEL_MAIL, { headers: { forId } })

// trash Mail
export const trashMail = forId => api.delete(url.TRASH_MAIL, { headers: { forId } })

// Chat
// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT)
// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS)
// get Messages
export const getMessages = roomId =>
  api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } })

// add Message
export const addMessage = message => api.create(url.ADD_MESSAGE, message)

// add Message
export const deleteMessage = message => api.delete(url.DELETE_MESSAGE, { headers: { message } })

// Kanban
export const getTasks = () => api.get(url.GET_TASKS)
export const addNewTasks = card => api.create(url.ADD_TASKS, card)
export const updateTasks = card => api.put(url.UPDATE_TASKS, card)
export const deleteTasks = card => api.delete(url.DELETE_TASKS, { headers: { card } })

export const getBrands = data => api.get(url.GET_BRANDS, data)
export const getBrand = id => api.get(url.GET_BRAND.replace(':id', id))
export const addBrand = brand => api.create(url.ADD_BRAND, brand)
export const updateBrand = ({ id, ...data }) => api.put(url.UPDATE_BRAND.replace(':id', id), data)

// Roles

export const getRoles = data => api.get(url.GET_ROLES, data)
export const addRoles = data => api.create(url.ADD_ROLE, data)
export const modifyRole = ({ roleId, ...data }) =>
  api.put(url.UPDATE_ROLE.replace(':id', roleId), data)
export const getSections = () => api.get(url.SECTION_ROLES, null)
export const getRoleById = ({ roleId }) => api.get(url.GET_ROL_BY_ID.replace(':id', roleId), null)

// Contactables
export const getContactablesStatus = () => api.get(url.GET_CONTACTABLES, null)
export const getContactableReason = data => api.get(url.GET_CONTACTABLE_REASON, data)

// Zones
export const getZones = data => api.get(url.GET_ZONES, data)
export const getZonesForFilters = data => api.get(url.GET_ZONES_FILTERS, data)
export const createZone = data => api.create(url.ADD_ZONE, data)
export const updateZone = ({ zoneId, ...data }) =>
  api.put(url.UPDATE_ZONE.replace(':id', zoneId), data)

export const getLicenseTypes = data => api.get(url.GET_LICENSE_TYPES, data)
//Tags
export const getTags = data => api.get(url.GET_TAGS, data)
export const getTagById = ({ tagId }) => api.get(url.GET_TAG_BY_ID.replace(':id', tagId), null)
export const createTag = data => api.create(url.ADD_TAG, data)
export const updateTag = ({ tagId, ...data }) => api.put(url.UPDATE_TAG.replace(':id', tagId), data)
export const deleteTag = ({ tagId }) => api.delete(url.DELETE_TAG.replace(':id', tagId), null)

// Support
export const getSupport = data => api.get(url.GET_SUPPORT, data)
export const createSupport = data => api.create(url.ADD_SUPPORT, data)
export const updateSupport = ({ supportId, ...data }) =>
  api.put(url.UPDATE_SUPPORT.replace(':id', supportId), data)
export const updateSupportImages = ({ id, data }) =>
  api.create(url.UPLOAD_SUPPORT_FILES.replace(':id', id), data)
export const getSupportById = id => api.get(`${url.GET_SUPPORT_BY_ID.replace(':id', id)}`, null)
export const getRepliesBySupportId = ({ supportId, ...data }) =>
  api.get(`${url.GET_ALL_REPLIES_BY_SUPPORT_ID.replace(':id', supportId)}`, data)
export const createSupportReply = ({ supportId, ...data }) =>
  api.create(url.ADD_SUPPORT_REPLY.replace(':id', supportId), data)
export const uploadSupportReply = ({ supportId, replyId, data }) =>
  api.create(url.UPLOAD_SUPPORT_REPLY.replace(':id', supportId).replace(':replyId', replyId), data)

// Flows
export const getFlows = data => api.get(url.GET_FLOWS, data)
export const getFlowById = data => api.get(url.GET_FLOW_BY_ID.replace(':id', data.id), null)
export const updateDataSet = data => api.put(url.UPDATE_DATA_SET, data)
export const createDataSet = data => api.create(url.CREATE_DATA_SET, data)
export const getTriggers = data => api.get(url.GET_TRIGGERS, data)
export const getActions = data => api.get(url.GET_ACTIONS, data)
export const updateFlow = data => api.put(url.UPDATE_FLOW.replace(':id', data.id), data)
export const createFlow = data => api.create(url.CREATE_FLOW, data)
export const getDecisions = data => api.get(url.GET_DECISIONS, data)
export const createDecision = data => api.create(url.CREATE_DECISION, data)
export const getScenarios = data => api.get(url.GET_SCENARIOS, data)
export const getEntities = data => api.get(url.GET_ENTITIES, data)
export const getEntityCompatibility = data =>
  api.get(url.GET_ENTITY_COMPATIBILITY.replace(':id', data.id), null)

// Wallet

export const getBotWalletHistory = data => api.get(url.GET_BOT_WALLET_HISTORY, data)
export const getMakeWalletHistory = data => api.get(url.GET_MAKE_WALLET_HISTORY, data)

export const getFlowsWalletHistory = data => api.get(url.GET_FLOWS_WALLET_HISTORY, data)
export const getTemplatesUsedPerMonth = data => api.get(url.GET_TEMPLATES_USED_PER_MONTH, data)

export const getInformationWallet = () => api.get(url.GET_INFORMATION_WALLET, null)
export const putLimitWallet = data => api.put(url.PUT_LIMIT_WALLET, data)
export const postPaymentIntent = data => api.create(url.GET_PAYMENT_INTENT, data)

// Whatsapp
export const getTemplatesApi = data => api.get(url.GET_TEMPLATES, data)
export const getChildrenTemplatesApi = ({ id }) =>
  api.get(url.GET_CHILDREN_TEMPLATES.replace(':id', id), null)
export const createTemplatesApi = data => api.create(url.CREATE_TEMPLATE, data)
export const getTemplateApi = ({ id }) => api.get(url.GET_TEMPLATE.replace(':id', id), null)
export const getTemplatesVariables = data => api.get(url.GET_TEMPLATES_VARIABLES, data)

export const createPlatformHistoryBilling = data => api.create(url.CREATE_PLATFORM_HISTORY_BILLING, data)
export const getPlatformHistoryBillingAll = data => api.get(url.GET_PLATFORM_HISTORY_BILLING_ALL, data)
export const getHoldingAll = data => api.get(url.GET_HOLDING_ALL, data)
export const getWallet = data => api.get(url.GET_WALLET, data)
 */