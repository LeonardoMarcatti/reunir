const getSentencePart = (sentence) => {
    const position = sentence.indexOf('('); 
    if (position !== -1) {
        return sentence.substring(0, position).trim();
    }
    return sentence;
}

export {getSentencePart}