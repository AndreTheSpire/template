import fetch from 'node-fetch';


// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
export const handler = async (event) => {
  try {
    console.log("masuk function ini XDD");
    // const data = JSON.parse(event.body);
    const url='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    // const requestUrl = settings.wrapUrl('evaluations/detail/' + data.templateId)
    // axios.defaults.headers.common.Id = process.env.APP_ID
    // axios.defaults.headers.common.Secret = process.env.APP_SECRET
    // axios.defaults.headers.common.Authorization = 'Bearer ' + data.profileToken
    console.log("masuk vawah")
    const response = await fetch(url, {
      method: 'GET',
   });
  const data = await response.json() ;
  // const response = await axios.get(url)
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.log("the true error is");
    console.log(error);
    let statusCode = 500
    let body = 'An error has occured in fecting data (500)'
    if (error.response && error.response.status) {
      statusCode = error.response.status
      body = error.response.data.message
    }
    return {
      statusCode,
      body
    }
  }
}

// module.exports = { handler }
