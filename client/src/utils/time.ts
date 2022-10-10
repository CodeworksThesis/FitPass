import moment from 'moment';

export const formatDate = (date: Date) => {
    return moment(date).format('ll')
}

export const formatTime = (date:Date) => {
    return moment(date).format('LT')
}

export const formatDateTime = (date:Date) => {
    return moment(date).format('llll')
}