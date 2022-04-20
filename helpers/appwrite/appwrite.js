const { client } = require('./gateway');

async function save (newData) {

    let item = JSON.parse(newData);
    
    try {
        const session = await client.account.createAnonymousSession();

        const dataCollection = "[INSERT YOUR APPWRITE COLLECTION ID HERE]"; // Use the ID found in your collection dashboard
        
        if (item["configs"].running==true) {
            await client.database.createDocument(dataCollection, newData, ["*"], [`peer:${item["configs"].builderID}`])
        }
    
    } catch(e) {
        console.log(`Problem saving data to local backup database.`);
    } 

}

module.exports={save};

