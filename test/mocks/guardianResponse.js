module.exports = {
  request: {
    path: 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics',
    method: 'GET'
  },
  response: {
    data: {
response: {
status: "ok",
userTier: "developer",
total: 88413,
startIndex: 1,
pageSize: 10,
currentPage: 1,
pages: 8842,
edition: {
code: "default",
webTitle: "Politics",
id: "politics",
webUrl: "https://www.theguardian.com/politics",
apiUrl: "https://content.guardianapis.com/politics"
},
section: {
editions: [
{
code: "default",
webTitle: "Politics",
id: "politics",
webUrl: "https://www.theguardian.com/politics",
apiUrl: "https://content.guardianapis.com/politics"
}
],
webTitle: "Politics",
id: "politics",
webUrl: "https://www.theguardian.com/politics",
apiUrl: "https://content.guardianapis.com/politics"
},
results: [
{
type: "article",
sectionId: "politics",
webTitle: "Poll gives Brexit campaign lead of three percentage points",
webPublicationDate: "2016-06-05T08:06:07Z",
id: "politics/2016/jun/04/poll-eu-brexit-lead-opinium",
webUrl: "https://www.theguardian.com/politics/2016/jun/04/poll-eu-brexit-lead-opinium",
apiUrl: "https://content.guardianapis.com/politics/2016/jun/04/poll-eu-brexit-lead-opinium",
sectionName: "Politics"
},
{
type: "article",
sectionId: "politics",
webTitle: "Daily Mail backs campaign to remain in Europe ... in 1975",
webPublicationDate: "2016-06-05T08:00:34Z",
id: "politics/2016/jun/05/daily-mail-backs-campaign-to-remain-in-europe-in-1975-eec-eu-referenfum",
webUrl: "https://www.theguardian.com/politics/2016/jun/05/daily-mail-backs-campaign-to-remain-in-europe-in-1975-eec-eu-referenfum",
apiUrl: "https://content.guardianapis.com/politics/2016/jun/05/daily-mail-backs-campaign-to-remain-in-europe-in-1975-eec-eu-referenfum",
sectionName: "Politics"
}
]
}
}
}
};
