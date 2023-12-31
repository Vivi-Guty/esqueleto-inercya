//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v10.7.2.0 (Newtonsoft.Json v13.0.0.0) (http://NJsonSchema.org)
// </auto-generated>
//----------------------







export interface User {
    userId: number;
    loginName: string;
    userName: string;
    userEmail: string;
    isActive: boolean;
    createdDate: Date;
    createdBy: number;
    modifiedDate: Date;
    modifiedBy: number;
    userPasswordHash: string;
    userPasswordSalt: string;
    userPasswordExpirationDate: Date | undefined;
    userLoginAttemps: number | undefined;
    assignedTaskEmailEnabled: boolean;
    materialListEmailEnabled: boolean;
    updatedEpisodeEmailEnabled: boolean;
    updatedBookingEmailEnabled: boolean;
    cancelBooking: boolean;
    completeBooking: boolean;
    freeTask: boolean;
    generateDeliveryNote: boolean;
    generateOrder: boolean;
    includeHandSurgery: boolean;
    includeMaterialRequested: boolean;
    includeMaterialUsed: boolean;
    manageReposition: boolean;
    postSurgeryDocumentation: boolean;
    updateBooking: boolean;
    finishedTasksEmailEnabled: boolean;
    cancelBookingFinished: boolean;
    commentAdded: boolean;
    completeBookingFinished: boolean;
    episodeCancelled: boolean;
    freeTaskFinished: boolean;
    generateDeliveryNoteFinished: boolean;
    generateOrderFinished: boolean;
    includeHandSurgeryFinished: boolean;
    includeMaterialRequestedFinished: boolean;
    includeMaterialUsedFinished: boolean;
    interventionDateChanged: boolean;
    manageRepositionFinished: boolean;
    postSurgeryDocumentationFinished: boolean;
    surgeryAuthorized: boolean;
    updateBookingFinished: boolean;
    deliveryTimeChanged: boolean;
    deliveryPlaceChanged: boolean;
    deliveryDateChanged: boolean;
    interventionLocationChanged: boolean;
    manageSpecialAuthorization: boolean;
    wiCommentEmailsEnabled: string;
    walkingImplants: any;
    roleDescription: string;
    wiUserName: string;
    roleId: number;
    permissionId: number;
    permissionName: string;
    roleName: string;
    token: string;
}