export function answerGroupView(group, path) {
 if (!group) return undefined;
 const primary = group.members.find(member => member.path === group.primaryPath);
 const current = group.members.find(member => member.path === path);
 if (!primary || !current) throw new Error('Invalid answer group membership');
 const members = [...new Map([primary, current, ...group.members.slice(0, 12)].map(member => [member.path, member])).values()].slice(0, 12);
 return { primaryPath: group.primaryPath, total: group.members.length, members };
}
