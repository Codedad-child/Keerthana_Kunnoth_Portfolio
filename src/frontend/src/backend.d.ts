import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
    slug: string;
    tags: Array<string>;
    publishedAt: Time;
    author: string;
    summary: string;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    createBlogPost(title: string, slug: string, summary: string, content: string, tags: Array<string>, author: string): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getBlogPostBySlug(slug: string): Promise<BlogPost>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
