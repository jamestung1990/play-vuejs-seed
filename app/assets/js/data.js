/**
import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
    data () {
      return {
        // Start with the same value as our
        // first time entry. Hard-coded for now
        // because we'll use a different approach
        // in the next article anyway
        totalTime: 1.5
      }
    },
    events: {
      // Increment the totalTime value based on the new
      // time entry that is dispatched up
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      // Decrement totalTime when a time entry is deleted
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }

<!-- <script>
  export default {
    data () {
      return {
        // We default the user object on
        // the timeEntry to have some user details
        timeEntry: {
          user: {
            firstName: 'Juraj',
            lastName: 'Zachar',
            email: 'juraj.zachar@gmail.com',
            image: 'https://s.gravatar.com/avatar/9edfd6e65a616374f2c050be30aa48a8?s=80'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry
        // We dispatch the timeEntry so it can be pushed
        // onto the timeEntries array in the parent component
        this.$dispatch('timeUpdate', timeEntry)
        this.timeEntry = {}
      }
    }
  }
</script> -->


<!-- <script>
  export default {
    data () {
      // We want to start with an existing time entry
      let existingEntry = {
        user: {
          firstName: 'Juraj',
          lastName: 'Zachar',
          email: 'juraj.zachar@gmail.com',
          image: 'https://s.gravatar.com/avatar/9edfd6e65a616374f2c050be30aa48a8?s=80'
        },
        comment: 'First time entry',
        totalTime: 1.5,
        date: '2016-11-25'
      }
      return {
        // Start out with the existing entry
        // by placing it in the array
        timeEntries: [existingEntry]
      }
    },
    methods: {
      // Get the index of the clicked time entry and splice it out
      deleteTimeEntry (timeEntry) {
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('Are you sure you want to delete this time entry?')) {
          this.timeEntries.splice(index, 1)
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        return true
      }
    }
  }
</script> -->
**/