export class Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    gender: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    dateOfBirth: string;
    joinedDate: string;
    designation: string;
    contactNumber: string;
    email: string;
    role: string;

    constructor(staffId: string,firstName: string,lastName: string,gender: string,addressLine1: string,addressLine2: string,
    addressLine3: string, addressLine4: string, addressLine5: string,dateOfBirth: string, joinedDate: string, designation: string, contactNumber: string,email: string,role: string) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.dateOfBirth = dateOfBirth;
        this.joinedDate = joinedDate;
        this.designation = designation;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
    }
}