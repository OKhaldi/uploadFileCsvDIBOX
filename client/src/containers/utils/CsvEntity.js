import { postEvidenceForPolicy } from "../../../../../Common/Documents/utils/services.utils";

export const PolicyEntityDocumentsTableConf = (policy) => {
  return {
    status: "STATUS_POLICY",
    postEvidence: postPolicyEvidence,
  };
};
