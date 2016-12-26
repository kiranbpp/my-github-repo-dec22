
#!/bin/bash
set -e -o pipefail
mkdir -p ~/.cf
echo "$CF_CONFIG_JSON" > ~/.cf/config.json
echo "Target: ${CF_TARGET_URL}"
cat > _customer_script.sh <<'EOF_CUSTOMER_SCRIPT'
#!/bin/bash
cf push "${CF_APP}"

EOF_CUSTOMER_SCRIPT
if [ "$PIPELINE_DEBUG_SCRIPT" == "true" ]; then
current_time=$(echo $(($(date +%s%N)/1000000)))
fi
source _customer_script.sh
if [ "$PIPELINE_DEBUG_SCRIPT" == "true" ]; then
end_time=$(echo $(($(date +%s%N)/1000000)))
let "total_time=$end_time - $current_time"
echo "_DEBUG:USER_DEPLOY_SCRIPT:$total_time"
current_time=
end_time=
total_time=
fi
set +vx

