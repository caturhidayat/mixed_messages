function randomDiffMessages(num) {
    const random= Math.floor(Math.random() * num)
}


const collectiveWisdom = {
    signInfo : ['Moon', 'Stars', 'Comet', 'Sky'],
    fortuneOutput : ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

const personalWisdom = []

for(let prop in collectiveWisdom) {
    const index = randomDiffMessages(collectiveWisdom[prop].length)

    switch (prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign is ${collectiveWisdom[prop][index]}`)
            break;
        case 'fortuneOutput':
            personalWisdom.push(`Your are having ${collectiveWisdom[prop][index]}`)
            break;
        case 'advice':
            personalWisdom.push(`Your should ${collectiveWisdom[prop][index]}`)
            break;
        default:
            personalWisdom.push(`There is not enough info`)
            break;
    }
}

function formatWisdom(wisdom) {
    const formatter = personalWisdom.join("\n")
}

formatWisdom(personalWisdom);