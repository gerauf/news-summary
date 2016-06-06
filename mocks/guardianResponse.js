module.exports = {
  request: {
    path: 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail',
    method: 'GET'
  },
  response: {
    data: {
      response: {
        results: [
          {
            type: "article",
            sectionId: "politics",
            webTitle: "Poll gives Brexit campaign lead of three percentage points",
            webPublicationDate: "2016-06-05T08:06:07Z",
            id: "politics/2016/jun/04/poll-eu-brexit-lead-opinium",
            fields: {
              thumbnail: "https://media.guim.co.uk/657951346a6f0c814b263dd71e62892f2559c4c2/0_87_4179_2508/500.jpg"
            },
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
            fields: {
              thumbnail: "https://media.guim.co.uk/657951346a6f0c814b263dd71e62892f2559c4c2/0_87_4179_2508/500.jpg"
            },
            webUrl: "https://www.theguardian.com/politics/2016/jun/05/daily-mail-backs-campaign-to-remain-in-europe-in-1975-eec-eu-referenfum",
            apiUrl: "https://content.guardianapis.com/politics/2016/jun/05/daily-mail-backs-campaign-to-remain-in-europe-in-1975-eec-eu-referenfum",
            sectionName: "Politics"
          }
        ]
      }
    }
  }
};
