// VANGUARD UNIVERSITY - PROGRESS SYNC PROTOCOL
// Based on Doctrine: Progress is ephemeral and saved to one device [cite: 9]

const ProgressManager = {
    // Save current subchapter progress
    saveProgress: function(chapterKey) {
        // Set a cookie that expires in 30 days
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `${chapterKey}=completed; expires=${date.toUTCString()}; path=/`;
        console.log(`Worldline Updated: ${chapterKey} synchronized.`);
    },

    // Check if a subchapter is unlocked
    isUnlocked: function(chapterKey) {
        return document.cookie.split('; ').some(row => row.startsWith(`${chapterKey}=`));
    },

    // Clear all progress (Reset Worldline)
    resetWorldline: function() {
        document.cookie.split(";").forEach(function(c) { 
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
        });
        location.reload();
    }
};
