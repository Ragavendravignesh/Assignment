/**
 * Get the processing page
 */
const STATUS = {
    PROCESSING: 'processing',
    SUCCESS : 'success',
    NO_STOCK: 'NO_STOCK',
    INCORRECT: 'INCORRECT',
    NULL : null,
    UNDEFINED: undefined
}
function getProcessingPage(data) {
    let results = [];

    data.forEach(value => {
        if(value.state === STATUS.PROCESSING ) {
            setTimeout(()=> {
                results.push(getPage(value))
            }, 2000);
        }
        else {
            results.push(getPage(value))
        }
    });
    return results;
}

function getPage(value) {
    if(value.state === STATUS.SUCCESS ) {
        return { title: 'Order complete' , message: null }
    } 
    else {
        if(value.errorCode === STATUS.NO_STOCK ) {
            return { title: 'Error page', message: 'No stock has been found' }
        } else if(value.errorCode === STATUS.INCORRECT ) {
            return { title: 'Error Page', message: 'Incorrect details have been entered'}
        } else if(value.errorCode === STATUS.NULL ) {
            return { title: 'Error page', message: null }
        } else {
            return { title: 'Error page', message: null}
        }
    }
}

const data = [{state:'success'},{state: 'processing'},{state: 'error'},{state:'error', errorCode: 'NO_STOCK'}]

console.log(getProcessingPage(data));

//Please run this code by node helper.js. 