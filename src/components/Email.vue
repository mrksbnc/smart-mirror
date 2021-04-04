<template>
  <div class="mt-3">
    <div class="email-wrapper">
      <div v-for="(email, index) in processedEmails" :key="index" class="d-flex flex-row">
        <div class="sender-block">
          <i :class="GetIcon(email)"></i>
          <span>{{ NormalizeSenderData(email.from) }}</span>
        </div>
        <div class="subject-block">
          <span>{{ FormatSubjectData(email.subject) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const systemMessage = {
  from: 'MirrorOS',
  subject: 'No unreed emails found!',
};

export default {
  name: 'Email',
  computed: {
    ...mapGetters({
      emails: 'email/GET_MAILS',
    }),
    processedEmails: function() {
      if (this.emails[0]?.empty) {
        let result = [];
        result.push(systemMessage);
        return result;
      }
      return this.emails;
    },
  },
  methods: {
    GetIcon(email) {
      return email?.from == 'MirrorOS' ? 'fas fa-terminal' : 'far fa-envelope';
    },
    NormalizeSenderData(from) {
      let result = '';
      let splitted = from.split(' ');
      if (splitted[0]) {
        result = splitted[0].replaceAll('"', '');
      }
      return result;
    },
    FormatSubjectData(subject) {
      if (subject.length > 80) {
        subject = subject.slice(0, 80);
        subject += '...';
      }
      return subject;
    },
  },
};
</script>

<style></style>
