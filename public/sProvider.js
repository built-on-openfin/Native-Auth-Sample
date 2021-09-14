import "https://unpkg.com/@openfin/search-api@1.5.9/umd/index.js";

const openWindowAction = 'Open Window';
const HOME_ID = "openfin-home";
const APP_ID = "openfin-browser";

// Example search handler that returns results from a backend query.
async function getSearchResults({ query }) {
    // const res = await fetch('/search?q=' + encodeURIComponent(query));
    // if (!res.ok) {
    //     throw new Error('uh oh something went wrong');
    // }
    const json =[{
      nameAttribute : 'test',
      descriptionAttribute : 'description'
    }]
    /* Return initial search results.
       All results must have the `name` and `description`
       field at the very least for rendering purposes. 
       */
    return json.map((myResult) => ({
        title: myResult.nameAttribute,
        shortDescription: myResult.shortDescriptionAttribute,
        description: myResult.descriptionAttribute,
        actions: [openWindowAction], // Dispatchable actions for this search result.
        data: myResult.customMetadata
    }));
}

export function getToken() {
  //get token, can add timer to keep this token fresh
  fin.desktop.Window.getCurrent().hide();
}

function openWindowForSearchResult(result) {
//     const dispatchedAction = result.action; // `result.action` is set to the action that was dispatched.
//     if (dispatchedAction !== openWindowAction) return;
 
 fin.desktop.System.launchExternalProcess({
    path: "C:\\Openfin\\TestJSApp\\AuthSample\\public\\testJava.bat",
    arguments: "Test Token",
    listener: function (result) {
        console.log('the exit code', result.exitCode);
    }
}, function (payload) {
    console.log('Success:', payload.uuid);
}, function (error) {
    console.log('Error:', error);
});
}

// Subscribe to a search topic.
const searchTopic = await fin.Search.subscribe({ uuid: 'openfin-browser' });

const provider = {
    name: 'test',
    onSearch: openWindowForSearchResult,
    onResultDispatch: openWindowForSearchResult
};

// Register the search data provider.
await searchTopic.register(provider);

export async function launchOpenFinWorkspace(){
    return await fin.System.openUrlWithBrowser('fins://system-apps/workspace');
}

export function setHomeVisibility(showUI, showUIOnLaunch) {
  if (showUI === false) {
    fin.Window.wrapSync({ uuid: APP_ID, name: HOME_ID }).on('show-requested', () => { /* noop */ });
  } else if (showUIOnLaunch === false) {
    fin.Window.wrapSync({ uuid: APP_ID, name: HOME_ID }).once('show-requested', () => { /* noop */ });
  }
}