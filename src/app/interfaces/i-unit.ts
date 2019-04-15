export interface IUnit {
    id: string,
    internalId: string,
    type: string,
    address: {
        streetName: string,
        houseNumber: string,
        postalCode: string,
        borough: string,
        city: string,
        countryCode: string
    },
    availableFromDate: string,
    availableFromNowOn: boolean,
    teaserImageUrl: string,
    localization: {
        lengthUnit: string,
        areaUnit: string,
        currency: string
    },
    title: string,
    details: {
        size?: number,
        numberOfRooms?: number,
        rent: {
            totalRent: number,
            baseRent: number,
            deposit: number,
            operationalCosts?: number,
            heatingCosts?:number
        },
        floor?: number,
        commercialType?: string
    }
}