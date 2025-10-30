export const noteData = {
  title: 'ssh-copy-id',
  text: "```\n$ ssh-copy-id username@remote-host\n```\n\n```\n# windows\n$ type $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh user@remote-host \"mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys\"\n```"
,
};