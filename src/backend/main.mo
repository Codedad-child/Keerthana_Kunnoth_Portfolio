import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type BlogPost = {
    title : Text;
    slug : Text;
    summary : Text;
    content : Text;
    tags : [Text];
    publishedAt : Time.Time;
    author : Text;
  };

  module BlogPost {
    public func compare(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Text.compare(post1.title, post2.title);
    };

    public func compareByPublishedAtDesc(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      if (post1.publishedAt > post2.publishedAt) { #less } else if (post1.publishedAt < post2.publishedAt) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let adminPrincipal : Principal = Principal.fromText("2vxsx-fae");
  let submissions = Map.empty<Text, ContactSubmission>();
  let posts = Map.empty<Text, BlogPost>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let id = name.concat(Time.now().toText());
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
  };

  public shared ({ caller }) func createBlogPost(
    title : Text,
    slug : Text,
    summary : Text,
    content : Text,
    tags : [Text],
    author : Text,
  ) : async () {
    if (caller != adminPrincipal) { Runtime.trap("Unauthorized"); };
    let post : BlogPost = {
      title;
      slug;
      summary;
      content;
      tags;
      publishedAt = Time.now();
      author;
    };
    posts.add(slug, post);
  };

  public query ({ caller }) func getBlogPostBySlug(slug : Text) : async BlogPost {
    switch (posts.get(slug)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) { post };
    };
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    posts.values().toArray().sort(BlogPost.compareByPublishedAtDesc);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (caller != adminPrincipal) { Runtime.trap("Unauthorized"); };
    submissions.values().toArray();
  };
};
