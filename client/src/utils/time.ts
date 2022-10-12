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

export const formatStartEndTime = (date: Date, duration: number) => {
    const endTime = moment(date).add(duration, 'm').toDate();
    return moment(date).format('LT') + ' - ' + moment(endTime).format('LT');

}