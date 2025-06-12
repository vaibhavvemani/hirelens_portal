export type mail = {
    id: number,
    category: Category,
    from: Sender,
    to: Receiver[],
    subject: string,
    message: string,
    date: Date,
    attachments? : Attachment[]
}

type Attachment = {
    id: number,
    name: string,
    desc: string,
    fileUrl: string
}

type Sender = {
    id: number,
    name: string,
    role: string,
    image? : string,
}

type Receiver = {
    studentID: number,
    read: boolean;
    starred: boolean;
    archived: boolean;
}

export type Category = "HRD" | "Professor" | "Announcements" | "Other"

export type Filter = "Inbox" | "Starred" | "Archived" | "Dept of. HRD" | "Professors" | "Announcements"