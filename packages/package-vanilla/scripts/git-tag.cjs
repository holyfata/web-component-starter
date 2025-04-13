const { execSync } = require("child_process");
const { version } = require("../package.json");

try {
  // 根据 package.json 的 version 打标签
  const tagName = `v${version}`;
  console.log(`Creating git tag: ${tagName}`);
  execSync(`git tag ${tagName}`, { stdio: "inherit" });

  // 推送标签到远程仓库
  console.log("Pushing tags to remote...");
  execSync("git push --tags", { stdio: "inherit" });

  console.log("Release and tagging completed successfully!");
} catch (error) {
  console.error("Error during release and tagging:", error.message);
  process.exit(1);
}
