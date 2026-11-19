class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript OOP", "Alice", 600);
video1.watch();

const video2 = new Video("Array Methods Guide", "Bob", 900);

const videosData = [
  { title: "Intro to ES6", uploader: "Charlie", time: 450 },
  { title: "Destructuring Deep Dive", uploader: "Dana", time: 720 },
  { title: "Async Await Explained", uploader: "Eve", time: 1100 },
  { title: "DOM Manipulation", uploader: "Frank", time: 530 },
  { title: "Closures in JS", uploader: "Grace", time: 840 },
];

const videoInstances = videosData.map(
  (data) => new Video(data.title, data.uploader, data.time)
);